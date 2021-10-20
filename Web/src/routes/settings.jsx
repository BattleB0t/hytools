import React from "react";
import NavBar from "../components/navbar";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  margin: 1em;
  padding-top: 5em;

  > * {
    background-color: #00000050;
    height: auto;
    border-radius: 1em;
    -webkit-border-radius: 1em;
    -moz-border-radius: 1em;
    -ms-border-radius: 1em;
    -o-border-radius: 1em;
    text-align: center;
    color: white;
    padding: 1em;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.1125s ease-in-out;
  }

  > *:hover {
    background-color: #00000080;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

var cards = [
  {
    title: "Developer Mode",
    value: "developer_mode",
  }
];

class Settings extends React.Component {
  render() {
    return (
      <div>
        <NavBar app="Settings" />
        <Grid>
          {cards.map((card) => (
            <div
              onClick={(e) => {
                if (
                  localStorage.getItem(card.value) === (null || undefined || "" || "false")
                ) {
                  localStorage.setItem(card.value, "true");
                } else {
                  localStorage.setItem(card.value, "false");
                }
                window.location.reload();
              }}
              key={card.title}
            >
              <h1>{card.title}</h1>
              <h2>
                {localStorage.getItem(card.value) === "true" ? "true" : "false"}
              </h2>
            </div>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Settings;
