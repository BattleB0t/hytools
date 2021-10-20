import React from "react";
import img from "./../assets/favicon.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RightButtons = styled.div`
  i {
    font-size: 24px;
    margin-left: 0;
    padding: 0.5em;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
  }

  a {
    margin: 0;
    padding: 0;
    margin-left: 1em;
    height: 2em;
    aspect-ratio: 1;
  }

  position: fixed;
  right: 1em;
  height: 5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.nav`
  position: fixed;
  background-color: #00000050;
  width: 100%;
  height: 5em;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;

  > div {
    display: flex;
  }

  > div > * {
    display: flex;
    align-self: center;
    justify-self: center;
    margin-left: 1em;
    background-color: #00000050;
    padding: 0.5em;
    border-radius: 0.5em;
    -webkit-border-radius: 0.5em;
    -moz-border-radius: 0.5em;
    -ms-border-radius: 0.5em;
    -o-border-radius: 0.5em;
    text-decoration: none;
    font-variant: normal;
    transition: background-color 0.125s ease-in-out;
  }

  > div > *:hover {
    background-color: #00000080;
  }

  > div > *:any-link {
    color: #ffffff;
  }

  > *:first-child {
    margin-left: 0;
  }

  > img {
    height: 4em;
    padding-left: 0.5em;
    padding-top: 0.5em;
  }

  > h2 {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    top: -0.3em;
    color: white;
    padding: 0.5em;
    background-color: #00000050;
    border-radius: 0.5em;
    -webkit-border-radius: 0.5em;
    -moz-border-radius: 0.5em;
    -ms-border-radius: 0.5em;
    -o-border-radius: 0.5em;
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
  }

  @media (max-width: 768px) {
    > h2 {
      display: none;
    }
  }
`;

class NavBar extends React.Component {
  render() {
    return (
      <Nav>
        {this.props.app !== "Home" ? (
          <img src={img} alt="navImage" />
        ) : null}
        <div>
          {this.props.app !== "Home" ? <Link to="/home">Home</Link> : null}
        </div>
        {this.props.app ? <h2>{this.props.app}</h2> : null}
        {this.props.app === "Home" ? (
          <RightButtons>
            <Link to="/marketplace">
              <i className="bi bi-shop reload"></i>
            </Link>
            <Link to="/settings">
              <i className="bi bi-gear reload"></i>
            </Link>
            {window.localStorage.getItem("developer_mode") === "true" ? (
              <Link to="/dev">
                <i className="bi bi-code-slash"></i>
              </Link>
            ) : null}
          </RightButtons>
        ) : window.localStorage.getItem("dev") === "true" ? (
          <RightButtons>
            <Link to="/dev">
              <i className="bi bi-code-slash"></i>
            </Link>
          </RightButtons>
        ) : null}
        {this.props.appType === "unofficial" ? (
          <RightButtons>
            <Link to="/info/unnoficial">
              <i className="bi bi-exclamation-square"></i>
            </Link>
          </RightButtons>
        ) : null}
      </Nav>
    );
  }
}

export default NavBar;
