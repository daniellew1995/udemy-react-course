import "./seasonDisplay.css";
import React from "react";

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const seasonConfig = {
	summer: {
		text: "Let's hit the beach",
		iconName: "sun",
	},

	winter: {
		text: "Brrr it's chilly",
		iconName: "snowflake",
	},
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	console.log(props.loc);
	const { text, iconName } = seasonConfig[season];

	return (
		<div className={`season-display p-4 container-fluid ${season}`}>
			<div className={`mobile-wrapper w-100 ${season}`}>
				<div className="wrapper d-flex justify-content-center flex-column align-items-center text-white h-100">
					<h1 className="text-uppercase seasonname mb-0 ">{season}</h1>
					<h3 className="font-weight-light mt-2">{text}</h3>
				</div>
			</div>
		</div>
	);
};

export default SeasonDisplay;