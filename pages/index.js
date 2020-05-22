import Title from "./../components/Layout/Title";
import Section from "./../components/Layout/Section";
import Page from "./../components/Layout/Page";


export default function Home() {

  const goToCreate = () => {
    // console.log("click")
    window.location.href = "/create"
  }

  return (
    <Page margin="10vw">
      <Title>rsvPlz</Title>
      <Section>
        <button onClick={goToCreate}>create an event</button>
      </Section>
    </Page>
  )
}
