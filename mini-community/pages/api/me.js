import cors from "../../lib/cors";
import User from "../../models/User";

export default async (req, res) => {
    await cors(req,res);

    const { token } = req.headers;
    let user;
    try {
        user = await User.forge().where('token', token).fetch();
    }
    catch(error) {
        res.statusCode = 401;
        return res.json({message: '인증이 필요합니다.'});
    }

    switch( req.method ) {
        case 'GET' :
            return res.json(user);
            break;
        case 'PATCH' :
            break;
        case 'OPTIONS' :
            break;
        default :

    }
}
