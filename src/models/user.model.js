
export default class UserModel {
    constructor(name,email,password, id){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }

    // add user
    static addUser({name,email,password}){
       const userAccount = users.find(user=>user.email === email && user.name === name);
        if(!userAccount){
            users.push({name,email,password})
            return null;
        }
        else{
            return 'Email is already linked with another account!'
        }
    }

    // check user account
    static checkUserAccount({email,password}){
        const userAccount = users.find(user=>user.email === email);
        if(userAccount){
            if(userAccount.password === password){
                return null;
            }else{
            return 'Password does not match, Please Try again!'
            }
        }else{
            return 'Account does not exist, Please Sign-up!'
        }
    }

    // get user account
    static getAccount(email){
        const userAccount = users.find(user=>user.email === email);
        return userAccount;
    }
}

const users = [
    {
        name:"Dhareppa Halli",
        email:"dharepps@gmail.com",
        password:"Deva@123-+",
    }
]