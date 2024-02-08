import Mongoosedatabase from "@/lib/Database"
import userModel from "@/lib/model/Usermodel"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'
import toast from "react-hot-toast"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/mongobdadeptar/mongobd"

export const authoption={
  secret:process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
      GoogleProvider({
          clientId: "959870426662-vs6qgkbio4qolous80aifhbv4pbplvlb.apps.googleusercontent.com",
          clientSecret:"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"
        }),
      CredentialsProvider({
        name: 'Credentials',
        id:'credentials',
        async authorize(credentials, req) {
         const email=credentials?.email
         const password=credentials?.password
         Mongoosedatabase()
         const user=await userModel.findOne({email:email})
         const passowrdok=user && await bcrypt.compare(password,user.password)

         if(passowrdok){
          return user
         }
         if(!passowrdok){
           toast.error('Password is not match')
         }
         return null

        }
      })
  ]
}

const handler = NextAuth(authoption)


export { handler as GET, handler as POST }