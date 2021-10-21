import React from "react";
import styled from "styled-components";

const Card = styled.div`
    padding: 1rem;
    border-radius: 1rem;
    background-color: #00000050;
    color: #ffffff;
    position: relative;
    padding-bottom: 5em;

  > .install {
    background-color: #00000050;
    padding: 0.25em 1rem;
    border-radius: 1rem;
    position: absolute;
    bottom: 1rem;
    width: calc(100% - 4rem);
    text-align: center;
    cursor: pointer;
    transition: background-color 0.125s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
  }

  > .install > p {
    padding-left: 1em;
    margin: 0.25em 0.5em;
  }

  > .install:hover {
    background-color: #00000080;
  }
`;

class MarketplaceAppCard extends React.Component {
	render() { 
		return (
      <Card>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
        <div className="install">
          <i className="bi bi-download"></i>
          <p>Install</p>
        </div>
      </Card>
    );
	}
}
 
export default MarketplaceAppCard;