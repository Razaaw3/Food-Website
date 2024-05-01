import User from "@/Models/User"
import dbConnect from "@/lib/dbConnect"
import  CredentialsProvider  from "next-auth/providers/credentials"
const bcrypt = require('bcrypt')

export const options = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {},
  
        async authorize(credentials) {
          const { email, password } = credentials;
          
  
          console.log("auth")
          // if(email &&password)
            try {
              await dbConnect();
              const user = await User.findOne({ email });
              if (!user) {
                return null;
              }

              const passwordsMatch = await bcrypt.compare(password, user.password);

              if (!passwordsMatch) {
                return null;
              }

              return user

            } catch (error) {
              console.log("Error: ", error);
              return null
            }
            
          
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/login",
    },
    
  };