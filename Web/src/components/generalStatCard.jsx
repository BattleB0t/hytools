import React from "react";
import styled from "styled-components"

const Card = styled.div`
	> h1 {
		font-size: 1.5em;
	}
`

class GeneralStatCard extends React.Component {
	render() { 
		return <Card>
			<h1 className="stat">{ this.props.name ? this.props.name : "Unknown Stat" }</h1>
			<h2 className="value">{ this.props.value ? this.props.value : "Unknown Value" }</h2>
		</Card>;
	}
}
 
export default GeneralStatCard;