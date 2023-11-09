const router = require('express').Router();
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post('/signin');
router.post('/signup');
router.post('/signout');

router.use(auth);

router.get('/users/me');
router.patch('/users/me');
router.get('/movies');
router.post('/movies');
router.get('/movies/_id');

router.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Страница не найдена.'));
});

module.exports = router;
