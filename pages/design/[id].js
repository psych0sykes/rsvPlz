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
  const [layout,setLayout] = useState([
    {name: "Title",class: "title",color: "#333333",text: event.title,order: 0},
    {name: "Paragraph",class: "paragraph",color: "#333333",text:"(your text goes here)",order: 1},
    {name: "Event Times",class: "eventTimes",color: "#333333",text: event.start_time + " - " + event.end_time,order: 2},
    {name: "Event Date",class: "eventDate",color: "#333333",text: event.date,order: 3}
  ]);
  const [edit,setEdit] = useState(0);

  const addElement = (newElement) => {
    setLayout(layout => [...layout, newElement]);
    console.log(layout);
  };

  const orderElements = () => {return layout.length}

  const componentList = [
    {name: "Title",class: "title",color: "#333333",text: event.title,order: orderElements()},
    {name: "Paragraph",class: "paragraph",color: "#333333",text:"(your text goes here)",order: orderElements()},
    {name: "Event Times",class: "eventTimes",color: "#333333",text: event.start_time + " - " + event.end_time,order: orderElements()},
    {name: "Event Date",class: "eventDate",color: "#333333",text: event.date,order: orderElements()}
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
    
    const newLayout = layout.map((element) => {
      if (element.order === edit) {
        // console.log("got it at: " + element.order)
        const updatedElement = {
          ...element,
          [event.target.getAttribute("attr")]: event.target.value,
        };
        return updatedElement;
      }else{
        // console.log("nah: " + element.order)
        return element;
      }
    })
    // console.log(newLayout);
    setLayout(newLayout);
  };

  // map over layout
  const mapLayout = layout.map((element) =>
    <Chunk key={element.order} element={element} show="true" edit={(event) => showEdit(event,element.order)}></Chunk>
  );

  return (
    <Page margin="10vw">
      <EditChunk element={layout[edit]} display="block" handleState={setElementState}>wow</EditChunk>
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