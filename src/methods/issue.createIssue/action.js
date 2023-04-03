//importing moment package
let moment=require('moment');

class IssueCreateIssueAction extends baseAction {

  async executeMethod() {
    
    try {
      let { issueName,startDate,endDate,totalHours,userObj } = this; 
      const [userLib]=AutoLoad.loadLibray("sqlLib",["user"])
       //check endDate is empty
       let EndDate=(endDate)?endDate  : moment().format("DD/MM/YYYY");//current date
       if(!(moment(startDate, 'DD/MM/YYYY').isValid() && moment(EndDate, 'DD/MM/YYYY').isValid() && new Date(EndDate).getTime()>new Date(startDate).getTime() && moment(totalHours, 'h:mm').isValid()))
       {
        this.setResponse('INVALID_DATE_OR_TIME');
        return {};
       }
        //Existing Issue check
        const issueData=await userLib.getIssueByName({user_id:userObj.user_id,issueName});
        if(issueData){
          this.setResponse('ISSUE_EXIST');
          return {};
        }
        else{
      const issueObj={
          issue_name:issueName,
          user_id:userObj.user_id,
          start_date:startDate,
          end_date:EndDate,
          total_hours:totalHours,
          spent_time:"00:00",
          progress:"0"
      }
      await userLib.createIssue(issueObj);
      const issueData1=await userLib.getIssueByName({user_id:userObj.user_id,issueName});
      this.setResponse('SUCCESS');
      return issueData1;
    }
    } catch (e) {
      console.log(`Error: API: IssueCreateIssue`, e);
      throw e;
    }
  };

}
module.exports = IssueCreateIssueAction;