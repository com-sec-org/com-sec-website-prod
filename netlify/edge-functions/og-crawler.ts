const CRAWLER_UA =
  /facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|TelegramBot|WhatsApp|Discordbot|Applebot|Pinterest|redditbot|rogerbot|embedly|Googlebot-Image/i;

const BASE_URL = "https://com-sec.io";

interface OgData {
  title: string;
  description: string;
  image: string;
  url: string;
}

const OG_ROUTES: Record<string, OgData> = {
  "/blog/mythos-changed-the-game-part-1": {
    title: "Mythos Changed the Game. Here's What to Do About It. — Part 1",
    description:
      "Part 1: What Mythos actually is (and isn't). Anthropic's Claude Mythos changed the cybersecurity landscape — here's what it means for startups and founders.",
    image: `${BASE_URL}/images/blog-images/mythos-part-1.png`,
    url: `${BASE_URL}/blog/mythos-changed-the-game-part-1`,
  },
  "/blog/mythos-changed-the-game-part-2": {
    title: "Mythos Changed the Game. Here's What to Do About It. — Part 2",
    description:
      "Part 2: The Patching Window Just Collapsed. AI-driven vulnerability discovery is shrinking patch windows — here's what to do about it.",
    image: `${BASE_URL}/images/blog-images/mythos-patching-window-collapsed.png`,
    url: `${BASE_URL}/blog/mythos-changed-the-game-part-2`,
  },
};

function esc(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function buildOgHtml(og: OgData): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${esc(og.title)}</title>
  <meta name="description" content="${esc(og.description)}" />
  <meta property="og:title" content="${esc(og.title)}" />
  <meta property="og:description" content="${esc(og.description)}" />
  <meta property="og:image" content="${esc(og.image)}" />
  <meta property="og:url" content="${esc(og.url)}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Com-Sec" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(og.title)}" />
  <meta name="twitter:description" content="${esc(og.description)}" />
  <meta name="twitter:image" content="${esc(og.image)}" />
</head>
<body></body>
</html>`;
}

export default async function handler(request: Request, context: { next: () => Promise<Response> }) {
  const url = new URL(request.url);
  const ua = request.headers.get("user-agent") ?? "";
  const og = OG_ROUTES[url.pathname];

  if (og && CRAWLER_UA.test(ua)) {
    return new Response(buildOgHtml(og), {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  return context.next();
}

export const config = { path: "/blog/*" };
