import prisma from "@/prisma/db"
import axios from "axios"
import { sign } from "jsonwebtoken"
import getTexts from "./texts"

const google_client_id = process.env.GOOGLE_CLIENT_ID
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET
const google_api_url = process.env.GOOGLE_OAUTH_API_URL
const google_redirect_uri = process.env.GOOGLE_REDIRECT_URI

const getGoogleTokens = async (code) => {
  const values = {
    code: code,
    client_id: google_client_id,
    client_secret: google_client_secret,
    redirect_uri: google_redirect_uri,
    grant_type: 'authorization_code'
  }
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  try {
    const response = await axios.post(`${google_api_url}`, values, { headers })
    return response.data
  } catch (error) {
    console.error('ERROR WHILE GETTING TOKENS FROM GOOGLE0', error)
    return null
  }
}

const createNewToken = (data) => sign(data, process.env.JWT_SECRET, { expiresIn: '7d' })

const newUserVerification = async ({email}, lang='en') => {
  const {folder_default_title, folder_default_description} = getTexts(lang)
  try{
    const resultantUser = await prisma.$transaction(async (tx) => {
      let user = await tx.user.findUnique({
        where:{
          email
        }
      })
      if(user === null){
        //create new user
        user = await tx.user.create({
          data:{
            email,
            folders:{
              create:[
                {name: folder_default_title, description: folder_default_description}
              ]
            }
          },
        })
      }
      return user
    })
    return resultantUser
  }catch(error){
    console.error('ERROR WHILE VERIFYING NEW USER', error)
    return null
  }
}

export {
  getGoogleTokens,
  createNewToken,
  newUserVerification
}