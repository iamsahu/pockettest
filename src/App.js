import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  // let pocket = require('pocket-api')
  fetch('https://getpocket.com/v3/oauth/request', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Hasura-Client-Name':'hasura-console',
      'x-hasura-admin-secret':'jvhgjjh',
    },
    body: JSON.stringify({consumer_key: '92104-32f15adc016c93919a53d671',redirect_uri:'https://google.com'})
  })
  .then(r => r.json())
  .then((data) => {
    console.log(data)
              });
// let consumer_key = '92104-32f15adc016c93919a53d671';

// let pocket = new PocketAPI(consumer_key);

// pocket.getRequestToken()
// .then((response) => {
//     console.log(response)
//     //returns request_token
// })
  

  return (
    <div className="App">
      <button >Click!</button>
    </div>
  );
}

export default App;
