import { body, validationResult } from "express-validator"
import JobController from "../controllers/job.controller.js";
import JobModel from "../models/job.model.js";
const jobController = new JobController();


export const postJobValidation = async (req, res, next) => {

    const rules = [
        body('jobcategory').notEmpty().withMessage("job category field cannot be empty"),
        body('jobdesignation').notEmpty().withMessage("job  is required"),
        body('joblocation').notEmpty().withMessage("job location field cannot be empty"),
        body('companyname').notEmpty().withMessage("companyname is required"),
        body('salary').notEmpty().withMessage("Salary is required"),
        body('applyby').notEmpty().withMessage("applyby is required"),
        body('skillsrequired').notEmpty().withMessage("skillsrequired can not be empty"),
        body('numberofopenings').notEmpty().withMessage("Number of opening cannot be empty"),
        body('jobposted').notEmpty().withMessage("jobposted is required"),
        body('applicants').notEmpty().withMessage("applicants is required"),
    ]

    await Promise.all(rules.map(rule => rule.run(req)));
    var errors = validationResult(req);

    if (!errors.isEmpty()) {
        if (req.url === '/postjob') return res.render('newJobPage', { errors: errors.array() });
        if (req.path.startsWith('/update/')) {
            const id = req.params.id;
            const jobById = JobModel.getJobById(id);
            if (!jobById) return res.status(404).render('404');
            return res.render("updateJobPage", { job: jobById, errors: errors.array() })
        }
    }
    next();
}