//import otp library
const otpGenerator = require('otp-generator')

class UserUserLoginAction extends baseAction {

  async executeMethod() {
    
    try {
      let { emailId } = this; 
      const [userLib]=AutoLoad.loadLibray("sqlLib",["user"])
      //Existing User Check
      const userData=await userLib.getUserByEmail(emailId);
      if(!userData)
      {
        this.setResponse("USER_NOT_EXIST");
        return  {}
      }
      //Generating otp
    const otp=otpGenerator.generate(6, { digits:true,upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false });
    const expireIn=new Date().getTime()+300*1000;
     const updateData={
      otp,expireIn
     }
    await userLib.updateUserDetails(emailId,updateData);
      this.setResponse('LOGIN');
      return updateData;
    } catch (e) {
      console.log(`Error: API: UserUserLogin`, e);
      throw e;
    }
  };

}
module.exports = UserUserLoginAction;