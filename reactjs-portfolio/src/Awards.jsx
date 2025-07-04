

import React, { useState, useEffect } from 'react';
import PersonalNav from './navbar.jsx';
import NavNav from './navnav.jsx';

function Awards() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const dataHonors = [
        {
            title: "Third Place – 1st National Competition in \"Computational Thinking\"",
            issuer: "New Corner Education Center",
            date: "Feb 2024",
            associated: "Associated with Gymnasium Kiril Pejcinovik Tetovo",
            file: "./public/АланМусли.pdf"
        },
        {
            title: "Third Place – Game Jam Plus 2021",
            issuer: "Macedonian Game Development Association – MAGDA ",
            date: "Oct 2022",
            associated: "Associated with Gymnasium Kiril Pejcinovik Tetovo",
            file: "./public/gamejam.jpg"
        },
    ];

    const awardCardStyle = {
        backgroundColor: '#34495e',
        borderRadius: '14px',
        padding: '20px',
        margin: '15px',
        color: '#ecf0f1',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
        width: isMobile ? '90vw' : '800px',
        maxWidth: '90%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        fontFamily: `'Source Code Pro', monospace`,
        cursor: 'default',
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 0.6s ease forwards'
    };

    const awardTitleStyle = {
        fontSize: '1.2em',
        marginBottom: '5px',
        color: '#00bcd4',
        fontWeight: '600',
        textTransform: 'uppercase',
    };

    const awardIssuerStyle = {
        fontSize: '1em',
        marginBottom: '5px',
        color: '#bdc3c7',
        fontStyle: 'italic',
    };

    const awardDateStyle = {
        fontSize: '0.85em',
        color: '#aaa',
        marginBottom: '10px',
    };

    const awardDescriptionStyle = {
        fontSize: '0.9em',
        lineHeight: '1.5em',
        color: '#dfe6e9',
    };

    const flexContainerStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        marginRight: isMobile ? '0px' : '240px',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    };

    const contentStyle = {
        marginLeft: isMobile ? 'auto' : '300px',
        marginRight: isMobile ? 'auto' : undefined,
    };

    return (
        <>
            <PersonalNav />
            <NavNav />
            <div
                style={{
                    background: 'linear-gradient(135deg, #2c3e50, #1c2833)',
                    padding: '60px 20px',
                    minHeight: '100vh',
                    textAlign: 'center'
                }}
            >
                <h2 style={{
                    fontSize: '2em',
                    color: '#00bcd4',
                    marginBottom: '10px',
                    fontFamily: `'Source Code Pro', monospace`,
                    textTransform: 'uppercase'
                }}>
                    🏆 Awards & Achievements
                </h2>

                <p style={{
                    color: '#ccc',
                    fontSize: '1em',
                    maxWidth: '600px',
                    margin: '0 auto 40px',
                    fontFamily: `'Source Code Pro', monospace`
                }}>
                    Highlights of competitions and achievements that reflect my passion for computer science.
                </p>

                <div className="content" style={contentStyle}>
                    <div className="flexContainer" style={flexContainerStyle}>
                        {dataHonors.map((award, i) => (
                            <div
                                key={i}
                                style={{
                                    ...awardCardStyle,
                                    animationDelay: `${i * 0.2}s`
                                }}
                            >
                                <span style={{ fontSize: '1.5em', marginBottom: '10px' }}>
                                    {i === 0 ? '🧠' : '🎮'}
                                </span>
                                <h3 style={awardTitleStyle}>{award.title}</h3>
                                <h4 style={awardIssuerStyle}>{award.issuer}</h4>
                                <p style={awardDateStyle}>{award.date}</p>
                                <p style={awardDescriptionStyle}>{award.associated}</p>
                                <a
                                    href={award.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        marginTop: '10px',
                                        padding: '8px 14px',
                                        backgroundColor: '#00bcd4',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        borderRadius: '6px',
                                        fontWeight: '600',
                                        display: 'inline-block',
                                        fontFamily: `'Source Code Pro', monospace`,
                                        transition: 'background-color 0.3s ease',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#019db0')}
                                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00bcd4')}
                                >
                                    View Certificate
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>
                {`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                `}
            </style>
        </>
    );
}

export default Awards;
