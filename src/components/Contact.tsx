import React, { useState, FormEvent } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        alert('Message sent! (This is a demo)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 px-4 relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold text-center neon-text mb-12">
                    Get In Touch
                </h2>
                <div className="glass rounded-lg p-8 neon-border hover-glow">
                    <p className="text-2xl md:text-3xl text-purple-100 text-center mb-8">
                        Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif,
                        atau peluang untuk menjadi bagian dari visi Anda.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-2xl font-semibold text-purple-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-2xl glass border border-purple-400 rounded-lg focus:outline-none focus:border-purple-300 text-white placeholder-purple-300/50"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-2xl font-semibold text-purple-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-2xl glass border border-purple-400 rounded-lg focus:outline-none focus:border-purple-300 text-white placeholder-purple-300/50"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-2xl font-semibold text-purple-300 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-3 text-2xl glass border border-purple-400 rounded-lg focus:outline-none focus:border-purple-300 text-white placeholder-purple-300/50"
                                placeholder="Your message here..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full glass neon-border text-white text-2xl py-3 rounded-lg hover-glow transition font-semibold"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-purple-500/30">
                        <div className="flex flex-col sm:flex-row justify-center gap-3 text-2xl">
                            <a
                                href="mailto:afrijalsidik404@gmail.com"
                                className="text-purple-200 hover:text-purple-400 transition"
                            >
                                afrijalsidik404@gmail.com
                            </a>
                            <a
                                href="tel:+6281234567890"
                                className="text-purple-200 hover:text-purple-400 transition"
                            >
                                +62 822-8051-2578
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;