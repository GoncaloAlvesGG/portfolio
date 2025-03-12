import React, { useState, useEffect } from "react";
import {
    Main,
    Timeline,
    Expertise,
    Project,
    Navigation,
    Footer,
    Education,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import { Analytics } from "@vercel/analytics/react"

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
                <Analytics mode="production" />;
                <Main />
                <Expertise />
                <Education />
                <Timeline />
                <Project />
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;