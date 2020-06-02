export default function Chunk(props) {

    return (
      <div className={props.element.class} style={props.element.style}>
          {props.element.text}
      </div>
    )
  }