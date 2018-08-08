import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  link: {
    "text-decoration-line": "none"
  }
});
export class send_tasks extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h2>
          إرسال مهمة
          <i class="fas fa-file-medical" />
        </h2>
        <div class="container">
          <form>
            <input type="text" name="taskName" />
            <label for="taskName">
              <span class="star">*</span> عنوان المهمة
            </label>
            <br />
            <br />

            <textarea rows="8" cols="33" name="taskDetails" />
            <label for="taskDetails">
              <span class="star">*</span> تفاصيل المهمة
            </label>
            <br />
            <br />

            <input type="email" name="taskTime" />
            <label for="taskTime">
              <span class="star">*</span> زمن المهمة
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

export default withStyles(styles)(send_tasks);
