import multer from 'multer';
import { Upload } from '../model/Image';


const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

export const uploader = async (req:any, res:any) => {
    // req.file can be used to access all file properties
    try {
      //check if the request has an image or not
      if (!req.file) {
        res.json({
          success: false,
          message: "You must provide at least 1 file"
        });
      } else {
        let imageUploadObject = {
          file: {
            data: req.file.buffer,
            contentType: req.file.mimetype
          },
          fileName: req.body.fileName
        };
        const uploadObject = new Upload(imageUploadObject);
        // saving the object into the database
        const uploadProcess = await uploadObject.save();
        res.json({
          success: uploadProcess
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
  