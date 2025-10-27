import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold text-center neon-text mb-12">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="glass mx-auto neon-border rounded-2xl flex items-center justify-center hover-glow overflow-hidden">
                        <img
                            src="/images/saya3.png"
                            alt="Afrijal Sidik"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Text */}
                    <div className="glass rounded-2xl p-6 sm:p-8 hover-glow">
                        <p className="text-lg sm:text-2xl md:text-2xl text-purple-100 leading-relaxed mb-6">
                            Saya <span className="font-semibold">Afrijal Sidik</span>, Junior
                            Fullstack Web Developer yang antusias menciptakan website modern,
                            fungsional, dan mudah digunakan. Saya senang mengubah ide atau
                            masalah kompleks menjadi solusi digital yang sederhana dan menarik
                        </p>
                        <p className="text-lg sm:text-2xl md:text-2xl text-purple-100 leading-relaxed mb-6">
                            Saya juga Mendirikan{' '}
                            <a target='_blank' href="https://nestcreativ.com/" style={{ color: '#2563eb' }} className="font-semibold">
                                Nest<span style={{ color: '#ff6b35' }}>Creativ</span>
                            </a>{' '}
                            Sebuah jasa pembuatan website dan layanan digital. Nestcreativ
                            membantu UMKM dan pemilik bisnis untuk tampil lebih menonjol di
                            era digital dengan memiliki website yang profesional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;