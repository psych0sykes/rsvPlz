export default function Page(props) {

    const defaultStyle = {
        marginRight: props.margin ? props.margin : "10vw",
        marginLeft: props.margin ? props.margin : "10vw"
    }

    return (
      <div style={defaultStyle} className="page">
          {props.children}
      </div>
    )
  }