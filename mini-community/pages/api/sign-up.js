import User from "../../models/User";
import bcrypt from 'bcrypt';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import cors from "../../lib/cors";

export default async (req, res) => {
    await cors(req,res);

    const { email, password, name } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const now = moment().format('x');
    const token = uuid().toString();

    const user = await User.forge({
        email,
        password: hash,
        name,
        token,
        created_at: now,
        updated_at: now,
    }).save();

    res.statusCode = 200;
    res.json(user);
}
