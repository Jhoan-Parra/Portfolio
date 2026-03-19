import { personalInfo } from '../data/portfolioData';

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: '1px solid var(--color-border-glass)',
                padding: '32px 24px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                }}
            >
                <a
                    href="#about"
                    className="gradient-text"
                    style={{
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-heading)',
                        textDecoration: 'none',
                    }}
                >
                    {'<J />'}
                </a>
                <p
                    style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.85rem',
                    }}
                >
                    © {new Date().getFullYear()} {personalInfo.name}. Built with React &
                    Tailwind CSS.
                </p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--color-text-muted)',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            transition: 'color 0.2s',
                        }}
                        onMouseOver={(e) => (e.target.style.color = 'var(--color-accent-purple)')}
                        onMouseOut={(e) => (e.target.style.color = 'var(--color-text-muted)')}
                    >
                        GitHub
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--color-text-muted)',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            transition: 'color 0.2s',
                        }}
                        onMouseOver={(e) => (e.target.style.color = 'var(--color-accent-blue)')}
                        onMouseOut={(e) => (e.target.style.color = 'var(--color-text-muted)')}
                    >
                        LinkedIn
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        style={{
                            color: 'var(--color-text-muted)',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            transition: 'color 0.2s',
                        }}
                        onMouseOver={(e) => (e.target.style.color = 'var(--color-accent-cyan)')}
                        onMouseOut={(e) => (e.target.style.color = 'var(--color-text-muted)')}
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
