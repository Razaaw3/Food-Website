import type { NextAuthOptions } from "next-auth"
import User from "@/Models/User"
import dbConnect from "@/lib/dbConnect"
import  CredentialsProvider  from "next-auth/providers/credentials"
const bcrypt = require('bcrypt')

export const options:NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {},
  
        async authorize(credentials) {
          const { email, password }  = credentials;
          
  
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

              
              return {
                id: user._id, // Include the userID
                email: user.email,
                admin: user.admin
              };
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
      signIn : '/login',
      
    },
    callbacks:{
      async jwt({token,user}){
        if (user) {
          token.id = user.id; // Include userID in token
          token.admin = user.admin;
        }
          return token
      },
      async session({session,token}){
          if (session.user) {
            session.user.id = token.id; // Include userID in session
            session.user.admin = token.admin;
        }
          return session
      }
    }
    
  };