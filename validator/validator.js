const { celebrate, Joi } = require('celebrate');

const pattern = /^(https?:\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)?/im;

module.exports.validateUrl = (url) => {
  if (pattern.test(url)) {
    return url;
  }
  throw new Error('Ссылка введена неверно');
};

module.exports.validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .messages({
        'string.empty': 'Это поле обязательное для заполнения',
      })
      .email()
      .message('Введите корректный email'),
    password: Joi.string().required().messages({
      'string.empty': 'Это поле обязательное для заполнения',
    }),
  }),
});

module.exports.validateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).messages({
      'string.min': 'Текст должен быть не короче 2 символов',
      'string.max': 'Текст должен быть не длиннее 30 символов',
    }),
    about: Joi.string().min(2).max(30).messages({
      'string.min': 'Текст должен быть не короче 2 символов',
      'string.max': 'Текст должен быть не длиннее 30 символов',
    }),
    avatar: Joi.string().pattern(pattern).message('Введите URL'),
    email: Joi.string()
      .required()
      .messages({
        'string.empty': 'Это поле обязательное для заполнения',
      })
      .email()
      .message('Введите корректный email'),
    password: Joi.string().required().messages({
      'string.empty': 'Это поле обязательное для заполнения',
    }),
  }),
});

module.exports.validateUserInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.empty': 'Это поле обязательное для заполнения',
        'string.min': 'Текст должен быть не короче 2 символов',
        'string.max': 'Текст должен быть не длиннее 30 символов',
      }),
  }),
});

module.exports.validateMovie = celebrate({
  body: Joi.object().keys({
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required().min(4),
    description: Joi.string().required(),
    image: Joi.string().required().regex(linkRegEx),
    trailerLink: Joi.string().required().regex(linkRegEx),
    thumbnail: Joi.string().required().regex(linkRegEx),
    movieId: Joi.number().required(),
  }),
});

module.exports.validateUserId = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex().required()
      .messages({
        'string.length': 'Фиксированное количество символов id - 24',
        'string.empty': 'Это поле обязательное для заполнения',
      }),
  }),
});

module.exports.validateMovieId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required()
      .messages({
        'string.length': 'Фиксированное количество символов id - 24',
        'string.empty': 'Это поле обязательное для заполнения',
      }),
  }),
});
