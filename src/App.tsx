import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Movie from './pages/Movie';
import { Styled } from './style';


function App() {
  
  const [movies, setMovies] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const element = <Main movies={movies} setMovies={setMovies} filterValue={filterValue} />;
  return (
    <Styled.Container >
      <Header setFilterValue={setFilterValue} />
      <Routes>
        <Route path='/' element={element} />
        <Route path='/page' element={element} />
        <Route path='/movies/post/:title' element={<Movie movies={movies} />} />
      </Routes>
    </Styled.Container>
  );
}

export default App;
