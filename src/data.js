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
  ["AI & LLMs", ["Evals and guardrails", "Structured outputs", "Model routing", "Human-in-the-loop", "Harness engineering", "Context engineering"]],
  ["Agentic coding", ["Claude Code", "Codex", "Multi-agent orchestration", "Spec-driven development"]],
  ["Software", ["Python", "TypeScript", "React", "Rust", "PostgreSQL", "REST APIs", "Docker", "Linux"]],
  ["Languages", ["Cantonese (native)", "English (fluent)", "Mandarin (fluent)"]],
];

export const MORE = [
  { t: "Self-Hosted Personal AI Agent", d: "An always-on personal AI agent that directs a team of coding agents, with rules drawn from real failures that stop agents building what nobody asked for." },
  { t: "9UPPER Online", d: "A multilingual real-time web game I built with AI coding agents and grew through SEO, GEO and AEO to over 500 visitors a day. It gets about 600 Google clicks a month and ranks in Google's top five on average, and ChatGPT and Claude search recommend it.", href: "https://9upper-online.com", link: "9upper-online.com" },
];

// Case studies. `stat` drives the home card; `stats` the case-study header.
export const PROJECTS = [
  {
    slug: "microinsurance",
    title: "Budget-Based Microinsurance",
    meta: "Oct 2026 · Hackathon track winner",
    summary: "My original methodology answers the long-standing pain points of traditional insurance: customers choose the monthly price and AI builds the cover.",
    stat: { text: "Winner", l: "“Reinventing Insurance for an AI-native World” track, 200+ participants" },
    courses: ["IEDA3250", "IEDA3010"],
    tech: ["Rust", "TypeScript", "Python", "Claude"],
    desc: "An AI-native redesign of insurance that makes it much cheaper and flexible month to month: customers choose the price and AI builds the cover. My methodology won its hackathon track, and I built the complete working system.",
    facts: [["Role", "Product owner and architect"], ["Built with", "Rust, TypeScript, Python, Claude"], ["Award", "Winner, “Reinventing Insurance for an AI-native World” track"]],
    stats: [
      { text: "Winner", l: "“Reinventing Insurance for an AI-native World” track, among 200+ participants" },
      { n: 1.6, d: 1, u: "s", l: "to settle automatic payouts for 1 million policies, against a 5-second target" },
    ],
    sections: [
      { h: "The problem", p: [
        "Small insurance policies lose money because each one needs per-customer work, and for a small policy that work costs more than the premium. So the customers who need small, flexible cover most are the ones traditional insurance cannot serve.",
        "I mapped the long-standing pain points of traditional insurance across insurers, partners and customers, and designed the methodology so that every one of them is answered.",
      ] },
      { h: "The product", p: [
        "The customer picks a fixed monthly price, the way people buy a ChatGPT or Claude plan, and AI builds a personal mix of cover around it and rebuilds it every month as their life changes. Event covers pay automatically once the event is publicly confirmed, with no claim form.",
        "Prevention is part of the product. AI sets each customer a personal prevention task for something coming up in their month and checks the photo they send back, and partners reward it from their spare capacity. Customers get value even in months with no loss, and partners turn unused capacity into paying visits.",
      ], shots: true },
      { h: "What I decided", list: [
        ["Put AI where it pays", "I designed the AI components that take routine per-customer work off insurance agents and claims handlers: proposal forms, plain-language explanations, prevention tasks, photo checks and claim assessment."],
        ["Decide where AI stops", "AI recommends. Fixed rules set every price and payout, small claims are paid straight through only when every guardrail passes, and only a person can refuse a claim."],
        ["Make every AI component fail safe", "Each component returns a checked, structured answer with a saved fallback, and I tested it with deliberately bad model replies to prove it falls back safely."],
        ["Use the smallest model that passes", "Each task is routed to the cheapest model that passes its evals: Claude Haiku by default, Sonnet where it needs to read images."],
        ["Build fairness in", "The model never sees protected attributes, and the claims model never sees the amount claimed, so it cannot anchor on it."],
        ["Own the product rules", "As product owner I set more than half of its business rules, including no reward for not claiming and never charging for cover a customer cannot use."],
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
    summary: "I designed an AI-run pipeline that measures which brands AI assistants recommend in each product category.",
    courses: ["IEDA4000I", "IEDA3300"],
    tech: ["Python", "SQLite", "LLM APIs"],
    desc: "I designed an AI-run pipeline that measures which brands AI assistants recommend and checks every answer against verified brand lists.",
    facts: [["Role", "System designer"], ["Built with", "Python, SQLite, LLM APIs"]],
    stats: [],
    sections: [
      { h: "The problem", p: [
        "More customers now ask AI assistants which brands to buy, so what those assistants recommend matters to every brand. Marketers call it AI visibility. Measuring it needs two things that are hard to get right: a verified map of which brands belong to which product category, and a fair way to test the assistant's answers against it.",
      ] },
      { h: "What I decided", list: [
        ["Redesign when the first approach falls short", "My first approach started from well-known brands and merged several product catalogues, and it validated only one category. I redesigned the method to take its categories from a single product taxonomy, and every category but one then passed against verified brand lists."],
        ["Fix the reference lists first", "Most failed checks came from incomplete reference lists that marked real brands as wrong, so I added verified brands to the lists."],
        ["Treat answer variance as part of the test", "The same question can score differently from one conversation to the next. Each test runs on a fixed version of the data in a fresh conversation, and every answer is stored with the reason it was matched."],
        ["Don't let AI grade itself", "AI answers count only as leads until they are checked against verified brand lists."],
      ] },
      { h: "Result", p: [
        "A verified category–brand database and a reusable pipeline that extends to new categories without rework.",
      ] },
    ],
  },
  {
    slug: "llm-optimization",
    title: "Using LLMs for Optimization",
    meta: "2026 · Final Year Project",
    summary: "As Experiment & Benchmarking Lead, I showed an LLM works best as a planner inside a checked workflow.",
    courses: ["IEDA4000I", "IEDA3010"],
    tech: ["Python", "Pyomo", "DeepSeek", "MiniMax"],
    desc: "Final Year Project, Experiment & Benchmarking Lead. I showed that an LLM handles business optimization most cheaply and reliably when it plans and a proven optimizer does the exact work.",
    facts: [["Role", "Experiment & Benchmarking Lead"], ["Models", "DeepSeek, MiniMax"], ["Built with", "Python, Pyomo"]],
    stats: [],
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
        "I catalogued how LLM-generated optimization fails and turned the failure classes into design rules the next project can build on.",
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
      { n: 4.5, d: 1, u: "×", l: "more often sell quotes were hit than buy quotes: the risk to price before quoting" },
    ],
    viz: { rows: [["Sell quotes hit", 100, "4.5×", false], ["Buy quotes hit", 22, "1×", true]], cap: "How often prices hit each side, in replayed orders" },
    sections: [
      { h: "From forecasting to market making", p: [
        "The research began with football match forecasting. The models beat the standard Elo rating on matches they had never seen. I then moved the research to market making on Polymarket, where the question changes from “who will win?” to “at what price is it safe to quote?”. AI coding agents do the data collection, modelling and simulations; I decide what is worth testing.",
      ], viz: true },
      { h: "What I decided", list: [
        ["Size the risk before quoting", "Before quoting, I replayed past order flow. Prices hit sell quotes about 4.5 times as often as buy quotes: the main risk a market maker has to price in."],
        ["Retire what the data says can't work", "In simulated trading, a forecasting signal showed no edge, however strong its predicted advantage. I stopped tuning it and redirected the research, before any money was at risk."],
        ["Withdraw a result I couldn't verify", "A promising-looking replay was withdrawn when the market conditions behind it could not be confirmed from the data."],
        ["Keep a person in charge of real-world actions", "Agents build and test the trading code, but only a person can start anything that trades, with size and loss limits."],
      ] },
    ],
  },
];

export const PAGES = [
  { id: "home", path: "/", title: "Tony Tsang (TSANG Cheuk Nam) · Industrial Engineering & Engineering Management + AI · HKUST", desc: "Final-year HKUST Industrial Engineering & Engineering Management + AI student. Hackathon track winner. Projects in AI systems, LLM evaluation and optimization. Internship now; full-time from January 2027." },
  ...PROJECTS.map(p => ({ id: p.slug, path: `/work/${p.slug}/`, title: `${p.title} · Tony Tsang`, desc: p.desc })),
  { id: "404", path: "/404.html", title: "Page not found · Tony Tsang", desc: "Page not found.", noindex: true },
];
