import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./routes/homePage";
import LoadingPage from "./routes/loadingPage";
import NotFound from "./routes/NotFound";
import GeneralStats from "./routes/generalStats";

class App extends React.Component {
	render() {
		return <div>
			<Router>
				<Switch>
					<Route path="/" exact component={() => <LoadingPage />} />
					<Route path="/home" exact component={() => <HomePage />} />
					<Route path="/stats/general" exact component={() => <GeneralStats />} />
					<Route component={() => <NotFound />} />
					</Switch>
			</Router>
		</div>;
	}
}

export default App;