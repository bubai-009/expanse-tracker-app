import styled from "styled-components";
import HomeComponent from "./components/Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-familt: Montserrat;
`;
const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;
function App() {
  return (
    <Container>
      <Header>Expanse Tracker</Header>
      <HomeComponent></HomeComponent>
    </Container>
  );
}

export default App;
