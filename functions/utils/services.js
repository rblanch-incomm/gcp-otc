const base_url = require('./constants.js').BASE_URL;

const opts = {
			uri: base_url,
			method: 'post',
			headers: {
			  'Content-Type': 'application/json',
			  'Authorization': 'Bearer '
			},
			json:true,
		}

function getOptions (endpoint, data, token) {
	let currentOpts = {
		uri: base_url+endpoint,
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+token
		},
		json:true,
		body: data
	};

	return currentOpts;

	
}

module.exports = {
	getOptions
};