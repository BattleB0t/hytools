import React from 'react';
import Navbar from '../components/navbar';
import "./../css/loadingPage.css"
import "./../css/generalStats.css"
import { server } from "./../conf.js"
const queryParams = new URLSearchParams(window.location.search)

queryParams.set("username", "Idiot_Dev")

class GeneralStats extends React.Component {
	render() {
		if (!queryParams.get(`username`)) {
			return <div>
				<Navbar />
				<div className="page">
					<h1>Please Enter A Player Username</h1>
				</div>
			</div>
		} else {
			return <div>
				<Navbar />
				<div className="page">
					<h1>General Stats For {queryParams.get(`username`)}</h1>
					{this.LoadStats()}
				</div>
			</div>;
		}
	}
	LoadStats() {
		var output = []
		console.log(server)
		fetch(`${server}/uuid?username=${queryParams.get("username")}`)
			.then(res => res.json())
			.then(uuidRes => {
				console.log(uuidRes)
				fetch(`${server}/player?uuid=${uuidRes.uuid}`)
					.then(res => res.json())
					.then(res => {
						console.log(res)
						for (let i = 0; i < Object.keys(res).length; i++) {
							var player = Object.keys(res)[ i ];
							output.push(player)
						}
					})
				return output
			})
	}
}

export default GeneralStats;