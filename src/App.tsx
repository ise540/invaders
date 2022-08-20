import styled from "styled-components";
import { GameField } from "./components/GameField";

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

function App() {
  return (
    <StyledApp className="App">
      <GameField></GameField>
    </StyledApp>
  );
}

export default App;
