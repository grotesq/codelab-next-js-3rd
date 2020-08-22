import Album from '../../../db/Album';
import cors from '../../../lib/cors';

export default async ( req, res ) => {
    await cors( req, res );

    switch( req.method ) {
        case 'GET' :
            break;
        case 'DELETE' :
            const { id } = req.query;
            console.log( 'id', id );
            await Album.forge().where( 'id', id ).destroy();
            res.json( 'OK' );
            break;
        default :
            res.setHeader('Allow', ['OPTIONS', 'HEAD', 'GET', 'DELETE'])
            res.status(405).end(`Method ${req.method} Not Allowed`)    
    }
}