// signupRoutes.js
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { signup } = require('../controllers/authController');

router.post(
  '/signup',
  [
    body('username').trim().isLength({ min: 1 }).withMessage('Username is required'),
    body('email').trim().isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  signup
);

module.exports = router;

