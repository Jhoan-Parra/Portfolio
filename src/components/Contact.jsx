import { personalInfo } from '../data/portfolioData';
import SectionWrapper from './SectionWrapper';

export default function Contact() {
    return (
        <SectionWrapper id="contact">
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <h2 className="section-title" style={{ textAlign: 'center' }}>
                    <span className="gradient-text">Let's Connect</span>
                </h2>
                <p
                    className="section-subtitle"
                    style={{ textAlign: 'center', margin: '0 auto 40px' }}
                >
                    Interested in working together? I'm always open to new opportunities
                    and collaborations.
                </p>

                {/* Contact card */}
                <div className="glass-card" style={{ padding: '40px 32px' }}>
                    {/* Email */}
                    <a
                        href={`mailto:${personalInfo.email}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            textDecoration: 'none',
                            color: 'var(--color-text-primary)',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            marginBottom: '32px',
                            transition: 'color 0.3s ease',
                        }}
                    >
                        <span style={{ fontSize: '1.4rem' }}>📧</span>
                        {personalInfo.email}
                    </a>

                    {/* Social links */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '16px',
                            marginBottom: '32px',
                        }}
                    >
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '14px',
                                border: '1px solid var(--color-border-glass)',
                                background: 'var(--color-bg-glass)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                            }}
                            className="glow-border"
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-accent-purple)';
                                e.currentTarget.style.background = 'rgba(124,58,237,0.1)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-border-glass)';
                                e.currentTarget.style.background = 'var(--color-bg-glass)';
                                e.currentTarget.style.transform = 'none';
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-text-primary)' }}>
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '14px',
                                border: '1px solid var(--color-border-glass)',
                                background: 'var(--color-bg-glass)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                            }}
                            className="glow-border"
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
                                e.currentTarget.style.background = 'rgba(59,130,246,0.1)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-border-glass)';
                                e.currentTarget.style.background = 'var(--color-bg-glass)';
                                e.currentTarget.style.transform = 'none';
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-text-primary)' }}>
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            aria-label="Email"
                            style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '14px',
                                border: '1px solid var(--color-border-glass)',
                                background: 'var(--color-bg-glass)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                            }}
                            className="glow-border"
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-accent-cyan)';
                                e.currentTarget.style.background = 'rgba(6,182,212,0.1)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-border-glass)';
                                e.currentTarget.style.background = 'var(--color-bg-glass)';
                                e.currentTarget.style.transform = 'none';
                            }}
                        >
                            📧
                        </a>
                    </div>

                    {/* Download CV */}
                    <a href={personalInfo.cvUrl} className="btn-primary" target="_blank" rel="noopener noreferrer"
                        style={{ justifyContent: 'center', width: '100%' }}>
                        <span>📄</span> Download Resume
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
}
