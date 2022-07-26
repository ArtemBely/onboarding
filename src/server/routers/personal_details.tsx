import React from 'react';
import express, { Request, Response, NextFunction } from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Personal from '../../components/Personal';

const router = express.Router();

router.get('/', isLogin, (req: Request, res: Response) => {
  let cond: boolean = req.isAuthenticated();
  var user:any = req.user;
  const congrats = renderToString(
    <StaticRouter>
       <Personal />
    </StaticRouter>
  )
  if(user.individual == 'on')
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
    else {res.redirect('/company_details');}
});

router.post('/firstForm', async(req, res) => {
    var user:any = req.user;
      try {
        var i:number;
        for(i=0; i<Object.keys(req.body).length; i++) {
          user[Object.keys(req.body)[i]] = Object.values(req.body)[i];
        }
        user = await user.save();
        console.log(user);
        res.redirect('/personal_details');
      }
      catch(err) {
            if (err) throw err;
            console.log(err);
      }
});

function isLogin(req:Request, res:Response, next:NextFunction) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/signin');
}

export default router;
