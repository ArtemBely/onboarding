import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import ChangeParties from '../../components/ProfileComponents/ChangeParties';
const router = express.Router();
router.get('/', (req, res) => {
    let cond = req.isAuthenticated();
    let user = { status: "admin" };
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(ChangeParties, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles//bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(user)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
});
export default router;
