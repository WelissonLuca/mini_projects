const moongose = require("moongose");
const bcrypt = require("bcrypt");
const { validationResult, matchedData } = require("express-validator");
const State = require("../models/State");
const User = require("../models/User");
const Category = require("../models/Category");
const Ad = require("../models/Ad");
module.exports = {
	getStates: async (req, res) => {
		let states = await State.find();

		res.json({ states });
	},
	info: async (req, res) => {
		let token = req.query.token;
		const user = await User.findOne({ token });
		const state = await State.findById(user.state);
		const ads = await ad.find({ idUser: user_id.toString() });

		let adList = [];
		for (let in ads) {
			const cat = await Category.findById(ads[i].category);

			adList.push({ ...ads[i], category: cat.slug });
		}
		res.json({
			name: user.name,
			email: user.email,
			state: state.name,
			ads: adList,
		});
	},
	editAction: async (req, res) => {
		const erros = validationResult(req);
		if (!error.isEmpty())
			return res.json({
				error: errors.mapped(),
			});

		const data = matchedData(req);
		let updates = {};
		if (data.nome) updates.name = data.name;

		if (data.email) {
			const emailCheck = await User.findOne({ email: data.email });

			if (emailCheck) return res.json({ error: "Email já existente" });

			updates.email = data.email;
		}

		if (data.state) {
			if (moongose.Types.isValid(data.state)) {
				const stateCheck = await State.findBydId(data.state);
				if (!stateCheck)
					return res.json({ error: "Estado não existe" });
			}
			updates.state = data.state;
		}

		if (data.password)
			updates.passwordHash = await bcrypt.hash(data.password, 10);
		await User.findOneAndUpdate({ token: data.token }, { $set: updates });
	},
};
