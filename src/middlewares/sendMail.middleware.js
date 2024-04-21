// import required model
import nodemailer, { createTransport } from 'nodemailer'
import fs from 'fs'
import path from 'path'

const transporter = createTransport({
    service : "gmail",
    auth:{
        user: "hallidhareppa90gmail.com",
        pass: "Shiva@123-+",
    }
})

const mailTemplatePath = path.resolve("src", "public", "html", "jobAppliedMail.html");

export const sendConformationMail = async ({name,email},{companyname,joblocation,jobdesignation})=>{

    const mailBodyTemplate = fs.readFileSync(mailTemplatePath,"utf-8");
    const personalizedHtml = mailBodyTemplate
    .replace("{{NAME}}", name)
    .replace("{{COMPANY_NAME}}", companyname)
    .replace("{{JOB_TYPE}}", jobdesignation)
    .replace("{{LOCATION}}", joblocation);

    const data = {
        from: "dhareppahalli0@gmail.com",
        to: email,
        subject: "Job Application Received",
        html: personalizedHtml,
    }

    transporter.sendMail(data,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log("mail sent!");  
        }
    });
};
