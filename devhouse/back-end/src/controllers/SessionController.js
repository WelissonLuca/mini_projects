
import User from '../models/User';
class SessionController{
   async store(req, res) {
       const { email } = req.body;

       let user = await User.findOne({ email: email });
       
       if(!user)
           let user = await User.create({ email });
       
        return res.json(user)
    }
}


export default  new SessionController