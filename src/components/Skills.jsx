import { useState, useEffect, useRef } from 'react';
import { skills } from '../data/portfolioData';
import SectionWrapper from './SectionWrapper';

function SkillBar({ skill, animate }) {
    return (
        <div style={{ marginBottom: '16px' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '6px',
                }}
            >
                <span
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                    }}
                >
                    <span style={{ fontSize: '1.1rem', width: '24px', textAlign: 'center' }}>
                        {skill.icon}
                    </span>
                    {skill.name}
                </span>
                <span
                    style={{
                        fontSize: '0.82rem',
                        color: 'var(--color-accent-purple)',
                        fontWeight: 600,
                    }}
                >
                    {skill.level}%
                </span>
            </div>
            <div className="skill-bar">
                <div
                    className="skill-bar-fill"
                    style={{
                        width: animate ? `${skill.level}%` : '0%',
                    }}
                />
            </div>
        </div>
    );
}

function SkillGroup({ title, items, animate }) {
    return (
        <div className="glass-card" style={{ padding: '28px' }}>
            <h3
                style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <span className="gradient-text">{title}</span>
            </h3>
            {items.map((skill) => (
                <SkillBar key={skill.name} skill={skill} animate={animate} />
            ))}
        </div>
    );
}

export default function Skills() {
    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <SectionWrapper id="skills">
            <h2 className="section-title">
                <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="section-subtitle">
                Technical toolkit I use to build modern applications
            </p>

            <div
                ref={ref}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '24px',
                }}
            >
                <SkillGroup title="Languages" items={skills.languages} animate={animate} />
                <SkillGroup title="Frameworks" items={skills.frameworks} animate={animate} />
                <SkillGroup title="Databases" items={skills.databases} animate={animate} />
                <SkillGroup title="Tools & DevOps" items={skills.tools} animate={animate} />
            </div>
        </SectionWrapper>
    );
}
