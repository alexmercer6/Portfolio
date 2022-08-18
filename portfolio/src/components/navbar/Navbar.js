import "./Navbar.css"
import { Link, Switch } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
// import LaptopMacIcon from "@mui/icons-material/LaptopMac"

function Navbar({ darkmode, setDarkmode }) {
    const handleChange = () => {
        setDarkmode((prevMode) => !prevMode)
    }
    return (
        <div>
            <div>
                <Box>
                    <AppBar position="fixed" color="">
                        <Toolbar>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                Lets Build.
                            </Typography>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{
                                    mr: 2,
                                    display: { md: "none" },
                                    justifySelf: "flex-end",
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            {/* <div className="nav-link"> */}
                            <Link
                                sx={{
                                    display: { md: "block", xs: "none" },
                                    mr: 1,
                                }}
                                underline="hover"
                                color={"black"}
                                href="#about"
                            >
                                <strong>About</strong>
                            </Link>
                            {/* </div> */}

                            {/* <div className="nav-link"> */}
                            <Link
                                sx={{
                                    display: { md: "block", xs: "none" },
                                    mr: 1,
                                }}
                                underline="hover"
                                color={"black"}
                                href="#projects"
                            >
                                <strong>Projects</strong>
                            </Link>
                            {/* </div> */}

                            {/* <div className="nav-link"> */}
                            <Link
                                sx={{
                                    display: { md: "block", xs: "none" },
                                }}
                                underline="hover"
                                color={"black"}
                                href="#contact"
                            >
                                <strong>Contact me</strong>
                            </Link>
                            {/* </div> */}
                            <Switch
                                checked={darkmode}
                                onChange={handleChange}
                            />
                        </Toolbar>
                    </AppBar>
                </Box>

                {/* <div className="nav-link">
                    <Link
                        underline="hover"
                        color={darkmode ? "white" : "black"}
                        href="#about"
                    >
                        About
                    </Link>
                </div>

                <div className="nav-link">
                    <Link
                        underline="hover"
                        color={darkmode ? "white" : "black"}
                        href="#projects"
                    >
                        Projects
                    </Link>
                </div>

                <div className="nav-link">
                    <Link
                        underline="hover"
                        color={darkmode ? "white" : "black"}
                        href="#contact"
                    >
                        Contact me
                    </Link>
                </div>
                <Switch checked={darkmode} onChange={handleChange} /> */}
            </div>
        </div>
    )
}

export default Navbar
