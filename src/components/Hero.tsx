import TextType from '../app/components/TextType/TextType';
import React from 'react';

const Hero: React.FC = () => {

    return (
        <section
            id="home"
            className="min-h-screen md:pl-20 flex md:justify-between items-center pt-16 px-4 relative overflow-hidden"
        >
            <div className="absolute inset-0 gradient-bg opacity-30"></div>
            <div className="text-center max-w-4xl relative z-10 float">
                <div className="justify-between text-left">
                    <h2 className="text-2xl md:text-4xl text-purple-300 mb-1 md:mb-4 justify-between">
                        Hello, I'm
                    </h2>
                </div>
                <h1 className="text-4xl md:text-7xl font-bold neon-text mb-2 md:mb-6 text-left">
                    Afrijal Sidik
                </h1>
                <p className="text-2xl md:text-3xl text-purple-200 mb-8 text-left">
                    <TextType
                        text={["Junior Fullstack Developer", "Pemilik NestCreativ.com", "Happy coding!"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </p>

                {/* Button */}
                <div className="sm:flex-row gap-4 sm:gap-6 items-center sm:items-stretch ">
                    <a
                        href="https://nestcreativ.com/" target='_blank'

                        className="w-[230px] flex items-center px-6 py-2 neon-border bg-white neon-text text-xl rounded-lg hover-glow transition"
                    >
                        <img
                            src="/images/logo-text-1.svg"
                            alt="NestCreativ"
                            className=""
                        />
                    </a>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-start gap-6 mt-6 pl-1">
                    <a
                        href="https://www.linkedin.com/in/afrijal-sidik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-white transition"
                    >
                        <i className="devicon-linkedin-plain text-4xl"></i>
                    </a>
                    <a
                        href="https://github.com/afrijalsidik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-white transition"
                    >
                        <i className="devicon-github-original text-4xl"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/im.riizal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-white transition"
                    >
                        <i className="fa-brands fa-instagram text-4xl"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;