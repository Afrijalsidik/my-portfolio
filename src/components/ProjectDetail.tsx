import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider';

interface ProjectDetailData {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    gradient: string;
    technologies: string[];
    images: string[];
    features: string[];
    githubUrl?: string;
    liveUrl?: string;
    notes?: string;
}

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [project, setProject] = useState<ProjectDetailData | null>(null);

    // Data project lengkap
    const projectsData: ProjectDetailData[] = [
        {
            id: 1,
            title: 'NestCreativ',
            description: 'Brand digital yang saya dirikan untuk membantu UMKM memiliki website profesional dan tampil percaya diri di dunia online.',
            longDescription: 'NestCreativ adalah brand digital yang saya dirikan untuk membantu UMKM dan pemilik binsnis tampil menonjol di era digital melalui website yang modern, cepat, dan fungsional. kami menyediakan layanan pembuatan website costum sesuai kebutuhan klien mulai dari profil perusahaan, toko online, portfolio kreativ, hingga sistem  berbasis web seperti kasir dan manajemen data. fokus utama kami adalah membuat website yang tidak hanya bagus secara tampilan, tapi juga efektif membantu bisnis tumbuh.',
            gradient: 'from-purple-500 to-pink-500',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Git', 'Figma'],
            images: [
                '/images/project1.png',
                '/images/project1-slide1.png',
                '/images/project1-slide2.png',
            ],
            features: [
                'Website Custom',
                'Desain Responsif',
                'Keamanan terjamin',
                'Integrasi Siap pakai',
                'Dashboard Admin',
                'Maintenance & support',
            ],
            githubUrl: 'https://github.com/Afrijalsidik/nestcreativLanddingPage',
            liveUrl: 'https://nestcreativ.com/',
        },
        {
            id: 2,
            title: 'Shayna Cosmetic',
            description: 'Platform E-Commerce yang menjual berbagai produk kecantikan.',
            longDescription: 'Shayna Cosmetic adalah platform toko online yang menjual berbagai macam produk kecantikan dengan desain modern dan pengalaman belanja sederhana. proyek ini dibangun menggunakan laravel filament untuk sistem admin dan API, serta React tailwind css untuk sisi frontend agar tampilan lebih interaktif.',
            gradient: 'from-cyan-500 to-blue-500',
            technologies: ['Laravel', 'filament', 'React', 'Tailwind', 'TypeScript', 'mysql'],
            images: [
                '/images/project2.png',
                '/images/project2-slide1.png',
                '/images/project2-slide2.png',

            ],
            features: [
                'CMS produk (tambah, edit, hapus produk & kategori)',
                'Manajemen pesanan dan status pengiriman',
                'Browse produk dan kategori',
                'Detail produk dengan deskripsi, harga, dan gambar',
                'Fitur add to cart (keranjang belanja)',
                'Checkout dengan metode transfer manual',
                'Tracking order dengan kode transaksi',
            ],
            githubUrl: 'https://github.com/Afrijalsidik/shynacosmeticfrontend',
            liveUrl: 'https://shayna.nestcreativ.com/',
            notes: 'Login Admin : https://apishyna.nestcreativ.com/admin/login. admin@gmail.com pw: 123456789'
        },
        {
            id: 4,
            title: 'Luminix',
            description: 'Platform pembelajaran gratis untuk semua.',
            longDescription: 'Luminix adalah platform pembelajaran online gratis yang memungkinkan siswa untuk belajar berbagai course dari instructor tanpa biasa. dibangun dengan sistem multi user(admin, instructor, student) serta di lengkapi dengan CMS untuk mengelola course dan sistem LMS untuk progres belajar siswa. Luminix dirancang dengan fokus pada kemudahan penggunaan, tampilan moderen, dan pengelolaan data yang efisien.',
            gradient: 'from-indigo-500 to-purple-500',
            technologies: ['Laravel', 'Filament', 'Mysql', 'javascript', 'tailwind'],
            images: [
                '/images/project3.png',
                '/images/project3-slide1.png',
                '/images/project3-slide2.png',
                '/images/project3-slide3.png',
            ],
            features: [
                'Lihat semua course dan ambil secara gratis',
                'Dashboard personal berisi progres belajar dan statistik',
                'Fitur pencarian dan filter course berdasarkan kategor',
                'Learning managemen system',
                'Manajemen user(Admin, instructor, student)',
                'Monitoring progres dan amtifitas siswa',
                'Membuat dan mengelola course',
                'Upload materi (teks)',

            ],
            githubUrl: 'https://github.com/Afrijalsidik/luminix',
            liveUrl: 'https://luminix.nestcreativ.com/',
            notes: 'Admin:admin@gmail.com pw: 123456789. student: adbul@gmail.com pw:123456789'
        },
        {
            id: 3,
            title: 'n8n AI Automation',
            description: 'Ai customer Service via whatsapp 24 jam nonstop',
            longDescription: 'n8n AI Automation Customer service adakah sistem otomatis layanan pelanggan berbasis Whatsapp yang berjalan 24 jam nonstop. Proyek ini mengintegrasikan n8n Workflow automation dengan ChatGpt API untuk membuat asisten virtual yang mampu menjawab pertanyaan pelanggan secara otomatis dan kontelektual, layaknya manusia. Sistem ini di gunakan untuk mendukung operasional Nestcreativ, brand jasa pembuatan website, agar dapat melayani klien dengan cepat dan efisien tanpa batas waktu.',
            gradient: 'from-indigo-500 to-purple-500',
            technologies: ['n8n', 'ChatGpt API', 'Foonte'],
            images: [
                '/images/project4.png',
                '/images/project4-slide1.png',
                '/images/project4-slide2.png',
            ],
            features: [
                'Aktif 24/7 nonstop',
                'Menjawab pesan pelanggan secara otomatis via WhatsApp',
                'Ditenagai oleh ChatGPT untuk respon natural & kontekstual',
                'Menyimpan semua data percakapan dan kontak pelanggan',
                'Mengarahkan pertanyaan ke template jawaban yang sesuai',
                'Jika pertanyaan tidak dikenali, AI akan memberikan respon umum yang tetap relevan',

            ],
            githubUrl: '',
            liveUrl: 'https://wa.me/6285768711072',
            notes: 'Karna terkendala layanan VPS/Cloud server, n8n Ai Automation Custommer service aktif cuman sampai tanggal 6 November 2025 '
        },
    ];

    useEffect(() => {
        const foundProject = projectsData.find((p) => p.id === Number(id));
        setProject(foundProject || null);

        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl neon-text mb-4">Project Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="glass neon-border text-white text-xl px-6 py-3 rounded-lg hover-glow transition"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            {/* Back Button */}
            <div className="max-w-6xl mx-auto mb-8">
                <button
                    onClick={() => navigate('/')}
                    className="glass neon-border text-white text-xl px-6 py-3 rounded-lg hover-glow transition flex items-center gap-2"
                >
                    <i className="fas fa-arrow-left"></i>
                    Back to Projects
                </button>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold neon-text mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-3xl text-purple-200">{project.description}</p>
                </div>

                {/* Image Slider */}
                <div className="mb-12">
                    <ImageSlider images={project.images} />
                </div>

                {/* Description */}
                <div className="glass rounded-lg p-8 mb-8 hover-glow">
                    <h2 className="text-2xl md:text-4xl font-bold text-purple-300 mb-4">
                        About This Project
                    </h2>
                    <p className="text-xl  text-purple-100 leading-relaxed">
                        {project.longDescription}
                    </p>
                </div>

                {/* Features */}
                <div className="glass rounded-lg p-8 mb-8 hover-glow">
                    <h2 className="text-3xl font-bold text-purple-300 mb-6">
                        Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {project.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 text-purple-100"
                            >
                                <i className="fas fa-check-circle text-purple-400 text-xl mt-1"></i>
                                <span className="text-xl">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies */}
                <div className="glass rounded-lg p-8 mb-8 hover-glow">
                    <h2 className="text-2xl md:text-4x font-bold text-purple-300 mb-4">
                        Technologies Used
                    </h2>
                    <div className="flex gap-3 flex-wrap">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 glass border border-purple-400 text-purple-300 rounded-lg text-xl font-semibold neon-border"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass neon-border text-white text-xl px-8 py-4 rounded-lg hover-glow transition flex items-center justify-center gap-3"
                        >
                            <i className="fab fa-github text-2xl"></i>
                            View on GitHub
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass neon-border text-white text-xl px-8 py-4 rounded-lg hover-glow transition flex items-center justify-center gap-3"
                        >
                            <i className="fas fa-external-link-alt text-2xl"></i>
                            View Live Demo
                        </a>
                    )}
                </div>
                {/* notes*/}
                {project.notes && (
                    <div className="glass rounded-lg p-8 mb-8 hover-glow">
                        <h2 className="text-2xl md:text-4x font-bold text-purple-300 mb-4">
                            Notes
                        </h2>
                        <p>{project.notes}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;