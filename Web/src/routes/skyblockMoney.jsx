import React from "react";
import NavBar from "../components/navbar";
import styled from "styled-components";
import { server } from "../conf";

var FullscreenFrame = styled.iframe`
	width: 100%;
	margin: 0;
	padding: 0;
	border: 0;
	height: calc(100vh - 5.25em);
	padding-top: 5em;
`

var iframeSrc = `https://skyblock-money-dev.ewsgit.repl.co`;

class SkyblockMoney extends React.Component {
	render() { 
		return (
      <div>
        <NavBar></NavBar>
				<FullscreenFrame
					id="x-frame-bypass"
					src={iframeSrc}
					scrolling="no"
					frameBorder="0"
          frameborder="0"
					sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin allow-popups"
				></FullscreenFrame>
      </div>
    );
	}
}
 
export default SkyblockMoney;