import React from 'react';
import express, { Request, Response, NextFunction } from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Create from '../../components/Create';

const router = express.Router();

router.get('/', isLogin, (req: Request, res: Response) => {
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

router.post('/firstForm', async(req, res) => {
  var user:any = req.user;
  var { individual, legalEntity, countryOfCompany, typeOfCompany } = req.body;
  if(individual == 'on') {
    try {
      user.individual = individual;
      user.legalEntity = 'off';
      user = await user.save();
      console.log(req.body, user);
      res.redirect('/personal_details');
    }
    catch(err) {
          if (err) throw err;
          console.log(err);
    }
  }
  else if(legalEntity == 'on') {
    try {
      user.legalEntity = legalEntity;
      user.individual = 'off';
      user.countryOfCompany = countryOfCompany;
      user.typeOfCompany = typeOfCompany;
      user = await user.save();
      console.log(req.body, user);
      res.redirect('/company_details');
    }
    catch(err) {
          if (err) throw err;
          console.log(err);
    }
  }

});

function isLogin(req:Request, res:Response, next:NextFunction) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/signin');
}

export default router;
