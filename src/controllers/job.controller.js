import { sendConformationMail } from "../middlewares/sendMail.middleware.js";
import JobModel from "../models/job.model.js";

export default class JobController {
    getLandingPage(req, res) {
        const user = req.session.user;
        res.render('landingPage', { user });
    }

    getPostJob(req, res) {
        const user = req.session.user;
        res.render('newJobPage', { errors: null,user });
    }

    postPostJob(req, res) {
        JobModel.setJob(req.body,req.session.user);
        res.redirect("/jobs")
    }

    getAllJobs(req, res) {
        const jobs = JobModel.getJob();
        const user = req.session.user;
        if (!jobs) return res.status(404).render('404Page',{user});
        res.render('jobListingPage', { jobs,user })
    }

    getSingleJob(req, res) {
        const id = req.params.id;
        const jobById = JobModel.getJobById(id);
        const user = req.session.user;
        if (!jobById) return res.status(404).render('404Page',{user});
        res.render('jobDetailsPage', { jobById, user });
    }

    getUpdateJob(req, res) {
        const id = req.params.id;
        const jobById = JobModel.getJobById(id);
        const user = req.session.user;
        if (!jobById) return res.status(404).render('404Page',{user});
        res.render("updateJobPage", { job: jobById, errors: null,user })
    }

    postUpdateJob(req, res) {

        const id = req.params.id;
        const data = req.body;
        JobModel.updateJob(id, data);
        res.redirect("/jobs")
    }

    deleteJob(req, res) {
        const id = req.params.id;
        const jobById = JobModel.getJobById(id);
        const user = req.session.user;
        if (!jobById) return res.status(404).render('404Page',{user});

        JobModel.deleteJob(id);
        res.redirect("/jobs");
    }

    async postApplicants(req, res) {
        const id = req.params.id;
        const fname = req.file.filename;
        const data = req.body;
        if (id) {
            JobModel.addApplicants(id, data, fname);
            const job = JobModel.getJobById(id);
            console.log("Sending Conformation email to user!")
            await sendConformationMail(data, job);
        }
        res.redirect("/jobs");
    }

    getApplicants(req, res) {
        const id = req.params.id;
        const jobApplicants = JobModel.getApplicants(id);
        const user = req.session.user;
        res.render('applicantListsPage', { allApplicants: jobApplicants ,user});
    }

    getRecruiterDashboard(req,res){
        const user = req.session.user;
        const jobsArray = JobModel.getRecruitersPostedJobs(user?.email);
        res.render('recruiter_dashboard', {jobsArray,user});
    }
}