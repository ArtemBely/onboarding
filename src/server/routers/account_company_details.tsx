import React from 'react';
import express, { Request, Response, NextFunction } from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import AccountCompanyDetails from '../../components/ProfileComponents/AccountCompanyDetails';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  let cond: boolean = req.isAuthenticated();
  let user: object = {status: "x"};
  const congrats = renderToString(
    <StaticRouter>
       <AccountCompanyDetails />
    </StaticRouter>
  )
  res.send(
    `<!DOCTYPE html>
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
        </html>`
    );
});

export default router;
