const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

/*Hello World Section--outputs message in the browser */
// app.get('/', (req, res)=>{
//     res.send(path.join(
//         'Hello World!'
//     ));
// });

/* Middleware Section */
// app.use((req, res, next)=>{
//     console.log(req.originalUrl);
//     next();
// });

/* Advance Section */

app.use(bodyParser.urlencoded({ extended: false })); //Saying express use this bodyParse to take this url endcoded form post data and make it into an object

app.post("/contact-form", (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
  res.send("Thank you for joining the Team ExpressJS Newletter");
  next();
});

app.use((req, res, next) => {
  fs.writeFileSync(
    "./formsubmissions.json",
    `  ${req.email} \n ${req.password}`
  );
  next();
});

/*Static Express Section  */
app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000);
