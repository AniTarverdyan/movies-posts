import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Movie from './pages/Movie';
import { Styled } from './style';


function App() {
  const [filterValue, setFilterValue] = useState('');
  const [showSearchField, setShowSearchField] = useState(false);

  const element = <Main filterValue={filterValue} showSearchField={showSearchField} setShowSearchField={setShowSearchField} />;

  return (
    <Styled.Container >
      <Header setFilterValue={setFilterValue} showSearchField={showSearchField} />
      <Routes>
        <Route path='/' element={element} />
        <Route path='/:page' element={element} />
        <Route path='/movies/post/:title' element={<Movie />} />
      </Routes>
    </Styled.Container>
  );
}

export default App;
