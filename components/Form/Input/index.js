
export default function CenterInput(props) {

    const style={
        display: "flex",
        justifyContent: "center",
        paddingTop: "15px"
    }

    return (
      <div style={style}>
          <div style={{marginRight: "10px"}}>{props.label}</div>
          <input type={props.type} onChange={props.cb}></input>
      </div>
    )
  }