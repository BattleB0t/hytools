import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;

	> h1 {
		font-size: 5em;
		text-align: center;
	}
`

const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #00000050;
	padding: 1em 2em;
	border-radius: 0.5em;
	> a {
		underline: none;
		text-decoration: none;
	}
	:hover,
	:focus,
	:active {
		background-color: #00000080;
	}
	> h1 {
		font-size: 1.5em;
	}
	transition: background-color 0.125s ease-in-out;
	cursor: pointer;
`

class ComingSoon extends React.Component {
	render() { 
		return <Page>
			<h1>Coming Soon...</h1>
			<Button>
				<Link to="/home">
					<h1>
						Go Back?
					</h1>
				</Link>
			</Button>
		</Page>;
	}
}
 
export default ComingSoon;