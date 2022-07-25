var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import passport from 'passport';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Main from '../../components/Main';
const LocalStrategy = require('passport-local').Strategy;
//@ts-ignore
import { User, createUser, comparePassword } from '../models/User.js';
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
const router = express.Router();
router.get('/', notLoggedIn, (req, res) => {
    let cond = req.isAuthenticated();
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(Main, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
});
//@ts-ignore
router.post('/', (req, res, done) => {
    const { email, password } = req.body;
    req.checkBody("email", "Неверный формат email").isEmail().notEmpty();
    req.checkBody("password", "Минимальная длина пароля - 9 символов").isLength({ min: 9 }).notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        console.log(errors);
        var err = errors.map((er) => er.msg);
        const enter = renderToString(React.createElement(StaticRouter, null,
            React.createElement(Main, null)));
        const html = `<!DOCTYPE html>
        <html>
            <head>
              <title>Profile</title>
                   <link rel="stylesheet" type="text/css" href="main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                  <script src='bundles/bundle.js' defer></script>
                <script>window.__INITIAL_DATA__= ${serialize(err)}</script>
            </head>
            <body>
                 <div id="app">
                     ${enter}
                 </div>
            </body>
        </html>`;
        return res.send(html);
    }
    User.findOne({ email: email }, function (err, user) {
        if (err) {
            return done(err);
        }
        ;
        if (user) {
            const errors = ['Такой email уже зарегистрирован'];
            const cond = req.isAuthenticated();
            const enter = renderToString(React.createElement(StaticRouter, null,
                React.createElement(Main, null)));
            const html = `<!DOCTYPE html>
            <html>
                <head>
                  <title>Такой email уже существует</title>
                       <link rel="stylesheet" type="text/css" href="main.css">
                         <meta name="viewport" content="width=device-width, initial-scale=1">
                      <script src='bundles/bundle.js' defer></script>
                   <script>window.__INITIAL_DATA__= ${serialize(errors)}</script>
                </head>
                <body>
                     <div id="app">
                         ${enter}
                     </div>
                </body>
            </html>`;
            res.send(html);
            //@ts-ignore
            return done(null, false);
        }
        var newUser = new User({
            email: email,
            password: password
        });
        createUser(newUser, function (err, user) {
            if (err)
                throw err;
            console.log(user);
        });
        const success = ['Регистрация завершена успешно, можете войти'];
        const enter = renderToString(React.createElement(StaticRouter, null,
            React.createElement(Main, null)));
        res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_DATA__= ${serialize(success)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${enter}
              </div>
            </body>
        </html>`);
    });
});
passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    User.findOne({ email: email }, function (err, user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (err) {
                console.log(err);
                return done(err);
            }
            if (!user) {
                req.flash('errors', 'Не найдено пользователей');
                console.log('Не найдено пользователей. Ошибка в почте');
                return done(null, false);
            }
            comparePassword(password, user.password, function (err, isMatch) {
                if (err)
                    throw err;
                if (isMatch) {
                    return done(null, user);
                }
                else {
                    req.flash('errors', 'неверный пароль');
                    console.log('Неверный пароль');
                    return done(null, false);
                }
            });
        });
    });
}));
router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/create_account',
    failureRedirect: '/signin',
    passReqToCallback: true
}));
function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/profile');
}
export default router;
