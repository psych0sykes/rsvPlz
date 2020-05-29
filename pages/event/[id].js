import Router from "next/router";
import Title from "./../../components/Layout/Title";
import Section from "./../../components/Layout/Section";
import Page from "./../../components/Layout/Page";


export default function Event() {

    const {id} = Router.query

  const goToCreate = () => {
    console.log(id)
    // window.location.href = "/create"
  }

  return (
    <Page margin="10vw">
      <Title>event</Title>
      <Section>
  <button onClick={goToCreate}>{id}</button>
      </Section>
    </Page>
  )
}