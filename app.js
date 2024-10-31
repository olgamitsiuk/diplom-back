const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require("multer");
const path = require('path'); // Разрешение забирать статические файлы из папки
const apiRoute = require("./routes/apiRouter");

// Добавим модуль для разборки тела запроса
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors()); // Для проверки запросов
app.use(logger('dev')); // Для ведения логов
app.use(cookieParser()); // Для куков
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({ dest: "public/upload" }).single("fileData")); // Сообщим верменную папку для хранения файлов
app.use(apiRoute); // Маршруты

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });
}

module.exports = app