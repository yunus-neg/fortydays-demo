import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  link: {
    "text-decoration-line": "none"
  }
});
export class contact_us extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h2>
          تواصل معنا
          <i class="fas fa-comment-alt" />
        </h2>
        <div class="container">
          <form>
            <input type="text" name="name" />
            <label for="name">
              <span class="star">*</span> الاسم
            </label>
            <br />
            <br />
            <input type="email" name="usermail" />
            <label for="usermail">
              <span class="star">*</span> البريد الإلكتروني
            </label>
            <br />
            <br />
            <input type="email" name="messageTitle" />
            <label for="messageTitle">
              <span class="star">*</span> عنوان الرسالة
            </label>
            <br />
            <br />
            <input type="email" name="message" />
            <label for="message">
              <span class="star">*</span> الرسالة
            </label>
            <br />
            <br />
          </form>
        </div>
        <Link to={process.env.PUBLIC_URL + "/"} className={classes.link}>
          <input class="subButton" type="submit" value="إرسال" />
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(contact_us);
