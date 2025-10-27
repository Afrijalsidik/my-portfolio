import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    gradient: string;
    technologies: string[];
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: 'NestCreativ',
            description: 'Jasa Pembuatan Website & Layanan Digital Kreatif. Bantu UMKM naik kelas',
            image: '/images/project1.png',
            gradient: 'from-purple-500 to-pink-500',
            technologies: ['Web Development', 'Marketing', 'Brand Identity'],
        },
        {
            id: 2,
            title: 'Shayna Cosmetic',
            description: 'Platform E-Commerce yang menjual berbagai produk kecantikan ',
            image: '/images/project2.png',
            gradient: 'from-cyan-500 to-blue-500',
            technologies: ['Laravel', 'React', 'API', 'TypeScript'],
        },
        {
            id: 3,
            title: 'n8n Ai Automation',
            description: 'Ai customer Service via whatsapp 24 jam nonstop',
            image: '/images/project4.png',
            gradient: 'from-indigo-500 to-purple-500',
            technologies: ['n8n', 'Chatgpt', 'API Whatsapp'],
        },
        {
            id: 4,
            title: 'Luminix',
            description: 'Luminix - Platform pembelajaran gratis untuk semua',
            image: '/images/project3.png',
            gradient: 'from-indigo-500 to-purple-500',
            technologies: ['Laravel', 'javascript', 'mysql'],
        },
        
    ];

    return (
        <section id="projects" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold text-center neon-text mb-12">
                    My Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            to={`/project/${project.id}`}
                            className="glass rounded-lg overflow-hidden hover-glow neon-border block transition-transform duration-300 hover:scale-105"
                        >
                            <div
                                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                            >
                                <div
                                    className="absolute inset-0 opacity-20"
                                    style={{
                                        background: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(255, 255, 255, 0.1) 10px,
                      rgba(255, 255, 255, 0.1) 20px
                    )`,
                                    }}
                                ></div>
                                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-3xl font-bold text-purple-300 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-2xl text-purple-100 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 glass border border-purple-400 text-purple-300 rounded text-xl"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;