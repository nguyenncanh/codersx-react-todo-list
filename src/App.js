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
  ];

  var email = 'abc@example.com'
  return (
    <div className="App">
      {/* <Header />*/}
      <LoginForm email={email}/>
      {/* <TabMenu title={items}/> */}
    </div>
  );
}

export default App;
