import { projects } from '../data/portfolioData';
import SectionWrapper from './SectionWrapper';

export default function Projects() {
    return (
        <SectionWrapper id="projects">
            <h2 className="section-title">
                <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="section-subtitle">
                A selection of projects showcasing my skills and interests
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: '24px',
                }}
            >
                {projects.map((project, i) => (
                    <div
                        key={project.id}
                        className="glass-card"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Card header accent */}
                        <div
                            style={{
                                height: '120px',
                                background: `linear-gradient(135deg, 
                  rgba(124,58,237,${0.08 + i * 0.03}), 
                  rgba(59,130,246,${0.06 + i * 0.02}))`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '3rem',
                                borderBottom: '1px solid var(--color-border-glass)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Shimmer overlay */}
                            <div
                                className="shimmer"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                }}
                            />
                            <span style={{ position: 'relative', zIndex: 1 }}>
                                {project.image}
                            </span>
                        </div>

                        <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3
                                style={{
                                    fontSize: '1.15rem',
                                    fontWeight: 700,
                                    fontFamily: 'var(--font-heading)',
                                    marginBottom: '8px',
                                }}
                            >
                                {project.title}
                            </h3>

                            <p
                                style={{
                                    color: 'var(--color-text-secondary)',
                                    fontSize: '0.92rem',
                                    lineHeight: 1.7,
                                    marginBottom: '16px',
                                    flex: 1,
                                }}
                            >
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '6px',
                                    marginBottom: '20px',
                                }}
                            >
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="badge"
                                        style={{ fontSize: '0.75rem' }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div style={{ display: 'flex', gap: '12px' }}>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline"
                                        style={{
                                            padding: '8px 16px',
                                            fontSize: '0.85rem',
                                            flex: 1,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        GitHub
                                    </a>
                                )}
                                {project.demo && project.demo !== '#' && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{
                                            padding: '8px 16px',
                                            fontSize: '0.85rem',
                                            flex: 1,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
