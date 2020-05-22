
export default function Title(props) {

    const defaultStyle = {
        fontSize: props.size ? props.size : "100px",
        color: props.color ? props.color : "#333333",
    }

    return (
      <div style={defaultStyle} className="title">
          {props.children}
      </div>
    )
  }