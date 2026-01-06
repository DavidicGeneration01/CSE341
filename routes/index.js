const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.wifeRoute);
routes.get('/david', lesson1Controller.davidicRoute);
routes.get('/Davidic', lesson1Controller.davidRoute);

module.exports = routes;