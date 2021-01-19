import Article from './Article';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [titres]=useState([{titre:'Seigneur des Anneaux'},{titre:'Hatty potter'},{titre:'Avengers'}])

  return (
    <div className="App">
      <Article titre={titres}  />

    </div>
  );
}

export default App;
