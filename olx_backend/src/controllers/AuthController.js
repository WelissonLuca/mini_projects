const moongose = require("mongoose");
const bcrypt = require("bcrypt");
const { validationResult, matchedData } = require("express-validator");
const User = require("../models/User");
const State = require("../models/State");
module.exports = {
	signin: async (req, res) => {
		const erros = validationResult(req);
		if (!error.isEmpty())
			return res.json({
				error: errors.mapped(),
			});

		const data = matchedData(req);
		const user = await user.findOne({ email: data.email });
		if (!user) return res.json({ error: "EMAIL OU SENHA ERRADOS" });

		const match = await bcrypt.compare(data.password, user.passwordHash);
		if (!match) return res.json({ error: "EMAIL OU SENHA ERRADOS" });

		const payload = (Date.now() + Math.random()).toString();
		const token = await bcrypt.hash(payload, 10);

		user.token = token;
		await User.save();
		res.json({ token, email: data.email });
	},

	signup: async (req, res) => {
		const erros = validationResult(req);
		if (!error.isEmpty())
			return res.json({
				error: errors.mapped(),
			});

		const data = matchedData(req);

		const user = await User.findOne({
			email: data.email,
		});

		if (user)
			return res.json({
				error: {
					emai: {
						msg: "E-mail não existe",
					},
				},
			});

		if (mooongose.Types.ObjectId.isValid(data.state)) {
			const stateItem = await State.findById(data.state);
			if (!stateItem)
				return res.json({
					error: { state: { msg: "Estado não existe" } },
				});
		} else
			return res.json({
				error: { state: { msg: "Código de estado invalido" } },
			});

		const passwordHash = await bcrypt.hash(data.password, 10);

		const payload = (Date.now() + Math.random()).toString();
		const token = await bcrypt.hash(payload, 10);

		const newUser = new User({
			name: data.name,
			email: data.email,
			passwordHash,
			token,
			sate: data.state,
		});

		await newUser.save();

		res.json({ token });
	},
};
