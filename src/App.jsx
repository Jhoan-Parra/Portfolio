import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <AnimatedBackground />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Navbar />
                <main>
                    <Hero />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Education />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}
