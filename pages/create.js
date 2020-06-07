import {useState} from "react";
import Router from "next/router";
import Title from "./../components/Layout/Title";
import Section from "./../components/Layout/Section";
import Page from "./../components/Layout/Page";
import Input from "../components/Form/Input";

export default function Create() {

    const [eventName,setEventName] = useState("Test Event");
    const [date,setDate] = useState();
    const [startTime,setStartTime] = useState();
    const [endTime,setEndTime] = useState();


    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("click")
        // INSERT API Post here
        Router.push("/design/[id]","/design/test")
    }

    return (
        <Page margin="10vw">
        <Title size="50px">rsvPlz</Title>
        <form>
            <Input label="event name" type="text" value={eventName} cb={(event) => setEventName(event.target.value)}/>
            <Input label="date" type="date" cb={(event) => setDate(event.target.value)}/>
            <Input label="start time" type="time" cb={(event) => setStartTime(event.target.value)}/>
            <Input label="end time" type="time" cb={(event) => setEndTime(event.target.value)}/>
            <button type="submit" value="Submit" onClick={(event)=>handleSubmit(event)}>next</button>
        </form>
        <Section>
        </Section>
        </Page>
  )
}