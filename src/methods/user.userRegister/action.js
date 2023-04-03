const { AutoLoad } = require("@njs2/base");

class UserUserRegisterAction extends baseAction {

  async executeMethod() {
    
    try {
      let { userName,emailId } = this; 
      const [userLib]=AutoLoad.loadLibray("sqlLib",["user"])
       //Email validation and username
       let validEmailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
       if(!emailId.match(validEmailRegex) )
       {
         this.setResponse("INVALID_EMAIL");
         return  {}
       }
        //Existing User Check
       const userData=await userLib.getUserByEmail(emailId);
       if(userData){
        this.setResponse("USER_EXIST");
        return  {}
       }
        const obj={//creating object for particular user
                user_name:userName,
                email_id:emailId
          }
          await userLib.insertUser(obj);
      this.setResponse('SUCCESS');
      return obj;
    } catch (e) {
      console.log(`Error: API: UserUserRegister`, e);
      throw e;
    }
  };

}
module.exports = UserUserRegisterAction;