// import required model
import UserModel from "../models/user.model.js";
export default class UserController {
    // get sign up
    getSignUp(req, res, next) {
        const user = req.session.user || null;
        res.render('signupPage', { errors: null, accountError: null ,user:null});
    }

    // get sign in 
    getSignIn(req, res, next) {
        const user = req.session.user || null;
        res.render('loginPage', { errors: null, accountError: null,user:null });
    }

    // post sign up
    postSignUp(req, res, next) {
        const modelMessage = UserModel.addUser(req.body);
        if (modelMessage) {
            const user = req.session.user || null;
            return res.render('signupPage', { errors: null, accountError: modelMessage ,user:null});
        }
        res.redirect("/signin");
    }

    // post sign in
    postSignIn(req, res, next) {
        const modelMessage = UserModel.checkUserAccount(req.body);
        if (modelMessage) {
            const user = req.session.user || null;
            return res.render('loginPage', { errors: null, accountError: modelMessage,user });
        }
        const user = UserModel.getAccount(req.body.email);
        console.log(user)
        req.session.user = user;

        res.redirect("/")
    }

    // logout
    logout(req, res) {
        req.session.user = null;
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/");
            }
        })
        res.clearCookie('lastVisit')
    }
}