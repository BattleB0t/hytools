import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./routes/homePage";
import LoadingPage from "./routes/loadingPage";
import NotFound from "./routes/NotFound";
import GeneralStats from "./routes/generalStats";
import BedwarsStats from "./routes/bedwarsStats";
import SkyblockMoney from "./routes/skyblockMoney";
import MarketPlace from "./routes/marketPlace";
import Settings from "./routes/settings";
import InfoPage from "./routes/infoPage";
import DevTools from "./routes/devTools";
import ComingSoon from "./routes/comingSoon";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
						<Route
							path="/"
							exact
							component={() => <LoadingPage />} />
						<Route
							path="/home"
							exact
							component={() => <HomePage />} />
            <Route
              path="/stats/general"
              exact
              component={() => <GeneralStats />}
            />
            <Route
              path="/stats/bedwars"
              exact
              component={() => <ComingSoon />}
            />
            <Route
              path="/stats/skyblock"
              exact
              component={() => <ComingSoon />}
            />
            <Route
              path="/calculator/skyblock"
              exact
              component={() => <ComingSoon />}
            />
            <Route
              path="/skyblock/sbmoney"
              exact
              component={() => <ComingSoon />}
            />
						<Route
							path="/marketplace"
							exact
							component={() => <ComingSoon />} />
						<Route
							path="/settings"
							exact
							component={() => <Settings />} />
            <Route
              path="/info/unofficial"
              exact
              component={() => <InfoPage type="unofficial" />}
            />
						<Route
							path="/dev"
							exact
							component={() => <DevTools />} />
						<Route
							component={() => <NotFound />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;