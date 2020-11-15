import React from "react";
import classes from "./MyTextInput.module.css";

const MyTextInput = (props) => {
  return (
    <input
      className={classes.myText}
      value={props.value}
      onChange={props.onChange}
      type="text"
      placeholder={props.placeholder}
    />
  );
};

export default MyTextInput;
