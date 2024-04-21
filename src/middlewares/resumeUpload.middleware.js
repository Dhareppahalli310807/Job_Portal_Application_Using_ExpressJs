import multer, { diskStorage } from "multer";
import path from 'path';
const storageConfig = diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.resolve("src","public","resumes"));
    },
    filename:(req,file,cb)=>{
        const fname = Date.now()+'-'+file.originalname;
        cb(null,fname);
    }
})

const resumeUpload = multer({
    storage:storageConfig
})

export default resumeUpload;