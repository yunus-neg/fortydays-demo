import React, { Component } from "react";
import logo from "../../../images/logo.png";

import PropTypes from "prop-types";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControlLabel,
  Checkbox,
  withStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = theme => ({
  card: {
    marginTop: "2%",
    // maxWidth: 345,
    width: 494
  },
  media: {
    height: 0,
    paddingTop: "80%" // 16:9
  },
  text: {
    textAlign: "center",
    color: "#E0415D"
  },
  button: {
    margin: theme.spacing.unit,
    width: "auto"
  },
  loginbutton: {
    background: "#E0415D"
  },
  registerbutton: {
    background: "#774CEE"
  },
  link: {
    "text-decoration-line": "none"
  }
});
export class login extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" dir="rtl">
        <Card className={classes.card} elevation={15}>
          <CardMedia
            image={logo}
            title="Contemplative Reptile"
            className={classes.media}
          />
          <h4 className={classes.text}>تسجيل دخول مستخدم</h4>
          <CardContent>
            <center>
              <TextField
                name="username"
                placeholder="بريد المستخدم"
                type="email"
                margin="normal"
              />

              <br />
              <TextField
                name="password"
                placeholder="كلمة المرور"
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
              <br />
              <FormControlLabel
                control={<Checkbox />}
                label="حفظ كلمة المرور"
              />
            </center>
          </CardContent>
          <CardActions>
            <Grid item xs={6} xm={2}>
              <Link to="/" className={classes.link}>
                <Button
                  variant="raised"
                  color="secondary"
                  fullWidth="true"
                  className={classes.login}
                >
                  تسجيل الدخول
                </Button>
              </Link>
            </Grid>
            <Grid item xs={1} xm={1} />
            <Grid item xs={6} xm={12}>
              <Link to="/register" className={classes.link}>
                <Button
                  variant="raised"
                  color="primary"
                  fullWidth="true"
                  className={classes.registerbutton}
                >
                  إنشاء حساب
                </Button>
              </Link>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
login.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(login);
