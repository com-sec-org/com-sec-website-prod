// Full write-ups for case studies rendered by <CaseStudyArticle />.
// The listing cards (id, title, summary, category) live in client/pages/CaseStudies.tsx,
// which scripts/prerender.mjs also reads to generate one static page per study id.

export type CaseStudyPoint = string | { lead: string; text: string };

export type CaseStudyDetail = {
  client: string;
  badge: string;
  tagline?: string;
  title: string;
  overview: { label: string; value: string }[];
  summary: string[];
  lookingFor?: string[];
  challenge: string[];
  approach: { intro?: string[]; points?: CaseStudyPoint[] };
  results: string[];
  why: { intro?: string[]; points?: CaseStudyPoint[] };
  quote?: { text: string; name?: string; attribution: string };
  cta: { heading: string; text: string[] };
};

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  /* ------------------------------------------------------------------ AI / SaaS */
  "germain-software": {
    client: "Germain Software",
    badge: "AI / SaaS",
    tagline: "Digital experience & operational intelligence",
    title: "SOC 2 Maintained Year on Year, HITRUST r2 Certified on the First Attempt",
    overview: [
      { label: "Industry", value: "Digital experience and operational intelligence software, serving enterprise customers across healthcare, finance, retail and other regulated sectors" },
      { label: "Product", value: "Germain UX, a platform for monitoring and improving user experience and operational workflows, available cloud hosted or on premise" },
      { label: "Services", value: "SOC 2 readiness and annual maintenance, HITRUST r2 certification support, web application penetration testing, security questionnaire support, and vCISO services" },
      { label: "GRC platform", value: "Drata" },
      { label: "Assessment partners", value: "Sensiba for SOC 2, Prescient Assurance for HITRUST" },
      { label: "Engagement", value: "October 2024 to present" },
    ],
    summary: [
      "Germain Software builds Germain UX, a platform that shows enterprises what is actually happening inside their applications and workflows. Its customers are large organisations in regulated industries, so security assurance is part of how the product gets evaluated and bought.",
      "Com-Sec has run that assurance program since October 2024. The first SOC 2 certification landed in January 2025 and the second in January 2026, maintained in Drata through the year rather than rebuilt before each audit. In 2025 a major healthcare prospect made HITRUST r2 a condition of doing business. Work began in August, and Germain Software was certified in July 2026, passing the validated assessment on the first attempt.",
      "Today both frameworks run on one control environment, year two of the r2 cycle is underway, penetration testing runs alongside, and Com-Sec is where the business sends its security and compliance questions.",
    ],
    lookingFor: [
      "SOC 2 certification for enterprise buyers, maintained rather than rebuilt each year",
      "HITRUST r2 certification to meet a specific enterprise healthcare requirement",
      "Independent technical testing of the platform alongside the compliance work",
      "One team to own security and compliance questions as they arrive, so the product team stays on the product",
    ],
    challenge: [
      "SOC 2 and HITRUST r2 ask for different things. SOC 2 rewards a steady operating rhythm. HITRUST r2 is the most extensive assessment HITRUST offers, and a first year means building out and evidencing a broad control set across the organisation.",
      "Germain Software took that on while a customer opportunity depended on the result, while SOC 2 continued on its own annual cycle, and while the product team kept shipping. Running both frameworks at once, to a commercial deadline, on one shared control environment, was the real difficulty.",
    ],
    approach: {
      intro: ["Com-Sec has acted as Germain Software's security and compliance function since October 2024, across both frameworks and the technical work beneath them."],
      points: [
        { lead: "SOC 2 established and maintained.", text: "Com-Sec took the company from readiness to certification in January 2025, then kept the program live in Drata between audits. Controls, policies and assessments stay current through the year, and the second annual SOC 2 completed in January 2026." },
        { lead: "HITRUST r2 delivered under a deadline.", text: "Discussions started in May 2025 and the work began in August. Com-Sec scoped the control set, drove the build out and evidence collection, and worked with the external assessor through the validated assessment. Germain Software was certified in July 2026 on the first attempt." },
        { lead: "Year two underway.", text: "Evidence collection and quarterly compliance checks keep the control set current rather than letting it drift between assessments." },
        { lead: "Penetration testing.", text: "Web application penetration testing runs alongside the compliance work, with identified vulnerabilities tracked through remediation and resolution." },
        { lead: "The first call for security and compliance.", text: "Com-Sec handles the security questionnaires Germain Software receives from customers and prospects, and is the first call for security and compliance questions across the business. That is also what keeps both frameworks pointed at one control environment." },
      ],
    },
    results: [
      "SOC 2 certified in January 2025 and again in January 2026, maintained continuously in Drata between audits",
      "HITRUST r2 certified in July 2026, passing the validated assessment on the first attempt",
      "An enterprise healthcare requirement met, opening an opportunity that depended on it",
      "Both frameworks running on one shared control environment rather than as separate programs",
      "Web application penetration testing delivered with vulnerabilities remediated and resolved",
      "Customer security questionnaires answered by Com-Sec, keeping the product team on product work",
    ],
    why: {
      intro: ["Two frameworks, a commercial deadline and a team that needs to stay on the product is a combination that goes badly when every piece belongs to a different vendor."],
      points: [
        { lead: "Both frameworks, one control set.", text: "SOC 2 and HITRUST r2 were run against one control environment by one team, so work done for either counted for both." },
        { lead: "Compliance and technical testing together.", text: "Governance and technical security sit in the same team, so the penetration testing was delivered with the control environment in view." },
        { lead: "An ongoing function, not a project.", text: "Com-Sec takes the questionnaires, the audits and the day to day security questions, and the programs stay maintained year round rather than reconstructed before each audit." },
      ],
    },
    quote: {
      text: "Com-Sec has been our security and compliance team since 2024. They kept SOC 2 running without it becoming a fire drill every year, and when a customer required HITRUST r2 they took on an enormous amount of work and got us certified first time. We have one team to call when a security question comes up, which is exactly what we needed.",
      attribution: "Germain Software",
    },
    cta: {
      heading: "When a certification becomes a condition of the deal",
      text: [
        "When a customer makes a certification a condition of the deal, the question stops being whether the framework is achievable and becomes whether your team can carry it alongside everything else.",
        "If SOC 2, HITRUST and technical testing are stacking up faster than your team can absorb them, talk to Com-Sec.",
      ],
    },
  },

  cicerai: {
    client: "Cicerai",
    badge: "AI / SaaS",
    tagline: "AI legal research platform",
    title: "SOC 2 in Three Months, and an ISO 27001 Program Building on the Same Controls",
    overview: [
      { label: "Industry", value: "Legal technology, an AI research and document analysis platform for legal professionals" },
      { label: "Customers", value: "Law firms, solo practitioners, corporate counsel and in house legal teams across litigation, immigration, personal injury and corporate practice" },
      { label: "Services", value: "SOC 2 readiness and ongoing maintenance, and ISO 27001 certification support" },
      { label: "GRC platform", value: "Drata" },
      { label: "Audit partner", value: "Sensiba LLP" },
      { label: "Engagement", value: "November 2024 to present" },
    ],
    summary: [
      "Cicerai builds an AI research platform for legal professionals, one that works across a firm's own case documents alongside millions of court opinions, statutes and regulations. The material it handles is privileged, so the security question arrives early and is asked seriously.",
      "Cicerai engaged Com-Sec in November 2024 and achieved SOC 2 in February 2025, roughly three months later. Since then Com-Sec has kept the program live in Drata, addressing failing controls as they surface rather than letting them accumulate toward the next audit.",
      "ISO 27001 is now underway, roughly halfway through, and it started from the controls already built for SOC 2 rather than from a blank page. That is the point of running the two frameworks on one foundation: the second certification is an extension of the first, not a second project.",
    ],
    lookingFor: [
      "Recognisable assurance for law firms and corporate legal teams evaluating the platform",
      "One control foundation rather than a separate program for each framework",
      "A program maintained continuously instead of rebuilt before each audit",
      "A path to ISO 27001 that would not mean starting over",
    ],
    challenge: [
      "Legal work is confidential by default. A platform that ingests case documents, medical records and depositions is asking a firm to trust it with material covered by privilege, and firms do not grant that on a promise. They want an independent report.",
      "Cicerai also knew SOC 2 would not be the last request. Run as two separate projects, SOC 2 and ISO 27001 mean two sets of policies, two evidence sets and two efforts pulling on the same small team. The work had to be designed once and used twice.",
    ],
    approach: {
      intro: ["Com-Sec structured the compliance work as one program from the start rather than as a SOC 2 project with ISO 27001 added later."],
      points: [
        { lead: "SOC 2 in roughly three months.", text: "Com-Sec took Cicerai from engagement in November 2024 to SOC 2 in February 2025, building policies, controls, ownership and evidence as the work ran rather than assembling it at the end." },
        { lead: "Designed once, mapped to both.", text: "Policies, controls and evidence were designed to serve both frameworks, so the ISO 27001 effort draws on what SOC 2 already established instead of duplicating it." },
        { lead: "Maintained continuously, not before audits.", text: "The program stays live in Drata between audit periods, with failing controls addressed as they surface rather than left to accumulate." },
        { lead: "ISO 27001 underway.", text: "The certification effort is roughly halfway through, built on the existing control environment, with surveillance cycles to follow once certified." },
      ],
    },
    results: [
      "SOC 2 achieved in February 2025, roughly three months from the start of the engagement",
      "Compliance maintained continuously in Drata since, with failing controls addressed as they surface",
      "One control foundation serving both SOC 2 and ISO 27001",
      "ISO 27001 roughly halfway to certification, built on existing controls rather than a new program",
      "Security posture strengthened progressively rather than in bursts around audit dates",
    ],
    why: {
      intro: ["The moment a company needs a second framework is the moment a badly built first one shows. Duplicate policies, duplicate evidence, and a team doing the same work twice."],
      points: [
        { lead: "Built for the second framework from the start.", text: "Com-Sec works across frameworks by default, so the SOC 2 foundation was built to carry ISO 27001 before ISO was on the table." },
        { lead: "A first report inside three months.", text: "Three months from engagement to SOC 2, because the evidence was built as the work ran." },
        { lead: "Maintained, not revived.", text: "Failing controls are addressed when they surface, so the program does not drift between audit periods." },
      ],
    },
    quote: {
      text: "Com-Sec helped us build one security foundation that could support both SOC 2 and ISO 27001. We had SOC 2 within a few months, and when we moved on to ISO it built on what was already there rather than starting over. The work is easier to understand, own and maintain that way.",
      attribution: "Cicerai",
    },
    cta: {
      heading: "Build the second framework on the first",
      text: [
        "The first framework is rarely the last, and a program built for one certification rarely carries the next. That is where the duplicated work comes from.",
        "If every new framework feels like starting over, talk to Com-Sec.",
      ],
    },
  },

  "loops-ai": {
    client: "Loops AI",
    badge: "AI / SaaS",
    tagline: "ISO 42001 implementation",
    title: "Building an ISO 42001 Program Before AI Governance Becomes a Customer Fire Drill",
    overview: [
      { label: "Industry", value: "AI and SaaS" },
      { label: "Services", value: "ISO 42001 implementation" },
      { label: "Delivery partner", value: "CEEL" },
      { label: "Assessment partner", value: "Prescient" },
      { label: "Engagement", value: "June 2026 to present" },
    ],
    summary: [
      "Most companies wait for a customer, regulator, or board member to force the AI governance conversation. Loops AI started building the management system before that pressure became a fire drill.",
      "Com-Sec is helping implement ISO 42001 by organizing the governance model, documentation, controls, ownership, and assessment preparation an accountable AI management system requires, coordinated through CEEL with Prescient identified as the assessment partner.",
    ],
    challenge: [
      "AI governance is moving from a talking point to a procurement requirement. Loops AI wanted an accountable AI management system in place before a customer, regulator, or board member made it urgent.",
    ],
    approach: {
      intro: [
        "Com-Sec is helping implement ISO 42001 by organizing the governance model, documentation, controls, ownership, and assessment preparation required for an accountable AI management system.",
        "The work is coordinated through CEEL, with Prescient identified as the assessment partner.",
      ],
    },
    results: [
      "ISO 42001 implementation program launched",
      "Governance and documentation work organized through CEEL",
      "Independent assessment path identified",
      "Completion target established for September 2026",
    ],
    why: {
      intro: ["AI governance requires more than a policy. Com-Sec helps clients connect leadership decisions, operational controls, evidence, and independent assessment into one working system."],
    },
    quote: {
      text: "Com-Sec helped us turn AI governance from a broad idea into a structured management system with owners, controls, and a clear path to assessment.",
      attribution: "Loops AI",
    },
    cta: {
      heading: "Make AI governance operational",
      text: ["If your AI governance program is still a document instead of an operating system, talk to Com-Sec."],
    },
  },


  /* ------------------------------------------------------------------ FinTech */
  honk: {
    client: "Honk",
    badge: "FinTech",
    tagline: "Mobility and parking payments",
    title: "From Ad Hoc IT to Audit Ready: How Honk Built a Year Round Security Program",
    overview: [
      { label: "Industry", value: "Mobility and parking payments technology" },
      { label: "Company", value: "Honk (HONK Mobile)" },
      { label: "Services", value: "vCISO, SOC 2 Type 2 audit support, managed IT, endpoint management (MDM and EDR), security awareness, vendor reviews, incident response, and laptop management" },
      { label: "GRC platform", value: "Drata" },
      { label: "Audit partner", value: "Dansa D'Arata Soucia (DDS)" },
      { label: "Technology partners", value: "Iru (formerly Kandji) MDM, CrowdStrike EDR" },
      { label: "Engagement", value: "October 2025 to present" },
    ],
    summary: [
      "Honk processes a fast growing volume of parking and mobility payments, which means its customers and partners expect SOC 2 assurance to hold up every day, not only at audit time. When Honk engaged Com-Sec in October 2025, its compliance program was progressing, but the IT operations underneath it had no formal process, onboarding and offboarding were ad hoc, device management was basic, and no EDR was in place. The SOC 2 Type 2 review period was closing in December.",
      "Com-Sec stepped in as an extension of Honk's leadership and engineering team. Weekly security, compliance, and IT meetings set the pace, Drata became the single view of control health, and Com-Sec took ownership of the IT operations behind the controls: employee onboarding and offboarding, laptop procurement and shipping across the US and Canada, MDM, EDR, access reviews, vendor reviews, and security awareness.",
      "Within six months, Honk received its SOC 2 Type 2 final report, with every auditor evidence request closed. Since then, personnel compliance has stayed at or near 100 percent, every laptop has moved to a modern MDM with zero touch deployment, CrowdStrike EDR protects every endpoint, and recent phishing campaigns have recorded zero clicks.",
    ],
    challenge: [
      "Honk was scaling quickly while keeping up with a recurring SOC 2 Type 2 audit. The compliance work was progressing, but the IT operations underneath it were not keeping pace. IT was handled informally by the CTO and DevOps, with limited oversight and no documented process.",
      "The gaps showed up exactly where the auditors looked. Onboarding and offboarding had no standard workflow. Device management ran on a basic MDM, several devices were not reporting compliance, and there was no endpoint detection and response. Google Workspace had no clear permissions structure, and AWS scanning tools were active but not tuned or acted on.",
      "The audit evidence also needed attention. Most policies were due for renewal in December, BC/DR and incident response testing needed to be run and documented, access reviews and vendor reviews needed evidence, and a new penetration test was due. With the review period closing at year end, Honk needed both a team to drive the audit and a team to run IT properly, without adding headcount of its own.",
    ],
    approach: {
      intro: [
        "Com-Sec began with a full assessment of Honk's IT and security landscape and set a clear target for each area, from device management to SOC 2 readiness. Weekly security, compliance, and IT meetings with Honk's CTO, VP of Engineering, and engineering leads then turned that roadmap into owned action items. Nearly 50 of these sessions have kept priorities, blockers, and evidence visible every week since kickoff.",
        "On the compliance side, Com-Sec drove Honk through its audit cycle. The team renewed and published every policy, ran the BC/DR test and an incident response tabletop exercise, produced the risk assessment report, completed quarterly access reviews across Google Workspace, Monday.com, Slack, and cloud platforms, and completed security reviews for all vendors. During fieldwork, Com-Sec tracked every auditor request through Monday.com, gathered much of the evidence directly, and worked with Honk's engineers to close the rest.",
        "On the IT side, Com-Sec became Honk's IT team. New hire and departure requests now flow through standard forms, a dedicated Slack channel, and a Monday.com board for onboarding, offboarding, and IT support. Com-Sec manages laptop procurement and shipping for US and Canadian employees, maintains the asset inventory, and archives departed accounts in line with retention needs. The team migrated every device from Jamf Now to Iru with zero touch enrollment through Apple Business Manager, then deployed CrowdStrike EDR to all endpoints and raised prevention policies to their strictest level.",
        "Security awareness runs alongside everything else. Monthly phishing simulations, targeted training for anyone who clicks, and monthly newsletters on topics such as MFA fatigue, access control, and shadow IT keep employees engaged throughout the year. When suspicious emails or account activity appeared, Com-Sec investigated, contained, and documented each incident.",
      ],
    },
    results: [
      "SOC 2 Type 2 final report received in April 2026, six months after kickoff, with 100 percent of auditor evidence requests closed.",
      "Drata readiness brought to 100 percent by April 2026, and held between 93 and 100 percent since.",
      "Every employee personnel-compliant from February 2026 onward.",
      "All policies renewed and published, and BC/DR testing, an incident response tabletop exercise, a risk assessment, and quarterly access reviews completed with documented reports.",
      "Every laptop migrated from Jamf Now to Iru MDM, with zero touch deployment through Apple Business Manager and automatic app enforcement.",
      "CrowdStrike EDR deployed to all endpoints, with prevention policies raised to the strictest level.",
      "Penetration test completed in July 2026, with both medium findings remediated.",
      "Standardized onboarding and offboarding through forms, Slack, and Monday.com, with Com-Sec handling US and Canada laptop logistics in 3 to 4 days.",
      "Security reviews completed for all vendors, with SOC 2 report collection underway for critical vendors.",
      "Monthly phishing simulations with targeted retraining, reaching zero clicks in June 2026 and in the most recent campaigns.",
      "Weekly security, compliance, and IT meetings with Honk leadership, nearly 50 held since October 2025.",
    ],
    why: {
      intro: ["Honk did not need another advisor to point out gaps before an audit. It needed a team that could close them: run the audit, run IT, and keep both connected every week. Com-Sec brought vCISO leadership, audit execution, endpoint security, and hands on IT support under one accountable team, so Honk's engineers could stay focused on the product while the security program kept pace with the business."],
    },
    quote: {
      text: "When we started with Com-Sec, our IT was running on goodwill and our audit was a few months away. They got us through our SOC 2 Type 2 audit, then quietly took over the IT work we never had time for. Every laptop is managed, every endpoint is protected, and we see exactly where we stand every week.",
      attribution: "Honk",
    },
    cta: {
      heading: "Audit ready, and IT that keeps up",
      text: ["If your audit is getting closer and your IT is still running on spreadsheets and goodwill, talk to Com-Sec."],
    },
  },

  "castellum-ai": {
    client: "Castellum.AI",
    badge: "FinTech",
    tagline: "Compliance technology for financial services",
    title: "SOC 2 Type 2 Kept Current Year After Year, With Penetration Testing Built Into Every Cycle",
    overview: [
      { label: "Industry", value: "Compliance technology for financial services, serving banks, credit unions, fintechs and digital asset platforms" },
      { label: "Product", value: "An AI powered sanctions, watchlist and adverse media screening platform that automates alert review across AML and KYC workflows" },
      { label: "Services", value: "SOC 2 Type 2 readiness and annual maintenance, and web application penetration testing" },
      { label: "GRC platform", value: "Drata" },
      { label: "Audit partner", value: "Sensiba LLP" },
      { label: "Engagement", value: "May 2024 to present" },
    ],
    summary: [
      "Castellum.AI builds the screening layer that banks, credit unions and fintechs rely on to catch sanctions exposure and financial crime risk. Its buyers are regulated institutions, and their own examiners sit behind them, so a SOC 2 report is not a marketing asset for Castellum.AI. It is part of how the product passes vendor review.",
      "Com-Sec has run that program since May 2024. The first SOC 2 Type 2 audit established the control environment, and since then the engagement has settled into a maintenance rhythm: controls, policies and evidence kept current in Drata through the year, an annual Type 2 audit period, and a web application penetration test delivered in the same cycle. Two annual retests have been completed to date.",
      "The point of the arrangement is that nothing gets rebuilt. Evidence is collected while the work is happening rather than reconstructed before each audit window, which is what keeps a recurring Type 2 from becoming an annual scramble.",
    ],
    lookingFor: [
      "A SOC 2 Type 2 report their customers' vendor review teams would accept without follow up",
      "A program maintained through the year rather than reassembled before each audit period",
      "Independent technical testing of the platform in the same cycle as the audit work",
      "A partner who would stay on after the first report rather than hand one over and step away",
    ],
    challenge: [
      "A SOC 2 Type 2 is not a point in time result. It tests whether controls operated over a period, which means the evidence has to exist as the period runs. A program that goes quiet between audits leaves gaps that cannot be filled in afterwards.",
      "That pressure is sharper for a company selling into regulated financial institutions. Customers do not just want the report, they ask questions about what sits behind it, and they ask every year. Castellum.AI needed the control environment to hold continuously while the team stayed focused on building the product.",
    ],
    approach: {
      intro: ["Com-Sec built a recurring cadence around the SOC 2 program rather than treating each audit as a separate project."],
      points: [
        { lead: "The first cycle.", text: "Com-Sec took Castellum.AI through readiness to the first Type 2 report and set up the control environment in Drata so it could be maintained rather than rebuilt." },
        { lead: "Maintained between audits.", text: "Controls, policies and assessments are kept current through the year, with evidence collected as the work happens. Each audit period starts from a maintained position instead of a catch up effort." },
        { lead: "Annual retests delivered.", text: "Two annual Type 2 retests have been completed since the first report, with Com-Sec preparing the evidence set and working with the auditor through each one." },
        { lead: "Penetration testing in every cycle.", text: "A web application penetration test runs in the same cycle as the audit work, with findings tracked through remediation rather than handed over as a report." },
      ],
    },
    results: [
      "SOC 2 Type 2 established and maintained continuously since May 2024",
      "Two annual Type 2 retests completed, each from a maintained control environment",
      "Evidence collected through the period rather than reconstructed before each audit",
      "Web application penetration testing delivered in each cycle, with findings tracked through remediation",
      "A recurring program the product team does not have to stop and rebuild each year",
    ],
    why: {
      intro: ["Most SOC 2 relationships end when the report ships, and the next one starts from scratch. That is the pattern a Type 2 punishes hardest."],
      points: [
        { lead: "Maintained, not rebuilt.", text: "The program runs continuously, so each audit period begins from a known position." },
        { lead: "Compliance and technical testing together.", text: "Governance and technical security sit in the same team, so the penetration test is delivered with the control environment in view." },
        { lead: "Continuity across cycles.", text: "The same team has run every cycle since 2024, which means no re-onboarding and no rediscovery of the environment." },
        { lead: "Accountable through closure.", text: "Findings are carried through remediation rather than handed over and left." },
      ],
    },
    quote: {
      text: "Com-Sec keeps our SOC 2 program and our pen-testing connected and current. We are not rebuilding the program every time an audit period comes around.",
      attribution: "Castellum.AI",
    },
    cta: {
      heading: "Keep your Type 2 awake between audits",
      text: [
        "A Type 2 report tests whether your controls actually operated, not whether you could assemble the evidence afterwards. Programs that go quiet between audits are the ones that struggle.",
        "If your SOC 2 only wakes up before the audit period, talk to Com-Sec.",
      ],
    },
  },

  powder: {
    client: "Powder",
    badge: "FinTech",
    title: "SOC 2 Was the Requirement. A Working Security and IT Program Was the Result.",
    overview: [
      { label: "Industry", value: "FinTech" },
      { label: "Services", value: "vCISO, SOC 2, resilience planning, IT operations" },
      { label: "Compliance and audit platform", value: "OneLeet" },
      { label: "Engagement", value: "September 2024 to present" },
    ],
    summary: [
      "Powder needed to maintain SOC 2, but the real work reached far beyond the audit. Business continuity, disaster recovery, laptops, onboarding, offboarding, and recurring IT decisions all affected whether the controls would actually hold up in practice.",
      "Com-Sec connected the audit program to the operating environment: vCISO guidance, SOC 2 retest preparation, business continuity and disaster recovery work, and practical IT responsibilities across the employee lifecycle.",
      "Instead of building an audit package around disconnected processes, Powder developed a more durable program that could be maintained throughout the year.",
    ],
    challenge: [
      "Powder needed to maintain SOC 2, but the real work reached far beyond the audit. Business continuity, disaster recovery, laptops, onboarding, offboarding, and recurring IT decisions all affected whether the controls would hold up in practice.",
    ],
    approach: {
      intro: ["Com-Sec connected the audit program to the operating environment. The team provided vCISO guidance, supported SOC 2 retest preparation, advanced business continuity and disaster recovery work, and helped manage practical IT responsibilities across the employee lifecycle."],
    },
    results: [
      "SOC 2 retest preparation underway",
      "Business continuity and disaster recovery work advanced",
      "Laptop management supported",
      "Onboarding and offboarding processes supported",
      "Recurring vCISO and IT guidance established",
    ],
    why: {
      intro: ["Controls fail when the operating process behind them is unclear. Com-Sec helps clients run the processes, prepare the evidence, and keep leadership focused on the risks that matter."],
    },
    quote: {
      text: "Com-Sec helped us connect SOC 2 to the way our team actually operates. The audit work, resilience planning, and daily IT processes now move together.",
      attribution: "Powder",
    },
    cta: {
      heading: "Connect SOC 2 to daily operations",
      text: ["If SOC 2 and daily IT feel like separate problems, talk to Com-Sec."],
    },
  },

  /* ------------------------------------------------------------------ Energy */
  "satoshi-energy": {
    client: "Satoshi Energy",
    badge: "Energy",
    tagline: "Bitcoin energy infrastructure",
    title: "From SOC 2 Readiness to an Ongoing Security and Audit Readiness Program",
    overview: [
      { label: "Industry", value: "Energy technology / Bitcoin energy infrastructure" },
      { label: "Company", value: "Satoshi Energy" },
      { label: "Services", value: "SOC 2 Type II audit readiness and maintenance, security and compliance program management, penetration testing coordination, risk management, vendor security, access reviews, policy management, security testing, audit coordination, and Trust Center implementation" },
      { label: "GRC platform", value: "Drata" },
      { label: "Trust Center", value: "SafeBase by Drata" },
      { label: "Audit partner", value: "Sensiba" },
      { label: "Engagement", value: "August 2025 to present" },
    ],
    summary: [
      "Satoshi Energy needed more than help preparing evidence for a SOC 2 audit. The company needed a security and compliance program that could operate continuously while supporting a growing technology business.",
      "Com-Sec worked alongside Satoshi Energy throughout its SOC 2 Type II readiness and audit process, helping turn individual compliance requirements into an operating program. The engagement covered control implementation, evidence collection, policy management, personnel compliance, risk and vendor management, access reviews, technical security evidence, penetration testing coordination, and direct support throughout the audit process.",
      "After the initial audit cycle, the work continued. Rather than allowing compliance activities to become a once-a-year exercise, Com-Sec helped Satoshi Energy maintain its Drata environment, keep controls and evidence current, prepare for subsequent audit periods, coordinate technical testing, and improve how the company communicates its security posture externally.",
      "The result is a security program designed not only to satisfy an auditor, but to remain operational between audits and support customer assurance as the company grows.",
    ],
    challenge: [
      "SOC 2 readiness requires significantly more than uploading policies into a compliance platform. Satoshi Energy needed to demonstrate that its controls were actually implemented and operating across areas such as access management, personnel security, vendor management, risk management, infrastructure security, change management, vulnerability management, incident response, business continuity, and security governance.",
      "For a SOC 2 Type II audit, that challenge becomes more significant because controls must operate consistently throughout the audit period. Evidence needs to remain current, exceptions need to be investigated and remediated, personnel obligations need to be completed, and technical systems must continue meeting the organization's control requirements.",
      "At the same time, Satoshi Energy needed to continue running the business. The internal team could not afford to treat every audit cycle as a separate compliance project. The objective therefore became broader than simply getting through an audit: build a repeatable security and assurance program that could remain active after the report was issued.",
    ],
    approach: {
      intro: [
        "Com-Sec supported Satoshi Energy throughout the SOC 2 Type II readiness lifecycle, working directly within Drata to identify control and evidence gaps, coordinate remediation, and prepare the environment for audit. The work included reviewing SOC 2 controls and automated tests, collecting and validating evidence, maintaining security policies, supporting personnel compliance, reviewing vendors and risks, coordinating access reviews, tracking security exceptions, and working with stakeholders to close readiness gaps.",
        "Com-Sec also acted as the bridge between compliance requirements and technical implementation. When a control required infrastructure, identity, endpoint, vulnerability, or application-security evidence, the team worked with the appropriate technical owners to determine what needed to be implemented and what evidence would demonstrate that the control was operating.",
        "Audit readiness continued through the audit itself. Com-Sec helped organize evidence, respond to auditor requests, clarify control implementation, track outstanding items, and coordinate follow-ups so Satoshi Energy's internal team did not have to manage the audit process alone.",
        "The engagement subsequently expanded into ongoing assurance activities, including penetration testing coordination, recurring compliance maintenance, risk and vendor reviews, security testing, and preparation for future audit periods. Com-Sec also helped implement Satoshi Energy's SafeBase Trust Center, establishing a centralized location where customers and prospects can access approved assurance materials instead of relying entirely on manual security-document requests.",
      ],
    },
    results: [
      "SOC 2 Type II readiness and audit support completed across the applicable control environment.",
      "Ongoing SOC 2 maintenance established so controls, evidence, and remediation remain active between audit periods.",
      "Drata used as an operational compliance environment, rather than only as an evidence repository before an audit.",
      "Security policies and governance documentation maintained as part of the recurring compliance program.",
      "Personnel compliance monitored, including policy acknowledgments, identity controls, and other workforce requirements.",
      "Risk management and vendor security activities incorporated into the ongoing compliance lifecycle.",
      "Access reviews and security control reviews coordinated to maintain evidence of recurring control operation.",
      "Penetration testing incorporated into the assurance roadmap, with findings tracked through remediation and retesting as applicable.",
      "Audit coordination centralized through Com-Sec, reducing the burden of evidence requests and auditor follow-ups.",
      "SafeBase Trust Center implemented for a more scalable customer-assurance process.",
    ],
    why: {
      intro: [
        "Satoshi Energy did not need a consultant who would create a checklist, prepare for one audit, and disappear after the report was issued.",
        "It needed a team that could work inside the existing environment, understand what auditors were asking for, translate those requirements for engineering and business stakeholders, help implement the necessary controls, validate the evidence, and remain involved as the program evolved.",
        "Com-Sec provided continuity across governance, compliance, technical security, audit coordination, and customer assurance, turning SOC 2 from a periodic audit project into an ongoing security program.",
      ],
    },
    quote: {
      text: "Com-Sec worked alongside our team throughout the SOC 2 process, helping us understand what was required, close gaps, coordinate the audit, and keep the program moving after the initial audit cycle. Having one team supporting both the compliance requirements and the underlying security work made the process significantly easier to manage.",
      attribution: "Satoshi Energy",
    },
    cta: {
      heading: "SOC 2 shouldn't become a project your team rebuilds every year",
      text: [
        "Com-Sec helps companies move from audit readiness to an operating security program, covering compliance, technical security, testing, evidence, remediation, and audit coordination.",
        "Security that stays ready for the next customer, auditor, or security review.",
      ],
    },
  },

  "trace-electricity": {
    client: "Trace Electricity",
    badge: "Energy",
    tagline: "ISO 27001 implementation",
    title: "Moving ISO 27001 From Implementation to Internal Audit",
    overview: [
      { label: "Industry", value: "Energy technology" },
      { label: "Services", value: "ISO 27001 implementation and internal audit preparation" },
      { label: "GRC platform", value: "Kertos" },
      { label: "Engagement", value: "January 2026 to present" },
    ],
    summary: [
      "Trace Electricity set an aggressive ISO 27001 target: implementation, internal audit, and certification prep, all inside the same year.",
      "Com-Sec is guiding the controls, documentation, and internal audit preparation through Kertos on a defined sequence: build the management system, test it internally, close the gaps, then enter certification with fewer surprises.",
      "The internal audit was scheduled for August 2026, with certification targeted for September 2026.",
    ],
    challenge: [
      "Trace Electricity had an aggressive ISO 27001 objective. The work had to move from implementation through internal audit and into certification preparation within the same year.",
    ],
    approach: {
      intro: ["Com-Sec helped guide the controls, documentation, and internal audit preparation through Kertos. The program was designed around a clear sequence: implement the management system, test it internally, close the gaps, and enter certification with fewer surprises."],
    },
    results: [
      "ISO 27001 implementation program launched",
      "Controls and documentation organized through Kertos",
      "Internal audit scheduled for August 2026",
      "Certification targeted for September 2026",
      "Readiness work structured around a defined assessment timeline",
    ],
    why: {
      intro: ["Com-Sec helps clients keep momentum across the entire ISO 27001 process, connecting implementation, internal audit, remediation, and certification prep instead of treating them as separate handoffs."],
    },
    quote: {
      text: "Com-Sec helped us maintain momentum from implementation through internal audit and kept the certification path clear.",
      attribution: "Trace Electricity",
    },
    cta: {
      heading: "Keep ISO 27001 on schedule",
      text: ["If ISO 27001 is moving but the certification date is not, talk to Com-Sec."],
    },
  },

  /* ------------------------------------------------------------------ EdTech */
  gptzero: {
    client: "GPTZero",
    badge: "EdTech",
    tagline: "AI content detection",
    title: "Three Years, Three SOC 2 Cycles, and a Security Function That Scaled With the Company",
    overview: [
      { label: "Industry", value: "AI content detection, with authorship verification and writing integrity tools alongside it" },
      { label: "Customers", value: "Education is the largest, including colleges, universities and school districts, with publishing, hiring and legal alongside it" },
      { label: "Based in", value: "Offices in New York and Toronto" },
      { label: "Services", value: "vCISO support, SOC 2 readiness and annual maintenance, penetration testing, security questionnaire and customer due diligence support, vendor risk reviews, and security awareness training" },
      { label: "GRC platform", value: "Drata" },
      { label: "Auditor", value: "MJD Advisors" },
      { label: "Engagement", value: "August 2023 to present" },
    ],
    summary: [
      "GPTZero builds the tools institutions use to tell whether a piece of writing was produced by a person or a model. Its buyers are universities, school districts, publishers and enterprises, which means the sale almost always runs through a security review before it reaches a contract.",
      "GPTZero came to Com-Sec in August 2023, when both companies were considerably smaller. It was one of Com-Sec's earliest clients, and the two have grown alongside each other since. GPTZero's first SOC 2 report was issued in January 2024, with annual audits completed in January 2025 and January 2026.",
      "Over the same period the GPTZero team roughly tripled in size. Com-Sec has carried the security and compliance function throughout: keeping the SOC 2 program current in Drata, answering the security questionnaires and due diligence requests that arrive with every institutional deal, running web application and cloud penetration testing with findings driven through remediation, and keeping the control environment aligned to the privacy obligations that come with serving education.",
    ],
    lookingFor: [
      "A SOC 2 report their institutional buyers' review teams would accept",
      "Fast, accurate answers to the security questionnaires and due diligence requests that gate education and enterprise deals",
      "Regular technical testing of the platform and its cloud environment",
      "A security function that could scale with the company rather than be rebuilt at each stage",
    ],
    challenge: [
      "Selling into education means being assessed constantly. A university procurement office, a school district and an enterprise buyer each run their own review, each has its own questionnaire, and each expects evidence rather than assurances. GPTZero also carries privacy obligations that come with serving students, so the control environment has to satisfy more than one standard at once.",
      "All of that landed while the company was growing quickly. A program built for a small team does not survive tripling in size unless someone keeps it current as the company changes shape.",
    ],
    approach: {
      intro: ["Com-Sec has acted as GPTZero's security and compliance function since August 2023, across the audit cycle and the day to day demands that sit around it."],
      points: [
        { lead: "SOC 2 established and maintained.", text: "The first report was issued in January 2024, with annual audits completed in January 2025 and January 2026. Controls, policies and evidence stay current in Drata between audit periods rather than being rebuilt before each one." },
        { lead: "Customer due diligence handled directly.", text: "Com-Sec answers the security and privacy questionnaires GPTZero receives from universities, school districts and enterprise customers, and prepares the assurance materials those reviews ask for." },
        { lead: "Web application and cloud penetration testing.", text: "Both the application and the cloud environment are tested, with identified vulnerabilities tracked through remediation rather than handed over as a report." },
        { lead: "Gaps closed as they surface.", text: "Where a review or an assessment surfaces a gap, Com-Sec works it through to closure so the control environment keeps pace with the obligations GPTZero takes on as it grows." },
        { lead: "Vendor reviews and workforce training.", text: "Vendor risk reviews and security awareness training run as part of the recurring program rather than as separate exercises." },
      ],
    },
    results: [
      "SOC 2 reports issued in January 2024, January 2025 and January 2026, maintained continuously in Drata between audits",
      "A three year engagement spanning a period in which the GPTZero team roughly tripled in size",
      "Security questionnaires and customer due diligence handled by Com-Sec, keeping engineering on the product",
      "Web application and cloud penetration testing delivered with vulnerabilities remediated",
      "Control environment maintained against the privacy expectations that come with serving education",
      "One of Com-Sec's earliest clients and still active three years on",
    ],
    why: {
      intro: ["A company growing this fast does not need a compliance project. It needs the security function to already be running when the next institutional buyer asks for it."],
      points: [
        { lead: "Continuity across three years.", text: "Three SOC 2 cycles with the same team means no re-onboarding and no rediscovery of the environment each year." },
        { lead: "The assurance work, not just the audit.", text: "Com-Sec takes the questionnaires and due diligence requests directly, so deals are not waiting on the product team." },
        { lead: "Compliance and technical testing together.", text: "Governance and technical security sit in the same team, so testing is delivered with the control environment in view and findings are carried to closure." },
        { lead: "Grew with the company.", text: "The program has been maintained through every stage of the company's growth rather than rebuilt at each one." },
      ],
    },
    quote: {
      text: "GPTZero moves fast, and security could not be the thing that slowed us down. Com-Sec has run our SOC 2 program and our customer security reviews since 2023, through a period where we grew in size, and they handle the questionnaires without pulling engineering off the roadmap.",
      attribution: "GPTZero",
    },
    cta: {
      heading: "Keep up with growth instead of gating it",
      text: [
        "If every institutional deal arrives with its own security review, the audit report is only half the problem. The other half is who answers the questionnaires while your team builds the product.",
        "If your security program needs to keep up with growth instead of gating it, talk to Com-Sec.",
      ],
    },
  },

  mentorpro: {
    client: "MentorPRO",
    badge: "EdTech",
    tagline: "Mentoring software for education",
    title: "From IT Support to SOC 2, With a Security Team on Call for Every Customer Review",
    overview: [
      { label: "Industry", value: "Mentoring software for education, built on peer reviewed research into what makes mentoring work" },
      { label: "Customers", value: "Universities, nonprofits and mentoring programs, supporting student wellbeing, retention and academic progress" },
      { label: "Services", value: "vCISO support, SOC 2 readiness and annual maintenance, policy development, security questionnaire and customer due diligence support, vendor risk reviews, and IT security support" },
      { label: "GRC platform", value: "Drata" },
      { label: "Audit partner", value: "Sensiba LLP" },
      { label: "Engagement", value: "2024 to present" },
    ],
    summary: [
      "MentorPRO builds the software universities and nonprofits use to run mentoring programs, the kind that keep students enrolled and supported. Its customers are institutions, which means every new relationship passes through a security review before it becomes a contract.",
      "The relationship did not start with an audit. MentorPRO first came to Com-Sec in 2024 for IT and security support, calling when something needed implementing or a question needed answering. Com-Sec rewrote the privacy policy and built out the full policy suite, and as customer expectations grew, that work became the foundation for SOC 2. The first report was achieved in August 2025, and the second cycle is underway in 2026.",
      "Com-Sec now acts as MentorPRO's external security team. Each audit cycle starts roughly four months ahead so the work is paced rather than crammed, and in between, Com-Sec answers the security questionnaires, handles vendor due diligence, and joins customer calls directly when an institution's own security team has questions.",
    ],
    lookingFor: [
      "A SOC 2 report that institutional buyers would accept without a second round of questions",
      "An audit cycle paced across months rather than compressed into the final weeks",
      "Someone to take the security questionnaires and due diligence requests that arrive with every institutional deal",
      "A security function available when something needs implementing, not only at audit time",
    ],
    challenge: [
      "Selling into universities and nonprofits means being reviewed constantly, and the reviews are rarely just a form. An institution's security team often wants a conversation, with someone who can answer precisely and in their language. A sales team cannot carry that, and a product team should not have to.",
      "Alongside it sits an annual SOC 2 cycle that only works if evidence exists as the period runs. Both demands land on the same small group of people, which is how audits become last minute scrambles and deals stall waiting on a questionnaire.",
    ],
    approach: {
      intro: ["Com-Sec acts as MentorPRO's external security function, across the audit cycle and everything that arrives between cycles."],
      points: [
        { lead: "Policy foundation first.", text: "Before any audit was on the table, Com-Sec rewrote MentorPRO's privacy policy and built out the wider policy suite, which became the documented base the SOC 2 program was built on." },
        { lead: "The audit cycle, started early.", text: "Each cycle begins roughly four months before the audit, so evidence collection, remediation and the required assessments are paced across the period instead of compressed at the end. The first report was achieved in August 2025." },
        { lead: "Gaps converted into owned work.", text: "Open gaps are turned into assigned tickets in the systems MentorPRO already uses, so each item has an owner and a status rather than sitting on a list." },
        { lead: "Maintained in Drata between audits.", text: "Controls, policies and evidence are maintained in Drata between audit periods, so each cycle starts from a known position rather than a rebuild." },
        { lead: "Customer due diligence, including the calls.", text: "Com-Sec answers the security questionnaires and vendor due diligence requests MentorPRO receives, and joins calls with customers and prospects directly when their security teams want to talk it through." },
        { lead: "Security support between cycles.", text: "The relationship began with IT and security support and that has continued. MentorPRO calls Com-Sec when something needs implementing or a security question comes up." },
      ],
    },
    results: [
      "Privacy policy rewritten and a full policy suite built before the first audit cycle began",
      "SOC 2 achieved in August 2025, with the second cycle underway in 2026",
      "Each cycle started roughly four months ahead, keeping the audit period paced rather than compressed",
      "Audit gaps tracked as assigned work with named owners rather than an open list",
      "Security questionnaires, vendor due diligence and customer security calls handled by Com-Sec",
      "Control environment maintained in Drata continuously between audit periods",
      "A security function available year round without an internal hire",
    ],
    why: {
      intro: ["The audit is the visible part. The harder part is everything that arrives between audits, and that is what stalls deals and pulls teams off their work."],
      points: [
        { lead: "We take the calls, not just the paperwork.", text: "Com-Sec takes the questionnaires and joins the customer security calls, so institutional reviews do not wait on the product team." },
        { lead: "The cycle starts early.", text: "Starting four months out turns the audit into a schedule instead of a scramble." },
        { lead: "Findings become owned work.", text: "Gaps become assigned work with owners and status, which is what keeps progress consistent between meetings." },
        { lead: "One team, from IT support to SOC 2.", text: "The relationship started with IT support and policy work and grew into the full program, with the same team throughout." },
      ],
    },
    quote: {
      text: "Com-Sec is our security team. They started by sorting out our policies, then took us through SOC 2 as clear work with owners and priorities. They handle the questionnaires our university customers send and get on the calls when those security teams have questions, so we are not pulling our own people off the product to answer them.",
      attribution: "MentorPRO",
    },
    cta: {
      heading: "Security reviews arrive all year",
      text: [
        "Selling to institutions means a security review on every deal, and the audit report only answers the first question. The rest arrive as questionnaires and calls, and they arrive all year.",
        "If your team is answering those instead of building the product, talk to Com-Sec.",
      ],
    },
  },

  /* ------------------------------------------------------------------ HealthTech */
  "tjm-labs": {
    client: "TJM Labs",
    badge: "HealthTech",
    tagline: "Pharmacy automation",
    title: "From Single-Entity Type I to Combined Type II After an Acquisition",
    overview: [
      { label: "Industry", value: "Pharmacy automation, healthcare technology" },
      { label: "Company", value: "TJM Labs, Inc." },
      { label: "Services", value: "vCISO, SOC 2 readiness and maintenance, penetration testing, security awareness, vendor reviews, audit coordination, security questionnaire support, EDR management, GRC platform migration" },
      { label: "GRC platform", value: "Sprinto (migration from Drata in progress)" },
      { label: "Audit partner", value: "Prescient Assurance" },
      { label: "Engagement", value: "January 2026 to present" },
    ],
    summary: [
      "TJM Labs began its SOC 2 journey in January 2026, working toward a Type I report scoped to its own environment. At the time, the company had 57 personnel and was putting the baseline practices a SOC 2 program requires in place for the first time: onboarding and offboarding, cyber insurance, and security tooling.",
      "Com-Sec built the readiness program from the ground up, covering policy creation, personnel compliance, vendor management, risk assessment, onboarding and offboarding, cyber insurance, incident management, and penetration testing, delivering TJM Labs' Type I report by mid 2026.",
      "Shortly after, TJM Labs acquired Pharmesol, a company with its own SOC 2 Type II report already in place. Since Pharmesol's report was coming up for renewal around the same time TJM Labs was heading into its own Type II audit, Com-Sec brought both into one combined audit under the TJM Labs name. Both entities are now being consolidated on Sprinto, with shared management controls while infrastructure stays separate between the two.",
      "TJM Labs has since grown substantially, with headcount now at roughly 150 following a $10 million investment. That growth, combined with the acquisition, means Com-Sec now supports audit readiness for both entities together.",
    ],
    challenge: [
      "TJM Labs needed a SOC 2 Type I built from close to nothing, with evidence initially collected manually and tracked in folders and a spreadsheet.",
      "While that work was underway, TJM Labs acquired Pharmesol, which already held its own SOC 2 Type II report. The acquisition merged the two companies on the management side, while infrastructure stayed maintained independently. With Pharmesol's report coming up for renewal around the same time TJM Labs was heading into its first Type II audit, the two had to be brought into one combined audit without losing what was already true and certified about each.",
      "On top of the audit work, growth compounded the challenge. Headcount roughly tripled, which meant personnel compliance and EDR management had to scale at the same pace. Customer security questionnaires grew from one or two a month early in the engagement to two or more a week, with TJM Labs relying on Com-Sec to handle them.",
    ],
    approach: {
      intro: [
        "Com-Sec built TJM Labs' SOC 2 program from the ground up for the Type I: policy creation, personnel compliance, vendor management, risk assessment, a formal onboarding and offboarding process, TJM Labs' first cyber insurance coverage, incident management, and its first penetration testing engagements. Com-Sec also deployed CrowdStrike as TJM Labs' first EDR tool.",
        "When Pharmesol was acquired, Com-Sec worked with Prescient Assurance to combine both companies into a single Type II audit issued under the TJM Labs name. Management controls are handled together for both entities, while infrastructure controls stay independent. As part of that, Com-Sec is migrating TJM Labs from Drata onto Sprinto, the platform Pharmesol was already using, so both entities are managed in one place.",
        "As headcount grew from 57 toward 150, Com-Sec scaled personnel compliance and EDR management alongside it, and took on a growing volume of customer security questionnaires, now running at two to three a week. Com-Sec also became TJM Labs' primary resource for vendor selection and review, including laptop procurement, MDM, and EDR decisions.",
      ],
    },
    results: [
      "SOC 2 Type I report delivered on TJM Labs' original scope",
      "SOC 2 Type II expanded to cover TJM Labs and Pharmesol under one combined audit, with management controls handled together and infrastructure controls kept independent",
      "TJM Labs' first cyber insurance coverage, onboarding and offboarding process, and EDR deployment (CrowdStrike) put in place",
      "Compliance platform migration to Sprinto underway to support the combined entity",
      "Personnel compliance and EDR management scaled through headcount growth from 57 to roughly 150",
      "Customer security questionnaire volume grown from one to two a month to two to three a week, fully supported by Com-Sec",
    ],
    why: {
      intro: ["What started as standard Type I readiness work grew alongside TJM Labs through a $10 million investment, a tripling of headcount, and an acquisition that changed the shape of the audit itself. Com-Sec adapted the program at each stage rather than treating it as a fixed scope of work: consolidating onto one compliance platform, folding a newly acquired company into an active audit process, and absorbing a growing questionnaire load as TJM Labs' customer base expanded."],
    },
    cta: {
      heading: "Growth shouldn't mean restarting your audit",
      text: ["If growth or an acquisition is changing the shape of your audit, talk to Com-Sec."],
    },
  },

  /* ------------------------------------------------------------------ Services */
  quester: {
    client: "Quester",
    badge: "Services",
    tagline: "Brand and innovation consulting",
    title: "SOC 2 Type 2 in Six Months, Privacy Frameworks Alongside It, and ISO 27001 Underway",
    overview: [
      { label: "Industry", value: "Brand and innovation consulting, built on narrative driven consumer research" },
      { label: "Customers", value: "Enterprise and mid market brands across food and beverage, consumer goods, technology, financial services and wellness" },
      { label: "Services", value: "vCISO support, SOC 2 readiness and annual maintenance, ISO 27001 certification support, web application penetration testing, annual assessments, in person security awareness training, and customer due diligence support" },
      { label: "GRC platform", value: "Drata" },
      { label: "Audit partner", value: "Sensiba LLP" },
      { label: "Engagement", value: "November 2024 to present" },
    ],
    summary: [
      "Quester helps large consumer brands understand their customers, which means the work runs on consumer research data. For a consultancy of that kind, a client's procurement and privacy teams arrive before the contract does, and they want to know how that data is handled.",
      "Quester came to Com-Sec in November 2024 and achieved its first SOC 2 Type 2 report in May 2025, roughly six months later. The control environment was built in Drata to carry more than the audit, so CCPA and GDPR privacy requirements and alignment with NIST CSF 2.0 sit on the same foundation rather than running as separate efforts.",
      "Com-Sec acts as Quester's external security team across everything that follows: annual SOC 2 maintenance, web application penetration testing, the annual assessments, in person security awareness training for the whole company, and the due diligence requests that arrive with enterprise clients. When a prospect recently required ISO 27001, that work started on the controls already in place, and certification is targeted for this year.",
    ],
    lookingFor: [
      "A SOC 2 report that enterprise clients' procurement and privacy teams would accept",
      "Privacy obligations covered on the same control environment rather than as separate programs",
      "Technical testing and annual assessments handled as part of the same engagement",
      "A security function that could take on a new framework when a client demanded one",
    ],
    challenge: [
      "Consumer research is a data business. The brands Quester works with run their own privacy and vendor reviews, and the questions are not limited to one framework. A US client asks about CCPA, a European one asks about GDPR, and a large enterprise asks for a SOC 2 report on top of both.",
      "Answering each of those separately is how a small consultancy ends up with three programs, three sets of evidence and no clear view of any of them. Quester needed one control environment that could satisfy all of it, and the capacity to add a framework when a client required it rather than losing the deal.",
    ],
    approach: {
      intro: ["Com-Sec acts as Quester's external security function, across the audit cycle and everything around it."],
      points: [
        { lead: "SOC 2 Type 2 in roughly six months.", text: "Com-Sec took Quester from engagement in November 2024 to a SOC 2 Type 2 report in May 2025, building the control environment in Drata as the audit period ran rather than assembling evidence afterwards." },
        { lead: "Several frameworks, one foundation.", text: "CCPA and GDPR privacy requirements and NIST CSF 2.0 alignment were mapped onto the same control environment, so each is evidenced from one place instead of three." },
        { lead: "Maintained between audit periods.", text: "Controls, policies and evidence stay current in Drata between audit periods, so each cycle starts from a maintained position." },
        { lead: "Technical testing and annual assessments.", text: "Web application penetration testing and the annual assessments SOC 2 requires are delivered inside the same engagement, with findings tracked through remediation." },
        { lead: "In person awareness training.", text: "Com-Sec delivers security awareness training to the whole Quester team in person each year rather than assigning a module and checking a box." },
        { lead: "ISO 27001 underway.", text: "When a prospect required ISO 27001, the work began on controls Quester already had rather than from a blank page. Certification is targeted for this year, with surveillance cycles to follow." },
        { lead: "Customer due diligence.", text: "Com-Sec handles the security questionnaires and due diligence requests that arrive with enterprise clients, so reviews do not wait on the Quester team." },
      ],
    },
    results: [
      "SOC 2 Type 2 achieved in May 2025, roughly six months from the start of the engagement",
      "CCPA, GDPR and NIST CSF 2.0 alignment covered on the same control environment as SOC 2",
      "SOC 2 maintained annually in Drata, with each cycle starting from a maintained position",
      "Web application penetration testing and annual assessments delivered inside the same engagement",
      "Annual in person security awareness training delivered to the whole company",
      "ISO 27001 underway on existing controls, driven by a client requirement",
      "Security questionnaires and client due diligence handled by Com-Sec",
    ],
    why: {
      intro: ["A consultancy whose clients are large brands will be asked for a new framework sooner or later. What matters is whether the next one starts from scratch."],
      points: [
        { lead: "One control environment, several frameworks.", text: "SOC 2, the privacy frameworks and now ISO 27001 run on one control environment, so each new requirement builds on what is already evidenced." },
        { lead: "A Type 2 report in the first cycle.", text: "Six months from engagement to a Type 2 report, because evidence was built as the period ran." },
        { lead: "Everything in one engagement.", text: "Governance, technical testing, assessments and training sit with one team rather than four providers." },
        { lead: "Ready when the next requirement lands.", text: "When a client demanded ISO 27001, the work started immediately on existing controls instead of becoming a new project." },
      ],
    },
    quote: {
      text: "Com-Sec is our security team. They got us to SOC 2 Type 2 inside six months and built it so our privacy obligations sit on the same foundation. When a client asked us for ISO 27001, it was already underway rather than starting from zero, and they handle the security questionnaires our clients send so our people stay on the work.",
      attribution: "Quester",
    },
    cta: {
      heading: "The first framework is rarely the last",
      text: [
        "A client asks for SOC 2, the next asks about GDPR, and the one after that wants ISO 27001. Programs built one at a time do not survive that.",
        "If each new requirement means starting over, talk to Com-Sec.",
      ],
    },
  },

  "midas-recovery": {
    client: "Midas Recovery Services",
    badge: "Services",
    tagline: "Workers' compensation lien and disability recovery",
    title: "Two Consecutive HITRUST e1 Certifications, Delivered Inside a Focused Engagement Window Each Year",
    overview: [
      { label: "Industry", value: "Workers' compensation lien and disability recovery services, serving health plans, disability carriers and union trust funds since 1992" },
      { label: "Services", value: "HITRUST e1 readiness and certification support, web application penetration testing, and quarterly compliance support between cycles" },
      { label: "Assessment platform", value: "HITRUST MyCSF, with the submission handled by the external assessor" },
      { label: "External assessor", value: "Prescient Assurance" },
      { label: "Engagement", value: "May 2025 to present, covering two consecutive annual HITRUST e1 cycles" },
    ],
    summary: [
      "Midas Recovery Services has been recovering workers' compensation payments for health plans, disability carriers and union trust funds since 1992. That work depends on clients being willing to share member eligibility data, and as expectations around handling that data have risen, Midas chose HITRUST e1 as the way to show it is handled carefully.",
      "Midas came to Com-Sec in May 2025, approaching HITRUST for the first time. Com-Sec took the audit readiness role: interpreting the requirements, supporting the controls that needed to be implemented, assembling the evidence set, delivering web application penetration testing, and getting every piece of evidence to the external assessor on time. Midas was certified in August 2025, roughly three months in, on the first attempt.",
      "The second cycle ran across the full year that followed, with quarterly compliance work from September 2025 and the concentrated evidence push from May 2026. Midas was certified again in August 2026, and the second cycle asked noticeably less of the team than the first.",
    ],
    lookingFor: [
      "A HITRUST certification they could put in front of clients and prospects",
      "A path through the framework that fit alongside day to day recovery work",
      "Independent technical validation of the web application in the same engagement",
      "Continuity between cycles, so each year did not start cold",
    ],
    challenge: [
      "HITRUST e1 is the lightest of the three assessment levels. It is point in time and asks for far less than i1 or r2. None of that makes it small when it is the first framework a company has been assessed against.",
      "Year one meant standing up controls rather than simply documenting existing ones, and assembling an evidence set that an external assessor would accept, all without a compliance automation platform generating it. The familiar risk in that position is a scramble in the closing weeks and a certification that becomes an annual emergency rather than part of how the business runs.",
    ],
    approach: {
      intro: ["Com-Sec worked as Midas Recovery's audit readiness partner across the full cycle, not only the submission window."],
      points: [
        { lead: "Year one, May to August 2025.", text: "Com-Sec translated the e1 requirements into a plain work list matched to how Midas operates, and supported the implementation where controls did not yet exist rather than simply flagging the gap." },
        { lead: "Evidence assembled by hand.", text: "Com-Sec set up a structured evidence repository and kept it organised the way the assessor would review it, collecting evidence as the work happened rather than reconstructing it at the end." },
        { lead: "Evidence delivered to the external assessor.", text: "Prescient Assurance handled the MyCSF submission as the external assessor. Com-Sec's role was to get them complete evidence on time and answer what came back, which is what kept both submissions moving without last minute gaps." },
        { lead: "Penetration testing in the same engagement.", text: "Web application penetration testing was delivered inside each cycle rather than purchased separately, with findings tracked through remediation alongside the compliance work." },
        { lead: "Year two, September 2025 to August 2026.", text: "Quarterly compliance checks and the annual tasks were completed through to May 2026, with the concentrated evidence work from May to August. Because the control set had been maintained, year two built on a known baseline, and Midas was certified again in August 2026." },
      ],
    },
    results: [
      "HITRUST e1 certified in August 2025, on the first attempt, roughly three months from the start of the engagement",
      "Certified again in August 2026, completing a second consecutive annual cycle",
      "Quarterly compliance checks kept controls operating and evidence current between cycles",
      "Evidence delivered to the external assessor on schedule in both cycles, with no late gaps",
      "Web application penetration testing delivered in each cycle, with findings tracked through remediation",
      "Certification achieved without pulling the team away from client recovery work",
    ],
    why: {
      intro: ["A company facing HITRUST for the first time does not need a bigger process. It needs someone who already knows which parts of the framework matter, what the assessor will ask for, and how to have the evidence ready when they ask."],
      points: [
        { lead: "One partner across both tracks.", text: "Com-Sec covers governance and technical security, so the same partner handled the HITRUST readiness and the web application penetration test." },
        { lead: "Evidence ready when it was asked for.", text: "Evidence was collected and organised to the assessor's standard throughout the cycle, not assembled in the final weeks." },
        { lead: "Continuity between cycles.", text: "Quarterly work between windows meant the control set stayed current and the next cycle began from a known position." },
        { lead: "Built around how the client works.", text: "The Midas team stayed focused on recovery work while the certification was delivered on time, twice." },
      ],
    },
    quote: {
      text: "HITRUST was new to us, and Com-Sec made it manageable. They told us plainly what was needed, kept the evidence organised through the year, and had everything ready for the assessor when it was asked for. We certified on time both years without pulling our team away from client work.",
      attribution: "Midas Recovery Services",
    },
    cta: {
      heading: "HITRUST without a compliance department",
      text: [
        "A HITRUST certification does not require a compliance department. It requires a clear read on what the framework asks for and a partner who will have the evidence ready before the assessor asks.",
        "If a client or a prospect has asked you for HITRUST and the request feels larger than your team, talk to Com-Sec.",
      ],
    },
  },

  farlinium: {
    client: "Farlinium",
    badge: "Services",
    tagline: "Professional and technology services",
    title: "The Security Team Behind the Customer Review",
    overview: [
      { label: "Industry", value: "Professional and technology services" },
      { label: "Services", value: "Managed IT, vCISO, SOC 2, customer assurance, security operations" },
      { label: "GRC platform", value: "Drata" },
      { label: "Audit partner", value: "Sensiba" },
      { label: "Engagement", value: "March 2024 to present" },
    ],
    summary: [
      "Farlinium needed to answer demanding customer security questions, including a review from a major healthcare enterprise, while running a distributed workforce and keeping SOC 2 current. Those requirements don't stay contained to one department. They show up in devices, travel policy, SSO, Google Workspace, employee practices, and business accounts.",
      "Com-Sec became the team behind the response. The engagement includes security questionnaire support, recurring security and compliance committee meetings, MDM work, travel VPN guidance, a working-from-hotel policy, SSO evaluation, business account data security review, and Google Workspace application review, on top of ongoing IT support.",
      "Instead of scrambling every time an enterprise customer sent a review, Farlinium built a standing program that could answer it.",
    ],
    challenge: [
      "Farlinium needed to answer demanding customer security questions while running a distributed workforce and maintaining SOC 2. Those requirements showed up everywhere: devices, travel, SSO, Google Workspace, employee practices, business accounts, and daily IT support.",
    ],
    approach: {
      intro: ["Com-Sec became the team behind the response. The engagement included enterprise security questionnaires, recurring security and compliance committee meetings, MDM work, travel VPN guidance, a working-from-hotel policy, SSO evaluation, business account data security review, Google Workspace application review, and ongoing IT support."],
    },
    results: [
      "Enterprise customer security questionnaires supported, including a major healthcare enterprise review",
      "Security and compliance committee meetings established as a recurring cadence",
      "MDM and SSO work advanced",
      "Travel and remote work guidance formalized",
      "Google Workspace and business account security reviewed",
      "Recurring IT support integrated with the security program",
    ],
    why: {
      intro: ["Com-Sec doesn't just complete the questionnaire. The team builds the controls, evidence, and daily practices that make the answers defensible when a customer's security team pushes back."],
    },
    quote: {
      text: "Com-Sec helps us handle demanding customer reviews because they are already involved in the systems, policies, and operating work behind our answers.",
      attribution: "Farlinium",
    },
    cta: {
      heading: "Answer the review with a program behind it",
      text: ["If every enterprise questionnaire becomes a company-wide project, talk to Com-Sec."],
    },
  },

  vgv: {
    client: "VGV",
    badge: "Services",
    tagline: "Professional services",
    title: "Strengthening Resilience While Maintaining SOC 2",
    overview: [
      { label: "Industry", value: "Professional services" },
      { label: "Services", value: "vCISO, SOC 2, managed IT, business continuity, incident response" },
      { label: "GRC platform", value: "Drata" },
      { label: "Audit partner", value: "Prescient" },
      { label: "Engagement", value: "June 2025 to present" },
    ],
    summary: [
      "VGV needed to maintain its SOC 2 program while improving the operational work behind resilience and daily IT: evidence renewal, business continuity, disaster recovery, incident response, and employee support, all competing for the same attention.",
      "Com-Sec oversees the program, guiding recurring evidence work, advancing business continuity and disaster recovery activities, supporting incident response preparation, and staying involved in IT operations.",
      "The engagement is moving VGV toward a program that can withstand both an audit and an actual operational disruption.",
    ],
    challenge: [
      "VGV needed to maintain its SOC 2 program while improving the operational work behind resilience and daily IT. Evidence renewal, business continuity, disaster recovery, incident response, and employee support all competed for attention.",
    ],
    approach: {
      intro: ["Com-Sec helped oversee the program, guide recurring evidence work, advance business continuity and disaster recovery activities, support incident response preparation, and stay involved in IT operations."],
    },
    results: [
      "SOC 2 evidence renewal supported",
      "Business continuity and disaster recovery work advanced",
      "Incident response activities supported",
      "Recurring IT support established",
      "vCISO guidance connected assurance and resilience work",
    ],
    why: {
      intro: ["Com-Sec prepares clients for more than the audit. The same team that maintains the controls also helps test whether the business can respond and recover."],
    },
    quote: {
      text: "Com-Sec helps us keep SOC 2 current while strengthening the resilience and IT processes behind it. The work feels connected instead of fragmented.",
      attribution: "VGV",
    },
    cta: {
      heading: "Compliance that holds up in a real disruption",
      text: ["If your compliance plan stops at the audit report, talk to Com-Sec."],
    },
  },
};
