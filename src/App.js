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
    var link="https://getpocket.com/auth/authorize?request_token="+code+"&redirect_uri=https://pockettest.vercel.app/?code="+code
    window.open(link,'_blank')
  }

  function SendToAuto2(){
    var requestOptions = {
      method: 'POST',
      // headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://getpocket.com/v3/oauth/authorize?consumer_key=92104-32f15adc016c93919a53d671&code="+code, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  function SendToAuto(){
    
    var link="https://getpocket.com/v3/oauth/authorize?code="+code+"&consumer_key=92104-32f15adc016c93919a53d671"
    console.log('hello')
    // axios.post('https://getpocket.com/auth/authorize', {
    //     'consumer_key': '92104-32f15adc016c93919a53d671',
    //     'redirect_uri': 'https://pockettest.vercel.app/'
    //   })
    fetch(link,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Accept': 'application/x-www-form-urlencoded'
       }

    })
    // .then((response) => {
    //   const reader = response.body.getReader();
    //   const stream = new ReadableStream({
    //     start(controller) {
    //       // The following function handles each data chunk
    //       function push() {
    //         // "done" is a Boolean and value a "Uint8Array"
    //         reader.read().then(({ done, value }) => {
    //           // Is there no more data to read?
    //           if (done) {
    //             // Tell the browser that we have finished sending data
    //             controller.close();
    //             return;
    //           }
    
    //           // Get the data and send it to the browser via the controller
              
    //           controller.enqueue(value);
    //           push();
    //         });
    //       };
          
    //       push();
    //     }
    //   });
    // })
    .then((r) => {
      console.log(r)
      return r.text()})
    .then((data) => {
      console.log(data)
      
    })
  }
  

  return (
    <div className="App">
      <div>{code}</div>
      <button onClick={GetToken}>Get Token!</button>
      <button onClick={SendToAuthorize}>Click!</button>
      <button onClick={SendToAuto2}>Auto!</button>
    </div>
  );
}

export default App;
