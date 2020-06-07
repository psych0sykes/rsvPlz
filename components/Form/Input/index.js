
export default function CenterInput(props) {

    const style={
        display: "flex",
        justifyContent: "center",
        paddingTop: "15px"
    }

    return (
      <div style={style}>
          <div style={{marginRight: "10px"}}>{props.label}</div>
          <input attr={props.label} type={props.type} size={props.size} onChange={props.cb} value={props.value}></input>
      </div>
    )
  }