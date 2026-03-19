import { personalInfo } from '../data/portfolioData';
import SectionWrapper from './SectionWrapper';

export default function Hero() {
    return (
        <SectionWrapper id="about" className="" >
            <div
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingTop: '80px',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Status badge */}
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 16px',
                        borderRadius: '24px',
                        border: '1px solid rgba(124, 58, 237, 0.25)',
                        background: 'rgba(124, 58, 237, 0.08)',
                        marginBottom: '24px',
                        width: 'fit-content',
                    }}
                >
                    <span
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: '#22c55e',
                            boxShadow: '0 0 8px #22c55e',
                            animation: 'pulse 2s ease-in-out infinite',
                        }}
                    />
                    <span
                        style={{
                            fontSize: '0.85rem',
                            color: 'var(--color-text-secondary)',
                            fontWeight: 500,
                        }}
                    >
                        Available for opportunities
                    </span>
                </div>

                {/* Name */}
                <h1
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: 900,
                        lineHeight: 1.05,
                        marginBottom: '8px',
                    }}
                >
                    Hi, I'm{' '}
                    <span className="gradient-text">{personalInfo.name}</span>
                </h1>

                {/* Title */}
                <h2
                    style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
                        fontWeight: 500,
                        color: 'var(--color-text-secondary)',
                        marginBottom: '24px',
                        fontFamily: 'var(--font-heading)',
                    }}
                >
                    {personalInfo.title}
                </h2>

                {/* Summary */}
                <p
                    style={{
                        maxWidth: '600px',
                        fontSize: '1.05rem',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.8,
                        marginBottom: '40px',
                    }}
                >
                    {personalInfo.summary}
                </p>

                {/* CTAs */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    <a href="#projects" className="btn-primary">
                        <span>🚀</span> View Projects
                    </a>
                    <a href="#contact" className="btn-outline">
                        <span>💬</span> Contact Me
                    </a>
                    <a
                        href={personalInfo.cvUrl}
                        className="btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>📄</span> Download CV
                    </a>
                </div>

                {/* Scroll indicator */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        opacity: 0.5,
                    }}
                >
                    <span
                        style={{
                            fontSize: '0.75rem',
                            color: 'var(--color-text-muted)',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                        }}
                    >
                        Scroll
                    </span>
                    <div
                        style={{
                            width: '20px',
                            height: '32px',
                            borderRadius: '10px',
                            border: '2px solid var(--color-text-muted)',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                width: '4px',
                                height: '8px',
                                borderRadius: '2px',
                                background: 'var(--color-text-muted)',
                                position: 'absolute',
                                top: '6px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                animation: 'scrollBounce 2s ease-in-out infinite',
                            }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
          50% { transform: translateX(-50%) translateY(10px); opacity: 0.3; }
        }
      `}</style>
        </SectionWrapper>
    );
}
