
export default function CenterInput(props) {

    const style={
        display: "flex",
        justifyContent: "center"
    }

    return (
      <div style={style}>
          <div style={{marginRight: "10px"}}>{props.label}</div>
          <input type={props.type} onClick={props.cb}></input>
      </div>
    )
  }