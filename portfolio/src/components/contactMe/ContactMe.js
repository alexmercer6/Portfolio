import "./ContactMe.css"
import { TextField } from "@mui/material"

function ContactMe() {
    return (
        <div className="contact-me">
            <h1>Contact Me</h1>
            <p>
                Hi! Would you like to hire me? Collaborate? Or just chat? Leave
                your details down below and we can get started :)
            </p>
            <div className="contact-form">
                <TextField label="Name" variant="filled" />
                <TextField label="Email" variant="filled" />
                <TextField
                    label="Summary"
                    variant="filled"
                    multiline
                    rows={4}
                />
            </div>
        </div>
    )
}

export default ContactMe
