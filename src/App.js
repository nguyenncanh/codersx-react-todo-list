import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const todos = ["Go to market", "Buy food", "Making dinner"];
  const content = todos.map((item) => {
    let li = <li>{item}</li>;
    return li;
  });
  const ul = <ul>{content}</ul>;
  return (
    <div className="App">
      {ul}
    </div>
  );
}

export default App;
