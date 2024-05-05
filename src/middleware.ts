import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req){

    if(req.nextUrl.pathname.startsWith('/add-item') && !req.nextauth.token.admin){
      return NextResponse.rewrite(new URL("/denied",req.url))
    }
  }
  
  ,{
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: "/login",
    // error: "/error",
  },
  callbacks:{
    authorized : ({token})=> !!token
  }
})

export const config = { matcher : ["/cart","/cart/checkout","/add-item","/order","/completion"]}