const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const postRoute = require("./routes/post")
const categoryRoute = require("./routes/category")
const multer = require("multer")

dotenv.config();
app.use(express.json());

mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB"))
.catch((error)=>{
    console.log("MongoDB not connected");
    console.log(error);
});

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"images");
    },
    filename:(req,file,cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/category", categoryRoute);

app.listen("5000", () => {
    console.log("Backend is running");
})
