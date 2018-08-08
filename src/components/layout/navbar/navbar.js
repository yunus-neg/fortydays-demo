import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  icon: {
    margin: theme.spacing.unit,
  },
  loginbutton: {
    background: "#E0415D"
  },
  registerbutton: {
    background: "#00AE9E"
  },
  contactbutton: {
    background: "#774CEE"
  },
  link: {
    "text-decoration-line": "none"
  },
  title:{
    // marginRight:"15px",
    // marginLeft:"-40px",
    color:"#E0415D",
    "text-align":"left",
    width:"75%"


  }
});
export class navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} dir="rtl">
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Link to="/login" className={classes.link}>
              <Button
                variant="contained"
                color="secondary"
                className={
                  classNames(classes.button, classes.loginbutton) + "button"
                }
              >
                تسجيل الدخول
              </Button>
            </Link>
            <Link to="/register" className={classes.link}>
              <Button
                variant="contained"
                color="primary"
                className={classNames(classes.button, classes.registerbutton)}
              >
                حساب جديد
              </Button>
            </Link>
            <Link to="/contact-us" className={classes.link}>
              <Button
                variant="contained"
                color="primary"
                className={classNames(classes.button, classes.contactbutton)}
              >
                تواصل معنا
              </Button>
            </Link>
            <Link to="/" className={classes.link}>
              <IconButton className={classes.button} aria-label="home">
                <HomeIcon className={classes.icon} />
              </IconButton>
            </Link>
            <Typography variant="headline" color="inherit" className={classes.title} centered >
            Forty Days
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(navbar);
