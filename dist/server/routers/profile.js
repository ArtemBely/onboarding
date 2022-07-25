import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Profile from '../../components/ProfileComponents/Profile';
const router = express.Router();
router.get('/', isLogin, (req, res) => {
    let cond = req.isAuthenticated();
    let user = { status: "user" };
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(Profile, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_DATA__ = ${serialize(user)}</script>
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
});
function isLogin(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/signin');
}
export default router;
