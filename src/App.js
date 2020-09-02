import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  async function main() {
    try {
        var auth = require("pocket-auth");
  
        var consumerKey = "92104-32f15adc016c93919a53d671";
        var redirectUri = "https://google.com";
  
        let code = await auth.fetchToken(consumerKey, redirectUri, {});
        let uri = auth.getRedirectUrl(code.code, redirectUri);
        console.log("Visit the following URL and click approve in the next 10 seconds:");
        console.log(uri);
  
        setTimeout(async function(){
            try {
                let r = await auth.getAccessToken(consumerKey, code.code);
                console.log(r);
            } catch (err) {
                console.log("You didn't click the link and approve the application in time");
            }
        }, 10000);
    } catch (err) {
        console.log(err);
    }
  }

  return (
    <div className="App">
      <button onClick={main}>Click!</button>
    </div>
  );
}

export default App;
