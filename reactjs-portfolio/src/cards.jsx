import React, {useEffect, useState} from 'react';


function Cards({sentences, header, links}) {
    const [isProject, setIsProject] = useState(false);
    useEffect(() => {
        setIsProject(links.length > 0);
    }, [links]);
    const cardStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
             alignItems: 'start',
            border: '1px solid lightgray',
            borderRadius: '12px',
            margin: '15px',
            backgroundColor: '#34495e',
            padding: '15px',
            color: 'lightgray',
            flex: '1',
            minHeight: '200px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
            cursor: 'pointer',
            fontFamily: `'Source Code Pro', monospace`,
            fontOpticalSizing: 'auto',
            fontWeight: 400,
            fontStyle: 'normal',
            '@media (max-width: 768px)': {
                margin: '10px',
                minHeight: '150px'
            }
    };

    const textStyle = {
        fontFamily: `'Source Code Pro', monospace`,
        fontOpticalSizing: 'auto',
        fontWeight: '600',
        fontStyle: 'normal',
        textTransform: 'uppercase',
        color: '#00bcd4',
        fontSize: '1.5em',
        textAlign: 'center',
            letterSpacing: '1px',
        marginBottom: '20px',
        '@media (max-width: 768px)': {
            fontSize: '1.2em',
            marginBottom: '15px'
        }
    };
    const linkStyle = {
        fontFamily: `'Source Code Pro', monospace`,
        fontOpticalSizing: 'auto',
        fontWeight: '600',
        fontStyle: 'normal',
        textTransform: 'lowercase',
        fontSize: window.innerWidth < 768 ? '0.4em' : '1em',
        textAlign: 'center',
        marginBottom: '20px',
    }
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '20px',
        marginLeft: window.innerWidth > 768 ? '100px' : '-20px',
        boxSizing: 'border-box',
    };

    const flexCardsStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        width: '100%',
        maxWidth: '1200px',
        gap: '20px',
        flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
        padding: window.innerWidth <= 768 ? '0 10px' : '0'
    };

    return (
        <div className='cards' style={containerStyle}>
            <h3 style={textStyle}>{header}</h3>
            <div className='flexCards' style={flexCardsStyle}>
                {sentences.map((sentence, index) => (
                    <div
                        key={index}
                        style={cardStyle}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-6px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                            e.currentTarget.style.border = '1px solid #888';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
                            e.currentTarget.style.border = '1px solid #444';
                        }}
                    >
                        {sentence}
                        {isProject && links[index] && (
                            <a
                                style={linkStyle}
                                href={links[index]}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {links[index]}
                            </a>
                        )}
                    </div>
                ))}
                {isProject && [...Array(2)].map((_, i) => (
                    <div key={`coming-soon-${i}`} style={{
                        ...cardStyle,
                        border: '2px dashed #888',
                        background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)',
                        color: '#555',
                        opacity: 0.95,
                        textAlign: 'center',
                        fontStyle: 'italic',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease',
                        cursor: 'not-allowed'
                    }}
                         onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                         onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
                    >
                        <div>
                            <div style={{ fontSize: '1.6em', marginBottom: '8px' }}>🚧 Coming Soon</div>
                            <div style={{ fontSize: '0.95em', color: '#777' }}>New project on the way!</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Cards;
