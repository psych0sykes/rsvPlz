import Title from "./../components/Layout/Title";
import Section from "./../components/Layout/Section";
import Page from "./../components/Layout/Page";
import Input from "../components/Form/Input";


export default function Create() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("click")
  }

  return (
    <Page margin="10vw">
       <Title size="50px">rsvPlz</Title>
       <form>
           <Input label="event name" type="text"/>
           <Input label="date" type="date"/>
           <Input label="start time" type="time"/>
           <Input label="end time" type="time"/>
           <button type="submit" value="Submit" onClick={(event)=>handleSubmit(event)}>next</button>
       </form>
    </Page>
  )
}