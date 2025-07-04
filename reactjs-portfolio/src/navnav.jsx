import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
function NavNav(){
    const [isHovered, setIsHovered] = React.useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const checkScreenSize = () => {
        if(window.innerWidth <= 768) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    };
    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const getPageName = (pathname) => {
        if (!pathname || pathname === '/') return 'Home';
        const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
        const firstSegment = cleanPath.split('/')[0];
        return firstSegment.charAt(0).toUpperCase() + firstSegment.slice(1);
    }
    const pageName = getPageName(window.location.pathname);
    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: '0px',
        width: isMobile ? (isHovered ? '100px' : '35px') : (isHovered ? '200px' : '75px'),
        height: '100vh',
        borderLeft:'1px solid lightgray',
        transition: 'width 0.6s ease',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        right: 0,
        backgroundColor: 'lightgray',
        zIndex: 1000,
    };

    const grayBarStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: 'darkgray',
        display: isHovered ?  'none' : 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
    };

    const ulStyle = {
        marginTop: '80px',
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginRight: '10px',
        marginBottom: '10px',
        marginLeft: '10px',
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
        textAlign: 'center',
        margin: '10px',
        fontSize: window.innerWidth <= 768 ? '12px' : '14px',
    };

    return (
        <nav style={navStyle} className={'navigation'}
             onMouseOver={() => setIsHovered(true)}
             onMouseOut={() => setIsHovered(false)}
        >
            <div style={grayBarStyle}>
                <h3 style={{textTransform:'uppercase',position: 'absolute', top: '10px', margin: 0,
                fontSize: isMobile ? '5px' : '11px'}}>{pageName}</h3>
                <img src={'../public/menu.png'} style={{display:'block',
               width: isMobile ? '20px' : '35px',
                height: isMobile ? '20px' : '35px'}} />
            </div>
            <ul style={ulStyle}>
                <Link to="/" style={anchorStyle}>
                    <li style={liStyle} className={'listItem'}>Home</li>
                </Link>
                <Link to="/Projects" style={anchorStyle}>
                    <li style={liStyle} className={'listItem'}>Projects</li>
                </Link>
                <Link to="/Education" style={anchorStyle}>
                    <li style={liStyle} className={'listItem'}>Education</li>
                </Link>
                <Link to="/Awards" style={anchorStyle}>
                    <li style={liStyle} className={'listItem'}>Awards</li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavNav;