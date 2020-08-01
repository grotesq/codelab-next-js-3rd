export default ( req, res ) => {
    const value = parseFloat( req.query.value );
    res.json( { value: value * 2 } );
}