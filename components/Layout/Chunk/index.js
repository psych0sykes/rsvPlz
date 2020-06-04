import { useState } from "react";

export default function Chunk(props) {

  const show = props.show;

    return (
      <div className="chunk" onClick={props.click}>
        <div style={{float: "right",display: show ? "block" : "none"}} onClick={props.edit}>
          edit
        </div>
        <div className={props.element.class} style={props.element.style} order={props.element.order}>
            {props.element.text}
        </div>
      </div>
    )
  }