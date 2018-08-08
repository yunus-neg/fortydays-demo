import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import img from "../../../images/personalImage.png";

const styles = theme => ({
  link: {
    "text-decoration-line": "none"
  }
});
export class profile extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h2> الملف الشخصي </h2>

        <img src={img} />
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
            <div class="gender">
              <label> الجنس</label>
              <br />
              <input type="radio" name="gender" value="male" /> ذكر
              <input type="radio" name="gender" value="female" /> أنثى
            </div>

            <br />
            <br />
            <select>
              <option>اختر</option>
              <option value="master">ماجستير</option>
              <option value="Bachelor">بكالوريوس</option>
              <option value="highschool">ثانوي</option>
              <option value="other">غير ذلك</option>
            </select>
            <label>
              <span class="star">*</span> التعليم
            </label>
          </form>
        </div>
        <Link to={process.env.PUBLIC_URL + "/"} className={classes.link}>
          <input class="subButton" type="submit" value="حفظ" />
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(profile);
