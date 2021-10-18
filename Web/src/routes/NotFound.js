import React from "react";
import { Link } from "react-router-dom";
import "./../css/index.css"
import "./../css/loadingPage.css"

class NotFound extends React.Component {
	render() {
		return <div className="App loadingPage">
			<div className="page">
				<h1 style={{fontSize: "10em"}}>404 - Not Found</h1>
				<Link style={{ textDecoration: "none"}} to="/home">
					<h2 style={{ fontSize: "3em", color: "white", textDecoration: "none", padding: "2em", backgroundColor: "#00000050", borderRadius: "1em"}}>Home</h2>
				</Link>
			</div>
		</div>;
	}
}

export default NotFound;