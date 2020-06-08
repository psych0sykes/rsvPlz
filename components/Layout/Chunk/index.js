import { useState } from "react";

export default function Chunk(props) {

  const show = props.show;

    const style = {
      color: props.element.color,
    }

    return (
      <div className="chunk" onClick={props.click}>
        <div style={{float: "right",display: show ? "block" : "none"}} onClick={props.edit}>
          edit
        </div>
        <div className={props.element.class} style={style} order={props.element.order}>
            {props.element.text}
        </div>
      </div>
    )
  }