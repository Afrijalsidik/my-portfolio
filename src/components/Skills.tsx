import React from 'react';

interface Skill {
    name: string;
    icon: string;
}

const Skills: React.FC = () => {
    const skills: Skill[] = [
        { name: 'HTML', icon: 'devicon-html5-plain colored' },
        { name: 'CSS', icon: 'devicon-css3-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'PHP', icon: 'devicon-php-plain colored' },
        { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
        { name: 'CodeIgniter', icon: 'devicon-codeigniter-plain colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
        { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-original colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'Figma', icon: 'devicon-figma-plain colored' },
    ];

    return (
        <section id="resume" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <div className="mt-12 glass rounded-lg p-8 hover-glow">
                    <h3 className="text-4xl font-bold text-purple-300 mb-10 text-center">
                        Technical Skills
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="glass border border-purple-500 p-6 rounded-lg hover-glow flex flex-col items-center"
                            >
                                <i className={`${skill.icon} text-6xl`}></i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;