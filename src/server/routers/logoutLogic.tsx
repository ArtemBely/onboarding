import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

function isLogin(req:Request, res:Response, next:NextFunction) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/signin');
}

router.get('/', isLogin, (req:Request, res:Response) => {
  req.logout();
  res.redirect('/signin');
});

export default router;
