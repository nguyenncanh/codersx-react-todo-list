import React from 'react';
import './App.css'
import Header from "./components/js/Header";
import LoginForm from './components/js/LoginForm';
import TabMenu from './components/js/TabMenu';

function App() {
  var items = [
    { label: 'HOME' },
    { label: 'DEALS' },
    { label: 'UPLOAD' },
    { label: 'WORK' },
    { label: 'SETTINGS' }
  ]
  return (
    <div className="App">
      {/* <Header />
      <LoginForm /> */}
      <TabMenu title={items}/>
    </div>
  );
}

export default App;
