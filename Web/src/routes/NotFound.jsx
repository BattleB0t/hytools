import React from "react";
import { Link } from "react-router-dom";
import "./../css/index.css"
import "./../css/loadingPage.css"

class NotFound extends React.Component {
	render() {
		return <div className="page loadingPage">
			<h1 style={{ fontSize: "5em" }}>404 - Not Found</h1>
			<Link style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }} to="/home">
				<h2 style={{ width: "7.5em", fontSize: "2em", color: "white", textDecoration: "none", padding: "1em", backgroundColor: "#00000050", borderRadius: "0.5em" }}>Home</h2>
			</Link>
		</div>
	}
}

export default NotFound;