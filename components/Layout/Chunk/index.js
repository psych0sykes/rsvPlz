import { useState } from "react";

export default function Chunk(props) {

  const show = props.editable;

    const style = {
      color: props.element.color,
    }

    return (
      <div className={"chunk pointer " + (props.active ? "highlight" : "")} onClick={props.click}>
        <div style={{float: "right",display: show ? "block" : "none"}} className={"hoverAccent"} onClick={props.edit}>
          edit
        </div>
        <div className={props.element.class} style={style} order={props.element.order}>
            {props.element.text}
        </div>
      </div>
    )
  }