import User from "../../models/User";
import bcrypt from "bcrypt";
import cors from "../../lib/cors";

export default async (req, res) => {
    await cors(req,res);

    const { email, password } = req.body;

    let user;
    try {
        user = await User.forge().where('email', email).fetch();
    }
    catch( error ) {
        res.statusCode = 401;
        return res.json({message: '로그인 정보를 확인해주세요.' } );
    }

    if( !user ) {
        res.statusCode = 401;
        return res.json({message: '로그인 정보를 확인해주세요.' } );
    }
    if( bcrypt.compareSync(password, user.get('password') ) ) {
        res.statusCode = 200;
        return res.json( user );
    }
    else {
        res.statusCode = 401;
        res.json({message: '로그인 정보를 확인해주세요.' } );
    }
}
