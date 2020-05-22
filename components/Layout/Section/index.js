export default function Section(props) {

    const defaultStyle = {
        display: "flex",
        justifyContent: props.justify ? props.justify : "center",
        flexWrap: props.wrap ? props.wrap : "wrap"
    }

    return (
      <div style={defaultStyle} className="section">
          {props.children}
      </div>
    )
  }