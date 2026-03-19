import { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolioData';

export default function Navbar() {
    const [active, setActive] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map((l) => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActive(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.setAttribute('data-theme', next);
    };

    return (
        <nav
            className="glass"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '0 24px',
                transition: 'all 0.3s ease',
                borderRadius: 0,
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: scrolled
                    ? '1px solid var(--color-border-glass)'
                    : '1px solid transparent',
                background: scrolled
                    ? 'var(--color-bg-glass)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
            }}
        >
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '72px',
                }}
            >
                {/* Logo */}
                <a
                    href="#about"
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-heading)',
                        textDecoration: 'none',
                    }}
                    className="gradient-text"
                >
                    {'<J />'}
                </a>

                {/* Desktop links */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                    className="nav-desktop"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '8px',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                textDecoration: 'none',
                                transition: 'all 0.25s ease',
                                color:
                                    active === link.href.slice(1)
                                        ? '#fff'
                                        : 'var(--color-text-secondary)',
                                background:
                                    active === link.href.slice(1)
                                        ? 'rgba(124, 58, 237, 0.2)'
                                        : 'transparent',
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        style={{
                            marginLeft: '8px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            border: '1px solid var(--color-border-glass)',
                            background: 'var(--color-bg-glass)',
                            color: 'var(--color-text-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.15rem',
                            transition: 'all 0.25s ease',
                        }}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="nav-mobile-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    style={{
                        display: 'none',
                        flexDirection: 'column',
                        gap: '5px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                    }}
                >
                    <span
                        style={{
                            width: '24px',
                            height: '2px',
                            background: 'var(--color-text-primary)',
                            borderRadius: '2px',
                            transition: 'all 0.3s ease',
                            transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                        }}
                    />
                    <span
                        style={{
                            width: '24px',
                            height: '2px',
                            background: 'var(--color-text-primary)',
                            borderRadius: '2px',
                            transition: 'all 0.3s ease',
                            opacity: mobileOpen ? 0 : 1,
                        }}
                    />
                    <span
                        style={{
                            width: '24px',
                            height: '2px',
                            background: 'var(--color-text-primary)',
                            borderRadius: '2px',
                            transition: 'all 0.3s ease',
                            transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                        }}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className="nav-mobile-menu"
                style={{
                    display: mobileOpen ? 'flex' : 'none',
                    flexDirection: 'column',
                    gap: '4px',
                    paddingBottom: '16px',
                }}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                            padding: '12px 16px',
                            borderRadius: '10px',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'all 0.25s ease',
                            color:
                                active === link.href.slice(1)
                                    ? '#fff'
                                    : 'var(--color-text-secondary)',
                            background:
                                active === link.href.slice(1)
                                    ? 'rgba(124, 58, 237, 0.2)'
                                    : 'transparent',
                        }}
                    >
                        {link.label}
                    </a>
                ))}
                <button
                    onClick={toggleTheme}
                    style={{
                        marginTop: '8px',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid var(--color-border-glass)',
                        background: 'var(--color-bg-glass)',
                        color: 'var(--color-text-primary)',
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                        textAlign: 'left',
                    }}
                >
                    {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
        </nav>
    );
}
