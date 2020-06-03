export default function Section(props) {

    const defaultStyle = {
        display: "flex",
        justifyContent: props.justify ? props.justify : "center",
        alignContent: props.align ? props.align : "center",
        flexWrap: props.wrap ? props.wrap : "wrap",
        flexDirection: props.direction ? props.direction : "row"
    }

    return (
      <div style={defaultStyle} className="section">
          {props.children}
      </div>
    )
  }