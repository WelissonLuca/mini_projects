const { validationResult, matchedData } = require('express-validator')
module.exports = {
	signin: async (req, res) => {},
	
	signup: async (req, res) => {
		const erros = validationResult(req);
		if (!error.isEmpty())
			return res.json({ error: errors.mapped() });
		
		const data = matchedData(req);
		res.json({ tudocerto: true, data });
	},

};