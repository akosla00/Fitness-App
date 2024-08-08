const router = require('express').Router();
const {
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController.js');

router.route('/').post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;