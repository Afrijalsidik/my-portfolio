import React, { useEffect, useRef } from 'react';

const Particles: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Create dynamic particles
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            containerRef.current.appendChild(particle);
        }
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
            <div
                className="particle"
                style={{
                    width: '4px',
                    height: '4px',
                    left: '10%',
                    top: '20%',
                    animationDelay: '0s',
                }}
            />
            <div
                className="particle"
                style={{
                    width: '6px',
                    height: '6px',
                    left: '20%',
                    top: '80%',
                    animationDelay: '2s',
                }}
            />
            <div
                className="particle"
                style={{
                    width: '3px',
                    height: '3px',
                    left: '60%',
                    top: '30%',
                    animationDelay: '4s',
                }}
            />
            <div
                className="particle"
                style={{
                    width: '5px',
                    height: '5px',
                    left: '80%',
                    top: '70%',
                    animationDelay: '6s',
                }}
            />
            <div
                className="particle"
                style={{
                    width: '4px',
                    height: '4px',
                    left: '40%',
                    top: '60%',
                    animationDelay: '8s',
                }}
            />
            <div
                className="particle"
                style={{
                    width: '6px',
                    height: '6px',
                    left: '70%',
                    top: '20%',
                    animationDelay: '10s',
                }}
            />
        </div>
    );
};

export default Particles;