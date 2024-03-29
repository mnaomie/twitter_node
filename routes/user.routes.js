const router = require('express').Router();
const { ensureAuthenticated } = require('../config/security.config')
const {signup, signupForm, uploadImage, displayProfile, userList, followUser, unFollowUser} = require('../controllers/user.controller');

// routes pour inscrire un utilisateur
router.get('/', userList);
router.get('/follow/:userId',ensureAuthenticated, followUser);
router.get('/unfollow/:userId',ensureAuthenticated, unFollowUser);
router.get('/signup/form', signupForm);
router.post('/signup', signup)
router.post('/update/image', uploadImage)
router.get('/:username', ensureAuthenticated, displayProfile)

module.exports = router;