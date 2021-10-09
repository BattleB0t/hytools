import './../css/loadingPage.css';
import React from 'react';
import NavBar from '../components/navbar';
import image from "./../assets/hypixelToolsx320.png"


class LoadingPage extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <NavBar />
        <div className="loadingPage">
          <header className="loadingPage-header">
            <img src={image} style={{ marginBottom: "3em" }} className="loadingPage-logo" alt="logo" />
            <p>
              HyTools
            </p>
          </header>
        </div>
      </React.StrictMode>
    );
  }
}

export default LoadingPage;