import styled from 'styled-components';
import {Route} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen'; 
import ChatScreen from './screens/ChatScreen'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <Container>
      <Route path="/" exact><LoginScreen/></Route>
      <Route path="/chat" exact><ChatScreen/></Route>
    </Container>
  );
}

export default App;
