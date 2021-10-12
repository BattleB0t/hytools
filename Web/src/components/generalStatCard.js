import React from "react";

class GeneralStatCard extends React.Component {
	render() { 
		return <div>
			<h1 className="stat">{ this.props.name ? this.props.name : "Unknown Stat" }</h1>
			<h2 className="value">{ this.props.value ? this.props.value : "Unknown Value" }</h2>
		</div>;
	}
}
 
export default GeneralStatCard;