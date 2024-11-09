const express=require("express")
const router=express.Router();
const authcontrollers=require("../controllers/auth-controllers")
const Authmiddleware=require("../middlewares/Auth-middleware")

router.route("/").get(authcontrollers.home)

router.route("/register")
  .get((req, res) => res.send("This is the registration form"))
  .post(authcontrollers.register);

router.route("/login")
  .post(authcontrollers.login);

  router.route("/feedback")
    .get((req,res)=>res.send("Feedback page"))
    .post((authcontrollers.feedback))

    router.route("/userdata")
    .get(Authmiddleware,authcontrollers.userData);
    
module.exports=router;