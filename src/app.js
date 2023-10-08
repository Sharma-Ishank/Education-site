const express = require('express')
const hbs = require("hbs")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const routes = require('./routes/main')
const Detail = require("./models/detail")
const Slider = require("./models/slider")
const Service = require("./models/service")

app.use(bodyParser.urlencoded({
  extended:true
}))
app.use("/static", express.static("public"))
app.use('',routes)

// template engine
app.set('view engine', 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

// database connection
mongoose
  .connect("mongodb://localhost/website_DB")
  .then(() => {
    console.log("Database connected");
    // Service.create([
    //   {
    //   icon: 'fa-brands fa-accusoft',
    //   title: 'Provides best courses',
    //   description: 'We provide course that helps our students in coding and placements.',
    //   linkText: 'https//www.google.com',
    //   link: 'Check',
    // },
    // {
    //   icon: 'fa-brands fa-atlassian',
    //   title: 'Learn Coding',
    //   description: 'We provide course that helps our students in coding and placements.',
    //   linkText: 'https//www.google.com',
    //   link: 'Learn',
    // },
    // {
    //   icon: 'fa-brands fa-accusoft',
    //   title: 'Learn Coding',
    //   description: 'We provide course that helps our students in coding and placements.',
    //   linkText: 'https//www.google.com',
    //   link: 'Learn',
    // },
    // ])
    // Slider.create([
    //   {
    //     title : "Learning web development",
    //     subTitle : "Java script is the most powerful and efficient web dev language",
    //     imageUrl : "static/images/pic1.jpg"
    //   },

    //   {
    //     title : "The best way to know is to learn",
    //     subTitle : "C sharp is the most powerful and efficient web dev language",
    //     imageUrl : "static/images/pic2.jpg"
    //   },

    //   {
    //     title : "Don't get attached to much",
    //     subTitle : "PHP is the most powerful and efficient web dev language",
    //     imageUrl : "static/images/pic3.jpg"
    //   },
    // ])
    // Detail.create({
    //   brandName: "Info Technical Solution",
    //   brandIconUrl: "https://yt3.googleusercontent.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s176-c-k-c0x00ffffff-no-rj",
    //   links: [
    //     {
    //       label:"Home",
    //       url:"/",
    //     },
    //     {
    //       label:"Services",
    //       url:"/services",
    //     },
    //     {
    //       label:"Gallery",
    //       url:"/gallery",
    //     },
    //     {
    //       label:"About",
    //       url:"/about",
    //     },
    //     {
    //       label:"Contact Us",
    //       url:"/contact-us",
    //     },
        
    //   ]
    // })
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.listen(process.env.PORT | 8000 ,()=>{
    console.log("server started")
})