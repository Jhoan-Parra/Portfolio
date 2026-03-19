import { useEffect, useRef } from 'react';

export default function SectionWrapper({ children, id, className = '' }) {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.12 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id={id} ref={ref} className={`fade-in section ${className}`}>
            {children}
        </section>
    );
}
