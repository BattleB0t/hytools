import React from "react";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";
import bannerLogo from "./../assets/hypixelToolsx320HD.png";
import styled from "styled-components";

const Banner = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  height: 15vh;

  > img {
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 5vh;
    overflow: hidden;
    margin-top: 1em;
  }
`;

const BannerTitle = styled.h1`
  font-size: 4em;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-left: 0.25em;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  margin: 1em;

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

class HomePage extends React.Component {
  render() {
    var cards = [
      {
        title: "General Stats",
        url: "/stats/general",
      },
      {
        title: "Bedwars Stats",
        url: "/stats/bedwars",
      },
      // {
      // 	title: "Skyblock-Money",
      // 	url:"/skyblock/sbmoney"
      // }
      {
        title: "Skyblock Stats",
        url: "/stats/skyblock",
      },
      {
        title: "Skyblock Calculator",
        url: "/calculator/skyblock",
      },
    ];
    return (
      <div>
        <NavBar app="Home" />
        <div className="page">
          <Banner>
            <img src={bannerLogo} alt="BannerLogo" />
            <BannerTitle> - HyTools</BannerTitle>
          </Banner>
          <Grid>
            {cards.map((card) => (
              <Link to={card.url} key={card.title}>
                <h1>{card.title}</h1>
              </Link>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default HomePage;
