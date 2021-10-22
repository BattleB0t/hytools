import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css"
import NavBar from '../components/navbar';
import styled from 'styled-components';

const Page = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 7em);
  padding-top: 5em;

  > .selectUser {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #00000050;
    padding: 2em;
    border-radius: 1em;
  }
`

class BedwarsStats extends React.Component {
  render() {
    var PreviousUsers = [
      "loser",
      "loser2",
      "loser3",
      "loser4",
      "loser5",
      "loser6",
      "loser7",
      "loser8",
      "loser9",
      "loser10",
    ]
    return <div>
      <NavBar app="Bedwars Stats" />
      <Page>
        <div className="selectUser">
          <h1>Select A User</h1>
          <input type="text" />
          <button>Select</button>
          <div className="previousUsers">
            {
              PreviousUsers.map((user, index) => {
                return <div key={index}>{user}</div>
              })
            }
          </div>
        </div>
      </Page>
    </div>;
  }
}

export default BedwarsStats;