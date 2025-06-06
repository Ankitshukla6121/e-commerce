 import {v2 as cloudinary} from "cloudinary"

  const connectCloundinay = async()=>{

    cloudinary.config({
        cloud_name:process.env.CLOUDINAY_NAME,
        api_key:process.env.CLOUDINAY_API_KEY,
        api_secret:process.env.CLOUDINAY_SECRET_KEY
    })
  }

  export default connectCloundinay