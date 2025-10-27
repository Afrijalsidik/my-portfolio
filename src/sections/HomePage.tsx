import TextType from '../app/components/TextType/TextType';

export default function HomePage() {
    return (
        <section
            id="home"
            className="min-h-screen container text-gray-800"
        >
            <h2>
                Hai, I'm
                <TextType
                    text={[" Afrijal sidik", " Junior Web Developer",]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                />
            </h2>
            <p className="mt-4 text-lg">Web Developer | Laravel & React Enthusiast</p>
        </section>
    );
}
