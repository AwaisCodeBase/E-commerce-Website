import userModel from "../models/userModel.js"
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const createToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET)
}
// Route for user Login
const loginUser = async(req, res) => {
  try{
     const {email, password} = req.body
     const user = await userModel.findOne({email})

     if(!user){
      return res.json({success: false, message: "User doesn't exist"})
     }
     const isMatch = await bcrypt.compare(password, user.password)

     if(isMatch){
      const token = createToken(user._id)
        res.json({success: true, token})
      
     }else{
      res.json({success: false, message: "Invalid credentials"})
     }
  }catch(error){
    console.log(error);
    res.json({success: false, message: error.message})
  }
}

// Route for user Registration
const registerUser = async(req, res) => {
  try{
    const {name, email, password} = req.body
    // checking user already exist or not
    const exists = await userModel.findOne({email})
    if(exists){
      return res.json({success: false, message: "User already exist"})
    }

    //validating email format & strong password

    if(!validator.isEmail(email)){
      return res.json({success: false, message: "Please enter a valid email"})
    }

    if(password.length < 8){
      return res.json({success: false, message: "Please enter a strong password"})
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    })

    const user = await newUser.save()

    const token = createToken(user._id)
    res.json({success: true, token})


  }catch(error){
    console.log(error);
    res.json({success: false, message: error.message})
    
  }
}

// Route for admin login

const adminLogin = async(req, res) => {
  try {
    const {email, password} = req.body

    // Check if environment variables are set
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD || !process.env.JWT_SECRET) {
      console.error("Missing environment variables for admin login");
      return res.json({success: false, message: "Server configuration error"});
    }

    // Validate input
    if (!email || !password) {
      return res.json({success: false, message: "Please provide email and password"});
    }

    // Compare credentials
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      // Create a more secure token
      const token = jwt.sign(
        { 
          email: process.env.ADMIN_EMAIL,
          role: 'admin'
        }, 
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );
      
      res.json({success: true, token});
    } else {
      res.json({success: false, message: "Invalid credentials"});
    }
  } catch (error) {
    console.error("Admin login error:", error);
    res.json({success: false, message: "An error occurred during login"});
  }
}

export  { loginUser, registerUser, adminLogin }