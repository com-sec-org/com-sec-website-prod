import { describe, expect, it } from "vitest";
import fs from "node:fs";
import { generateRss, publicationDate, type FeedPost } from "./rss";
import { allArticles } from "./blog-posts";
import { canonicalBlogPaths } from "../scripts/rss-plugin";

const post: FeedPost = { id: "example", title: 'A & <B> "test"', excerpt: "It's useful & safe", date: "September 09 2026", author: "A & B", category: "Security" };
const now = new Date("2026-09-11T00:00:00Z");
const paths = new Map([["/blog/example", "/blog/example"], ["/blog/older", "/blog/older"]]);
describe("RSS", () => {
  it("escapes metadata and includes canonical URLs, GUID, author and categories", () => {
    const xml = generateRss([post], paths, now);
    expect(xml).toContain('version="2.0"');
    expect(xml).toContain("A &amp; &lt;B&gt; &quot;test&quot;");
    expect(xml).toContain("It&apos;s useful &amp; safe");
    expect(xml).toContain('<guid isPermaLink="true">https://com-sec.io/blog/example</guid>');
    expect(xml).toContain("<dc:creator>A &amp; B</dc:creator>");
    expect(xml).toContain("<category>Security</category>");
    expect(xml).toContain("<pubDate>Wed, 09 Sep 2026 00:00:00 GMT</pubDate>");
  });
  it("excludes drafts, future posts, missing routes and duplicate URLs, sorting newest first", () => {
    const xml = generateRss([{ ...post, id: "older", date: "January 1, 2024" }, post, post,
      { ...post, id: "missing" }, { ...post, published: false },
      { ...post, date: "January 1, 2027" }], paths, now);
    expect(xml.match(/<item>/g)).toHaveLength(2);
    expect(xml.indexOf("/blog/example")).toBeLessThan(xml.indexOf("/blog/older"));
  });
  it("rejects invalid dates and handles both existing date formats identically", () => {
    expect(publicationDate("September 09 2026")).toEqual(publicationDate("September 9, 2026"));
    expect(() => publicationDate("February 30, 2026")).toThrow();
    expect(() => publicationDate("unknown")).toThrow();
  });
  it("resolves JSX article aliases without including commented routes", () => {
    const routes = canonicalBlogPaths('<Routes>{/* <Route path="/blog/draft" element={<Post />} /> */}<Route path="/blog/live" element={<Post />} /><Route path="/blog/old" element={<Navigate to="/blog/live" />} /></Routes>');
    expect([...routes]).toEqual([["/blog/live", "/blog/live"], ["/blog/old", "/blog/live"]]);
  });
  it("generates the repository feed without nonexistent or legacy listing entries", () => {
    const routes = canonicalBlogPaths(fs.readFileSync("client/main.tsx", "utf8"));
    const xml = generateRss(allArticles, routes, now);
    expect(xml).toContain("https://com-sec.io/blog/how-to-roll-out-mfa-and-sso-without-losing-your-mind");
    for (const id of ["zero-trust-architecture-implementation", "cloud-security-best-practices-2024", "soc2-vs-iso27001-comparison", "soc-2-compliance-services-california"]) {
      expect(xml).not.toContain("https://com-sec.io/blog/" + id + "<");
    }
    expect((xml.match(/<item>/g) ?? []).length).toBe(80);
    const canonical = "https://com-sec.io/blog/soc-2-vs-iso-27001-which-is-right-for-you";
    expect(routes.get("/blog/soc2-vs-iso27001-comparison")).toBe(canonical.replace("https://com-sec.io", ""));
    expect(xml.split("<link>" + canonical + "</link>").length - 1).toBe(1);
    expect(xml.split('<guid isPermaLink="true">' + canonical + "</guid>").length - 1).toBe(1);
    const urls = [...xml.matchAll(/<guid isPermaLink="true">([^<]+)<\/guid>/g)].map(match => match[1]);
    expect(new Set(urls).size).toBe(80);
  });
});

it("follows redirect chains and deduplicates canonical destinations, excluding invalid redirects and unpublished entries", () => {
  const routes = canonicalBlogPaths(`<Routes>
    <Route path="/blog/example" element={<Post />} />
    <Route path="/blog/alias" element={<Navigate to="/blog/middle" />} />
    <Route path="/blog/middle" element={<Navigate to="/blog/example" />} />
    <Route path="/blog/home" element={<Navigate to="/" />} />
    <Route path="/blog/broken" element={<Navigate to="/blog/missing" />} />
    <Route path="/blog/cycle" element={<Navigate to="/blog/cycle2" />} />
    <Route path="/blog/cycle2" element={<Navigate to="/blog/cycle" />} />
  </Routes>`);
  expect(routes.get("/blog/alias")).toBe("/blog/example");
  for (const id of ["home", "broken", "missing", "cycle", "cycle2"]) expect(routes.has("/blog/" + id)).toBe(false);
  const xml = generateRss([
    { ...post, id: "alias", published: false },
    { ...post, id: "alias", date: "January 1, 2027" },
    { ...post, id: "alias" }, post, { ...post, id: "middle" },
    ...["home", "broken", "cycle"].map(id => ({ ...post, id }))
  ], routes, now);
  expect(xml.match(/<item>/g)).toHaveLength(1);
  expect(xml).toContain("<link>https://com-sec.io/blog/example</link>");
  expect(xml).toContain('<guid isPermaLink="true">https://com-sec.io/blog/example</guid>');
  expect(xml).not.toContain("https://com-sec.io/blog/alias");
});

describe("RSS images", () => {
  it.each([
    ["/images/blog.png", "https://com-sec.io/images/blog.png"],
    ["images/blog.png", "https://com-sec.io/images/blog.png"],
    ["https://cdn.example.com/blog.png", "https://cdn.example.com/blog.png"],
    ["https://cdn.example.com/image?format=webp&width=800", "https://cdn.example.com/image?format=webp&amp;width=800"],
  ])("normalizes and escapes %s in both media elements", (image, expected) => {
    const xml = generateRss([{ ...post, image }], paths, now);
    expect(xml).toContain('xmlns:media="http://search.yahoo.com/mrss/"');
    expect(xml).toContain('<media:content url="' + expected + '" medium="image" />');
    expect(xml).toContain('<media:thumbnail url="' + expected + '" />');
  });
  it("rejects non-HTTPS images and omits absent images", () => {
    expect(() => generateRss([{ ...post, image: "http://example.com/image.png" }], paths, now)).toThrow("HTTPS");
    expect(generateRss([post], paths, now)).not.toContain("<media:content");
  });
  it("adds images to all 80 repository items without changing other RSS content", () => {
    const routes = canonicalBlogPaths(fs.readFileSync("client/main.tsx", "utf8"));
    const xml = generateRss(allArticles, routes, now);
    expect(xml.match(/<media:content url="https:\/\//g)).toHaveLength(80);
    expect(xml.match(/<media:thumbnail url="https:\/\//g)).toHaveLength(80);
    const withoutImages = generateRss(allArticles.map(p => ({ ...p, image: undefined })), routes, now);
    expect(xml.replace(/^.*<media:(?:content|thumbnail) .*\n/gm, "")).toBe(withoutImages);
  });
});
