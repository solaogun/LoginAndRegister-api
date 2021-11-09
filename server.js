const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const MongoClient = require("mongodb").MongoClient
const dotenv = require("dotenv")
const path = require("path")
// const { truncate } = require("fs/promises")
const userRoute = require("./routes/users")

dotenv.config()

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// mongoose.connect('mongodb://solaogun:Adebule@7@cluster0.eoxhw.mongodb.net/LoginAndRegisterDB?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("MongoDB connected")).catch((err) => console.log(err))
// app.use(express.json())

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () => {
//     console.log("connected to mongoDB")
// })
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

app.use("/api/users", userRoute)

app.listen(8000, () => {
    console.log("Backend server is running")
})