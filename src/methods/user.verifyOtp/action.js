//importing jwt library
const jwt=require("jsonwebtoken");
//secret key
const SECRET_KEY="Timesheet";

class UserVerifyOtpAction extends baseAction {

  async executeMethod() {
    
    try {
      let { emailId,otp } = this; 
      const [userLib]=AutoLoad.loadLibray("sqlLib",["user"])
       //Existing User Check
       const userData=await userLib.getUserByEmail(emailId);
       if(!userData)
       {
         this.setResponse("USER_NOT_EXIST");
         return  {}
       }
        //check expire date
        const currentTime=new Date().getTime();
        const diff=userData.expireIn-currentTime;
        if(diff<0){
          this.setResponse("OTP_EXPIRED");
         return  {}
        }else{
          if(userData.otp==otp)//otp check
          {
           const access_token=jwt.sign({user_id:userData.user_id},"123");//generate token
           const updateData={
            access_token
           }
          await userLib.updateUserDetails(emailId,updateData);
            this.setResponse('SUCCESS');
            return updateData;
          }
          else{
            this.setResponse('OTP_MISMATCH');
            return {};
          }
        }
    } catch (e) {
      console.log(`Error: API: UserVerifyOtp`, e);
      throw e;
    }
  };
}
module.exports = UserVerifyOtpAction;