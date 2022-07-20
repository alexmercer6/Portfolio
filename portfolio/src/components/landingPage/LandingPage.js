import "./LandingPage.css"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="title-container">
                <ParallaxProvider>
                    <Parallax translateX={[170, -200]} opacity={[3, -1]}>
                        <h1 className="title">Alex Mercer.</h1>
                    </Parallax>

                    <Parallax translateX={[0, 0]} opacity={[2, -0.9]}>
                        <h3>Full Stack Developer</h3>
                    </Parallax>
                </ParallaxProvider>
            </div>
        </div>
    )
}

export default LandingPage
