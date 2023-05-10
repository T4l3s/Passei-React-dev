import * as React from "react";
import "../styles/Alert.css";

export default function Alert_Error({ Notice, Color }) {
  return (
    <input
      className="Tab"
      id={`${Color}`}
      type="button"
      value={`${Notice}`}
      disabled
    ></input>
  );
}
