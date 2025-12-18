import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SpecialtyCards from '../components/SpecialtyCards';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <SpecialtyCards />
            <Footer />
        </>
    );
}
