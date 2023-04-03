
class UserUserLogoutAction extends baseAction {

  async executeMethod() {
    
    try {
      let  {userObj}  = this; 
      const [userLib]=AutoLoad.loadLibray("sqlLib",["user"])
      //Existing User Check
      const userData=await userLib.getUserByEmail(userObj.email_id);
      if(userData)
      {
        const updateData={
          access_token:""
         }
        await userLib.updateUserDetails(userObj.email_id,updateData);
        this.setResponse('SUCCESS');
        return {};
      }
      else{
        this.setResponse("USER_NOT_EXIST");
        return  {}
      }
    } catch (e) {
      console.log(`Error: API: UserUserLogout`, e);
      throw e;
    }
  };
}
module.exports = UserUserLogoutAction;