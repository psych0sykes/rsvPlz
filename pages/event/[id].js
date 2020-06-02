import { useRouter } from "next/router";
import Title from "./../../components/Layout/Title";
import Section from "./../../components/Layout/Section";
import Page from "./../../components/Layout/Page";


export default function Event() {

    const Router = useRouter();
    const {id} = Router.query;

  const goToCreate = () => {
    console.log(id)
    // window.location.href = "/create"
  }

  const exampleEvent = {
    title: "Test Event",
    date: "08/01/2020",
    start_time: "10:00 AM",
    end_time: "12:00 PM"
  }

  const display = exampleEvent;

  return (
    <Page margin="10vw">
      <Title size="50px">{display.title}</Title>
      <Section>
        <div>wow</div>
      </Section>
    </Page>
  )
}