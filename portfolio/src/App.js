import "./App.css"
import About from "./components/about/About"
import LandingPage from "./components/landingPage/LandingPage"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"

function App() {
    return (
        <div className="App">
            <Navbar />
            <LandingPage />
            <About />
            <Projects />
        </div>
    )
}

export default App
