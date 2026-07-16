import { useState, useEffect, useRef } from 'react'

const PROJECTS = [
  {
    id: '01',
    title: 'Full Stack App',
    desc: 'Built REST APIs and integrated backend systems with Angular and Node.js. Delivered a seamless full-stack experience from database to UI.',
    tags: ['Angular', 'Node.js', 'REST API'],
    url: 'https://your-project-1.com',
    year: '2024',
  },
  {
    id: '02',
    title: 'Responsive Web App',
    desc: 'Responsive multi-page web application using Angular, TypeScript, and Bootstrap. Focused on accessibility and performance.',
    tags: ['Angular', 'TypeScript', 'Bootstrap'],
    url: 'https://your-project-2.com',
    year: '2024',
  },
  {
    id: '03',
    title: 'UI Design System',
    desc: 'Component library and design system built with Figma and Tailwind CSS — consistent tokens, reusable patterns, and full documentation.',
    tags: ['Figma', 'Tailwind', 'UI Design'],
    url: 'https://your-project-3.com',
    year: '2024',
  },
  {
    id: '04',
    title: 'Landing Page',
    desc: 'Pixel-perfect, animated marketing landing page. Pure HTML5 & CSS3 with smooth scroll interactions and mobile-first layout.',
    tags: ['HTML5', 'CSS3', 'Motion'],
    url: 'https://your-project-4.com',
    year: '2023',
  },
  {
    id: '05',
    title: 'Express REST API',
    desc: 'Backend REST API built with Node.js and Express, connected to a MySQL database. Clean routing, middleware, and error handling.',
    tags: ['Node.js', 'Express', 'MySQL'],
    url: 'https://your-project-5.com',
    year: '2023',
  },
  {
    id: '06',
    title: 'Dashboard UI',
    desc: 'Admin dashboard interface designed in Figma and implemented with Angular — data tables, charts, and responsive grid layout.',
    tags: ['Angular', 'Figma', 'CSS3'],
    url: 'https://your-project-6.com',
    year: '2023',
  },
]

const SKILLS = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Node.js', 'Express', 'MySQL', 'Bootstrap', 'Tailwind', 'Figma', 'REST API']

export default function App() {
  const [time, setTime] = useState('')
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`
        cursorRef.current.style.opacity = '1'
      }
    }
    const leave = () => { if (cursorRef.current) cursorRef.current.style.opacity = '0' }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseleave', leave) }
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Scanlines */}
      <div className="scanlines" />

      {/* Cursor dot */}
      <div ref={cursorRef} style={{
        position: 'fixed', top: 0, left: 0, width: 16, height: 16,
        borderRadius: '50%', border: '1.5px solid var(--accent)',
        opacity: 0, pointerEvents: 'none', zIndex: 9999,
        transition: 'opacity 0.2s', boxShadow: '0 0 8px rgba(0,200,255,0.6)',
      }} />

      {/* Background gradients */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,100,200,0.18) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 80% 100%, rgba(0,200,255,0.06) 0%, transparent 70%),
          radial-gradient(ellipse 30% 30% at 10% 80%, rgba(0,80,180,0.08) 0%, transparent 60%)
        `,
      }} />

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px', height: 64,
        borderBottom: '1px solid var(--border)',
        background: 'rgba(4,8,15,0.85)',
        backdropFilter: 'blur(20px)',
      }}>
        {/* Logo */}
        <div className="display" style={{ fontSize: 18, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text)' }}>
          NIKA<span style={{ color: 'var(--accent)', textShadow: '0 0 12px rgba(0,200,255,0.7)' }}>.</span>ROHOVSKA
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          <a href="#work" className="nav-link">Work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="mailto:nikarohovska@gmail.com" className="display" style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
            color: 'var(--bg)', background: 'var(--accent)',
            padding: '8px 20px', textDecoration: 'none', textTransform: 'uppercase',
            boxShadow: '0 0 20px rgba(0,200,255,0.4)',
            transition: 'box-shadow 0.2s, opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 35px rgba(0,200,255,0.7)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 20px rgba(0,200,255,0.4)')}>
            Hire Me
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '160px 48px 100px', maxWidth: 1200, margin: '0 auto' }}>

        {/* Status badge */}
        <div className="fade-up d1" style={{ marginBottom: 32, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 8px var(--accent)',
            display: 'inline-block',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          <span className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>
            AVAILABLE FOR WORK · {time}
          </span>
        </div>

        {/* Heading */}
        <h1 className="fade-up d2 display glow-text" style={{
          fontSize: 'clamp(56px, 10vw, 130px)',
          fontWeight: 700,
          lineHeight: 0.9,
          letterSpacing: '-0.01em',
          color: 'var(--text)',
          marginBottom: 48,
          textTransform: 'uppercase',
        }}>
          Frontend<br />
          <span style={{ color: 'var(--accent)' }}>Dev</span> &amp;<br />
          UI Design
        </h1>
        {/* Sub row */}
        <div className="fade-up d3" style={{ display: 'flex', alignItems: 'flex-end', gap: 48, flexWrap: 'wrap', maxWidth: 900 }}>
          <p style={{ maxWidth: 400, fontSize: 15, lineHeight: 1.7, color: 'var(--muted)', fontWeight: 300, flex: '1 1 300px' }}>
            Frontend Developer with ~2 years of experience building responsive web applications. Focused on creating user-friendly and visually appealing interfaces. Based in Gdańsk, Poland.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flex: '0 0 auto' }}>
            {[
              { label: 'GitHub ↗', href: 'https://github.com/nikiquickie' },
              { label: '+380 97 85 82 328', href: 'tel:+380978582328' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="display"
                style={{
                  fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--muted)', textDecoration: 'none',
                  border: '1px solid var(--border)', padding: '9px 20px',
                  transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-bright)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(0,200,255,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.boxShadow = 'none' }}>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="fade-up d4" style={{ marginTop: 80, height: 1, background: 'linear-gradient(90deg, var(--border-bright), transparent)' }} />
      </section>

      {/* ── WORK ── */}
      <section id="work" style={{ position: 'relative', zIndex: 1, padding: '0 48px 120px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 48 }}>
          <span className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.12em' }}>02 /</span>
          <span className="display" style={{ fontSize: 28, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)' }}>Selected Work</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 12 }}>
          {PROJECTS.map((p) => (
            <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className="card">
              {/* Top accent line */}
              <div style={{ height: 2, background: 'linear-gradient(90deg, var(--accent), transparent)', opacity: 0.6 }} />

              <div style={{ padding: '28px 28px 32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <span className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.1em' }}>{p.id}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>{p.year}</span>
                    <svg className="card-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="display" style={{ fontSize: 20, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 20, fontWeight: 300 }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ position: 'relative', zIndex: 1, padding: '0 48px 120px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ height: 1, background: 'linear-gradient(90deg, var(--border-bright), transparent)', marginBottom: 80 }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 36 }}>
              <span className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.12em' }}>03 /</span>
              <span className="display" style={{ fontSize: 28, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)' }}>About</span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300, maxWidth: 400, marginBottom: 20 }}>
              Frontend Developer & UI Designer with ~2 years of experience building responsive web applications.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300, maxWidth: 400 }}>
              Currently based in Gdańsk, Poland. Open to freelance projects and full-time opportunities.
            </p>
            <a href="mailto:nikarogovska@gmail.com"
              className="display"
              style={{
                display: 'inline-block', marginTop: 40,
                fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--accent)', textDecoration: 'none',
                borderBottom: '1px solid rgba(0,200,255,0.4)', paddingBottom: 4,
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border-bright)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(0,200,255,0.4)' }}>
              nikarogovska@gmail.com
            </a>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 36 }}>
              <span className="display" style={{ fontSize: 28, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)' }}>Skills</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {SKILLS.map(s => <span key={s} className="skill-pill">{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        position: 'relative', zIndex: 1,
        borderTop: '1px solid var(--border)',
        padding: '24px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span className="mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em' }}>© 2026 NIKA ROHOVSKA · GDAŃSK, POLAND</span>
        <div style={{ display: 'flex', gap: 28 }}>
          {['GitHub'].map(s => (
            <a key={s} href={`https://github.com/nikiquickie`} className="mono"
              style={{ fontSize: 10, color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.08em', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
              {s}
            </a>
          ))}
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--accent); }
          50% { opacity: 0.4; box-shadow: 0 0 4px var(--accent); }
        }
        @media (max-width: 768px) {
          nav { padding: 0 24px !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
          footer { padding: 24px !important; }
          .grid-cols-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
