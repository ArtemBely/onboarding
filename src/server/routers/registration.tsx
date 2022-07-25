import React from 'react';
import express, { Request, Response, NextFunction } from 'express';
import serialize from 'serialize-javascript';
import passport from 'passport';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Main from '../../components/Main';
const LocalStrategy = require('passport-local').Strategy;
//@ts-ignore
import { User, createUser, comparePassword } from '../models/User.js';
import Create from '../../components/Create';



passport.serializeUser(function(user:any, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err:any, user:object) {
    done(err, user);
  });
});

const router = express.Router();

router.get('/', notLoggedIn, (req: Request, res: Response) => {
  let cond: boolean = req.isAuthenticated();
  const congrats = renderToString(
    <StaticRouter>
       <Main />
    </StaticRouter>
  )
  res.send(
    `<!DOCTYPE html>
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
        </html>`
    );
});
//@ts-ignore
router.post('/', (req: Request, res: Response, done) => {
  const { email, password } = req.body;
  req.checkBody("email", "Неверный формат email").isEmail().notEmpty();
  req.checkBody("password", "Минимальная длина пароля - 9 символов").isLength({ min: 9 }).notEmpty();

  var errors = req.validationErrors();
  if(errors) {
  console.log(errors);
  var err = errors.map((er:any) => er.msg);
      const enter = renderToString(
        <StaticRouter>
          <Main />
        </StaticRouter>
      );
      const html =
      `<!DOCTYPE html>
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
        </html>`
        return res.send(html);
    }

    User.findOne({email: email}, function(err:any, user:any) {
        if(err) {return done(err)};
        if(user) {
          const errors = ['Такой email уже зарегистрирован'];
          const cond = req.isAuthenticated();
          const enter = renderToString(
            <StaticRouter>
              <Main />
            </StaticRouter>
          );
          const html =
          `<!DOCTYPE html>
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
            </html>`
          res.send(html);
          //@ts-ignore
          return done(null, false);
        }
        var newUser = new User({
          email: email,
          password: password
        });

        createUser(newUser, function(err:any, user:any) {
           if (err) throw err;
           console.log(user);
        });

        const success = ['Регистрация завершена успешно, можете войти'];
        const enter = renderToString(
            <StaticRouter>
             <Main />
            </StaticRouter>
        )
        res.send(
        `<!DOCTYPE html>
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
        </html>`
    );
  });
});

passport.use('local.signin', new LocalStrategy ({
     usernameField: 'email',
     passwordField: 'password',
     passReqToCallback: true
},
 function(req:Request, email:any, password:any, done:any) {
 User.findOne({email: email}, async function(err:any, user:any) {
 if(err) {
   console.log(err);
   return done(err);
 }

 if(!user) {
   req.flash('errors', 'Не найдено пользователей');
   console.log('Не найдено пользователей. Ошибка в почте');
   return done(null, false);
 }

 comparePassword(password, user.password, function(err:any, isMatch:any) {
     if (err) throw err;
     if(isMatch) {
       return done(null, user);
     }
     else {
       req.flash('errors', 'неверный пароль');
       console.log('Неверный пароль');
       return done(null, false)
     }
   });
 });
}));

  router.post('/signin',
    passport.authenticate('local.signin', {
    successRedirect: '/create_account',
    failureRedirect: '/signin',
    passReqToCallback: true
  })
);



function notLoggedIn(req: Request, res: Response, next: NextFunction) {
  if(!req.isAuthenticated()) {
    return next()
  }
  res.redirect('/profile');
}

export default router;
