import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import { App } from '../components/App';
//@ts-ignore
import Routes from '../components/routes';
import express, { Application, Request, Response, NextFunction } from 'express';
import { renderToString } from 'react-dom/server';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';
import validator from 'express-validator';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';
import flash from 'connect-flash';
import Error from '../interfaces/Error';

import regRouter from './routers/registration';
import createRouter from './routers/create_account';
import personalRouter from './routers/personal_details';
import financeRouter from './routers/financial_situation';
import docsRouter from './routers/documents';
import compDocsRouter from './routers/company_documents';
import verifRouter from './routers/verification';
import compVerifRouter from './routers/company_verification';
import finishRouter from './routers/finish';
import loginRouter from './routers/login';
import compFinishRouter from './routers/company_finish';
import logoutRouter from './routers/logoutLogic';
import partiesRouter from './routers/connected_parties';
import parties2Router from './routers/parties';
import companyRouter from './routers/company_details';
import perCompRouter from './routers/company_personal';
import accCompRouter from './routers/account_company_details';
import profileRouter from './routers/profile';
import adminRouter from './routers/admin';

const app: Application = express();
const CONNECTION_URI: any = process.env.MONGODB_URI;
//const port = process.env.PORT || 5000;

require('dotenv/config');

mongoose.connect(
  CONNECTION_URI || process.env.CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    console.log('Connection with database Users completed');
  }
);

/*
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


client.messages.create({
  to: '+420775650705',
  from: '+447588664528',
  body: '?????????? ?????????? ????????!'
}).then((message) => console.log(message.sid));
*/

app.use(function(req: Request, res: Response, next: NextFunction) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0");
  //res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/registration', regRouter);
app.use('/create_account', createRouter);
app.use('/personal_details', personalRouter);
app.use('/financial_situation', financeRouter);
app.use('/documents', docsRouter);
app.use('/company_documents', compDocsRouter);
app.use('/verification', verifRouter);
app.use('/company_verification', compVerifRouter);
app.use('/finish', finishRouter);
app.use('/signin', loginRouter);
app.use('/company_finish', compFinishRouter);
app.use('/company_details', companyRouter);
app.use('/company_personal', perCompRouter);
app.use('/parties', parties2Router);
app.use('/connected_parties', partiesRouter);
app.use('/logout', logoutRouter);
app.use('/account_company_details', accCompRouter);
app.use('/admin', adminRouter);
app.use(['/profile', '/account_details', '/account_finances', '/account_documents'], profileRouter);

app.get('*', (req: Request, res: Response, next: NextFunction) => {
  const activeRouter: any = Routes.find((route: any) => matchPath(req.url, route)) || {};
  const promise = activeRouter.fetchInitialData ?
                  activeRouter.fetchInitialData(req.path) :
                  Promise.resolve()
  promise.then((data: any) => {
    const context: object = { data };
    const user:any = req.user;
    const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
           <App data={data}/>
        </StaticRouter>
      )

      const html =
        `<!DOCTYPE html>
            <html>
                <head>
                  <title>collab</title>
                  <link rel="stylesheet" type="text/css" href="../main.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                      <script src='bundles/bundle.js' defer></script>
                        <script>window.__INITIAL_DATA__= ${serialize(user)}</script>
                            <title>COLLAB</title>
                          </head>
                        <body>
                       <div id="app">
                     ${markup}
                  </div>
                </body>
            </html>`;

        return res.send(html);
  }).catch(next)
});

app.use((error:any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status);
    res.json({
    status: error.status,
    message: error.message,
    stack: error.stack
  });
});

/*
app.use((req: Request, res: Response, next: NextFunction) => {  //<-- ???????????????? ???????? ???????????????? ???????????????????????????? ????????????
     var err: Error = new Error('Noooo');
     err.status = 404;
     next (err);
});
*/

app.listen(8080, () => {console.log('Server started!')});
