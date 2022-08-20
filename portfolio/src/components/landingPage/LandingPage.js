import "./LandingPage.css"
import "animate.css"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="title-container">
                <ParallaxProvider>
                    <Parallax opacity={[3, -1]}>
                        <h1
                            className="title animate__animated animate__fadeInDown"
                            style={{ marginBottom: "20px" }}
                        >
                            Alex Mercer.
                        </h1>
                        <h2
                            className="animate__animated animate__fadeInUp animate__delay-1s"
                            style={{ marginBottom: "40px", marginTop: 0 }}
                        >
                            Full Stack Developer
                        </h2>
                        <h3 className="animate__animated animate__fadeIn animate__delay-2s">
                            Javascript | Python | React | Node | Express | Flask
                            | PostgresSQL | AWS S3
                        </h3>
                    </Parallax>
                </ParallaxProvider>
            </div>
        </div>
    )
}

// translateX={[170, -200]}
// translateX={[0, 0]}

export default LandingPage
