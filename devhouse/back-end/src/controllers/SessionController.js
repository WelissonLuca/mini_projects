
import User from '../models/User';
class SessionController{
    store(req, res) {
        const { email } = req.body
        let user = User.create({ email });
        return res.json(user)
    }
}


export default  new SessionController