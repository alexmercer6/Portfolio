import "./Navbar.css"
import { Link } from "@mui/material"
import LaptopMacIcon from "@mui/icons-material/LaptopMac"

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <h1></h1>
                <div className="nav-link">
                    <Link underline="hover" color={"black"}>
                        About
                    </Link>
                </div>

                <div className="nav-link">
                    <Link underline="hover" color={"black"}>
                        Projects
                    </Link>
                </div>

                <div className="nav-link">
                    <Link underline="hover" color={"black"}>
                        Contact me
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
