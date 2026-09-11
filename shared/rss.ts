export interface FeedPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  category?: string;
  categories?: string[];
  published?: boolean;
}

export function escapeXml(value: string): string {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/g, "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

// Existing display dates have no time zone. Interpret them consistently as UTC dates.
export function publicationDate(value: string): Date {
  const match = /^(January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2}),? (\d{4})$/.exec(value);
  if (!match) throw new Error("Invalid publication date: " + value);
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].indexOf(match[1]);
  const date = new Date(Date.UTC(Number(match[3]), month, Number(match[2])));
  if (date.getUTCMonth() !== month || date.getUTCDate() !== Number(match[2])) throw new Error("Invalid publication date: " + value);
  return date;
}

export function generateRss(posts: readonly FeedPost[], canonicalPaths: ReadonlyMap<string, string>, now = new Date()): string {
  const seen = new Set<string>();
  const items = posts.flatMap(post => {
    const pathname = canonicalPaths.get("/blog/" + post.id);
    if (post.published === false || !pathname) return [];
    const date = publicationDate(post.date);
    if (date > now || seen.has(pathname)) return [];
    seen.add(pathname);
    return [{ post, date, url: "https://com-sec.io" + pathname }];
  }).sort((a, b) => b.date.getTime() - a.date.getTime());
  const tag = (name: string, value: string) => "      <" + name + ">" + escapeXml(value) + "</" + name + ">";
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    '    <title>Com-Sec Blog</title>',
    '    <link>https://com-sec.io/blog</link>',
    '    <description>Cybersecurity and compliance insights from Com-Sec.</description>',
    '    <language>en-us</language>',
    '    <atom:link href="https://com-sec.io/rss.xml" rel="self" type="application/rss+xml" />',
    ...items.map(({ post, date, url }) => [
      '    <item>', tag("title", post.title), tag("link", url),
      '      <guid isPermaLink="true">' + escapeXml(url) + '</guid>',
      tag("description", post.excerpt), tag("pubDate", date.toUTCString()),
      ...(post.author ? [tag("dc:creator", post.author)] : []),
      ...[...new Set([...(post.categories ?? []), ...(post.category ? [post.category] : [])])].map(category => tag("category", category)),
      '    </item>'
    ].join("\n")),
    '  </channel>', '</rss>', ''
  ].join("\n");
}
