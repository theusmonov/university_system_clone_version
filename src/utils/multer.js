import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: path.join(process.cwd(), "upload"),
  filename: function (req, file, cb) {
    const newFile = Date.now() + "_" + file.originalname;
    cb(null, newFile);
  },
});

export const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/svg+xml"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Faqat jpg, png, svg bo'lishi kerak"))
    }
  },
}).single("TalabaRasmi")
