// Motion building blocks. Every component renders its final state on the server, so the
// pre-rendered HTML is complete; animation starts only after hydration.
import { useEffect, useRef, useState } from "react";
import {
  motion, useAnimate, useInView, useReducedMotion, animate, stagger,
  useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent,
} from "motion/react";

const EASE = [0.16, 1, 0.3, 1];
const finePointer = () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

/** Fades, lifts and un-blurs its content when it scrolls into view. */
export function Reveal({ as: Tag = "div", delay = 0, y = 24, blur = true, children, ...rest }) {
  const [scope, run] = useAnimate();
  const inView = useInView(scope, { once: true, margin: "0px 0px -8% 0px" });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView || !scope.current) return;
    if (reduce) { scope.current.style.opacity = 1; return; }
    const kf = { opacity: [0, 1], y: [y, 0] };
    if (blur) kf.filter = ["blur(8px)", "blur(0px)"];
    run(scope.current, kf, { duration: 0.9, delay, ease: EASE }).then(() => {
      if (scope.current) scope.current.style.filter = "";
    });
  }, [inView]);
  return <Tag ref={scope} data-reveal="" {...rest}>{children}</Tag>;
}

/** Splits text into words that blur into focus one after another. */
export function BlurWords({ text, as: Tag = "h1", delay = 0, ...rest }) {
  const [scope, run] = useAnimate();
  const reduce = useReducedMotion();
  useEffect(() => {
    const words = scope.current?.querySelectorAll("[data-w]");
    if (!words?.length) return;
    if (reduce) { words.forEach(w => (w.style.opacity = 1)); return; }
    run(words, { opacity: [0, 1], y: [16, 0], filter: ["blur(14px)", "blur(0px)"] },
      { duration: 0.95, delay: stagger(0.09, { startDelay: delay }), ease: EASE });
  }, []);
  const words = text.split(" ");
  return (
    <Tag ref={scope} {...rest}>
      {words.map((w, i) => (
        <span key={i} data-w="" className="w">{w}{i < words.length - 1 ? " " : ""}</span>
      ))}
    </Tag>
  );
}

/** Counts up from zero when it comes into view. Server HTML shows the final number. */
export function Count({ n, d = 0, pre = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const reduce = useReducedMotion();
  const fmt = v => pre + v.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  useEffect(() => {
    if (reduce || !ref.current) return;
    if (ref.current.getBoundingClientRect().top > window.innerHeight) ref.current.textContent = fmt(0);
  }, []);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, n, { duration: 1.6, ease: EASE, onUpdate: v => { if (ref.current) ref.current.textContent = fmt(v); } });
    return () => c.stop();
  }, [inView]);
  return <span ref={ref}>{fmt(n)}</span>;
}

/** Horizontal bars that grow when in view. */
export function Bars({ rows, cap }) {
  const [scope, run] = useAnimate();
  const inView = useInView(scope, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || !scope.current) return;
    if (scope.current.getBoundingClientRect().top > window.innerHeight)
      scope.current.querySelectorAll(".bar").forEach(b => (b.style.transform = "scaleX(0)"));
  }, []);
  useEffect(() => {
    if (!inView || reduce) return;
    run(scope.current.querySelectorAll(".bar"), { scaleX: [0, 1] },
      { duration: 1.3, delay: stagger(0.18, { startDelay: 0.15 }), ease: EASE });
  }, [inView]);
  return (
    <div className="viz" ref={scope}>
      {rows.map(([label, w, val, dim]) => (
        <div className="viz-row" key={label}>
          <span className="lab">{label}</span>
          <span className="track">
            <span className={"bar" + (dim ? " dim" : "")} style={{ width: `${w}%` }} />
          </span>
          <span className="val">{val}</span>
        </div>
      ))}
      <p className="cap">{cap}</p>
    </div>
  );
}

/** A link that leans toward the cursor. */
export function Magnetic({ href, className, children }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 15 }), sy = useSpring(y, { stiffness: 220, damping: 15 });
  return (
    <motion.a href={href} className={className} style={{ x: sx, y: sy }} whileTap={{ scale: 0.96 }}
      onMouseMove={e => {
        if (!finePointer()) return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3); y.set((e.clientY - r.top - r.height / 2) * 0.4);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>
      {children}
    </motion.a>
  );
}

/** A card link that tilts in 3D under the cursor, with a moving sheen. */
export function TiltCard({ href, className = "", children }) {
  const mx = useMotionValue(0.5), my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 170, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 170, damping: 18 });
  const sheen = useTransform([mx, my], ([a, b]) =>
    `radial-gradient(460px circle at ${a * 100}% ${b * 100}%, rgba(109,139,255,.20), transparent 60%)`);
  return (
    <motion.a href={href} className={"card " + className} style={{ rotateX: rx, rotateY: ry }}
      whileHover={{ scale: 1.012 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onMouseMove={e => {
        if (!finePointer()) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width); my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}>
      <motion.span className="sheen" style={{ background: sheen }} aria-hidden="true" />
      {children}
    </motion.a>
  );
}

/** Soft light that trails the cursor across the page. */
export function Spotlight() {
  const x = useMotionValue(-1000), y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 50, damping: 20 }), sy = useSpring(y, { stiffness: 50, damping: 20 });
  useEffect(() => {
    if (!finePointer()) return;
    const move = e => { x.set(e.clientX - 450); y.set(e.clientY - 450); };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <motion.div className="spot" style={{ x: sx, y: sy }} aria-hidden="true" />;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />;
}

/** Header that slides away while scrolling down and returns on scroll up. */
export function useHideOnScroll() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", v => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(v > prev && v > 160);
  });
  return hidden;
}

export function Marquee({ items, reverse = false, duration = 48 }) {
  const item = (code, title, k) => (
    <span className="mq-item" key={k} aria-hidden={k.endsWith("b") ? "true" : undefined}>{title}</span>
  );
  return (
    <div className={"mq" + (reverse ? " rev" : "")} style={{ "--dur": `${duration}s` }}>
      <div className="mq-track">
        {items.map(([c, t]) => item(c, t, c + "a"))}
        {items.map(([c, t]) => item(c, t, c + "b"))}
      </div>
    </div>
  );
}
