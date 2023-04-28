const [userLib]=AutoLoad.loadLibray("sqlLib",["user"])

class ViewUserDetailsAction extends baseAction {

  async executeMethod() {
    
    try {
      let { userObj } = this; 
      let issues=await userLib.getIssueByUserId(userObj.user_id);
      console.log(issues);
      let completed=[];
      for(let i=0;i<issues.length;i++)
      {
        if(issues[i].warning_message=='Issue is Completed')
        {
          completed.push(issues[i]);
        }
      }
      this.setResponse('SUCCESS');
      return completed;
    } catch (e) {
      console.log(`Error: API: ViewUserDetails`, e);
      throw e;
    }
  };

}
module.exports = ViewUserDetailsAction;