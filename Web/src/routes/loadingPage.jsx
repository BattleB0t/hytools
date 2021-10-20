import "./../css/loadingPage.css";
import React from "react";
import image from "./../assets/hypixelToolsx320HD.png";
import { server } from "../conf";

class LoadingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverStatus: "",
    }
  }
  render() {
    this.checkIfLoaded();
    return (
      <React.StrictMode>
        <div className="loadingPage">
          <header className="loadingPage-header">
            <img
              src={image}
              style={{ marginBottom: "3em" }}
              className="loadingPage-logo"
              alt="logo"
            />
            <h2>{this.state.serverStatus}</h2>
            <div className="loader">
              <div></div>
            </div>
          </header>
        </div>
      </React.StrictMode>
    );
  }
  checkIfLoaded() {
    this.intervalTimer = setInterval(() => {
      fetch(`${server()}/status`)
        .catch((err) => {
          console.log(`Server Was Not Online`);
        })
        .then((res) => {
          if (res !== undefined || null) {
            return res.text()
          } else {
            return "server offline"
          }
        })
        .then((data) => {
          if (
            data === '{"status":"success","message":"Server is up and running"}'
          ) {
            clearInterval(this.intervalTimer);
            this.setState({
              serverStatus: "",
            });
            setTimeout(() => {
              window.location.href = "/home";
            }, 500);
          } else if (data === "server offline") {
            this.setState({
              serverStatus: "Server Is Not Responding",
            })
          }
        });
    }, 1000);
  }
}

export default LoadingPage;
