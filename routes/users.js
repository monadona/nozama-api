var express = require('express');
var router = express.Router();


router.route('/')
 /* GET users listing. */
  .get(function(req, res, next) {
    res.send('respond with a resource');
  })
  .post(function(req, res){
    res.send("We created a User...maybe");
    // models.user.js.create(req.body).then(function(user){
    //  res.json(cat);
   //   function(err) {
   //   console.log(err);
   // }
 });





// // POST new user
// router.post('/', function(req, res){
//   res.send()
// })

module.exports = router;
