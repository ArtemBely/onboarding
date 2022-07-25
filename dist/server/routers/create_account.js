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
import Create from '../../components/Create';
const router = express.Router();
router.get('/', isLogin, (req, res) => {
    let cond = req.isAuthenticated();
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(Create, null)));
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
});
router.post('/firstForm', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var user = req.user;
    var { individual, legalEntity, countryOfCompany, typeOfCompany } = req.body;
    if (individual == 'on') {
        try {
            user.individual = individual;
            user.legalEntity = 'off';
            user = yield user.save();
            console.log(req.body, user);
            res.redirect('/personal_details');
        }
        catch (err) {
            if (err)
                throw err;
            console.log(err);
        }
    }
    else if (legalEntity == 'on') {
        try {
            user.legalEntity = legalEntity;
            user.individual = 'off';
            user.countryOfCompany = countryOfCompany;
            user.typeOfCompany = typeOfCompany;
            user = yield user.save();
            console.log(req.body, user);
            res.redirect('/company_details');
        }
        catch (err) {
            if (err)
                throw err;
            console.log(err);
        }
    }
}));
function isLogin(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/signin');
}
export default router;
