// All site content. Numbers trace to the claim ledger in D:\cvbuilding\evidence\claim-ledger.md.
// Wording rules: plain headings, no slogans (D:\cvbuilding STYLE_GUIDE + memory).

export const SITE = "https://rairurairu.github.io";
export const CV = "/cv/TSANG_Cheuk_Nam_CV.pdf";
export const EMAIL = "cheuknam2004@gmail.com";
export const GITHUB = "https://github.com/rairurairu";

export const PERSON = {
  name: "Tony Tsang",
  legal: "TSANG Cheuk Nam",
  degree: "Industrial Engineering & Engineering Management + AI · HKUST",
  formal: "BEng in Industrial Engineering & Engineering Management, Extended Major in Artificial Intelligence · HKUST · Sep 2022 – Dec 2026",
  availability: "Internship now · Full-time from January 2027",
  win: "Hackathon track winner · 200+ participants",
  lede: "Final-year student at HKUST. My methodology for AI-native insurance won its track at the Hong Kong AI Summit hackathon, and I built the complete system with Claude Code and Codex, which write about 95% of my code.",
};

export const COURSES = {
  MATH4432: "Statistical Machine Learning",
  IEDA4000I: "Generative AI and LLMs for Operations Research",
  IEDA4000F: "Deep Learning for Decision Analytics",
  IEDA3560: "Predictive Analytics",
  IEDA3010: "Prescriptive Analytics",
  IEDA3250: "Stochastic Models",
  IEDA4130: "System Simulation",
  IEDA4000H: "Optimization in Financial Engineering",
  IEDA3460: "Demand and Supply Analytics",
  IEDA3300: "Industrial Data Systems",
};
export const COURSE_ORDER = ["MATH4432", "IEDA4000I", "IEDA4000F", "IEDA3560", "IEDA3010", "IEDA3250", "IEDA4130", "IEDA4000H", "IEDA3460", "IEDA3300"];

export const AWARD = {
  title: "Winner, “Reinventing Insurance for an AI-native World” track",
  event: "Hong Kong AI Summit: BUILD ACROSS Hackathon",
  meta: "Oct 2026 · Track sponsored by bolttech",
  participants: 200,
  role: "Team Fable 6.7 won the track with my original methodology. I mapped the long-standing pain points of traditional insurance and answered them with AI-native insurance: customers choose the monthly price and AI builds the cover, so insurance can reach the customers traditional insurers cannot serve at a profit. I then built the complete system.",
  href: "/work/microinsurance/",
};

export const ROLES = ["AI application engineer", "AI product and solutions", "AI-native transformation"];

export const SKILLS = [
  ["AI & LLMs", ["Evals and guardrails", "Structured outputs", "Model routing", "MCP servers", "Human-in-the-loop", "Harness engineering", "Context engineering"]],
  ["Agentic coding", ["Claude Code", "Codex", "Multi-agent orchestration", "Spec-driven development"]],
  ["Software", ["Python", "TypeScript", "React", "Rust", "PostgreSQL", "REST APIs", "Docker", "Linux"]],
  ["Languages", ["Cantonese (native)", "English (fluent)", "Mandarin (fluent)"]],
];

export const MORE = [
  { t: "Self-Hosted Personal AI Agent", d: "An always-on AI agent and a team of coding agents on a home server, which I direct from my phone, so research and builds keep going around the clock. Rules drawn from real failures keep them building only what was asked." },
  { t: "9UPPER Online", d: "A multilingual real-time web game I built with AI coding agents and grew through SEO, GEO and AEO to over 500 visitors a day. It gets about 600 Google clicks a month and ranks in Google's top five on average, and ChatGPT and Claude search recommend it.", href: "https://9upper-online.com", link: "9upper-online.com" },
];

// Case studies. `stat` drives the home card; `stats` the case-study header.
export const PROJECTS = [
  {
    slug: "microinsurance",
    title: "Budget-Based Microinsurance",
    meta: "Oct 2026 · Hackathon track winner",
    summary: "My original methodology lets customers choose the monthly price while AI builds the cover, answering long-standing pain points for insurers, partners and customers.",
    stat: { text: "Winner", l: "“Reinventing Insurance for an AI-native World” track, 200+ participants" },
    courses: ["IEDA3250", "IEDA3010"],
    tech: ["Rust", "TypeScript", "Python", "Claude"],
    desc: "An AI-native redesign of insurance that answers long-standing pain points for insurers, partners and customers: customers choose the price and AI builds the cover. My methodology won its hackathon track, and I built the complete working system.",
    facts: [["Role", "Product owner and architect"], ["Built with", "Rust, TypeScript, Python, Claude"], ["Award", "Winner, “Reinventing Insurance for an AI-native World” track"]],
    stats: [
      { text: "Winner", l: "“Reinventing Insurance for an AI-native World” track, among 200+ participants" },
      { n: 1.6, d: 1, u: "s", l: "to settle automatic payouts for 1 million policies, against a 5-second target" },
    ],
    sections: [
      { h: "The problem", p: [
        "Small insurance policies lose money because each one needs per-customer work, and for a small policy that work costs more than the premium. So the customers who need small, flexible cover most are the ones traditional insurance cannot serve.",
        "I mapped the long-standing pain points of traditional insurance across insurers, partners and customers, and designed the methodology to answer them.",
      ] },
      { h: "The pain points it answers", list: [
        ["For insurers", "Agents cost too much to reach young, low-income and gig customers, insurers hear from customers once or twice a year, and they can only pay for a loss after it happens. The design sells inside apps people already use, keeps in touch every month, and prevents losses with personal prevention tasks."],
        ["For partners", "Spare capacity that goes unsold. It becomes rewards that bring them paying customers, and they can offer protection under the insurer's licence."],
        ["For customers", "Annual premiums, fine print and slow claims. Cover is priced month to month, covers what they care about, is explained in one plain sentence and pays automatically when an event is confirmed."],
      ] },
      { h: "The product", p: [
        "The customer picks a fixed monthly price, the way people buy a ChatGPT or Claude plan, and AI builds a personal mix of cover around it and rebuilds it every month as their life changes.",
        "Prevention is part of the product. AI sets each customer a personal prevention task for something coming up in their month and checks the photo they send back, and a partner funds the reward.",
      ], shots: true },
      { h: "What I decided", list: [
        ["Put AI where it pays", "I designed the AI components that take routine per-customer work off insurance agents and claims handlers: proposal forms, plain-language explanations, prevention tasks, photo checks and claim assessment."],
        ["Measure AI on quality and cost", "Every AI component has evals, and each task goes to the cheapest model that passes them: Claude Haiku by default, Sonnet where it needs to read images."],
        ["Stop the claims model anchoring", "The claims model never sees the amount claimed, so it cannot anchor on it."],
        ["Charge only for usable cover", "As product owner I set the product rules, including never charging for cover a customer cannot use."],
      ] },
      { h: "Result", p: [
        "A complete working system: the customer app, partner and operations consoles, the economics an insurer needs to adopt it, and a second market (Taiwan) added through configuration alone.",
      ] },
      { h: "The hackathon", p: [
        "At the Hong Kong AI Summit: BUILD ACROSS Hackathon (200+ participants), team Fable 6.7 won the “Reinventing Insurance for an AI-native World” track, sponsored by bolttech, with my methodology. I then built this complete system.",
      ] },
    ],
  },
  {
    slug: "brand-benchmark",
    title: "LLM Brand Recommendation Benchmark",
    meta: "Sep 2026 · LLM evaluation",
    summary: "I designed an AI-run pipeline that measures which brands AI assistants recommend, with every test category set at the level customers actually shop for.",
    stat: { n: 92.5, d: 1, u: "%", l: "of AI recommendations matched verified brands, across 51 categories" },
    courses: ["IEDA4000I", "IEDA3300"],
    tech: ["Python", "SQLite", "LLM APIs"],
    desc: "I designed an AI-run pipeline that measures which brands AI assistants recommend. Across 51 product categories, the assistant's top-ten recommendations matched verified brands 92.5% of the time.",
    facts: [["Role", "System designer"], ["Built with", "Python, SQLite, LLM APIs"]],
    stats: [
      { n: 92.5, d: 1, u: "%", l: "of the AI assistant's top-ten brand recommendations matched verified brands, across 51 product categories" },
    ],
    sections: [
      { h: "The problem", p: [
        "More customers now ask AI assistants which brands to buy, so what those assistants recommend matters to every brand. Marketers call it AI visibility. Measuring it needs two things that are hard to get right: a verified map of which brands belong to which product category, and a fair way to test the assistant's answers against it.",
      ] },
      { h: "What I decided", list: [
        ["Organise the tests the way customers shop", "I built a five-level category hierarchy from a single product taxonomy and set every test at the level a customer actually shops for. Each category has clear boundaries, so results compare cleanly, renaming a category never breaks its data, and new categories fit in without rework."],
        ["Redesign when the first approach falls short", "My first approach started from well-known brands and merged several product catalogues, which left hundreds of overlapping categories unresolved. Rebuilding it around one taxonomy is what made the levels possible."],
        ["Treat answer variance as part of the test", "The same question can score differently from one conversation to the next. Each test runs on a fixed version of the data in a fresh conversation, and every answer is stored with the reason it was matched."],
      ] },
      { h: "Result", p: [
        "A verified category–brand database and a reusable test pipeline.",
      ] },
    ],
  },
  {
    slug: "llm-optimization",
    title: "Using LLMs for Optimization",
    meta: "2026 · Final Year Project",
    summary: "As Experiment & Benchmarking Lead, I led the experiments behind a reliable, low-cost way for LLMs to solve business routing problems.",
    stat: { text: "Within 1%", l: "of a dedicated solver's best, with a valid solution in every trial" },
    courses: ["IEDA4000I", "IEDA3010"],
    tech: ["Python", "Pyomo", "DeepSeek", "MiniMax"],
    desc: "Final Year Project, Experiment & Benchmarking Lead. I led the experiments showing that an LLM solves business optimization problems most cheaply and reliably when it plans and a proven optimizer does the exact work.",
    facts: [["Role", "Experiment & Benchmarking Lead"], ["Models", "DeepSeek, MiniMax"], ["Built with", "Python, Pyomo"]],
    stats: [
      { text: "Within 1%", l: "of a dedicated solver's best on average, with a valid solution in every trial" },
    ],
    sections: [
      { h: "The problem", p: [
        "Business optimization problems such as delivery routing need exact answers. Asking an LLM to write the whole optimization program is expensive and unreliable: outputs get cut off, and some results look valid but are not.",
      ] },
      { h: "What I led", list: [
        ["A fair benchmark across prompts and providers", "I designed the experiments and built the benchmark: five prompting strategies on two model providers, run on the same problems and checked the same way."],
        ["An outside test to rule out overfitting", "The planner approach found a valid routing solution in every trial, on average within 1% of a dedicated solver's best. On public benchmark tests it matched the solver, so the results held beyond the project's own test cases."],
        ["Let the AI plan, let the optimizer solve", "I had the model write a short plan for a standard optimizer to solve. It matched the solution quality of having the model write the whole program, at a fraction of the cost."],
        ["Find the real cause before blaming the model", "One apparent model failure was a valid, time-limited solution mislabelled as infeasible. Correcting how results are read fixed it."],
      ] },
      { h: "Result", p: [
        "I catalogued the ways LLM-generated optimization programs fail and turned them into design rules.",
      ] },
    ],
  },
  {
    slug: "pairup",
    title: "PairUp",
    meta: "Oct 2026 · AI agents · MCP server",
    summary: "A peer-to-peer marketplace that AI agents run for people. I decided agents should not haggle: an open-source pricing rule settles every deal, so no model can be talked into revealing a limit.",
    courses: ["IEDA4000I", "MATH4432"],
    tech: ["MCP", "TypeScript", "Rust", "AWS"],
    desc: "A peer-to-peer marketplace that AI agents run for people, built as a Model Context Protocol (MCP) server any compatible agent can connect to and live on AWS with Amazon Bedrock. An open-source pricing rule I designed settles every deal inside both people's private limits.",
    // Hiring-manager review, 28 Oct 2026: link only pairing-core until the PairUp repo README drops its Alexa+ and "prototype" wording.
    facts: [["Role", "Product owner and architect"], ["Built with", "TypeScript, Rust, PostgreSQL, Amazon Bedrock"], ["Pricing rule", ["pairing-core on GitHub", "https://github.com/rairurairu/pairing-core"]]],
    // No stat card until there is a measured result (the "Zero model calls" card was true by construction).
    stats: [],
    sections: [
      { h: "The problem", p: [
        "Buying from or hiring another person still runs on manual work: writing a listing, searching, haggling in chat and arranging a hand-off, often on a platform that adds its own fees.",
        "I redesigned that work for AI agents acting for each person. A person's standing need is as easy to find as a seller's listing, so matching starts from either side, for goods and for services such as errands and one-time jobs. The agent finds the match, settles the price and asks both people for a final yes.",
      ] },
      { h: "What I decided", list: [
        ["Agents do not haggle", "Turn-by-turn bargaining costs model calls and seconds on every deal, and a model can be talked into revealing a limit. One open pricing rule settles every deal inside both people's private limits, and the seller's minimum never shows through the price. A buyer gets one offer below the asking price per listing, so asking again cannot find the minimum. I published the rule as an open-source library."],
        ["Let the system learn, with a control group", "A nightly model learns which matches people accept. It replaces the current ranking only if it does better on newer outcomes; one request in ten stays on the old ranking as a live A/B control, and the new ranking rolls back automatically if it falls behind."],
        ["Search by meaning, inside hard limits", "Semantic and keyword search find matches by meaning, but only among posts that already fit on price, condition and schedule, which fixed rules check first."],
        ["Agents are the first users", "PairUp is a Model Context Protocol (MCP) server, so any compatible AI agent can connect and use it without a custom integration. It ships with an agent skill and a machine-readable guide, so an agent learns the marketplace from the server itself."],
      ] },
      { h: "Result", p: [
        "A complete working service, live on AWS with Amazon Bedrock. Its source and its pricing rule are published as open-source code.",
      ] },
    ],
  },
  {
    // Dossier: D:\cvbuilding\evidence\projects\ai-agent-collusion-research.md. No sprint result yet: no result line.
    slug: "agent-collusion",
    title: "AI Agent Collusion Research",
    meta: "Oct 2026 · AI agent safety research",
    summary: "I originated and led a pre-registered study, across four LLMs, of AI agents that formed a cartel over chat. Closing the chat ended the cartel, and in all four models, agents then claimed covert signalling that never happened.",
    courses: ["IEDA4000I", "MATH4432"],
    tech: ["Python", "vLLM", "LLM APIs"],
    desc: "I originated and led a pre-registered study, across four LLMs, of AI agents that formed a cartel over chat, for Apart Research's AI Collusion Research Sprint. Closing the chat ended the cartel. Three of four models kept trying a private channel that was secretly dead, and in all four, agents claimed covert signalling that never happened.",
    facts: [["Role", "Research lead"], ["Models", "GPT, Claude, Qwen, Gemma (two hosted, two open-weight)"], ["Built with", "Python, vLLM, LLM APIs"], ["Report", ["Closing the Chat Ended the Cartel (PDF)", "https://github.com/adamchoi787/collusion-carriers/blob/main/paper/paper.pdf"]]],
    // No big-number card until the sprint result is announced; "3 of 4" is an exploratory, self-measured count (corrections 15 Oct, 16 Oct).
    stats: [],
    sections: [
      { h: "The question", p: [
        "AI agents that set prices or bid in markets can collude, and the most direct fix is to close the channel they talk through. The standard objection is that they will just move to something harder to watch: when they act, what values they report, the order of their tool calls. If that is true, closing a channel hides collusion without stopping it.",
        "I turned that objection into a test with a clear answer: let AI agents form a cartel, take their words away, and measure where the coordination goes.",
      ] },
      { h: "What I decided", list: [
        ["Lie to the agents about what is real", "I set what agents are told about their channels separately from what the system actually does. In the main test, agents get a private-message tool that secretly goes nowhere and are never told about the live channels, so any collusion that gets through shows where agents look on their own. The same split runs through every study in the research plan, for monitoring, identity and roles too."],
        ["Measure collusion as information", "I framed collusion as information passing between agents. Every channel then has a known capacity and honest play reads exactly zero, so an auditor can tell “nothing moved” from “it moved somewhere nobody looked”."],
        ["Change the design after the pilot", "My first design tested each hidden channel with no chat at all. The pilot showed agents never use those channels without talking first, so that design would have read zero no matter what. I moved the study to a cartel that forms over chat and then loses it."],
        ["Separate “can't” from “won't”", "I added a control that hands agents a code for one closed-off channel. They used it at once and the measures caught it, so the agents could collude this way and simply never invented a code on their own."],
      ] },
      { h: "Findings", list: [
        ["Closing the chat worked", "In all four models, no detectable information moved into the actions agents still controlled, so closing an explicit channel can work."],
        ["A decoy channel draws agents in", "Three of four models kept trying the dead private-message tool, and none turned to the live channels nobody mentioned. A planted channel shows where agents go looking."],
        ["Agents' own accounts were false", "In all four models, agents claimed afterwards that they had kept signalling covertly, while the logs show they had not. Audits of agents have to rest on their logged behaviour."],
      ] },
      { h: "Result", p: [
        "A research report, “Closing the Chat Ended the Cartel: Four LLMs Did Not Reroute Collusion into Action Channels”, for Apart Research's AI Collusion Research Sprint, with the test market, the measures and every game log published as open source.",
      ] },
    ],
  },
  {
    slug: "polymarket-models",
    title: "Polymarket Market-Making & Forecasting Models",
    meta: "Aug 2026 – Present · Quantitative research",
    summary: "Forecasting models that beat the standard Elo rating, then market-making research on Polymarket. I direct AI agents that run the data work and simulations.",
    courses: ["MATH4432", "IEDA4130", "IEDA4000H"],
    tech: ["Python"],
    desc: "AI-agent-driven quantitative research: forecasting models that beat the standard Elo rating, then market-making research on Polymarket.",
    facts: [["Role", "Researcher and system designer"], ["Built with", "Python"]],
    stats: [
      { text: "Beat Elo", l: "forecasting models beat the standard Elo rating on matches they had never seen" },
    ],
    sections: [
      { h: "From forecasting to market making", p: [
        "The research began with football match forecasting. The models beat the standard Elo rating on matches they had never seen. I then moved the research to market making on Polymarket, where the question becomes what price is safe to quote. AI coding agents do the data collection, modelling and simulations; I decide what is worth testing.",
      ] },
      { h: "What I decided", list: [
        ["Size the risk first", "I replayed past order flow and found sell quotes were hit far more often than buy quotes: the main risk a market maker has to price in."],
        ["Retire what the data says can't work", "In simulated trading, a forecasting signal showed no real advantage. I stopped tuning it and redirected the research."],
        ["Withdraw a result I couldn't verify", "A promising-looking replay was withdrawn when the market conditions behind it could not be confirmed from the data."],
      ] },
    ],
  },
];

export const PAGES = [
  { id: "home", path: "/", title: "Tony Tsang (TSANG Cheuk Nam) · Industrial Engineering & Engineering Management + AI · HKUST", desc: "Final-year HKUST Industrial Engineering & Engineering Management + AI student. Hackathon track winner. Projects in AI systems, LLM evaluation and optimization. Internship now; full-time from January 2027." },
  ...PROJECTS.map(p => ({ id: p.slug, path: `/work/${p.slug}/`, title: `${p.title} · Tony Tsang`, desc: p.desc })),
  { id: "404", path: "/404.html", title: "Page not found · Tony Tsang", desc: "Page not found.", noindex: true },
];
