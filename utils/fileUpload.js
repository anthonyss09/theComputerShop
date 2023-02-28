import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const type = req.body.type;
    cb(null, `../client/public/data/uploads`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

export default upload;
