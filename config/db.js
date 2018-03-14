const crypto = require ('crypto').randomBytes(256).toString('hex');

module.exports= {
	uri: 'mongodb://admin:admin@ds213759.mlab.com:13759/iwealth',
	secret: crypto,
	db:'iWealth'
}