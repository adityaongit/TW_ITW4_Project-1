// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const authRoute = require("./routes/auth")
// const userRoute = require("./routes/user")
// const postRoute = require("./routes/post")
// const categoryRoute = require("./routes/category")
// const multer = require("multer")

// dotenv.config();
// app.use(express.json());

// mongoose
// .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(console.log("Connected to MongoDB"))
// .catch((error)=>{
//     console.log("MongoDB not connected");
//     console.log(error);
// });

// const storage = multer.diskStorage({
//     destination:(req,file,cb) => {
//         cb(null,"images");
//     },
//     filename:(req,file,cb) => {
//         cb(null, req.body.name);
//     },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("File has been uploaded");
// });

// app.use("/api/auth", authRoute);
// app.use("/api/user", userRoute);
// app.use("/api/post", postRoute);
// app.use("/api/category", categoryRoute);


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/testingsmartwords", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(!err){
        console.log("DB connected");
    }else{
        console.log("Connection failed");
    }
});

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

// creating model => means table of name User and fields corresponding to userSchema are added to User table
const user = new mongoose.model("user", userSchema);

app.post('/register', (req, res) => {
    // console.log(req.body);
    const {name, email, password} = req.body;
    user.findOne({email : email},(err, data) => {
        if(data){
            res.send({message:"User Already Registered"});
        }else{
            const User = new user({ 
                name,
                email,
                password
            })
            User.save(err => {
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Successfully registed"});
                }
            });
        }
    })
})

app.post("/login", (req, res) => {
    // console.log(req.body);
    const {email, password} = req.body;
    user.findOne({email : email,  password:password}, (err, data) => {
        console.log(data);
        if(data){
            res.send({message:"Login Successfull", user: data});
        }else{
            res.send({message:"Invalid Username Or Password"});
        }
        // console.log(res);
    })
})

app.get('/register', (req, res) => {
    res.send("Register");
})

app.get('/login', (req, res) => {
    res.send("Login");
})

app.get('/', (req, res) => {
    res.send("Hii Hello");
})


app.listen("5000", () => {
    console.log("Backend is running");
})
