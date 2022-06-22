import { useState } from 'react';
import Header from './components/Header';
import Routing from './Routes/routing';
import { Styled } from './style';

function App() {
  const [filterValue, setFilterValue] = useState('');

  return (
    <Styled.Container >
      <Header setFilterValue={setFilterValue} />
      <Routing filterValue={filterValue} />
    </Styled.Container>
  );
}

export default App;
