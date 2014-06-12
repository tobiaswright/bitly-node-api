# bitly-api [![Build Status](https://secure.travis-ci.org/tobiaswright/bitly-api.png?branch=master)](http://travis-ci.org/tobiaswright/bitly-api)

Node npm for bitly API

Currently this only has Link History and Network History. The rest of the API will be wired up in the future

## Getting Started
Install the module with: `npm install bitly-api`

### Get Access Token

```javascript
var bitly = require('bitly-api');

bitly.getAcessToken( client_id, client_secret, app_redirect_url, code, function( data) {
	console.log( data )
	//returns access_token
})
```
Please note, app_redirect_url should be the URL that is used in you bit.ly application.

### Get Link History

```javascript
bitly.getLinkHistory( access_token, options, function( data ) {
	console.log( data )	
})
```
'options' is an optional parameter and needs to be an object using the parameters of the bit.ly url for [Link History](http://dev.bitly.com/user_info.html#v3_user_link_history)

```
options = {
	limit: 10,
	offset: 5,
	...
}
```

### Get Network History

```javascript
bitly.getNetworkHistory( access_token, options, function( data ) {
	console.log( data )	
})
```
'options' is an optional parameter and needs to be an object using the parameters of the bit.ly url for [Network History](http://dev.bitly.com/user_info.html#v3_user_network_history)

```
options = {
	limit: 10,
	offset: 5,
	...
}
```


## License
Copyright (c) 2014 Tobias Wright. Licensed under the MIT license.
