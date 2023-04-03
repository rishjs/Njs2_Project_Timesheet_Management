const [userLib]=AutoLoad.loadLibray("sqlLib",["user"])
class ViewIssuesAction extends baseAction {

  async executeMethod() {
    
    try {
      let { pageNo,issueId,userObj } = this; 
     
      if(issueId)
      {
        const issueData=await userLib.getIssueById({user_id:userObj.user_id,issueId});
        if(issueData)
        {
          await warningMessage(issueData);
          const issueData1=await userLib.getIssueById({user_id:userObj.user_id,issueId:issueData.issue_id})
          this.setResponse('SUCCESS');
          return issueData1;
        }
        else{
          this.setResponse('ISSUE_NOT_EXIST');
          return {}; 
        }
      }
      else{
        let array=[];
        if(pageNo)//if pageNo is present
        {
          let issues=await userLib.getIssueByUserId(userObj.user_id)
          if(issues.length>0)
          {
          for(let i=((pageNo-1)*10);i<(pageNo*10);i++)//paginate the issues
          {
            if(issues[i]==undefined)
            {
              break
            }
            await warningMessage(issues[i]);
            const issue=await userLib.getIssueById({user_id:userObj.user_id,issueId:issues[i].issue_id});
            array.push(issue);
          }
          this.setResponse('SUCCESS');
          return array;
        }
        else{
          this.setResponse('ISSUE_NOT_EXIST');
          return {}; 
        }
      }
      else{
        let issues=await userLib.getIssueByUserId(userObj.user_id)
        if(issues.length>0)
        {
        for(let i=0;i<10;i++)//paginate the issues
        {
          if(issues[i]==undefined)
          {
            break
          }
          await warningMessage(issues[i]);
          const issue=await userLib.getIssueById({user_id:userObj.user_id,issueId:issues[i].issue_id});
          array.push(issue);
        }
        this.setResponse('SUCCESS');
        return array;
      }
      else{
        this.setResponse('ISSUE_NOT_EXIST');
        return {}; 
      }
      }
    }
    } catch (e) {
      console.log(`Error: API: ViewIssues`, e);
      throw e;
    }
  };

}
async function warningMessage(Issue){
  //remove existing user
  let warningMessage;
   if(parseInt(Issue.spent_time)==0)//if issue not yet charged
   {
     warningMessage="Issue is not yet Charged";
     await userLib.updateIssueDetails(Issue.issue_id,{warning_message:warningMessage});
   }
   else if(!(parseInt(Issue.progress)==100))//if issue not completed
   {
    
     if(new Date(Issue.end_date).getTime()<Date.now())//crossed the deadline
     {
      warningMessage="Deadline has Crossed";
      await userLib.updateIssueDetails(Issue.issue_id,{warning_message:warningMessage});
     }
     else{
      warningMessage="";
      await userLib.updateIssueDetails(Issue.issue_id,{warning_message:warningMessage});
     }
   }
   else{//issue is completed
     warningMessage="Issue is Completed";
     await userLib.updateIssueDetails(Issue.issue_id,{warning_message:warningMessage});
   }
}

module.exports = ViewIssuesAction;