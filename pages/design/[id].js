import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Title from "./../../components/Layout/Title";
import Section from "./../../components/Layout/Section";
import Page from "./../../components/Layout/Page";
import Chunk from "../../components/Layout/Chunk";
import EditChunk from "./../../components/Form/EditChunk";


export default function Design() {

  const Router = useRouter();
  const {id} = Router.query;
  const [event,setEvent] = useState({
    title: "Test Event",
    date: "08/01/2020",
    start_time: "10:00 AM",
    end_time: "12:00 PM"
  });
  const defaultLayout = [
    {name: "Title",class: "title",color: "#333333",text: event.title},
    {name: "Paragraph",class: "paragraph",color: "#333333",text:"(your text goes here)"},
    {name: "Event Times",class: "eventTimes",color: "#333333",text: event.start_time + " - " + event.end_time},
    {name: "Event Date",class: "eventDate",color: "#333333",text: event.date}
  ]
  const [layout,setLayout] = useState(defaultLayout);
  const [edit,setEdit] = useState();

  const closeEdit = () => setEdit();

  const addElement = (newElement) => {
    setLayout(layout => [...layout, newElement])
    console.log(layout)
  };

  const removeElement = (order) => {
    console.log("remove " + order)
    setLayout(layout.filter((item,index) => index !== order));
    console.log(layout)
    closeEdit()
  };

  const componentList = [
    {name: "Title",class: "title",color: "#333333",text: event.title},
    {name: "Paragraph",class: "paragraph",color: "#333333",text:"(your text goes here)"},
    {name: "Event Times",class: "eventTimes",color: "#333333",text: event.start_time + " - " + event.end_time},
    {name: "Event Date",class: "eventDate",color: "#333333",text: event.date}
  ];

  const addButtons = componentList.map((component) => 
    <button key={component.name} className="softButton" element={component} onClick={() => addElement(component)}>{component.name}</button>
  );

  const showEdit = (e,order) => {
    // console.log(e.target);
    console.log("edit layout item: " + order);
    setEdit(order)
  };

  const setElementState = (event) => {
    console.log(event.target.value);
    console.log(event.target.getAttribute("attr"))
    // console.log(event.target);
    // console.log(layout[edit]);
    
    const newLayout = layout.map((element,index) => {
      if (index === edit) {
        // console.log("got it at: " + index)
        const updatedElement = {
          ...element,
          [event.target.getAttribute("attr")]: event.target.value,
        };
        return updatedElement;
      }else{
        // console.log("nah: " + index)
        return element;
      }
    })
    // console.log(newLayout);
    setLayout(newLayout);
  };

  const handleActive = (index) => {
    if(edit === index){
      return true
    }else{
      return false
    }
  }

  // map over layout
  const mapLayout = layout.map((element,index) =>
    <Chunk key={index} element={element} editable="true" active={handleActive(index)} edit={(event) => showEdit(event,index)}></Chunk>
  );

  return (
    <Page margin="10vw">
      <EditChunk element={layout[edit]} display="block" handleState={setElementState} handleRemove={()=>removeElement(edit)} handleClose={closeEdit}/>
      <Title size="50px">{event.title}</Title>
        <Section>
          {addButtons}
        </Section>
        <Section direction="column" top="40px">
          {mapLayout}
        </Section>
        <Section>
          <button>preview</button>
        </Section>
    </Page>
  )
}