import React, { useState, useEffect } from 'react';

function Nav() {
    const [isMobile, setIsMobile] = useState(false);
    const [isExtraSmall, setIsExtraSmall] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsExtraSmall(window.innerWidth <= 480);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const navStyle = {
        display: 'flex',
        justifyContent: isMobile ? 'space-between' : 'start',
        alignItems: 'center',
        flexDirection: isMobile ? 'row' : 'column',
        marginLeft: '0px',
        width: isMobile ? '100%' : '200px',
        height: isMobile ? 'auto' : '100vh',
        borderRight: isMobile ? 'none' : '1px solid lightgray',
        borderBottom: isMobile ? '1px solid lightgray' : 'none',
        position: isMobile ? 'static' : 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'lightgray',
        zIndex: 1000,
        padding: isMobile ? (isExtraSmall ? '8px 10px' : '10px 15px') : '0',
    };

    const ulStyle = {
        marginTop: isMobile ? '0' : '80px',
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: isMobile ? 'row' : 'column',
        marginRight: isMobile ? '0' : '10px',
        marginBottom: isMobile ? '0' : '10px',
        marginLeft: isMobile ? '0' : '10px',
        flex: isMobile ? '1' : 'none',
    };

    const anchorStyle = {
        textDecoration: 'none',
        borderBottom: '1px solid lightgray',
    };

    const liStyle = {
        fontFamily: `'Source Code Pro', monospace`,
        fontOpticalSizing: 'auto',
        fontWeight: 600,
        fontStyle: 'normal',
        textAlign: isMobile ? 'left' : 'center',
        margin: isMobile ? '0' : '10px',
        fontSize: isMobile ? (isExtraSmall ? '10px' : '12px') : 'inherit',
    };

    const imageStyle = {
        width: isMobile ? (isExtraSmall ? '50px' : '60px') : '120px',
        height: isMobile ? (isExtraSmall ? '50px' : '60px') : '120px',
        borderRadius: '100px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        marginRight: isMobile ? '15px' : '0',
    };

    const socialMediaStyle = {
        width: isMobile ? 'auto' : '50%',
        listStyleType: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: isMobile ? 'none' : '1px solid darkgray',
        flexDirection: 'row',
        marginLeft: isMobile ? '10px' : '0',
    };

    const socialMediaLinkStyle = {
        width: isMobile ? (isExtraSmall ? '25px' : '30px') : '48%',
        margin: isMobile ? (isExtraSmall ? '0 3px' : '0 5px') : '0',
    };

    const personalityStyle = {
        marginTop: '10px',
        width: '80%',
        listStyle: 'none',
        display: isMobile ? 'none' : 'flex', // Hide on mobile
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid darkgray',
    };

    const personalityItemStyle = {
        fontFamily: `'Source Code Pro', monospace`,
        fontOpticalSizing: 'auto',
        fontWeight: 500,
        fontSize: '14px',
        fontStyle: 'normal',
        textAlign: 'left',
        margin: '10px',
    };

    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <a>
                    <img src={'/photoAlan.jpeg'} style={imageStyle} />
                </a>
                <a href="/" style={anchorStyle}>
                    <li style={liStyle} id={'prva'}>
                        Alan Musli <br />
                        Student at Faculty of Computer Science and Engineering Skopje
                    </li>
                </a>
            </ul>
            <ul style={socialMediaStyle} className={'cards'}>
                <a style={socialMediaLinkStyle} href={'https://www.linkedin.com/in/alan-musli-4b57a2324'}>
                    <li id={'linkedIn'} className={'socials'} ></li>
                </a>
                <a style={socialMediaLinkStyle} href={'https://github.com/alanmusli/'}>
                    <li id={'gitHub'} className={'socials'} ></li>
                </a>
                <a style={socialMediaLinkStyle} href={'https://www.instagram.com/alan_musli/'}>
                    <li id={'instagram'} className={'socials'} ></li>
                </a>
                <a id={'cv'} href={'/public/cv.png'}>
                    <button></button>
                </a>
            </ul>
            <ul style={personalityStyle} className={'cards2'}>
                <a><li style={personalityItemStyle}>Seeking knowledge</li></a>
                <a><li style={personalityItemStyle}>Highly adoptable</li></a>
                <a><li style={personalityItemStyle}>Seeking challenges</li></a>
                <a><li style={personalityItemStyle}>Passion for learning things from core</li></a>
            </ul>
        </nav>
    );
}

export default Nav;