import React from "react";

class InfoPage extends React.Component {
	render() { 
		return <div>
			<h1>Infomation.</h1>
			<p>{this.props.type}</p>
		</div>;
	}
}
 
export default InfoPage;