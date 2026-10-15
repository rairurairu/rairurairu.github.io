import { motion } from "motion/react";
import { Reveal, BlurWords, Count, Bars, Magnetic, TiltCard, Spotlight, ScrollProgress, useHideOnScroll, Marquee } from "./components/motion.jsx";
import { PERSON, PROJECTS, MORE, AWARD, ROLES, SKILLS, COURSES, COURSE_ORDER, CV, EMAIL, GITHUB } from "./data.js";

const courseList = codes => codes.map(c => [c, COURSES[c]]);

function Nav() {
  const hidden = useHideOnScroll();
  return (
    <motion.header className="nav" animate={{ y: hidden ? "-110%" : "0%" }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
      <div className="nav-in">
        <a href="/" className="brand">Tony Tsang</a>
        <nav aria-label="Main">
          <a className="hide-sm" href="/#projects">Projects</a>
          <a className="hide-sm" href="/#about">About</a>
          <a className="hide-sm" href="/#contact">Contact</a>
          <a className="nav-cv" href={CV}>CV</a>
        </nav>
      </div>
    </motion.header>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <span>© 2026 {PERSON.legal} · Hong Kong</span>
        <span><a href={GITHUB}>GitHub</a> · <a href={`mailto:${EMAIL}`}>Email</a> · <a href={CV}>CV</a></span>
      </div>
    </footer>
  );
}

function Shell({ children }) {
  return (
    <>
      <ScrollProgress />
      <div className="gridbg" aria-hidden="true" />
      <Spotlight />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function Tags({ items }) {
  return <span className="tags">{items.map(t => <i key={t}>{t}</i>)}</span>;
}

function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="badges">
          <Reveal className="badge" y={10} blur={false}><i aria-hidden="true" />{PERSON.availability}</Reveal>
          <Reveal className="badge win" y={10} blur={false} delay={0.08}><i aria-hidden="true" />{PERSON.win}</Reveal>
        </div>
        <BlurWords text={PERSON.name} as="h1" delay={0.1} />
        <Reveal className="deg" delay={0.35} y={12}>{PERSON.degree}</Reveal>
        <Reveal as="p" className="lede" delay={0.5} y={12}>{PERSON.lede}</Reveal>
        <Reveal className="acts" delay={0.65} y={12} blur={false}>
          <Magnetic href={CV} className="btn-solid">Download CV <span aria-hidden="true">↓</span></Magnetic>
          <a className="btn-ghost" href="#projects">Selected projects</a>
        </Reveal>
      </section>

      <section id="projects" className="wrap sec">
        <Reveal as="h2">Selected projects</Reveal>
        <div className="cards">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08} className="card-wrap">
              <TiltCard href={`/work/${p.slug}/`}>
                <span className="m">{p.meta}</span>
                <span className="t">{p.title}</span>
                <span className="s">{p.summary}</span>
                {p.stat && <span className="n">{p.stat.text ? p.stat.text : <Count n={p.stat.n} d={p.stat.d || 0} pre={p.stat.pre || ""} />}<small>{p.stat.u}</small></span>}
                {p.stat && <span className="l">{p.stat.l}</span>}
                <span className="foot-row"><Tags items={p.tech} /><span className="go">Case study <span aria-hidden="true">→</span></span></span>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="more">
          {MORE.map((m, i) => (
            <Reveal key={m.t} delay={i * 0.08} className="more-card">
              <h3>{m.t}</h3>
              <p>{m.d}{m.href && <> <a href={m.href}>{m.link}</a></>}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="awards" className="wrap sec">
        <Reveal as="h2">Awards</Reveal>
        <Reveal className="award">
          <span className="trophy" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" /><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" /></svg>
          </span>
          <div>
            <span className="m">{AWARD.meta}</span>
            <h3>{AWARD.title}</h3>
            <p className="ev">{AWARD.event}</p>
            <p>{AWARD.role} <a href={AWARD.href}>Case study →</a></p>
          </div>
          <div className="award-n"><span className="n"><Count n={AWARD.participants} />+</span><span className="l">participants</span></div>
        </Reveal>
      </section>

      <section id="about" className="wrap sec about">
        <div>
          <Reveal as="h2">About</Reveal>
          <Reveal as="p">I'm in my final year of Industrial Engineering &amp; Engineering Management + AI at HKUST, and my courses finish in December 2026.</Reveal>
          <Reveal as="p">Industrial engineering taught me to look at how work flows and where it breaks. On each project I decide what AI handles, what fixed rules handle and what only a person may decide, then I measure whether it worked.</Reveal>
        </div>
        <Reveal className="roles" delay={0.1}>
          <h3>Roles I'm looking for</h3>
          <ul>{ROLES.map(r => <li key={r}>{r}</li>)}</ul>
        </Reveal>
      </section>

      <section id="coursework" className="sec">
        <div className="wrap">
          <Reveal as="h2">Coursework</Reveal>
          <Reveal as="p" className="formal">{PERSON.formal}</Reveal>
        </div>
        <Marquee items={courseList(COURSE_ORDER)} duration={70} />
      </section>

      <section id="skills" className="wrap sec">
        <Reveal as="h2">Skills</Reveal>
        <div className="skills">
          {SKILLS.map(([g, list], i) => (
            <Reveal key={g} className="skill" delay={(i % 2) * 0.08}>
              <h3>{g}</h3>
              <span className="chips">{list.map(s => <i key={s}>{s}</i>)}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="wrap sec contact">
        <Reveal as="h2">Contact</Reveal>
        <Reveal><a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a></Reveal>
        <Reveal as="p" className="lede">{PERSON.availability} · Hong Kong</Reveal>
        <Reveal className="acts" blur={false}>
          <Magnetic href={CV} className="btn-solid">Download CV <span aria-hidden="true">↓</span></Magnetic>
          <a className="btn-ghost" href={GITHUB}>GitHub</a>
        </Reveal>
      </section>
    </>
  );
}

function Case({ slug }) {
  const i = PROJECTS.findIndex(p => p.slug === slug);
  const p = PROJECTS[i];
  const prev = PROJECTS[i - 1], next = PROJECTS[i + 1];
  return (
    <article className="wrap case">
      <Reveal as="p" className="crumb" blur={false} y={6}><a href="/#projects">← All projects</a></Reveal>
      <Reveal as="p" className="kicker" y={8}>{p.meta}</Reveal>
      <BlurWords text={p.title} as="h1" delay={0.05} />
      <Reveal as="p" className="lede" delay={0.3}>{p.summary}</Reveal>
      <Reveal className="facts" delay={0.4} blur={false}>
        {p.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
      </Reveal>
      <div className={"stats n" + p.stats.length}>
        {p.stats.map((s, j) => (
          <Reveal key={j} className="stat" delay={j * 0.08}>
            <span className="n">{s.text ? s.text : <Count n={s.n} d={s.d || 0} pre={s.pre || ""} />}<small>{s.u}</small></span>
            <span className="l">{s.l}</span>
          </Reveal>
        ))}
      </div>

      {p.sections.map(sec => (
        <section className="chapter" key={sec.h}>
          <Reveal as="h2">{sec.h}</Reveal>
          {sec.p && sec.p.map((t, j) => <Reveal as="p" key={j}>{t}</Reveal>)}
          {sec.viz && p.viz && <Reveal blur={false}><Bars rows={p.viz.rows} cap={p.viz.cap} /></Reveal>}
          {sec.shots && (
            <div className="shots">
              <Reveal as="figure" className="shot">
                <img src="/assets/img/micro-cover.png" alt="Customer app: the monthly price split into personal covers, each explained in one plain sentence" width="440" height="480" loading="lazy" />
                <figcaption>Customer app: the monthly price split into covers</figcaption>
              </Reveal>
            </div>
          )}
          {sec.list && (
            <ol className="decisions">
              {sec.list.map(([t, d], j) => (
                <Reveal as="li" key={t} delay={Math.min(j, 3) * 0.04}>
                  <span className="num">{String(j + 1).padStart(2, "0")}</span>
                  <div><strong>{t}</strong><span>{d}</span></div>
                </Reveal>
              ))}
            </ol>
          )}
        </section>
      ))}

      <section className="chapter">
        <Reveal as="h2">Related coursework</Reveal>
        <Reveal className="chips big">{p.courses.map(c => <i key={c}>{COURSES[c]}</i>)}</Reveal>
      </section>

      <nav className="next" aria-label="More projects">
        {prev ? <a href={`/work/${prev.slug}/`}><small>Previous</small>← {prev.title}</a> : <a href="/#projects"><small>Back</small>← All projects</a>}
        {next ? <a className="r" href={`/work/${next.slug}/`}><small>Next</small>{next.title} →</a> : <a className="r" href="/#projects"><small>Back</small>All projects →</a>}
      </nav>
    </article>
  );
}

function NotFound() {
  return (
    <section className="hero wrap">
      <Reveal as="p" className="kicker">404</Reveal>
      <BlurWords text="Page not found" as="h1" />
      <Reveal className="acts" delay={0.3} blur={false}><a className="btn-solid" href="/">Home</a></Reveal>
    </section>
  );
}

export default function App({ id }) {
  const page = id === "home" ? <Home /> : id === "404" ? <NotFound /> : <Case slug={id} />;
  return <Shell>{page}</Shell>;
}
