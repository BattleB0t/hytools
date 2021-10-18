import './../css/loadingPage.css';
import React from 'react';
import image from "./../assets/hypixelToolsx320.png"
import { server } from '../conf';

class LoadingPage extends React.Component {
  render() {
    this.checkIfLoaded()
    return (
      <React.StrictMode>
        <div className="loadingPage">
          <header className="loadingPage-header">
            <img src={image} style={{ marginBottom: "3em" }} className="loadingPage-logo" alt="logo" />
            <div className="loader">
              <div></div>
            </div>
            <p>
              HyTools
            </p>
          </header>
        </div>
      </React.StrictMode>
    );
  }
  checkIfLoaded() {
    this.intervalTimer = setInterval(() => {
      fetch(`${server}/status`)
        .catch(err => {
          console.log(`Server Was Not Online`);
        })
        .then(res => res.text())
        .then(data => {
          if (data === '{"status":"success","message":"Server is up and running"}') {
            clearInterval(this.intervalTimer);
            window.location.href = "/home";
          }
        })
    }, 1000)
  }
}

export default LoadingPage;