import React from 'react';
import express, { Request, Response, NextFunction } from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Create from '../../components/Create';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  let cond: boolean = req.isAuthenticated();
  const congrats = renderToString(
    <StaticRouter>
       <Create />
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
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`
    );
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.redirect('/finish');
});

export default router;
