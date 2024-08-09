const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth.js');
const {
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    login,
} = require('../../controllers/userController.js');

const { authMiddleware } = require('../../utils/auth.js');

router.route('/').post(createUser);

router.route('/login').post(login)

router.route('/:userId').get(authMiddleware, getSingleUser).put(authMiddleware, updateUser).delete(authMiddleware, deleteUser);

router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router;
