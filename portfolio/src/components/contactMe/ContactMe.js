import "./ContactMe.css"
import { Button, CircularProgress, TextField } from "@mui/material"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

function ContactMe() {
    const [msg, setMsg] = useState("Send Details")
    const [errorMsg, setErrorMsg] = useState("")
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        setMsg(<CircularProgress color="inherit" />)

        emailjs
            .sendForm(
                "service_xiihvhn",
                "contact_form",
                form.current,
                "2vELhS6Z3Kl0qGNs0"
            )
            .then(
                (result) => {
                    console.log(result.text)
                    setMsg("Thankyou. I'll be in touch!")
                    form.current.name.value = ""
                    form.current.email.value = ""
                    form.current.company.value = ""
                    form.current.message.value = ""
                },
                (error) => {
                    console.log(error.text)
                    setMsg("Send Details")
                    setErrorMsg(error.text)
                }
            )
    }

    return (
        <div className="contact-me">
            <h1>Contact Me</h1>
            <p style={{ fontSize: "20px", textAlign: "center" }}>
                Hi! 👋 Would you like me to join your team? Collaborate? Or just
                chat? <br></br>Leave your details down below and we can get
                started :)
            </p>
            <form className="contact-form" ref={form}>
                <TextField label="Name" variant="filled" name="name" />
                <TextField label="Email" variant="filled" name="email" />
                <TextField label="Company" variant="filled" name="company" />
                <TextField
                    label="Message"
                    variant="filled"
                    name="message"
                    multiline
                    rows={4}
                />
                <Button
                    // type="submit"
                    variant="contained"
                    onClick={(e) => sendEmail(e)}
                    disabled={msg === "Thankyou. I'll be in touch!" && true}
                >
                    {msg}
                </Button>
                <p>{errorMsg}</p>
            </form>
        </div>
    )
}

export default ContactMe
