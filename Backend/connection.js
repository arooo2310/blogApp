const mongoose = require("mongoose");

mongoose
  .connect('mongodb+srv://aromalm2310:9605467664@cluster0.3lutxiz.mongodb.net/<DATABASE> ')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });



// const mongoose = require("mongoose");
// //Write missing code here
// mongoose
//   .connect(
   
//   )
//   .then(() => {
//     console.log("Connected to DB");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
