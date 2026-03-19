import { experiences } from '../data/portfolioData';
import SectionWrapper from './SectionWrapper';

export default function Experience() {
    return (
        <SectionWrapper id="experience">
            <h2 className="section-title">
                <span className="gradient-text">Work Experience</span>
            </h2>
            <p className="section-subtitle">
                Professional journey and hands-on project experience
            </p>

            <div style={{ position: 'relative', paddingLeft: '32px' }}>
                {/* Timeline line */}
                <div
                    style={{
                        position: 'absolute',
                        left: '7px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background:
                            'linear-gradient(to bottom, var(--color-accent-purple), var(--color-accent-blue), transparent)',
                        borderRadius: '1px',
                    }}
                />

                {experiences.map((exp, i) => (
                    <div
                        key={exp.id}
                        className="glass-card"
                        style={{
                            padding: '28px',
                            marginBottom: '24px',
                            position: 'relative',
                            animationDelay: `${i * 0.15}s`,
                        }}
                    >
                        {/* Timeline dot */}
                        <div
                            style={{
                                position: 'absolute',
                                left: '-33px',
                                top: '32px',
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: 'var(--gradient-main)',
                                boxShadow: '0 0 12px var(--color-glow-purple)',
                                border: '3px solid var(--color-bg-primary)',
                            }}
                        />

                        {/* Header */}
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                gap: '8px',
                                marginBottom: '8px',
                            }}
                        >
                            <div>
                                <h3
                                    style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 700,
                                        fontFamily: 'var(--font-heading)',
                                    }}
                                >
                                    {exp.role}
                                </h3>
                                <span
                                    style={{
                                        color: 'var(--color-accent-purple)',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                    }}
                                >
                                    {exp.company}
                                </span>
                            </div>
                            <span
                                className="badge"
                                style={{ fontSize: '0.82rem' }}
                            >
                                {exp.period}
                            </span>
                        </div>

                        {/* Description */}
                        <p
                            style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.7,
                                marginBottom: '16px',
                            }}
                        >
                            {exp.description}
                        </p>

                        {/* Technologies */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {exp.technologies.map((tech) => (
                                <span key={tech} className="badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
