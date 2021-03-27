import axios from 'axios';

const KEY = 'AIzaSyD9H8cQb5eJO9qXKwf5DOuOXyYnwj8sK-s';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResults: '5',
		key: KEY
	}
});