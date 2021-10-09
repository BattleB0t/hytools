import React from 'react';
import NavBar from '../components/navbar';
import "./../css/homePage.css"
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
	render() {
		var cards = [
			{
				title: "General Stats",
				url:"/stats/general"
			},
			{
				title: "Test2",
				url:""
			},
			{
				title: "Test3",
				url:""
			}
		]
		return <div>
			<NavBar />
			<div className="page">
				<div className="grid">
					{cards.map(card => (
						<Link to={card.url}>
							<h1>
								{card.title}
							</h1>
						</Link>
					))}
				</div>
			</div>
		</div>;
	}
}

export default HomePage;