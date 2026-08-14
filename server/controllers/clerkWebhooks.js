import User from "../models/User.js";
import { Webhook } from "svix";


const clerkwebhook = async(req, res)=>{
    try{
        // CReate a Svix instance with clerk webhook secret
         const whook = new Webhook(process.env.CLERK_SECRET_KEY)
        // Gatting Headers
         const headers = {
              "svix-id" : req.headers["svix-id"],
              "svix-timestamp" : req.headers["svix-timestamp"],
              "svix-signature" : req.headers["svix-signature"]
         };

          // Verifying Headers
         await Whook.verify(JSON.stringify(req.body), headers)

         // Gatting Data from request body
         const{data, type} = req.body

         const userData = {
            _id : data.id,
            email : data.email_addresses[0].email_address,
            username:data.frist_name + " " + data.last_name,
            image : data.image_url,
         }
         
         // Switch Casrs for differernt Events
         switch(type) {
            case "user.cerated":{
                await User.create(userData);
                break;
            }

            case "user.updated":{
                await User.findByIdAndUpdate(data.id, userData);
                break;
            }

            case "user.deleted":{
                await User.findByIdAndDelete(data.id);
                break;
            }

            default:
                break;
         }

    }catch (error)
    {
     console.log(error.message);
     res.json({success:false, message:error.message});
    }
}

export default clerkwebhook;