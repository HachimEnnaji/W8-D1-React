import React from "react";

function ButtonComponent(props) {
  return <button className={props.className}> {props.buttonText}</button>;
}

export default ButtonComponent;
