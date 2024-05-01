import mongoose from "mongoose";
const bcrypt = require('bcrypt')

export interface Users extends mongoose.Document {
  name: string;
  admin : boolean; 
  password : string
  address : string
  token : String,
  email : string
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema<Users>({
  name: {
    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  
  admin:{
    type: Boolean,
    default : false
  },
  
  email:{
    type : String,
    required : true,
  },
  password :{
    type : String,
    required : true,
  },

  address :{
    type : String,
    required : true,
    minlength : [3, "Address should be atleast 3 characters long"]
  }

},
{timestamps : true}
);

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
  })

export default mongoose.models.User || mongoose.model<Users>("User", UserSchema);