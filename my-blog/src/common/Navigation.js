import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root:{
      fontSize:16
    },
    list:{
      display:'flex',
    }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navigation(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              <List className={classes.list}>
                <ListItem>Home</ListItem>
                <ListItem>Post</ListItem>
              </List>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
      </React.Fragment>
    </div>
  );
}
