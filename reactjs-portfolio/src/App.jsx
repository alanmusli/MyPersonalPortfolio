
import Home from "./Home.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './Projects.jsx';
import Education from "./Education.jsx";
import Awards from "./Awards.jsx";
function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />}/>
                <Route path="/education" element={<Education />}/>
                <Route path="/awards/" element={<Awards />}/>
            </Routes>
        </Router>
    </>
  )
}

export default App