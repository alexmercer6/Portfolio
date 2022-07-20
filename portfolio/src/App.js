import "./App.css"
import About from "./components/about/About"
import LandingPage from "./components/landingPage/LandingPage"
import Navbar from "./components/navbar/Navbar"

function App() {
    return (
        <div className="App">
            <Navbar />
            <LandingPage />
            <About />
        </div>
    )
}

export default App
