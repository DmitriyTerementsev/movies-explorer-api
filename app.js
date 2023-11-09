const express = require('express');
// const mongoose = require('mongoose');

const app = express();

const { PORT = 3000, MONGO_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

app.listen(PORT);
console.log(`Server listen on port ${PORT}`, `Ссылка на сервер ${MONGO_URL}`);
