import "./LandingPage.css"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="title-container">
                <ParallaxProvider>
                    <Parallax opacity={[3, -1]}>
                        <h1 className="title">Alex Mercer.</h1>
                    </Parallax>

                    <Parallax opacity={[2, -0.9]}>
                        <h3>Full Stack Developer</h3>
                    </Parallax>
                </ParallaxProvider>
            </div>
        </div>
    )
}

// translateX={[170, -200]}
// translateX={[0, 0]}

export default LandingPage
