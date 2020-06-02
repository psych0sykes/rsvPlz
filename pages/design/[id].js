import { useRouter } from "next/router";
import Title from "./../../components/Layout/Title";
import Section from "./../../components/Layout/Section";
import Page from "./../../components/Layout/Page";
import SoftButton from "./../../components/Form/SoftButton";


export default function Design() {

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

  const componentList = ["Title","Paragraph","Image","Link"];

  const display = exampleEvent;

  return (
    <Page margin="10vw">
      <Title size="50px">{display.title}</Title>
      <Section>
          <div style={{width: "50%"}}>
              <Section>
                  <SoftButton>Title</SoftButton>
                  <SoftButton>Paragraph</SoftButton>
                  <SoftButton>Image</SoftButton>
                  <SoftButton>Link</SoftButton>
              </Section>
          </div>
          <div style={{width: "50%"}}>
              <Section>Right</Section>
          </div>
          <button>preview</button>
      </Section>
    </Page>
  )
}