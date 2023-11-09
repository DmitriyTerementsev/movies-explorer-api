const router = require('express').Router();
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');
const {
  getCurrentUser, changeInfo, login, logout, createUser,
} = require('../controllers/user');
const {
  validateLogin,
  validateUser,
} = require('../validator/validator');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post('/signin', validateLogin, login);
router.post('/signup', validateUser, createUser);
router.post('/signout', logout);

router.use(auth);

router.get('/users/me', getCurrentUser);
router.patch('/users/me', changeInfo);
router.get('/movies');
router.post('/movies');
router.get('/movies/_id');

router.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Страница не найдена.'));
});

module.exports = router;
