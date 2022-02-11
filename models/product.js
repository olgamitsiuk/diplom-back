// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Product = new Schema({
    name: String,
    model: String,
    slug: String,
    manufacturer: String,
    category: String,
    subCategory: String,
    subCatName: String,
    new: String,
    popular: String,
    image: {},
    price_action: Number,
    price_normal: Number,
    sale: String,
    description: String,
    description_full: String,
    characteristics: [],
 });

// Экспортируем модель нашего студента
module.exports = mongoose.model("Product", Product);