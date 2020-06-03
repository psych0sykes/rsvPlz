import { useState } from "react";
import { useRouter } from "next/router";
import Title from "./../../components/Layout/Title";
import Section from "./../../components/Layout/Section";
import Page from "./../../components/Layout/Page";
import Chunk from "../../components/Layout/Chunk";


export default function Design() {

  const Router = useRouter();
  const {id} = Router.query;
  const [layout,setLayout] = useState([]);
  const [event,setEvent] = useState({
    title: "Test Event",
    date: "08/01/2020",
    start_time: "10:00 AM",
    end_time: "12:00 PM"
  })

  const addElement = (newElement) => {
    setLayout(layout => [...layout, newElement])
    console.log(layout)
  };

  const exampleEvent = {
    title: "Test Event",
    date: "08/01/2020",
    start_time: "10:00 AM",
    end_time: "12:00 PM"
  }

  const orderElements = () => {return layout.length}

  const componentList = [
    {name: "Title",class: "title",text: event.title,order: orderElements()},
    {name: "Paragraph",class: "paragraph",text:"(your text goes here)",order: orderElements()},
    {name: "Event Times",class: "eventTimes",text: event.start_time + " - " + event.end_time,order: orderElements()},
    {name: "Event Date",class: "eventDate",text: event.date,order: orderElements()}
  ];

  const addButtons = componentList.map((component) => 
    <button key={component.name} className="softButton" element={component} onClick={() => addElement(component)}>{component.name}</button>
  );

  // map over layout
  const mapLayout = layout.map((element) =>
    <Chunk key={element.order} element={element}></Chunk>
  );

  const display = exampleEvent;

  return (
    <Page margin="10vw">
      <Title size="50px">{display.title}</Title>
      <Section>
          <div style={{width: "50%"}}>
              <Section>
                  {addButtons}
              </Section>
          </div>
          <div style={{width: "50%"}}>
            <Section direction="column">{mapLayout}</Section>
          </div>
          <button>preview</button>
      </Section>
    </Page>
  )
}