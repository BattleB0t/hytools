import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";

const Tool = styled.div`
	height: 100%;
`

const Page = styled.div`
	margin-top: 5em;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #fff;
`

const SelectBtn = styled.div`
	height: 2em;
	background-color: #00000050;
	padding: 0.5em;
	border-radius: 0.5em;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	cursor: pointer;
`

class DevTools extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tool: "select"
		}
	}
	render() { 
		return <div>
			<Navbar app="Developer Tools" />
			<Page>
			<Tool>
				{this.state.tool === "select" ? <div>
					<h2>Select A Tool.</h2>
					<SelectBtn onClick={() => this.setState({tool: "loadApplet"})}>Load Applet</SelectBtn>
				</div> : null}
				{this.state.tool === "loadApplet" ? <div>
					<h2>Load Applet</h2>
					<input type="text" placeholder="Applet Name" onChange={(e) => {
						this.setState({
							appletName: e.target.value
						})
					}} />
					<button onClick={(e) => {
						window.location.href = `${this.state.appletName}`
					}}>Load</button>
				</div> : null}
			</Tool>
					</Page>
		</div>;
	}
}
 
export default DevTools;