//Almacena todas las acciones de CRUD con 
//relacion a los tweets: POST, PUT, ETC.

const Tweet = require('../models/Tweet');

module.exports = {
	//Listagem de tweets
	async index(req, res) {
		const tweets = await Tweet.find({}).sort('-createdAt');

		return res.json(tweets);
	},

	//Criacao de tweets
	async store(req, res) {
		const tweet = await Tweet.create(req.body);

		req.io.emit('tweet', tweet);

		return res.json(tweet);
	}
};