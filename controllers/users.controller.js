const { response } = require( 'express' );

const getUsers = ( req = request, res = response ) => {
    const { q, name = 'Not name', apikey, page = 1, limit } = req.query
    res.status( 403 ).json( {
        msg: 'get API - controller',
        q,
        name,
        apikey,
        page,
        limit
    } );
} 

const postUsers = ( req, res ) => {
    const { name, age } = req.body;
    res.status( 201 ).json( {
        msg: 'post API - controller',
        name,
        age
    } );
}

const putUsers = ( req, res = response ) => {
    const id = req.params.id;
    res.status( 403 ).json( {
        msg: 'put API - controller',
        id
    } );
}

const patchUser = ( req, res ) => {
    res.status( 403 ).json( {
        msg: 'patch API - controller'
    } );
}

const deleteUsers = ( req, res = response ) => {
    res.status( 403 ).json( {
        msg: 'delete API - controller'
    } );
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    patchUser,
    deleteUsers
}