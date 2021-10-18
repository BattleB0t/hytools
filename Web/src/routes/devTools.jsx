import React from "react";
import styled from "styled-components";

const Tool = styled.div`
	height: 100%;
`

const SelectBtn = styled.div`
	width: 100%;
	height: 2em;
	background-color: #00000050;
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
			<h1>DevTools</h1>
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
		</div>;
	}
}
 
export default DevTools;