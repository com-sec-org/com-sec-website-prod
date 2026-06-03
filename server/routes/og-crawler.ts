import { Request, Response, NextFunction } from "express";

// Social media crawlers — receive OG-tag-only HTML (no body content needed)
const SOCIAL_CRAWLER_UA =
  /facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|TelegramBot|WhatsApp|Discordbot|Applebot|Pinterest|redditbot|rogerbot|embedly|Googlebot-Image|PostInspector|Iframely|SocialPreview|prerender/i;

// Google's main crawler — receives full semantic HTML so content gets indexed
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

// ─── Social media OG routes (existing) ───────────────────────────────────────

const OG_ROUTES: Record<string, OgData> = {
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
    title: "Mythos Changed the Game. Here's What to Do About It. - Part 1",
    description:
      "Part 1: What Mythos actually is (and isn't). Anthropic's Claude Mythos changed the cybersecurity landscape — here's what it means for startups and founders.",
    image: `${BASE_URL}/images/blog-images/mythos-part-1.png`,
    url: `${BASE_URL}/blog/mythos-changed-the-game-part-1`,
  },
  "/blog/mythos-changed-the-game-part-2": {
    title: "Mythos Changed the Game. Here's What to Do About It. - Part 2",
    description:
      "Part 2: The Patching Window Just Collapsed. AI-driven vulnerability discovery is shrinking patch windows — here's what to do about it.",
    image: `${BASE_URL}/images/blog-images/mythos-patching-window-collapsed.png`,
    url: `${BASE_URL}/blog/mythos-changed-the-game-part-2`,
  },
  "/blog/rippling-entered-compliance-market": {
    title: "Rippling Just Entered the Compliance Market. Here's Why the Numbers Matter.",
    description:
      "Rippling launched its Automated Compliance module in 2026. With 25,000 customers who match the exact profile of companies buying SOC 2 today, the market math is significant — and the disruption to Drata and Vanta is real.",
    image: `${BASE_URL}/images/blog-images/rippling-compliance-market-banner.png`,
    url: `${BASE_URL}/blog/rippling-entered-compliance-market`,
    author: "Farbod Fakhrai",
    publishedTime: "2026-05-29T00:00:00Z",
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

function escape(str: string) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function buildOgHtml(og: OgData): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${escape(og.title)}</title>
  <meta name="description" content="${escape(og.description)}" />
  <meta property="og:title" content="${escape(og.title)}" />
  <meta property="og:description" content="${escape(og.description)}" />
  <meta property="og:image" content="${escape(og.image)}" />
  <meta property="og:url" content="${escape(og.url)}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Com-Sec" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="627" />
  ${og.author ? `<meta property="article:author" content="${escape(og.author)}" />` : ""}
  ${og.publishedTime ? `<meta property="article:published_time" content="${escape(og.publishedTime)}" />` : ""}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escape(og.title)}" />
  <meta name="twitter:description" content="${escape(og.description)}" />
  <meta name="twitter:image" content="${escape(og.image)}" />
</head>
<body></body>
</html>`;
}

function buildGoogleHtml(page: GooglePageData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${escape(page.title)}</title>
  <meta name="description" content="${escape(page.description)}" />
  <link rel="canonical" href="${escape(page.canonical)}" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="${escape(page.title)}" />
  <meta property="og:description" content="${escape(page.description)}" />
  <meta property="og:image" content="${escape(page.image)}" />
  <meta property="og:url" content="${escape(page.url)}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Com-Sec" />
</head>
<body>
${page.bodyHtml}
</body>
</html>`;
}

// ─── Middleware ───────────────────────────────────────────────────────────────

export function ogCrawlerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const ua = req.headers["user-agent"] ?? "";

  // Google's main crawler gets full semantic HTML for proper content indexing
  if (GOOGLE_CRAWLER_UA.test(ua)) {
    const page = GOOGLE_ROUTES[req.path];
    if (page) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.send(buildGoogleHtml(page));
    }
  }

  // Social media crawlers get lightweight OG-tag HTML
  if (SOCIAL_CRAWLER_UA.test(ua)) {
    const og = OG_ROUTES[req.path];
    if (og) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.send(buildOgHtml(og));
    }
  }

  next();
}
