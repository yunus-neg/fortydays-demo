import React, { Component } from "react";
import logo from "../../../images/logo.png";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
const styles = theme => ({
  text: {
    "text-align": "left"
    // background: "rgb(255,0,0)"
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing.unit,
    background: "#E0415D"
  },
  link: {
    "text-decoration-line": "none"
  }
});
export class home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} dir="rtl">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <center>
              <br />
              <img src={logo} alt="logo" />
            </center>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2 dir="rtl" className={classes.text}>
              يقدم موقع Forty Days
            </h2>
          </Grid>
          <Grid item xs={12} sm={6} />

          <Grid item xs={12} sm={4} />
          <Grid item xs={12} sm={8}>
            <h3 dir="rtl">
              البرامج التدريبيّة سواءً المكثّفة أو الغير مكثّفة، المدفوعة أو
              المجّانيّة
              <br />
              لكلّ المُهتمين بمجالات التقنيّة والإنترنت
            </h3>
          </Grid>
          <Grid item xs={6} sm={3} />
          <Grid item xs={6} sm={4} />
          <Grid item xs={6} sm={3}>
            <Link to={process.env.PUBLIC_URL+"/apply-for-program"} className={classes.link}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                طلب التحاق
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}
home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(home);
