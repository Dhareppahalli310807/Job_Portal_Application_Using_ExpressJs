import express from 'express';
import JobController from '../controllers/job.controller.js';
import resumeUpload from '../middlewares/resumeUpload.middleware.js';
import { postJobValidation } from '../middlewares/postJobValidation.middleware.js';
import {auth} from '../middlewares/user.middleware.js'
import { setLastVisit } from '../middlewares/lastVisit.middleware.js';
const jobRouter = express.Router();
const jobController = new JobController();
//Get routes
jobRouter.get("/", jobController.getLandingPage)
jobRouter.get('/postjob',setLastVisit,auth,jobController.getPostJob);
jobRouter.get('/dashboard',setLastVisit,auth,jobController.getRecruiterDashboard);
jobRouter.get("/jobs",jobController.getAllJobs);
jobRouter.get("/jobs/:id",jobController.getSingleJob);
jobRouter.get("/update/:id",setLastVisit,jobController.getUpdateJob);
jobRouter.get("/deleteJob/:id",setLastVisit,jobController.deleteJob)
jobRouter.get("/jobs/:id/applicants",setLastVisit,jobController.getApplicants)


// Post routes
jobRouter.post("/update/:id", postJobValidation,jobController.postUpdateJob);
jobRouter.post('/postjob', postJobValidation,jobController.postPostJob);
jobRouter.post('/jobs/:id/applicants', resumeUpload.single("resumePath"),jobController.postApplicants);
export default jobRouter;