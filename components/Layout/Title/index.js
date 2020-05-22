
export default function Title(props) {

    const defaultStyle = {
        fontSize: "100px",
        color: "#ffa06e",
    }

    return (
      <div style={defaultStyle} className="title">
          {props.children}
      </div>
    )
  }