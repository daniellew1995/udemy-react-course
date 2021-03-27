import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import "semantic-ui-css/semantic.min.css";
import Spinner from "./Spinner";

class App extends React.Component {
	state = { lat: null, errorMessage: "", loc: null };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude, loc: position.coords.locale   }),
			(err) => this.setState({ errorMessage: err.message }),
			(loc) => this.setState({ loc: loc.coords.longitude })
		);

		
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <Spinner message="Please accept location request" />;
	}

	// React says we have to define render!
	render() {
		return <div className="border-red">{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));