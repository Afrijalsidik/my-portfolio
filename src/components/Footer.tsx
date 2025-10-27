import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="glass py-5 md:py-8 px-4 border-t border-purple-500/30">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-xl text-purple-200">
                    © {currentYear} Afrijal Sidik. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;