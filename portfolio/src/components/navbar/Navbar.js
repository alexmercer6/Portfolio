import "./Navbar.css"
import { Link, Switch } from "@mui/material"
// import LaptopMacIcon from "@mui/icons-material/LaptopMac"

function Navbar({ darkmode, setDarkmode }) {
    const handleChange = () => {
        setDarkmode((prevMode) => !prevMode)
    }
    return (
        <div className={darkmode ? "navbar dark-mode" : "navbar"}>
            <div>
                <h1>Lets Build.</h1>
                <div className="nav-link">
                    <Link
                        underline="hover"
                        color={darkmode ? "white" : "black"}
                    >
                        About
                    </Link>
                </div>

                <div className="nav-link">
                    <Link
                        underline="hover"
                        color={darkmode ? "white" : "black"}
                    >
                        Projects
                    </Link>
                </div>

                <div className="nav-link">
                    <Link
                        underline="hover"
                        color={darkmode ? "white" : "black"}
                    >
                        Contact me
                    </Link>
                </div>
                <Switch checked={darkmode} onChange={handleChange} />
            </div>
        </div>
    )
}

export default Navbar
