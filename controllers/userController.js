const User = require('../models/User')

exports.login = (req, res) => {
    res.render('login');
};

exports.register = (req, res) => {
    res.render('register');
};

exports.registerAction = (req, res) => {
    const newUser = new User(req.body)
    User.register(newUser, req.body.password, e => {
        if (e) {
            req.flash('error', 'Ocorreu um erro, tente mais tarde.')
            res.redirect('/users/register');
            return;
        }
        req.flash('!sucess', 'Registro efeutado com sucesso, faça o login.')
        res.redirect('/users/login');
    });
    
}

exports.loginAction = (req, res) => {
    const auth = User.authenticate();

    auth(req.body.email, req.body.password, (e, result) => {
        if (!result) {
            req.flash('error', 'Seu email e/ou senha estão errados');
            res.redirect('/users/login');
            return
        }

        req.login(result, () => {});
        

        req.flash('!sucess', 'vocẽ foi logado com sucesso');
        res.redirect('/')
    });
}

exports.logout = (req, res) => {
    req.logout();

    res.redirect('/');
}