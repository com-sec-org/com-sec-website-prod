const SOCIAL_CRAWLER_UA =
  /facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|TelegramBot|WhatsApp|Discordbot|Applebot|Pinterest|redditbot|rogerbot|embedly|Googlebot-Image|PostInspector|Iframely|SocialPreview|prerender/i;

const GOOGLE_CRAWLER_UA = /Googlebot(?!-Image)/i;

const BASE_URL = "https://com-sec.io";

interface OgData {
  title: string;
  description: string;
  image: string;
  url: string;
  author?: string;
  publishedTime?: string;
}

interface GooglePageData extends OgData {
  canonical: string;
  bodyHtml: string;
}

// ─── Social media OG routes ───────────────────────────────────────────────────

const OG_ROUTES: Record<string, OgData> = {
  "/blog/rippling-entered-compliance-market": {
    title: "Rippling Just Entered the Compliance Market. Here's Why the Numbers Matter.",
    description:
      "Rippling launched its Automated Compliance module in 2026. With 25,000 customers who match the exact profile of companies buying SOC 2 today, the market math is significant — and the disruption to Drata and Vanta is real.",
    image: `${BASE_URL}/images/blog-images/rippling-compliance-market.png`,
    url: `${BASE_URL}/blog/rippling-entered-compliance-market`,
    author: "Farbod Fakhrai",
    publishedTime: "2026-05-29T00:00:00Z",
  },
  "/blog/we-almost-partnered-with-delve": {
    title: "We Almost Partnered With Delve. Here's What Stopped Us.",
    description:
      "Com-Sec was weeks away from being Delve's lead vCISO partner for HITRUST clients. Then things started feeling off. Here's what we saw, what happened next, and the lessons for anyone vetting a compliance partner.",
    image: `${BASE_URL}/images/blog-images/delve-compliance-scandal.png`,
    url: `${BASE_URL}/blog/we-almost-partnered-with-delve`,
    author: "Farbod Fakhrai",
    publishedTime: "2026-05-15T00:00:00Z",
  },
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
    author: "Farbod Fakhrai",
    publishedTime: "2026-05-14T00:00:00Z",
  },
  "/blog/mythos-compliance-alone-wont-save-you-part-3": {
    title: "Mythos Changed the Game. Here's What to Do About It. — Part 3",
    description:
      "Part 3: Compliance Alone Won't Save You. Your SOC 2 report won't protect you from an AI that exploits zero-days in hours. Here's what the gap looks like — and what to do about it.",
    image: `${BASE_URL}/images/blog-images/mythos-compliance-alone-wont-save-you.png`,
    url: `${BASE_URL}/blog/mythos-compliance-alone-wont-save-you-part-3`,
    author: "Farbod Fakhrai",
    publishedTime: "2026-05-15T00:00:00Z",
  },
  "/blog/mythos-changed-the-game-part-4": {
    title: "Mythos Changed the Game. Here's What to Do About It. — Part 4",
    description:
      "Part 4: The Basics Still Matter More Than the Headlines. AI-powered attacks exploit weak security posture. The most effective response is locking down fundamentals: asset management, access controls, patching, and logging.",
    image: `${BASE_URL}/images/blog-images/mythos-changed-the-game-part-4.png`,
    url: `${BASE_URL}/blog/mythos-changed-the-game-part-4`,
    author: "Farbod Fakhrai",
    publishedTime: "2026-06-04T00:00:00Z",
  },
  "/blog/mythos-changed-the-game-part-5": {
    title: "Mythos Changed the Game. Here's What to Do About It. — Part 5",
    description:
      "Part 5: What a Mythos-Ready Security Program Looks Like. A practical, actionable security program for startups and growth-stage companies — asset visibility, accelerated patching, threat modeling, incident response, and AI governance.",
    image: `${BASE_URL}/images/blog-images/mythos-changed-the-game-part-5.png`,
    url: `${BASE_URL}/blog/mythos-changed-the-game-part-5`,
    author: "Farbod Fakhrai",
    publishedTime: "2026-06-05T00:00:00Z",
  },
  "/blog/the-cowork-problem-when-ai-gets-admin-access": {
    title: "The Cowork Problem — When AI Gets Admin Access to Your Infrastructure",
    description:
      "Part 2: Anthropic's Cowork is one of the most powerful AI tools available today — and one of the most risky if deployed without thinking through the implications. Here's what security and compliance teams need to know.",
    image: `${BASE_URL}/images/blog-images/the-cowork-problem-when-ai-gets-admin-access.png`,
    url: `${BASE_URL}/blog/the-cowork-problem-when-ai-gets-admin-access`,
    author: "Farbod Fakhrai",
    publishedTime: "2026-06-22T00:00:00Z",
  },
  "/blog/openai-launched-daybreak": {
    title: "OpenAI Launched Daybreak. Here's What It Means for Your Company.",
    description:
      "A month after Anthropic locked Mythos behind Project Glasswing, OpenAI launched Daybreak — a publicly available AI-powered cybersecurity platform. Here's what it means for startups and mid-market companies.",
    image: `${BASE_URL}/images/blog-images/openai-launched-daybreak.png`,
    url: `${BASE_URL}/blog/openai-launched-daybreak`,
    author: "Farbod Fakhrai",
    publishedTime: "2026-06-18T00:00:00Z",
  },
  "/blog/implementing-an-ai-governance-model-part-1": {
    title: "Implementing an AI Governance Model — Part 1",
    description:
      "Part 1: Start With the Inventory. You can't govern what you don't know about. Learn how to run an AI tool inventory, check your systems, and build the AI register that auditors and enterprise buyers will ask for.",
    image: `${BASE_URL}/images/blog-images/implementing-an-ai-governance-model-part-1.png`,
    url: `${BASE_URL}/blog/implementing-an-ai-governance-model-part-1`,
    author: "Com-Sec",
    publishedTime: "2026-06-17T00:00:00Z",
  },
};

// ─── Google full-content routes ───────────────────────────────────────────────

const GOOGLE_ROUTES: Record<string, GooglePageData> = {
  "/compliance-audit-readiness": {
    title: "Cybersecurity & Compliance Audit Services | Com-Sec",
    description:
      "Get top cybersecurity compliance, cloud security, GDPR, HITRUST, and IT audit services. Ensure readiness with continuous monitoring. Secure your business with Com-Sec today!",
    image: `${BASE_URL}/images/blog-images/compliance-audit.png`,
    url: `${BASE_URL}/compliance-audit-readiness`,
    canonical: `${BASE_URL}/compliance-audit-readiness`,
    bodyHtml: `
<header>
  <nav><a href="${BASE_URL}">Com-Sec</a></nav>
</header>
<main>
  <section>
    <h1>Compliance &amp; Audit Readiness</h1>
    <p>Comprehensive compliance readiness services to help your organization prepare for and pass audits across multiple frameworks including SOC 2, HIPAA, ISO 27001, and more.</p>
    <a href="${BASE_URL}/contact">Start Compliance Journey</a>
  </section>

  <section>
    <h2>Compliance Frameworks We Support</h2>
    <p>Expert guidance across all major compliance and regulatory frameworks.</p>
    <ul>
      <li><a href="${BASE_URL}/soc2">SOC 2 — Service Organization Control 2</a></li>
      <li><a href="${BASE_URL}/hipaa">HIPAA — Health Insurance Portability</a></li>
      <li><a href="${BASE_URL}/iso27001">ISO 27001 — Information Security Management</a></li>
      <li><a href="${BASE_URL}/pci-dss">PCI DSS — Payment Card Industry</a></li>
      <li><a href="${BASE_URL}/gdpr">GDPR — General Data Protection</a></li>
      <li><a href="${BASE_URL}/nist">NIST — Cybersecurity Framework</a></li>
      <li><a href="${BASE_URL}/hitrust">HITRUST — Healthcare Trust Alliance</a></li>
      <li><a href="${BASE_URL}/cmmc">CMMC — Cybersecurity Maturity Model</a></li>
    </ul>
  </section>

  <section>
    <h2>Our Compliance Readiness Process</h2>
    <p>A proven methodology to ensure audit success across all frameworks.</p>
    <ol>
      <li>
        <h3>Initial Assessment</h3>
        <p>Comprehensive evaluation of your current compliance posture and gap identification. Duration: 1–2 weeks.</p>
      </li>
      <li>
        <h3>Framework Mapping</h3>
        <p>Map your existing controls to the required compliance framework requirements. Duration: 1 week.</p>
      </li>
      <li>
        <h3>Gap Remediation</h3>
        <p>Develop and implement action plans to address identified compliance gaps. Duration: 4–8 weeks.</p>
      </li>
      <li>
        <h3>Policy Development</h3>
        <p>Create or update policies and procedures to meet compliance requirements. Duration: 2–4 weeks.</p>
      </li>
      <li>
        <h3>Training &amp; Awareness</h3>
        <p>Train your team on new policies and compliance requirements. Duration: 1–2 weeks.</p>
      </li>
      <li>
        <h3>Pre-Audit Review</h3>
        <p>Conduct mock audits and final readiness verification before the official audit. Duration: 1–2 weeks.</p>
      </li>
    </ol>
  </section>

  <section>
    <h2>Comprehensive Readiness Services</h2>

    <article>
      <h3>Gap Assessment &amp; Analysis</h3>
      <p>Comprehensive evaluation of your current state against compliance requirements.</p>
      <ul>
        <li>Current state assessment</li>
        <li>Control gap identification</li>
        <li>Risk prioritization matrix</li>
        <li>Remediation roadmap</li>
      </ul>
    </article>

    <article>
      <h3>Policy &amp; Procedure Development</h3>
      <p>Creation and updating of policies and procedures to meet compliance standards.</p>
      <ul>
        <li>Policy template library</li>
        <li>Custom policy development</li>
        <li>Procedure documentation</li>
        <li>Version control system</li>
      </ul>
    </article>

    <article>
      <h3>Training &amp; Awareness Programs</h3>
      <p>Employee training programs to ensure compliance understanding and adherence.</p>
      <ul>
        <li>Role-based training</li>
        <li>Interactive workshops</li>
        <li>Compliance documentation</li>
        <li>Ongoing education</li>
      </ul>
    </article>

    <article>
      <h3>Continuous Monitoring</h3>
      <p>Ongoing monitoring to ensure sustained compliance and readiness for future audits.</p>
      <ul>
        <li>Automated compliance checks</li>
        <li>Regular assessments</li>
        <li>Compliance dashboards</li>
        <li>Audit trail management</li>
      </ul>
    </article>
  </section>

  <section>
    <h2>Our Success Record</h2>
    <ul>
      <li>100% First-Time Pass Rate — Clients pass audits on first attempt</li>
      <li>200+ Successful Audits — Audits completed successfully</li>
      <li>100% Time Reduction — Maximum efficiency in audit prep</li>
      <li>24/7 Support Available — Expert support when you need it</li>
    </ul>
  </section>

  <section>
    <h2>Ready to Achieve Compliance?</h2>
    <p>Start your compliance journey with our proven methodology and expert guidance. We'll help you pass your audit with confidence.</p>
    <a href="${BASE_URL}/contact">Start Your Assessment</a>
    <a href="${BASE_URL}/soc2">Explore Frameworks</a>
  </section>
</main>
<footer>
  <p>&copy; Com-Sec. Cybersecurity &amp; Compliance Services.</p>
</footer>`,
  },
};

// ─── HTML builders ────────────────────────────────────────────────────────────

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
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="627" />
  ${og.author ? `<meta property="article:author" content="${esc(og.author)}" />` : ""}
  ${og.publishedTime ? `<meta property="article:published_time" content="${esc(og.publishedTime)}" />` : ""}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(og.title)}" />
  <meta name="twitter:description" content="${esc(og.description)}" />
  <meta name="twitter:image" content="${esc(og.image)}" />
</head>
<body></body>
</html>`;
}

function buildGoogleHtml(page: GooglePageData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}" />
  <link rel="canonical" href="${esc(page.canonical)}" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="${esc(page.title)}" />
  <meta property="og:description" content="${esc(page.description)}" />
  <meta property="og:image" content="${esc(page.image)}" />
  <meta property="og:url" content="${esc(page.url)}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Com-Sec" />
</head>
<body>
${page.bodyHtml}
</body>
</html>`;
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export default async function handler(request: Request, context: { next: () => Promise<Response> }) {
  const url = new URL(request.url);
  const ua = request.headers.get("user-agent") ?? "";

  if (GOOGLE_CRAWLER_UA.test(ua)) {
    const page = GOOGLE_ROUTES[url.pathname];
    if (page) {
      return new Response(buildGoogleHtml(page), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  }

  if (SOCIAL_CRAWLER_UA.test(ua)) {
    const og = OG_ROUTES[url.pathname];
    if (og) {
      return new Response(buildOgHtml(og), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  }

  return context.next();
}

export const config = { path: ["/blog/*", "/compliance-audit-readiness"] };
