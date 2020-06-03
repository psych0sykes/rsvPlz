import { useState } from "react";

export default function Chunk(props) {

  const edit = props.edit;

    return (
      <div className="chunk">
        <div style={{float: "right"}}>
          X
        </div>
        <div className={props.element.class} style={props.element.style} order={props.element.order}>
            {props.element.text}
        </div>
      </div>
    )
  }