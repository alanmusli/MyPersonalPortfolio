
import React, { useState, useEffect, useRef } from 'react';
import Navigation from "./navbar.jsx";
import NavNav from "./navnav.jsx";
import Cards from "./cards.jsx";
const sentences = ["  I'm passionate about uncovering insights from data and transforming them into meaningful solutions. Data science and engineering allow me to blend analytical thinking with practical implementation — from wrangling raw data to building efficient pipelines and drawing actionable conclusions.",
    "Machine learning fascinates me because it brings together mathematics, programming, and creativity to solve problems in powerful ways. I'm drawn to its ability to make predictions, detect patterns, and improve over time — especially in real-world applications.", " I love the challenge of designing efficient algorithms and working with data structures — the building blocks of great software. This foundation empowers me to create robust solutions and tackle complex problems. I'm also deeply motivated by project-based learning; building things from scratch helps me apply concepts in meaningful, hands-on ways while continuously improving my skills."
];
const header = [
    "💡 My Passions"
]
const links = [];
function Home() {
    const [displayText, setDisplayText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const timeoutRef = useRef(null);

    const phrases = [
        "build projects",
        "am interested in Machine Learning",
        "am interested in Backend",
        "love solving problems",
        "create innovative solutions",
        "am passionate about AI",
        "develop web applications",
        "enjoy coding challenges",
        "am learning new technologies",
        "love Leetcode"
    ];

    const typeSpeed = 400;
    const deleteSpeed = 100;
    const pauseTime = 2500;

    useEffect(() => {
        const type = () => {
            const currentPhrase = phrases[currentPhraseIndex];

            if (isDeleting) {
                setDisplayText(currentPhrase.substring(0, currentCharIndex - 1));
                setCurrentCharIndex(prev => prev - 1);
            } else {
                setDisplayText(currentPhrase.substring(0, currentCharIndex + 1));
                setCurrentCharIndex(prev => prev + 1);
            }

            let speed = isDeleting ? deleteSpeed : typeSpeed;

            if (!isDeleting) {
                speed += Math.random() * 3900;
            }

            if (!isDeleting && currentCharIndex === currentPhrase.length) {
                speed = pauseTime;
                setIsDeleting(true);
            } else if (isDeleting && currentCharIndex === 0) {
                setIsDeleting(false);
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
                speed = 700;
            }

            timeoutRef.current = setTimeout(type, speed);
        };

        timeoutRef.current = setTimeout(type, 500);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentPhraseIndex, currentCharIndex, isDeleting]);

    const bannerStyle = {
        marginTop: '-13px',
        background: 'linear-gradient(135deg, #34495e 0%, #34495e 100%)',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
    };
    const fixedTextStyle = {
        color: 'darkgray',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    };

    const dynamicTextStyle = {
        color: '#ffffff',
        borderRight: '3px solid darkgray',
        animation: 'blink 1s infinite',
        minWidth: '20px'
    };

    return (
        <>
            <Navigation />
            <div style={bannerStyle} id='sve'>
                <div id={'bannerContent'}>
                    <div id={'typewriterContainer'}>
                        <span style={fixedTextStyle}>I</span>
                        <span style={dynamicTextStyle}>{displayText}</span>
                    </div>
                    <div id={'subtitle'}>Passionate Computer Science Student & Tech Enthusiast</div>
                </div>
            </div>
            <NavNav />
            <Cards sentences={sentences} header = {header} links={links} />

            <style jsx>{`
                @keyframes blink {
                    0%, 50% { border-color: #ffd700; }
                    51%, 100% { border-color: transparent; }
                }   
            `}</style>
        </>
    );
}

export default Home;