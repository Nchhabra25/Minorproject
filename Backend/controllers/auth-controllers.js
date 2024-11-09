
const User=require("../models/user-models");
const bcrypt=require("bcryptjs")
const Feedback = require('../models/feedback-model');

//defining the controller for homepage
const home= async(req,res)=>{
    try {
        res.send("welcome to homepage using controller");
    } catch (error) {
        throw new Error("An error occurred while accessing the homepage.");
    }
}

//defining the controller for registration page
const register= async(req,res)=>{
    try {
        console.log(req.body)
        //destructure the contents of ur request
        const {username,email,phone,password,mentalHealthStatus,age}=req.body

        //Validation for email
        if (!email.includes('@')|| !email.endsWith('.com')) {
            return res.status(400).json("Invalid email")
          } 

        //checking for duplicate email 
        const userexsist=await User.findOne({email: email});

        if(userexsist){
            return res.status(400).json("user already exsists")
        }


        //hash password and store in db
        const saltRound=10;
        const hashPass=await bcrypt.hash(password,saltRound);

        const created_user= await User.create({
            email,
            username,
            phone,
            password:hashPass,
            mentalHealthStatus,
            age});

        res.status(200).json({
            msg:created_user,
            token:await created_user.generateToken(),  //jwt
            userId:created_user._id.toString(),        //jwt
        });
        } 
        
        catch (error) {
        console.error(error);
        res.status(400).json({ message: "An error occurred while registering." });
    }
}

//defining the logic for login page
const login=async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        //checking if user exsists
        const userExsist1=await User.findOne({email});
        const userExsist2=await User.findOne({username})

        if(!userExsist1 && !userExsist2){
            return res.status(400).json({message:"Sorry, this user does not exsist"})
        }

        const authmethod=userExsist1||userExsist2;
        console.log(authmethod)
        const Password=await bcrypt.compare(password,authmethod.password);

        if(Password){
            res.json({
                msg:"registration successful",
                token:await authmethod.generateToken(),  
                userId:authmethod._id.toString(), 
            })
        }
        else{
            res.status(400).json({msg:"Invalid Password"})
        }

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "An error occurred during login." });
    }
}


//logic for feedback page
const feedback = async (req, res) => {
    try {
        const { feedback, rating, username, email } = req.body;

        // Check if the user exists with either email or username
        const userExsist1 = await User.findOne({ email });
        const userExsist2 = await User.findOne({ username });

        console.log('Request body:', req.body);

        // If neither email nor username exist, return an error
        if (!userExsist1 && !userExsist2) {
            return res.status(500).json({ message: "Sorry, this user does not exist" });
        }

        // Create the feedback entry in the database
        const newFeedback = await Feedback.create({
            username,
            email,
            feedback,
            rating,
        });

        console.log('Feedback created:', newFeedback);
        res.status(201).json({ message: 'Feedback submitted successfully!' });

    } catch (err) {
        console.error('Error submitting feedback:', err);
        res.status(400).json({ message: 'Error submitting feedback.' });
    }
};

  
// authcontrollers.js

const userData = async (req, res) => {
    try {
        const userdata=req.user;
        return res.status(200).json({msg: userdata})
    } 
    catch (error) {
        console.error('Error in userData controller:', error);
    }
};


module.exports={home,register,login,feedback,userData}