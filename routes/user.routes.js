const { Router } = require( 'express' );
const { getUsers, 
        putUsers, 
        postUsers, 
        deleteUsers,
        patchUser 
    } = require('../controllers/users.controller.js');

const router = Router();

router.get( '/', getUsers );  

router.post( '/', postUsers );        

router.put( '/:id', putUsers );        

router.patch( '/', patchUser );

router.delete( '/', deleteUsers );        

module.exports = router;