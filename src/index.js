import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyDrNuclx6sQ4cPw-zhWWU1_WA_KQYEsci8';
const App=()=> {
  return (
    <div><h1>Selam:</h1>
    <SearchBar />
    </div>
);
}

ReactDOM.render(<App />,document.querySelector('.container'));
