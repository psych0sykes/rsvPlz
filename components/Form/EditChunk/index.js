import Input from "./../Input";
import Section from "./../../Layout/Section";

export default function EditChunk(props) {

    const style = {
        // display: props.display ? "block" : "none",
        // position: "absolute",
        width: "90vw",
        right: "5vw",
        left: "5vw",
        padding: "10px",
        backgroundColor: "white",
        opacity: "1",
        boxShadow: "2px 4px 4px lightgray",
    }

    return (
    <div style={style}>
      <Section className="editChunk" direction="column">
        <Input label="text" type="text" value={props.element.text} cb={(event) => props.handleState(event)}></Input>
        <Input label="color" type="text" value={props.element.color} cb={(event) => props.handleState(event)}></Input>
        {/* <Input label="size (px)" value={element.size} type="range"></Input> */}
        <Section>
        <button className="mildButton" type="submit" value="Submit" onClick={(event)=>handleSubmit(event)}>save</button>
        {/* <button className="softButton" value="close" onClick={(event)=>handleClose(event)}>cancel</button> */}
        </Section>
      </Section>
    </div>
    )
  }