import React from "react";
import Navbar from "../components/navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { server } from "../conf";
import GeneralStatCard from "../components/generalStatCard";
import styled from "styled-components";

const SelectUser = styled.div`
  > input {
    width: calc(100% - 4em);
    height: 2em;
    border: none;
    outline: none;
    background-color: #00000050;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1em;
    border-radius: 0.5em;
    -webkit-border-radius: 0.5em;
    -moz-border-radius: 0.5em;
    -ms-border-radius: 0.5em;
    -o-border-radius: 0.5em;
    transition: background-color 0.2s ease-in-out;
  }

  > input:hover,
  > input:focus,
  > input:active {
    background-color: #00000080;
  }

  > .submitBtn {
    background-color: #00000050;
    transition: background-color 0.2s ease-in-out;
  }

  > .submitBtn:hover,
  > .submitBtn:focus,
  > .submitBtn:active {
    background-color: #00000080;
  }

  > * {
    margin: 0;
    padding: 1em;
  }

  > div {
    margin-bottom: 1em;
    border-radius: 0.5em;
    padding: 0 2em;
    color: white;
    cursor: pointer;
  }

  > h1 {
    margin: 0;
    text-align: center;
  }

  min-width: 80vw;
  max-width: calc(100vw - 2em);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #00000050;
  margin: 0;
  padding: 0;
  border-radius: 0.5em;
  -webkit-border-radius: 0.5em;
  -moz-border-radius: 0.5em;
  -ms-border-radius: 0.5em;
  -o-border-radius: 0.5em;
  margin-top: 1em;
`;

const GeneralStatsPage = styled.div`
  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: white;
  }

  > .title > h1 {
    text-align: center;
    margin-left: 1em;
  }

  > .stat {
    color: white;
  }

  > .reload {
    color: white;
    font-size: 3em;
    cursor: pointer;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.5em;
  margin: 1em;
  margin-bottom: 0;
  padding-bottom: 1em;

  > * {
    background-color: #00000050;
    height: 7.5em;
    padding: 1em;
    border-radius: 1em;
    -webkit-border-radius: 1em;
    -moz-border-radius: 1em;
    -ms-border-radius: 1em;
    -o-border-radius: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  > * > .value {
    color: #bbbbbb;
  }
`;

class GeneralStats extends React.Component {
  constructor(props) {
    super(props);
    this.loadingText = "Loading...";
    this.state = {
      validUsername: "Please Enter A Player Username",
      selectedUser: false,
      username: "",
    };
  }
  loadData() {
    fetch(`${server()}/uuid?username=${this.state.username}`)
      .then((res) => res.json())
      .then((playerid) => {
        fetch(`${server()}/player?uuid=${playerid.uuid}`)
          .then((res) => res.json())
          .then((player) => {
            this.setState({
              networkLevel: this.getNetworkLevel(player.player.networkExp),
              recentGame: player.player.mostRecentGameType
                ? player.player.mostRecentGameType
                : "No Recent Games",
              formattedPlayerName: player.player.displayname,
              bedwarsLevel: player.player.achievements.bedwars_level,
            });
          });
      });
  }
  getNetworkLevel(exp) {
    var BASE = 10000;
    var GROWTH = 2500;
    var REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH;
    var REVERSE_CONST = REVERSE_PQ_PREFIX * REVERSE_PQ_PREFIX;
    var GROWTH_DIVIDES_2 = 2 / GROWTH;
    return exp <= 1
      ? 1
      : Math.floor(
          1 +
            REVERSE_PQ_PREFIX +
            Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp)
        );
  }
  render() {
    if (!this.state.selectedUser) {
      return (
        <div>
          <Navbar app="General Stats" />
          <GeneralStatsPage className="page">
            <SelectUser>
              <h1>{this.state.validUsername}</h1>
              <input
                type="text"
                onChange={(e) => {
                  this.setState({
                    username: e.target.value,
                  });
                }}
              />
              <div
                className="submitBtn"
                onClick={(e) => {
                  this.setUsername();
                }}
              >
                <p>Submit</p>
              </div>
            </SelectUser>
          </GeneralStatsPage>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar app="General Stats" />
          <GeneralStatsPage className="page">
            <div className="title">
              <i
                className="bi bi-arrow-clockwise reload"
                onClick={(e) => {
                  this.setState({
                    selectedUser: false,
                    validUsername: "Please Enter A Player Username",
                  });
                }}
              ></i>
              <h1>General Stats For {this.state.username}</h1>
            </div>
            <Cards>
              <GeneralStatCard
                name="Network Level"
                value={this.state.networkLevel}
              />
              <GeneralStatCard
                name="Recent Game"
                value={this.state.recentGame}
              />
              <GeneralStatCard
                name="Formatted Player Name"
                value={this.state.formattedPlayerName}
              />
              <GeneralStatCard
                name="Bedwars Level"
                value={this.state.bedwarsLevel}
              />
            </Cards>
          </GeneralStatsPage>
        </div>
      );
    }
  }
  setUsername() {
    var e = this.state.username;
    if (e !== "" || e !== null || e !== undefined) {
      this.setState({
        selectedUser: true,
        username: this.state.username,
      });
      this.loadData();
    } else {
      this.setState({
        validUsername: "Please Enter A Valid Username.",
        username: "Unknown User",
        selectedUser: true,
      });
    }
  }
}

export default GeneralStats;
