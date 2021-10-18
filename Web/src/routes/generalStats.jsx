import React from 'react';
import Navbar from '../components/navbar';
import "./../css/loadingPage.css"
import "./../css/generalStats.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { server } from '../conf';
import GeneralStatCard from '../components/generalStatCard';

class GeneralStats extends React.Component {
	constructor(props) {
		super(props);
		this.loadingText = "Loading..."
		this.state = {
			validUsername: "Please Enter A Player Username",
			selectedUser: false,
			username: ""
		}
	}
	loadData() {
		fetch(`${server}/uuid?username=${this.state.username}`)
			.then(res => res.json())
			.then((playerid) => {
				fetch(`${server}/player?uuid=${playerid.uuid}`)
					.then(res => res.json())
					.then(player => {
						this.setState({
							networkLevel: this.getNetworkLevel(player.player.networkExp),
							recentGame: player.player.mostRecentGameType ? player.player.mostRecentGameType : "No Recent Games",
							formattedPlayerName: player.player.displayname,
							bedwarsLevel: player.player.achievements.bedwars_level
						})
					})
			})
	}
	getNetworkLevel(exp) {
		var BASE = 10000;
		var GROWTH = 2500;
		var REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH;
		var REVERSE_CONST = REVERSE_PQ_PREFIX * REVERSE_PQ_PREFIX;
		var GROWTH_DIVIDES_2 = 2 / GROWTH;
		return exp <= 1 ? 1 : Math.floor(1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp));
	}
	render() {
		if (!this.state.selectedUser) {
			return <div>
				<Navbar app="General Stats" />
				<div className="generalStatsPage page">
					<div className="generalStatsSelectUser">
						<h1>{this.state.validUsername}</h1>
						<input type="text" onChange={(e) => {
							this.setState({
								username: e.target.value
							})
						}} />
						<div className="submitBtn" onClick={(e) => {
							this.setUsername()
						}}>
							<p>Submit</p>
						</div>
					</div>
				</div>
			</div>
		} else {
			return <div>
				<Navbar app="General Stats" />
				<div className="generalStatsPage page">
					<div className='title'>
						<i className="bi bi-arrow-clockwise reload" onClick={
							(e) => {
								this.setState({
									selectedUser: false,
									validUsername: "Please Enter A Player Username"
								})
							}
						}></i>
						<h1>General Stats For {this.state.username}</h1>
					</div>
					<div className="cards">
						<GeneralStatCard name="Network Level" value={this.state.networkLevel} />
						<GeneralStatCard name="Recent Game" value={this.state.recentGame} />
						<GeneralStatCard name="Formatted Player Name" value={this.state.formattedPlayerName} />
						<GeneralStatCard name="Bedwars Level" value={this.state.bedwarsLevel} />
					</div>
				</div>
			</div>;
		}
	}
	setUsername() {
		var e = this.state.username
		if (e !== "" || e !== null || e !== undefined) {
			this.setState({
				selectedUser: true,
				username: this.state.username
			})
			this.loadData()
		} else {
			this.setState({
				validUsername: "Please Enter A Valid Username.",
				username: "Unknown User",
				selectedUser: true,
			})
		}
	}
}

export default GeneralStats;