import "./Navbar.css"
import { Link, Switch } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import MenuItem from "@mui/material/MenuItem"

import IconButton from "@mui/material/IconButton"
import { useState } from "react"

// import LaptopMacIcon from "@mui/icons-material/LaptopMac"

function Navbar({ darkmode, setDarkmode }) {
    const sections = ["About", "Projects", "Contact Me"]
    const [anchorElNav, setAnchorElNav] = useState(null)
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleChange = () => {
        setDarkmode((prevMode) => !prevMode)
    }

    return (
        <div>
            <Box sx={{ margin: 0 }}>
                <AppBar position="fixed" color="">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Let's Build.
                        </Typography>
                        <Switch
                            sx={{
                                display: { xs: "none", md: "flex" },
                            }}
                            checked={darkmode}
                            onChange={handleChange}
                        />

                        {sections.map((section, index) => {
                            return (
                                <Link
                                    key={index}
                                    sx={{
                                        display: {
                                            md: "block",
                                            xs: "none",
                                        },
                                        mr: 2,
                                    }}
                                    underline="hover"
                                    color={"black"}
                                    href={`#${section}`}
                                >
                                    {section}
                                </Link>
                            )
                        })}

                        <Box
                            sx={{
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="sections"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {sections.map((section) => (
                                    <MenuItem
                                        key={section}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Link
                                            href={`#${section}`}
                                            underline="hover"
                                            color={"black"}
                                        >
                                            {section}
                                        </Link>
                                    </MenuItem>
                                ))}
                                <MenuItem>
                                    <Switch
                                        checked={darkmode}
                                        onChange={handleChange}
                                    />
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar
