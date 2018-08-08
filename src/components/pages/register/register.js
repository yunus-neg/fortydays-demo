import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "../../../images/logo.png";

import {
  TextField,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
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

  registerbutton: {
    background: "#E0415D",
    margin: theme.spacing.unit
  },
  link: {
    "text-decoration-line": "none"
  },
  textf: {
    margin: theme.spacing.unit,
    marginRight: "20px"
  }
});

export class register extends Component {
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
          <h4 className={classes.text}>انشاء حساب جديد </h4>
          <CardContent>
            <TextField
              name="username"
              placeholder="الاسم الاول "
              margin="normal"
              className={classes.textf}
            />
            <TextField
              name="username"
              placeholder="اسم العائلة"
              className={classes.textf}
              margin="normal"
            />
            <br />
            <TextField
              name="username"
              placeholder="بريد المستخدم"
              type="email"
              margin="normal"
              className={classes.textf}
            />
            <br />
            <TextField
              name="password"
              placeholder="كلمة المرور"
              type="password"
              autoComplete="current-password"
              margin="normal"
              className={classes.textf}
            />
            <br />
          </CardContent>
          <CardActions>
            <Grid item xs={1} xm={1} />
            <Grid item xs={3} xm={3}>
              <Link to="/" className={classes.link}>
                <Button
                  variant="raised"
                  color="secondary"
                  fullWidth="true"
                  className={classes.registerbutton}
                >
                  تسجيل
                </Button>
              </Link>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
register.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(register);
