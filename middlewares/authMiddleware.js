

module.exports.Islogged = (req, res, next) => {
  
  if (!req.isAuthenticated()) {

    req.flash('error', 'Ops você não tem permissão para acessar esta pagina')

    res.redirect('/users/login');

    return;
  }

  next();
};