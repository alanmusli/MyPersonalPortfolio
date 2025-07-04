import PersonalNav from './navbar.jsx'
import NavNav from './navnav.jsx'

const educationData = [
    {
        title: "Elementary School Diploma",
        institution: "Goce Delcev, Tetovo",
        date: "2011 - 2020",
        field: ""
    },
    {
        title: "Basics of HTML, CSS, and JavaScript",
        institution: "Semos Education",
        date: "2020 - 2021",
        field: "",
    },
    {
        title: "High School Diploma",
        institution: "Gymnasium Kiril Pejcinovik, Tetovo",
        date: "2020 - 2024",
        field: "Natural Sciences and Mathematics High School"
    },
    {
        title: "Bachelor of Information Science in Software Engineering and Information Technologies",
        institution: "FCSE, “Ss. Cyril and Methodius” University ",
        date: "2024 - present",
        field: "Software Engineering and Information Systems"
    },

]

function Education() {


    return (
        <>
        <PersonalNav/>
            <NavNav/>
            <div style={{display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                backgroundColor: '#2c3e50',
                marginLeft: '30px',
                overflow: 'hidden'}}>
            <div style={{
                width: '80%',
                overflowX: 'auto',
                padding: '40px 20px',
                backgroundColor: '#2c3e50'
            }}>
                <h2 style={{position: 'absolute',
                    textTransform: 'uppercase',
                    top: window.innerWidth>768 ?  '50px' : '20%',
                    right: window.innerWidth>768 ?  '40%' : '25%',
                }}>My Education Timeline</h2>
                <div style={{ // containerSoKarticke
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    paddingBottom: '50px',
                    minWidth:window.innerWidth>768 ?`${educationData.length * 450}px`:`${educationData.length * 330}px`
                }}>
                    <div style={{ //linija
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        right: 0,
                        height: '4px',
                        backgroundColor: '#777',
                        zIndex: 0,
                    }} />
                    <div style={{
                        position: 'relative',
                        width: '20px',
                        height: '20px',
                        bottom: '3px',
                        left: '80%',
                        marginLeft: '10px',
                        alignSelf: 'center',
                        marginTop: '60px', //
                        zIndex: 1,
                        clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                        backgroundColor: '#00bcd4',
                    }} />

                    {educationData.map((edu, i) => (
                        <div key={i} style={{
                            position: 'relative',
                            zIndex: 1,
                            width: '280px',
                            minHeight: '160px',
                            margin: '0 20px',
                            backgroundColor: '#34495e',
                            borderRadius: '12px',
                            padding: '20px',
                            boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
                            color: '#ecf0f1',
                            textAlign: 'center',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease'
                        }}

                             onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                             onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                            <div style={{ //krug
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                backgroundColor: '#00bcd4',
                                border: '3px solid #ecf0f1',
                                position: 'absolute',
                                top: '10px',
                                left: 'calc(50% - 8px)',
                            }}></div>
                            <h3 style={{ margin: '10px 0 5px' }}>{edu.title}</h3>
                            <h4 style={{ color: '#bdc3c7', fontSize: '0.95em', margin: '5px 0' }}>{edu.institution}</h4>
                            <p style={{ fontSize: '0.85em', color: '#aaa' }}>{edu.date}</p>
                            <p style={{ fontSize: '0.85em', color: '#aaa' }}>{edu.field}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>


        </>

    )
}
export default Education;