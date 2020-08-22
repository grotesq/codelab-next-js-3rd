import Album from '../../../db/Album';
import cors from '../../../lib/cors';

export default async ( req, res ) => {
    await cors( req, res );

    switch( req.method ) {
        case 'GET' :
            const albums = await Album
                .forge()
                .orderBy('id', 'desc')
                .fetchAll();
            res.json( albums );
            break;
        case 'POST' :
            const { artist, title } = req.body;
            const album = new Album();
            const result = await album.save({
                artist,
                title,
            });
            res.json( result );
            /*
                // case 2
                res.json( await Album.fetchAll() );
            */
            break;
        default :
            res.setHeader('Allow', ['OPTIONS', 'HEAD', 'GET', 'POST'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
