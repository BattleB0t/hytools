import React from "react";
import NavBar from "../components/navbar";
import styled from "styled-components";
import { server } from "../conf";
import MarketplaceAppCard from "../components/marketplaceAppCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1em;
  margin: 1em;

  @media (max-width: 1324px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

class MarketPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			loaded: false,
			dataBase: [],
    };
  }
  render() {
    if (!this.state.loaded) {
      fetch(`${server}/marketplace/get`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            dataBase: res,
          });
        });
      if (this.state.dataBase !== []) {
        if (localStorage.getItem("enabledApps") !== (null || undefined)) {
          localStorage.setItem("enabledApps", JSON.stringify([]));
        }
        this.setState({
          loaded: true,
          enabledApps: JSON.parse(localStorage.getItem("enabledApps")),
        });
      }
		}
		return <div> {
			this.state.loaded ? (
        <div className="page">
          <NavBar app="MarketPlace" />
          <Container>
            {this.state.dataBase.map((item, index) => {
              return (
                <MarketplaceAppCard
                  key={item + index}
                  name={item.name}
                  description={item.description}
                />
              );
            })}
          </Container>
        </div>
      )
    : <div>Loading...</div>
    }
		</div>
  }
}

export default MarketPlace;
