const { checkSchema } = require('express-validator')
module.exports = {
  signup: checkSchema({
    name: {
      trim: true,
      isLength: {
        options:{min: 2 }
      },
      errorMessage: 'Nome precisa ter pelo menos dois caracteres'
    },

    email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage:'email invalido'
    },
    password: {
  
      isLength: {
        options:{min: 2}
      },
      state: {
        notEmpty: true,
        errorMessage: 'Estado não preenchido'
      }
      
    }
  })
}