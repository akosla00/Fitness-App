const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth.js');
const {
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController.js');

router.route('/').post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router;
