import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.twinkleSpeed = Math.random() * 0.02 + 0.005;
                this.twinkleOffset = Math.random() * Math.PI * 2;
            }
            update(time) {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
                this.currentOpacity =
                    this.opacity * (0.5 + 0.5 * Math.sin(time * this.twinkleSpeed + this.twinkleOffset));
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 200, 255, ${this.currentOpacity})`;
                ctx.fill();
            }
        }

        const init = () => {
            resize();
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 200);
            particles = Array.from({ length: count }, () => new Particle());
        };

        const animate = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update(time);
                p.draw();
            });
            animationId = requestAnimationFrame(animate);
        };

        init();
        animationId = requestAnimationFrame(animate);
        window.addEventListener('resize', init);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', init);
        };
    }, []);

    return (
        <>
            {/* Aurora blobs */}
            <div
                className="aurora-blob"
                style={{
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)',
                    top: '-10%',
                    left: '-5%',
                    animationDelay: '0s',
                }}
            />
            <div
                className="aurora-blob"
                style={{
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)',
                    top: '40%',
                    right: '-10%',
                    animationDelay: '-7s',
                }}
            />
            <div
                className="aurora-blob"
                style={{
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)',
                    bottom: '-5%',
                    left: '30%',
                    animationDelay: '-14s',
                }}
            />
            {/* Star field */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />
        </>
    );
}
