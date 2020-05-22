import Title from "./../components/Layout/Title";
import Section from "./../components/Layout/Section";
import Page from "./../components/Layout/Page";


export default function Home() {

  const createEvent = () => {
    console.log("click")
  }

  return (
    <Page margin="10vw">
      <Title>rsvPlz</Title>
      <Section>
        <button onClick={createEvent}>create an event</button>
      </Section>
    </Page>
  )
}
