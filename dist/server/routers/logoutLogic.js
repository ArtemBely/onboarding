import express from 'express';
const router = express.Router();
function isLogin(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/signin');
}
router.get('/', isLogin, (req, res) => {
    req.logout();
    res.redirect('/signin');
});
export default router;
