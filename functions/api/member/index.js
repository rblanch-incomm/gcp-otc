const router  = require('express').Router();
const request = require('request');
const service = require('../../utils/services.js');

let getBalance = (req, res) => {
	let body = req.body;
	let token = body.token;
	let data = {
		'cardNumber': body.cardNumber || '',
		'serialNumber': body.serialNumber || '',
		'apiVersion': '2.0',
		'mobileAppVersion': '1.0'
	}
	let opts = service.getOptions(endpoint, data, token);

	request(opts, function( err, resp, body ) {
		console.log(body)
		if (err) {
			res.send(err);
		} else if (body != null) {
			let data = {
				'retailers': body.retailers
			}
			res.send(data);
		} else {
			res.send({'message': 'There is no data'});
		}
	})
}

router.post('/getBalance', getBalance);

module.exports = router;








// (context, complete, modules) => {
// 		let body = context.body;
// 		let token = body.token;
// 		let data = {
// 			'cardNumber': body.cardNumber || '',
// 			'serialNumber': body.serialNumber || '',
// 			'apiVersion': '2.0',
// 			'mobileAppVersion': '1.0'
// 		}
// 		let opts = service.getOptions(endpoint, data, token);

// 		request(opts, function( err, resp, body ) {
// 		console.log(body)
// 		if (err) {
// 			return complete().setBody(err).badRequest().done();
// 		} else if (body != null) {
// 			let data = {
// 				'retailers': body.retailers
// 			}
// 			return complete().setBody(data).ok().done();
// 		} else {
// 			return complete().setBody({'message': 'There is no data'}).badRequest().done();
// 		}
// 	});