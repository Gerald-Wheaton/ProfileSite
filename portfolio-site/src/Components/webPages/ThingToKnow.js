import React from "react"
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl"
//import PaintSplash from "../resumeBackground.jpg"

function ProjectCard() {
    return (
        <div>
            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}} />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        </div>
    )
}

export default ProjectCard