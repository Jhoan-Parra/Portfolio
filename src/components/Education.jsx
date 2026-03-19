import { education, certifications, languages } from '../data/portfolioData';
import SectionWrapper from './SectionWrapper';

export default function Education() {
    return (
        <SectionWrapper id="education">
            <h2 className="section-title">
                <span className="gradient-text">Education & Certifications</span>
            </h2>
            <p className="section-subtitle">
                Academic background and professional credentials
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: '24px',
                    marginBottom: '48px',
                }}
            >
                {education.map((edu) => (
                    <div key={edu.id} className="glass-card" style={{ padding: '28px' }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginBottom: '12px',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '2rem',
                                    width: '52px',
                                    height: '52px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '14px',
                                    background: 'rgba(124, 58, 237, 0.1)',
                                    border: '1px solid rgba(124, 58, 237, 0.2)',
                                }}
                            >
                                {edu.icon}
                            </span>
                            <div>
                                <h3
                                    style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        fontFamily: 'var(--font-heading)',
                                    }}
                                >
                                    {edu.degree}
                                </h3>
                                <span
                                    style={{
                                        color: 'var(--color-accent-purple)',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                    }}
                                >
                                    {edu.institution}
                                </span>
                            </div>
                        </div>
                        <span
                            className="badge"
                            style={{ marginBottom: '12px', display: 'inline-flex' }}
                        >
                            {edu.period}
                        </span>
                        <p
                            style={{
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.92rem',
                                lineHeight: 1.7,
                            }}
                        >
                            {edu.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Certifications & Languages row */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '24px',
                }}
            >
                {/* Certifications */}
                <div className="glass-card" style={{ padding: '28px' }}>
                    <h3
                        style={{
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '20px',
                        }}
                    >
                        <span className="gradient-text">🏅 Certifications</span>
                    </h3>
                    {certifications.map((cert) => (
                        <div
                            key={cert.name}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '12px 16px',
                                borderRadius: '12px',
                                background: 'rgba(124, 58, 237, 0.06)',
                                border: '1px solid rgba(124, 58, 237, 0.12)',
                            }}
                        >
                            <span style={{ fontSize: '1.3rem' }}>{cert.icon}</span>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                                    {cert.name}
                                </div>
                                <div
                                    style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--color-text-muted)',
                                    }}
                                >
                                    {cert.issuer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Languages */}
                <div className="glass-card" style={{ padding: '28px' }}>
                    <h3
                        style={{
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '20px',
                        }}
                    >
                        <span className="gradient-text">🌍 Languages</span>
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {languages.map((lang) => (
                            <div
                                key={lang.name}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    background: 'rgba(124, 58, 237, 0.06)',
                                    border: '1px solid rgba(124, 58, 237, 0.12)',
                                }}
                            >
                                <span
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                    }}
                                >
                                    <span style={{ fontSize: '1.3rem' }}>{lang.flag}</span>
                                    {lang.name}
                                </span>
                                <span className="badge">{lang.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
