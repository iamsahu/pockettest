import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

// async function GetToken(){
//   fetch('https://wfjiolg53e.execute-api.eu-west-3.amazonaws.com/default/pocketAuth').then((r) => r.json())
//     .then((data) => {
//       console.log(data)
//       var t = data['code'].split('=')
//       // setCode(t[1])
//       return t[1]
//     })
    
// }

function App() {
  const [code, setCode] = useState('')
  // let pocket = require('pocket-api')
  

  function GetToken(){
    fetch('https://wfjiolg53e.execute-api.eu-west-3.amazonaws.com/default/pocketAuth').then((r) => r.json())
    .then((data) => {
      console.log(data)
      var t = data['code'].split('=')
      setCode(t[1])
      
    })
  }

  function SendToAuthorize(){
    var link="https://getpocket.com/auth/authorize?request_token="+code+"&redirect_uri=https://pockettest.vercel.app/"
    window.open(link,'_blank')
  }

  function SendToAuto(){
    var link="https://getpocket.com/auth/authorize?code="+code+"&consumer_key=92104-32f15adc016c93919a53d671"
    fetch(link).then((r) => r.json())
    .then((data) => {
      console.log(data)
      
    })
  }
  

  return (
    <div className="App">
      <div>{code}</div>
      <button onClick={GetToken}>Get Token!</button>
      <button onClick={SendToAuthorize}>Click!</button>
      <button onClick={SendToAuto}>Auto!</button>
    </div>
  );
}

export default App;
