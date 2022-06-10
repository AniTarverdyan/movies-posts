import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { Styled } from './style';


function App() {
  return (
    <Styled.Container >
      <Header />
      <Main />
    </Styled.Container>
  );
}

export default App;
