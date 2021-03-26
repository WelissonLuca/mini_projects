const { checkSchema } = require("express-validator");
module.exports = {
	editAction: checkSchema({
    token: {
      notEmpty: true,
    },
		name: {
			optional: true,
			trim: true,
			isLength: {
				options: { min: 2 },
			},
			errorMessage: "Nome precisa ter pelo menos dois caracteres",
		},

		email: {
			optional: true,
			isEmail: true,
			normalizeEmail: true,
			errorMessage: "email invalido",
		},
		password: {
			optional: true,
			isLength: {
				options: { min: 2 },
			},
			state: {
				optional: true,
				notEmpty: true,
				errorMessage: "Estado não preenchido",
			},
		},
	}),
	signin: checkSchema({
		email: {
			isEmail: true,
			normalizeEmail: true,
			errorMessage: "email invalido",
		},
		password: {
			isLength: {
				options: { min: 2 },
			},
			state: {
				notEmpty: true,
				errorMessage: "Estado não preenchido",
			},
		},
	}),
};
