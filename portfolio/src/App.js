import "./App.css"
import About from "./components/about/About"
import ContactMe from "./components/contactMe/ContactMe"
import LandingPage from "./components/landingPage/LandingPage"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { useState } from "react"

function App() {
    const [darkmode, setDarkmode] = useState(false)
    return (
        <div className={darkmode ? "App dark-mode" : "App"}>
            <ParallaxProvider>
                <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
                <LandingPage />
                <Parallax opacity={[-1.5, 4]}>
                    <About />
                </Parallax>
                <Parallax opacity={[-1.5, 4]}>
                    <Projects />
                </Parallax>
                <Parallax opacity={[-1.5, 4]}>
                    <ContactMe darkmode={darkmode} setDarkmode={setDarkmode} />
                </Parallax>
            </ParallaxProvider>
        </div>
    )
}

export default App
