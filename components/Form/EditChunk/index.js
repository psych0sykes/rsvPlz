import Input from "./../Input";
import Section from "./../../Layout/Section";

export default function EditChunk(props) {

    const style = {
        display: props.display ? "block" : "none",
        position: "absolute",
        width: "50vw",
        right: "5vw",
        left: "5vw",
        padding: "10px",
        backgroundColor: "white",
        opacity: "1",
        boxShadow: "2px 4px 4px lightgray",
        border: "2px solid gray"
    }

    function handleSubmit(event){
      console.log(event);
    }

    function handleRemove(event){
      console.log(event.target);
      console.log(props.element)
    }

    function handleClose(event){
      
    }

    if(props.element){
    return (
    <div style={style}>
      <Section className="editChunk" direction="column">
        <Input label="text" type="text" value={props.element.text} cb={(event) => props.handleState(event)}></Input>
        <Input label="color" type="text" value={props.element.color} cb={(event) => props.handleState(event)}></Input>
        {/* <Input label="size (px)" value={element.size} type="range"></Input> */}
        <Section>
        <button className="mildButton" type="submit" value="Submit" onClick={(event)=>handleSubmit(event)}>save</button>
        <button className="mildButton" value="close" onClick={()=>props.handleClose()}>close</button>
        <button className="softButton" value="close" onClick={(event)=>props.handleRemove(props.element.order)}>remove</button>
        </Section>
      </Section>
    </div>
    )
    }else{
      return(
        <div></div>
      )
    }
  }