import { body, validationResult } from "express-validator"


export const userValidation = async (req, res, next) => {
    
    const rules = [
        body('email').isEmail().withMessage("Enter valid E-mail"),
    ]
    if (req.path === '/signup'){
        rules.push(body('name').notEmpty().withMessage('Full Name is required'))
    }

    if(req.path == '/signin'){
        rules.push(body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one digit')
   )}


    await Promise.all(rules.map(rule => rule.run(req)));
    var errors = validationResult(req);

    if (!errors.isEmpty()) {
        if (req.path === '/signup') return res.render('signupPage',{errors:errors.array(),accountError:null,user:null});
        if (req.path === '/signin') return res.render('loginPage',{errors:errors.array(),accountError:null,user:null});
    }
    next();
}