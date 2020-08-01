import { v4 as uuid } from 'uuid';

export default (req, res) => {
    res.statusCode = 200;
    res.json({ uuid: uuid() });
}