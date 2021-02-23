import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme)=>({
    root:{
    }
}))

export default function SinglePost() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card>
            <CardHeader title="this is header" />
                
            <CardContent>
                this is content
            </CardContent>
            </Card>         
        </div>
    )
}
