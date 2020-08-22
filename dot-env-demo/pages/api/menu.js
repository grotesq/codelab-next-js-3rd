import CSV from 'comma-separated-values';
import fs from 'fs';

export default (req, res) => {
    const csvDocument = fs.readFileSync( './menu.csv', 'utf8' );
    const csv = new CSV( csvDocument, { header: true } );
    res.json( csv.parse() );
}