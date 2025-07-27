import PersonalNav from './navbar.jsx'
import NavNav from './navnav.jsx'
import Cards from './cards.jsx'

function Projects (){
    const sentences = [
        "I have made this portfolio site where you are at the moment, I've used React framework and I am really pleased that i had a chance to learn this framework",
        "I have made an online shop with HTML, CSS and JavaScript for the functionalities available for the client-side ",
    ];
    const header = [
        "🧠 My Projects"
    ]
    const links = [
        "https://github.com/alanmusli/MyPersonalPortfolio",
        "https://github.com/alanmusli/OnlineShop"
    ]
    return (
        <>
        <PersonalNav/>
        <NavNav/>
            <div className={'main'} style={{backgroundColor: '#c0c5cb', width: '100%',height: '100%'}}>
            <Cards sentences = {sentences} header = {header} links = {links} />

            </div>
        </>
    );
}
export default Projects;