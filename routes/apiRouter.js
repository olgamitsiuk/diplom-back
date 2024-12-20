const express = require('express');
const router = express.Router();

const cProduct = require('./../controllers/controllerProduct');
const fillProduct = require('./../controllers/fillProduct');
const cCategory = require('./../controllers/controllerCategory');

router.get('/api/product/seed', fillProduct.seed); // Для наполнения базы

router.get('/api/product', cProduct.get);
router.get('/api/product/byid/:id', cProduct.getById);
router.post('/api/product', cProduct.post);
router.put('/api/product', cProduct.put);
router.delete('/api/product', cProduct.delete);
router.get('/api/product/autocomplete', cProduct.autocomplete); // Для автозаполнения формы
router.get('/api/product/byfields', cProduct.getByFields); // Для получения товаров, соответствующих условиям фильтра
router.get('/api/product/category/:categoryName', cProduct.getByCategory);
router.get('/api/product/subcategory/:subCategoryName', cProduct.getBySubCategory);
router.get('/api/product/new', cProduct.getByNew);
router.get('/api/product/popular', cProduct.getByPopular);
router.get('/api/product/sale', cProduct.getBySale);

router.get('/api/category/seed', cCategory.seed)
router.get('/api/category/getcategory', cCategory.getCategory); // Для получения доступных полей фильтра
router.get('/api/category/getcategory/:name', cCategory.getCategoryByName);

const cMailer = require('../controllers/MailController');
router.post('/api/sendmail', cMailer.nodemailer);

const cTelegram = require('../controllers/SendTelegram')
router.post('/api/sendTelegram', cTelegram.post);

const cUser = require('../controllers/userController')
router.get('/api/users', cUser.get);
router.post('/api/users', cUser.post);
router.put('/api/users', cUser.put);
router.delete('/api/users', cUser.delete);

router.get('/api/users/:user_id', cUser.getOne);
router.get('/api/user/testbyemail/:email', cUser.testByEmail);
router.get('/api/user/findbyemailpswd/:email/:password', cUser.findByEmailPswd);
router.get('/api/user/trylogin/:email/:password', cUser.tryLogin);
router.get('/api/session/:session_id', cUser.getSessionById);

router.delete('/api/users', cUser.delete);
router.delete('/api/user/sessionDelete/', cUser.deleteSession);
router.put('/api/user/sessionUpdate/', cUser.updateSessionTime);

const cFiles = require('../controllers/fileController');
router.post('/api/files', cFiles.createFile);

module.exports = router;