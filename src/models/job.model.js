import { v4 as uuidv4 } from 'uuid';

export default class JobModel {
    constructor(
        id,
        jobcategory,
        jobdesignation,
        joblocation,
        companyname,
        salary,
        applyby,
        skillsrequired,
        numberofopenings,
        recruiter,
        recruiterEmail,
        applicants,
        ) {
        this.id = id;
        this.jobcategory = jobcategory;
        this.jobdesignation = jobdesignation;
        this.joblocation = joblocation;
        this.companyname = companyname;
        this.salary = salary;
        this.applyby = applyby;
        this.skillsrequired = skillsrequired;
        this.numberofopenings = numberofopenings;
        this.recruiter = recruiter;
        this.recruiterEmail = recruiterEmail;
        this.applicants = applicants;
        this.companyImage = 'logo_nil.svg';
    }
    //Get job description array 
    static getJob() {
        return job_description;
    }

    //Add job object to Array
    static setJob(data, recruiterDetails) {
        const {
            jobcategory,
            jobdesignation,
            joblocation,
            companyname,
            salary,
            applyby,
            skillsrequired,
            numberofopenings,
             } = data;
        const id = uuidv4();
        const skillArray = skillsrequired.split(",");
        const applicants = [];
        const { name: recruiter, email: recruiterEmail } = recruiterDetails;
        const newJob = new JobModel(
            id,
            jobcategory,
            jobdesignation,
            joblocation,
            companyname,
            salary,
            applyby,
            skillArray,
            numberofopenings,
            applicants,
            recruiter,
            recruiterEmail,
        );

        job_description.push(newJob);
    }

    //Get job by id from array
    static getJobById(id) {

        const data = job_description.find(job => job.id === id);
        if (!data) {
            console.log("Error :: getJobById");
            return null;
        }
        return data;
    }

    //Update job object in Array
    static updateJob(id, {
        jobcategory,
        jobdesignation,
        joblocation,
        companyname,
        salary,
        applyby,
        skillsrequired,
        numberofopenings,
        jobposted,
        applicants,
    }) {
        const skillArray = skillsrequired.split(",");
        const jobIndex = job_description.findIndex(job => job.id === id);
        job_description[jobIndex] = {
            ...job_description[jobIndex],
            jobcategory,
            jobdesignation,
            joblocation,
            companyname,
            salary,
            applyby,
            skillsrequired: skillArray,
            numberofopenings,
            jobposted,
            applicants,
        };
    }

    //Delete job object from Array
    static deleteJob(id) {
        const index = job_description.findIndex(job => job.id === id);
        job_description.splice(index, 1);
    }

    //Add Applicants to Specific Jobs
    static addApplicants(id, { applicantid, name, email,contact }, resumePath) {
        const index = job_description.findIndex(job => job.id === id);
        if (!index) return;
        applicantid = job_description[index]?.applicants.length + 1;
        job_description[index]?.applicants.push({
            applicantid,
            name,
            email,
            contact,
            resumePath,
        })
    }

    //Get Applicants of Specific Jobs
    static getApplicants(id) {
        const data = job_description.find(job => job.id === id);
        if (!data) return null;
        return data?.applicants;
    }

    //Get All job posted by logged in recruiter
    static getRecruitersPostedJobs(recruiterEmail){
        const recruitersJobs = job_description.filter(job=>job.recruiterEmail === recruiterEmail);
        if(!recruitersJobs){
            console.log("Error :: model :: getRecruitersPostedJobs");
            return null;
        }
        return recruitersJobs;
    }
}


//Job-description data array
const job_description = [
    {
        id: '2eabf4f2-43e9-4c0a-a4d6-1f072857ce18',
        jobcategory:'Tech',
        jobdesignation:'System Engineer',
        joblocation:'Pune',
        companyname:'Google',
        salary: '250000',
        applyby:'',
        skillsrequired:'["Python", "SQL"]',
        numberofopenings:'4',
        jobposted:'Coding Ninza',
        applicants:[],
        companyImage: 'google.svg',
        recruiter: "Lulu",
        recruiterEmail: "lulu@google.com",
    },
    {
        id: 'f9e4a5c1-6e6e-495c-85bb-01c6e7e9e76d',
        jobcategory:'Tech',
        jobdesignation:'Product Developer',
        joblocation:'Pune',
        companyname:'Accenture',
        salary: '800000',
        applyby:'',
        skillsrequired:'["HTML", "CSS", "SQL"]',
        numberofopenings:'4',
        jobposted:'Coding Ninza',
        applicants:[],
        companyImage: 'accenture.svg',
        recruiter: "Machha",
        recruiterEmail: "Machha@mahindra.com",
    },
    {
        id: '2eabf4f2-6e6e-495c-834c-e8072857ce18',
        jobcategory:'Tech',
        jobdesignation:'BackEnd Developer',
        joblocation:'Pune',
        companyname:'Microsoft',
        salary: '800000',
        applyby:'',
        skillsrequired:'["Javascript", "Node.js", "Java"]',
        numberofopenings:'2',
        jobposted:'Coding Ninza',
        applicants:[],
        companyImage: 'microsoft.svg',
        recruiter: "Ballu",
        recruiterEmail: "Ballu@infosys.com",
    }
]