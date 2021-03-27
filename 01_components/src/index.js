import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timeAgo="Today at 4:55pm"
					content="Nice blog post!"
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="Today at 2:00am"
					content="Nice blog post 2.0!"
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Jane"
					timeAgo="Yesterday at 5:00pm"
					content="I like the writing!"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));