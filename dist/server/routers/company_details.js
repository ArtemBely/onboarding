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
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Company from '../../components/CompanyComponents/Company';
const router = express.Router();
router.get('/', isLogin, (req, res) => {
    var user = req.user;
    let cond = req.isAuthenticated();
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(Company, null)));
    if (user.legalEntity == 'on')
        res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles//bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
    else {
        res.redirect('/personal_details');
    }
});
router.post('/firstForm', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var user = req.user;
    console.log(req.body, " is body");
    try {
        var i;
        for (i = 0; i < Object.keys(req.body).length; i++) {
            user[Object.keys(req.body)[i]] = Object.values(req.body)[i];
        }
        user = yield user.save();
        console.log(user);
        res.redirect('/company_personal');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
function isLogin(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/signin');
}
export default router;
