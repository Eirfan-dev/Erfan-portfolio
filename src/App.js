import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Info from './components/about/Info';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import EmblaCarousel from './components/portfolio/EmblaCarousel';
// slider images //
const slides = [
    'https://via.placeholder.com/600x400?text=Slide+1',
    'https://via.placeholder.com/600x400?text=Slide+2',
    'https://via.placeholder.com/600x400?text=Slide+3',
];

const App = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <EmblaCarousel slides={[0, 1, 2, 3, 4]} options={{ loop: true }} />
                <Contact />
            </main>
            <Footer />
            <ScrollUp />
        </>
    )
}
export default App;
