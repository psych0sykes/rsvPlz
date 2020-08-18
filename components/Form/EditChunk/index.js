import Input from "./../Input";
import Section from "./../../Layout/Section";

export default function EditChunk(props) {

    const style = {
        display: props.display ? "block" : "none",
        // width: "70vw",
        // right: "15vw",
        // left: "15vw",
        padding: "10px",
        backgroundColor: "white",
        opacity: "1",
        boxShadow: "2px 4px 4px lightgray",
        border: "2px solid gray"
    }

    if(props.element){
    return (
      <div style={{width: "100%",display: "flex",alignContent: "center",justifyContent: "center",position: "absolute",right: "0px",top: "25vh"}}>
      <div style={style}>
        <Section className="editChunk" direction="column">
          <Input label="text" type="text" value={props.element.text} cb={(event) => props.handleState(event)}></Input>
          <Input label="color" type="text" value={props.element.color} cb={(event) => props.handleState(event)}></Input>
          {/* <Input label="size (px)" value={element.size} type="range"></Input> */}
          <Section>
          <button className="softButton" value="close" onClick={()=>props.handleRemove()}>remove</button>
          <button className="mildButton" value="close" onClick={()=>props.handleClose()}>close</button>
          </Section>
        </Section>
      </div>
      </div>
    )
    }else{
      return(
        <div></div>
      )
    }
  }