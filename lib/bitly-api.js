/*
 * bitly-api
 * https://github.com/tobiaswright/bitly-api
 *
 * Copyright (c) 2014 Tobias Wright
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request');

var config = {
	bitUrl: {
		access_token : "https://api-ssl.bitly.com/oauth/access_token",
		get_link_history : "https://api-ssl.bitly.com/v3/user/link_history",
		get_network_history : "https://api-ssl.bitly.com/v3/user/network_history"
	}
}

var getAcessToken = function( client_id, client_secret, app_redirect_url, code, callback ) {

	var options = {
		qs: {
			client_id: client_id,
			client_secret: client_secret,
			grant_type:"authorization_code",
			code: code,
			redirect_uri: app_redirect_url
		},
		url: config.bitUrl.access_token,
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"X-Accept": "application/json"
		}
	}

	request.post( options, function (error, response, body) {
		callback(body);
	});
}

var getLinkHistory = function( access_token, optional, callback ) {

	var options = {
		qs: {
			access_token : access_token
		},
		url: config.bitUrl.get_history,
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"X-Accept": "application/json"
		}
	}

	if (arguments.length === 2) { // if only two arguments were supplied
		if (Object.prototype.toString.call(optional) == "[object Function]") {
			callback = optional; 
		}
	} else {
		for (var prop in optional) {
			if (optional.hasOwnProperty(prop)) {
				options.qs[prop] = optional[prop];
			}
		}
	}

	request.get( options, function (error, response, body) {
		callback(body);
	});
}

var getNetworkHistory = function( access_token, optional, callback ) {

	var options = {
		qs: {
			access_token : access_token
		},
		url: config.bitUrl.get_history,
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"X-Accept": "application/json"
		}
	}

	if (arguments.length === 2) { // if only two arguments were supplied
		if (Object.prototype.toString.call(optional) == "[object Function]") {
			callback = optional; 
		}
	} else {
		for (var prop in optional) {
			if (optional.hasOwnProperty(prop)) {
				options.qs[prop] = optional[prop];
			}
		}
	}

	request.get( options, function (error, response, body) {
		callback(body);
	});
}

module.exports = {
	getAcessToken: getAcessToken,
	getHistory: getHistory,
	getNetworkHistory: getNetworkHistory
}