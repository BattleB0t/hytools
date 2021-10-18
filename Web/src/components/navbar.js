import React from "react";
import img from "./../assets/favicon.png"
import { Link } from "react-router-dom";

class NavBar extends React.Component {
	render() {
		return <div className="nav">
			<img src={img} alt="c" />
			<div>
				<Link to="/home">Home</Link>
			</div>
		</div>;
	}
}

export default NavBar;