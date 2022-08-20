import "./App.css"
import About from "./components/about/About"
import ContactMe from "./components/contactMe/ContactMe"
import LandingPage from "./components/landingPage/LandingPage"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { useState } from "react"
import { Fab } from "@mui/material"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

function App() {
    const [darkmode, setDarkmode] = useState(false)
    return (
        <div className={darkmode ? "App dark-mode" : "App"}>
            <ParallaxProvider>
                <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
                <div style={{ maxWidth: "1200px", margin: "auto" }}>
                    <LandingPage />
                    <Parallax opacity={[3, -1.2]}>
                        <About />
                    </Parallax>
                    <Parallax opacity={[3, -0.5]}>
                        <Projects />
                    </Parallax>
                    <Parallax opacity={[3, -1]}>
                        <ContactMe
                            darkmode={darkmode}
                            setDarkmode={setDarkmode}
                        />
                    </Parallax>
                    <Fab
                        size="medium"
                        color="primary"
                        aria-label="add"
                        href="#"
                        sx={{ position: "fixed", bottom: 60, right: 60 }}
                    >
                        <KeyboardArrowUpIcon />
                    </Fab>
                </div>
            </ParallaxProvider>
        </div>
    )
}

export default App
