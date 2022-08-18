import Cards from "./Cards"
import grow_gif from "../../assets/grow_app.gif"
import zing_gif from "../../assets/zing.gif"
import wordle_gif from "../../assets/wordle.gif"
function Projects() {
    return (
        <div
            id="projects"
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: "column",
            }}
        >
            <div>
                <h1>Projects</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Cards
                    title={"Grow - Baby Milestones"}
                    details={
                        "Deployed full-stack CRUD application to track your baby's milestones, feed and sleep times, height and weight."
                    }
                    technologies={
                        "Python, Jinja, Flask, AWS S3, postgresSQL, HTML, CSS, Bootstrap"
                    }
                    webLink={"https://mysterious-waters-13860.herokuapp.com/"}
                    image={grow_gif}
                />
                <Cards
                    title={"Zing - Builder Job Tracker"}
                    details={
                        "Deployed full-stack CRUD application in react for a builder to track job progress, materials and trades. Connect with new trades and builders"
                    }
                    technologies={
                        "PostgresSQL, Express.js, React, Node, Material UI"
                    }
                    webLink={"https://buildbud.herokuapp.com/"}
                    image={zing_gif}
                />
                <Cards
                    title={"Wordle"}
                    details={
                        "Created Wordle, adding different modes of difficulty and added alternate themes. Handled letter duplication to correctly show colours. Light and Dark mode."
                    }
                    technologies={
                        "Vanilla Javascript, HTML, CSS, Local Storage"
                    }
                    webLink={"https://alexmercer6.github.io/Wordle-Game/"}
                    image={wordle_gif}
                />
            </div>
        </div>
    )
}

export default Projects
