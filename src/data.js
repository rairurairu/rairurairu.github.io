// All site content. Numbers trace to the claim ledger in D:\cvbuilding\evidence\claim-ledger.md.
// Wording rules: plain headings, no slogans (D:\cvbuilding STYLE_GUIDE + memory).

export const SITE = "https://rairurairu.github.io";
export const CV = "/cv/TSANG_Cheuk_Nam_CV.pdf";
export const EMAIL = "rairu0811@gmail.com";
export const GITHUB = "https://github.com/rairurairu";

export const PERSON = {
  name: "Tony Tsang",
  legal: "TSANG Cheuk Nam",
  degree: "Industrial Engineering & Engineering Management + AI · HKUST",
  formal: "BEng in Industrial Engineering & Engineering Management, Extended Major in Artificial Intelligence · HKUST · Sep 2022 – Dec 2026 (expected)",
  availability: "Internship now · Full-time from January 2027",
  lede: "Final-year student. I design AI systems and build them with Claude Code and Codex, which write about 95% of the code.",
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
export const COURSE_ROWS = [
  ["MATH4432", "IEDA4000I", "IEDA4000F", "IEDA3560", "IEDA3010"],
  ["IEDA3250", "IEDA4130", "IEDA4000H", "IEDA3460", "IEDA3300"],
];

export const AWARD = {
  title: "Winner, “Reinventing Insurance for an AI-native World” track",
  event: "Hong Kong AI Summit: BUILD ACROSS Hackathon",
  meta: "Oct 2026 · 200+ participants · Track sponsored by bolttech",
  role: "With team Fable 6.7, I originated the winning concept and produced the 92-second pitch film by directing Claude Code. I then built the complete system in four days.",
  href: "/work/microinsurance/",
};

export const ROLES = ["AI engineer / AI application engineer", "AI product and solutions", "AI-native transformation"];

export const SKILLS = [
  ["AI & LLMs", ["LLM components", "Evals and guardrails", "Structured outputs", "Model routing", "Human-in-the-loop", "Harness engineering", "Context engineering"]],
  ["Agentic coding", ["Claude Code", "Codex", "Multi-agent orchestration", "Spec-driven development"]],
  ["Software", ["Python", "TypeScript", "React", "Rust", "PostgreSQL", "REST APIs", "Docker", "Linux", "Git"]],
  ["Languages", ["Cantonese (native)", "English (fluent)", "Mandarin (fluent)"]],
];

export const MORE = [
  { t: "Self-Hosted Personal AI Agent", d: "Runs a personal AI agent 24/7 on home hardware and a team of coding agents, with eight rules, each from a real failure, that stop agents building what nobody asked for." },
  { t: "9UPPER Online", d: "Built a multilingual real-time game platform with AI coding agents and grew it through SEO, GEO and AEO to 1,789 Google clicks in three months; ChatGPT and Claude search now recommend it.", href: "https://9upper-online.com", link: "9upper-online.com" },
];

// Case studies. `stat` drives the home card; `stats` the case-study header.
export const PROJECTS = [
  {
    slug: "microinsurance",
    title: "Budget-Based Microinsurance",
    meta: "Oct 2026 · Hackathon track winner",
    summary: "Insurance redesigned so customers choose the monthly price and AI builds the cover, answering all 21 pain points of traditional insurance.",
    stat: { n: 4, u: "days", l: "from the winning concept to a complete working system" },
    courses: ["IEDA3250", "IEDA3010"],
    tech: ["Rust", "TypeScript", "Python", "Claude"],
    desc: "An AI-native redesign of insurance: customers choose the price and AI builds the cover. A winning hackathon concept, built into a complete system in four days.",
    facts: [["Role", "Product owner and architect"], ["Built with", "Rust, TypeScript, Python, Claude"], ["Award", "Winner, “Reinventing Insurance for an AI-native World” track"]],
    stats: [
      { n: 4, u: "days", l: "from the winning concept to a complete working system" },
      { n: 21, u: "of 21", l: "pain points of traditional insurance answered" },
      { n: 1.6, d: 1, u: "s", l: "to settle automatic payouts for 1 million policies, against a 5-second target" },
    ],
    sections: [
      { h: "The problem", p: [
        "Small insurance fails on cost, not demand. Every policy needs per-customer work (proposal forms, explanations, prevention advice, claims handling), and at a few dollars a month that work costs more than the premium. So people who need small, flexible cover go without it.",
        "I mapped 21 pain points of traditional insurance across insurers, partners and customers, and set one rule for the redesign: every one of them had to be answered.",
      ] },
      { h: "The product", p: [
        "Instead of picking a cover and getting a price, the customer picks a fixed monthly price, starting at HK$40, and AI builds a personal mix of cover around it, re-building it as life changes. Some covers pay out automatically on a published public trigger, with no claim form.",
        "Prevention is part of the product. AI sets each customer a personal prevention task for something coming up in their month and checks the photo they send back, and partners reward it from their spare capacity. Customers get value even in months with no loss, and partners turn unused capacity into paying visits.",
      ], shots: true },
      { h: "What I decided", list: [
        ["Put AI where it pays", "I designed 9 AI components to take routine per-customer work off agents and claims handlers: proposal forms, plain-language explanations, prevention tasks, photo checks and claim assessment. That is what lets cover start at HK$40 a month."],
        ["Decide where AI stops", "AI recommends. Fixed rules set every price and payout, small claims are paid straight through only when every guardrail passes, and only a person can refuse a claim."],
        ["Make every AI component fail safe", "Each component returns a checked, structured answer with a saved fallback, and 36 evals, including deliberately bad model replies, prove it falls back safely. The evals run offline and against the live model."],
        ["Use the smallest model that passes", "Each task is routed to the cheapest model that passes its evals: Claude Haiku by default, Sonnet where it needs to read images."],
        ["Build fairness in", "The model never sees protected attributes, and the claims model never sees the amount claimed, so it cannot anchor on it."],
        ["Own the product rules", "As product owner I set 34 of its 59 business rules. For example, there is no reward for not claiming, and a customer never pays for cover they cannot use."],
      ] },
      { h: "Result", p: [
        "A complete working system in four days: the customer app, partner and operations consoles, the economics an insurer needs to adopt it, and a second market (Taiwan) added as configuration, not code. About 330 automated tests check it across three languages, and it settles automatic payouts for 1 million policies in 1.6 seconds, against a 5-second target.",
        "I set the method, decided who decides what (AI, rules or a person) and made the product decisions. Claude Code wrote most of the code under my direction.",
      ] },
      { h: "The hackathon", p: [
        "At the Hong Kong AI Summit: BUILD ACROSS Hackathon (200+ participants), team Fable 6.7 won the “Reinventing Insurance for an AI-native World” track, sponsored by bolttech. I originated the winning concept and produced the 92-second pitch film by directing Claude Code. This system is my own complete build of that concept.",
      ] },
    ],
  },
  {
    slug: "brand-benchmark",
    title: "LLM Brand Recommendation Benchmark",
    meta: "Sep 2026 · HKUST AI Observatory",
    summary: "An AI-run benchmark of which brands AI assistants recommend in each product category.",
    stat: { n: 50, u: "of 51", l: "categories validated after the redesign; the first approach validated one" },
    courses: ["IEDA4000I", "IEDA3300"],
    tech: ["Python", "SQLite", "LLM APIs"],
    desc: "An AI-run benchmark of which brands AI assistants recommend. After a redesign, 50 of 51 categories validated within two days.",
    facts: [["Role", "Researcher and system designer"], ["For", "HKUST's AI Observatory"], ["Built with", "Python, SQLite, LLM APIs"]],
    stats: [
      { n: 50, u: "of 51", l: "categories validated within two days of the redesign; the first approach validated one" },
      { n: 13, u: "of 14", l: "failures turned into passes by fixing incomplete reference data, not the model" },
      { text: "⅔", u: "", l: "less evaluation cost, with AI answers counted only as leads until verified" },
    ],
    viz: { rows: [["First approach", 3, "1", true], ["After redesign", 98, "50 of 51", false]], cap: "Categories validated against verified brand lists" },
    sections: [
      { h: "The problem", p: [
        "More customers now ask AI assistants which brands to buy, so what those assistants recommend matters to every brand. Marketers call it AI visibility. Measuring it needs two things that are hard to get right: a verified map of which brands belong to which product category, and a fair way to test the assistant's answers against it.",
      ], viz: true },
      { h: "What I decided", list: [
        ["Redesign when the first approach stalls", "My first approach, which started from well-known brands and merged several product catalogues, validated one category. I redesigned the method around a single product taxonomy, with categories taken from the taxonomy rather than from famous brands. Within two days, 50 of 51 categories validated against verified brand lists."],
        ["Fix the ground truth, not the model", "Most failures came from incomplete reference brand lists, not from AI error. Completing the lists turned 13 of 14 failures into passes."],
        ["Treat answer variance as part of the test", "The same question can score differently from one conversation to the next. Each test runs on a fixed version of the data in a fresh conversation, and every answer is stored with the reason it was matched."],
        ["Cut cost without fooling myself", "I cut evaluation cost by two thirds, and AI answers count only as leads until they are independently verified. I report the first-attempt pass rate (37 of 51) as the clean measure."],
        ["Turn messy answers into clean data", "Product lines map to their brands, aliases and parent brands are resolved, and nothing is counted twice."],
      ] },
      { h: "Result", p: [
        "A database of 943 verified category–brand links across 480 brands, and a reusable pipeline that extends toward 1,000 categories without rework.",
      ] },
    ],
  },
  {
    slug: "llm-optimization",
    title: "Using LLMs for Optimization",
    meta: "2026 · Final Year Project",
    summary: "As Experiment & Benchmarking Lead, showed an LLM works best as a planner inside a checked workflow.",
    stat: { n: 83, pre: "−", u: "%", l: "AI cost at the same solution quality" },
    courses: ["IEDA4000I", "IEDA3010"],
    tech: ["Python", "Pyomo", "DeepSeek", "MiniMax"],
    desc: "Final Year Project, Experiment & Benchmarking Lead. Letting the LLM plan instead of writing the whole program cut AI cost 83% at the same solution quality.",
    facts: [["Role", "Experiment & Benchmarking Lead"], ["Models", "DeepSeek, MiniMax"], ["Built with", "Python, Pyomo"]],
    stats: [
      { n: 83, pre: "−", u: "%", l: "AI cost at the same solution quality (0.72% vs 0.75% from optimal)" },
      { n: 100, u: "%", l: "valid solutions in every trial on the benchmark suite" },
      { n: 0.07, d: 2, u: "%", l: "average gap to optimal on a standard external benchmark" },
    ],
    viz: { rows: [["Writes the program", 100, "100%", true], ["Plans only", 17, "17%", false]], cap: "AI cost per solve, at the same solution quality (0.75% vs 0.72% from optimal)" },
    sections: [
      { h: "The problem", p: [
        "Can large language models solve hard business optimization problems, such as planning delivery routes, reliably and cheaply? Asking an LLM to write a whole optimization program is expensive and brittle: long outputs, partial answers, and results that look valid but are not.",
      ], viz: true },
      { h: "What I led", list: [
        ["A fair benchmark across prompts and providers", "I designed the experiments and built the benchmark: five prompting strategies on two model providers, run on the same problems and checked the same way. On the main suite, DeepSeek produced valid solutions every time and MiniMax 83% of the time."],
        ["An outside test to rule out overfitting", "A standard external benchmark checked that the results held beyond the project's own test cases: valid solutions in every trial, on average 0.07% from optimal."],
        ["Let the AI plan, let the optimizer solve", "Having the model write a short plan for a standard optimizer, instead of the whole program, used 29% of the tokens and cut AI cost 83%, at the same solution quality."],
        ["Debug the “AI failure” that wasn't", "One apparent model failure was a valid, time-limited solution mislabelled as infeasible. The fix was in how results are read, not in the model."],
        ["Match the examples to the problem", "Choosing worked examples that fit the problem variant turned a frequent failure into a stable success."],
      ] },
      { h: "Result", p: [
        "The project catalogued nine ways LLM-generated optimization fails and turned them into practical design rules: the model does the planning, a proven optimizer does the exact work, and every result is checked.",
      ] },
    ],
  },
  {
    slug: "polymarket-models",
    title: "Polymarket Market-Making & Forecasting Models",
    meta: "Aug 2026 – Present · Quantitative research",
    summary: "Forecasting models that beat the standard Elo rating, then market-making research on Polymarket, with AI agents doing the heavy lifting.",
    stat: { n: 3504, u: "", l: "held-out matches on which the forecasting models beat the standard Elo rating" },
    courses: ["MATH4432", "IEDA4130", "IEDA4000H"],
    tech: ["Python"],
    desc: "AI-agent-driven quantitative research: forecasting models that beat the standard Elo rating on 3,504 held-out matches, then market-making research on Polymarket.",
    facts: [["Role", "Researcher and system designer"], ["Stage", "Research and shadow trading"], ["Built with", "Python"]],
    stats: [
      { n: 3504, u: "", l: "held-out matches on which the forecasting models beat the standard Elo rating" },
      { n: 4.5, d: 1, u: "×", l: "more often sell quotes were hit than buy quotes, across 777,588 replayed orders" },
      { n: 1444, u: "", l: "simulated decisions reviewed before retiring a signal, with no money at risk" },
    ],
    viz: { rows: [["Sell quotes hit", 100, "4.5×", false], ["Buy quotes hit", 22, "1×", true]], cap: "How often prices hit each side, across 777,588 replayed orders" },
    sections: [
      { h: "From forecasting to market making", p: [
        "The research began with football match forecasting. Built on more than 40,000 historical matches, the models beat the standard Elo rating on 3,504 matches they had never seen. I then moved the research to market making on Polymarket, where the question changes from “who will win?” to “at what price is it safe to quote?”. AI coding agents do the data collection, modelling and simulations; I decide what is worth testing.",
      ], viz: true },
      { h: "What I decided", list: [
        ["Size the risk before quoting", "Before quoting, I had 777,588 historical orders replayed. Prices hit sell quotes about 4.5 times as often as buy quotes: the main risk a market maker has to price in."],
        ["Retire what the data says can't work", "Across 1,444 simulated decisions, a forecasting signal showed no edge, however strong its predicted advantage. I stopped tuning it and redirected the research, before any money was at risk."],
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
