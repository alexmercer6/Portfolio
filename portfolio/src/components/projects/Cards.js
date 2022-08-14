import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"

export default function MultiActionAreaCard({
    title,
    image,
    details,
    webLink,
    technologies,
}) {
    return (
        <Card sx={{ width: 345, margin: "20px" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={title + " image"}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {details}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>{technologies}</strong>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    variant="text"
                    size="small"
                    color="primary"
                    href={webLink}
                    target="_blank"
                >
                    {"Go to " + title}
                </Button>
            </CardActions>
        </Card>
    )
}
