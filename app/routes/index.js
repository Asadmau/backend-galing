module.exports = app => {
    const router = require('express').Router();
    const user = require('../controllers/user.controller');

    router.get('/add', user.addUser);
    router.get('/users', user.getAll);
    router.get('/:id', user.findOne);
    app.use(router);
}