import oauthSignature from 'oauth-signature'
import n from 'nonce'
import request from 'request'
import qs from 'querystring'
import _ from 'lodash'



var request_yelp = function(lng_lat) {

  var url = 'http://api.yelp.com/v3/businesses/search?';

  var default_parameters = {
    term: 'restaurant',
    ll: lng_lat.lat + ',' + lng_lat.lng,
    sort: '2'
  };

  var required_parameters = {
    oauth_consumer_key : process.env.oauth_consumer_key,
    oauth_token : process.env.oauth_token,
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };

  var parameters = _.assign(default_parameters, lng_lat, required_parameters);

  var signature = oauthSignature.generate('GET', url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

  parameters.oauth_signature = signature;

  var paramURL = qs.stringify(parameters);

  var apiURL = url+'?'+paramURL;

  request(apiURL, function(error, response, body){
    return response
  });

};
module.exports = request_yelp
