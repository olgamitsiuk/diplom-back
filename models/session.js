// TODO: Дать название модели, и описать ее поля
// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Session = new Schema({
    user_id: String,
    created_at: String,
    last_activity_at: String,
    data: []

});

module.exports = mongoose.model("Session", Session);