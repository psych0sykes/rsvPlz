import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Title from "./../../components/Layout/Title";
import Section from "./../../components/Layout/Section";
import Page from "./../../components/Layout/Page";
import Chunk from "../../components/Layout/Chunk";
import SoftButton from "../../components/Form/SoftButton";


export default function Design() {

  const axios = require('axios').default;
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
  ];
  const [layout,setLayout] = useState(defaultLayout);

  // map over layout
  const mapLayout = layout.map((element,index) =>
    <Chunk key={index} element={element}></Chunk>
  );

  return (
    <Page margin="10vw">
        <Section direction="column" top="40px">
          {mapLayout}
        </Section>
        <Section>
            <button>save</button>
        </Section>
    </Page>
  )
}