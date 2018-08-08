import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";

import PropTypes from "prop-types";

import classNames from "classnames";

import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  withStyles,
  Toolbar,
  AppBar,
  Typography,
  IconButton
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit,
    minWidth: 60,
    background: "#E0415D"
  },
  icon: {
    margin: theme.spacing.unit
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
  title: {
    color: "#E0415D",
    "text-align": "left",
    margin: theme.spacing.unit
  }
});
export class navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} dir="rtl">
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Grid
              container
              alignContent="space-around"
              direction="row"
              spacing={24}
            >
              <Grid item xs={1}>
                <Link
                  to={process.env.PUBLIC_URL + "/login"}
                  className={classes.link}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    className={
                      classNames(classes.button, classes.loginbutton) + "button"
                    }
                    fullWidth="true"
                  >
                    تسجيل الدخول
                  </Button>
                </Link>
              </Grid>

              <Grid item xs={1}>
                <Link
                  to={process.env.PUBLIC_URL + "/register"}
                  className={classes.link}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    className={classNames(
                      classes.button,
                      classes.registerbutton
                    )}
                    fullWidth="true"
                  >
                    حساب جديد
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link
                  to={process.env.PUBLIC_URL + "/contact-us"}
                  className={classes.link}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    className={classNames(
                      classes.button,
                      classes.contactbutton
                    )}
                    fullWidth="true"
                  >
                    تواصل معنا
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link
                  to={process.env.PUBLIC_URL + "/"}
                  className={classes.link}
                >
                  <IconButton aria-label="home">
                    <HomeIcon className={classes.icon} />
                  </IconButton>
                </Link>
              </Grid>
              {/* <Grid item xs={6}/> */}

              <Grid item xs>
                <Typography
                  variant="headline"
                  color="inherit"
                  className={classes.title}
                  centered
                >
                  Forty Days
                </Typography>
              </Grid>
            </Grid>
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
