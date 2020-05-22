import Title from "./../components/Layout/Title";
import Section from "./../components/Layout/Section";
import Page from "./../components/Layout/Page";
import CenterInput from "./../components/Form/CenterInput";


export default function Create() {

  const createEvent = () => {
    console.log("click")
  }

  return (
    <Page margin="10vw">
       <Title size="50px">rsvPlz</Title>
       <form>
           <CenterInput label="Event Name" type="text">
           </CenterInput>
       </form>
    </Page>
  )
}