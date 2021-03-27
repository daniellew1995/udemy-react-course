import React from 'react';
import ReactDOM from 'react-dom';

const CommentDetail = props => {
	return  (
		<div className="comments">
			<a href="/" className="avatar">
				<img alt="avatar" src='https://source.unsplash.com/random' style={{ maxWidth: '100px' }} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadata">
					<span className="date">{props.timeAgo}</span>
				</div>
				<div className="text">{props.content}</div>
			</div>
		</div>
	);
};

export default CommentDetail;