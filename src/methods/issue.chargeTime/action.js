//importing moment package
let moment=require('moment');

class IssueChargeTimeAction extends baseAction {

  async executeMethod() {
    
    try {
      let { issueId,todaysSpentTime,progress,userObj } = this; 
      const [userLib]=AutoLoad.loadLibray("sqlLib",["user"])

      if(!moment(todaysSpentTime, 'h:mm').isValid())
      {
        this.setResponse('INVALID_TIME');
        return {};
      }
      const issueData=await userLib.getIssueById({user_id:userObj.user_id,issueId})
      if(issueData){
                let splitTime= (issueData.spent_time).split(":");//split spentTime into hour and minutes
                let splitTime1=todaysSpentTime.split(":");// todaySpentTime into hour and minutes
                let timeToSeconds =  (splitTime[0]) * 60 * 60 + (splitTime[1]) * 60 ;//convert into seconds
                let timeToSeconds1 =  (splitTime1[0]) * 60 * 60 + (splitTime1[1]) * 60 ;
                let seconds=timeToSeconds+timeToSeconds1;//add seconds
                let hoursLeft = Math.floor( seconds / 3600 );//convert into time
                let min = Math.floor(( seconds - hoursLeft * 3600 ) / 60 );
                let time1=hoursLeft+":"+min; 
                const updateData={
                  spent_time:time1,
                  progress
                }
                await userLib.updateIssueDetails(issueId,updateData);
                if(parseInt(time1)>8)
                {
                  this.setResponse('CROSSED_8_HOURS');
                  return {}; 
                }
                else{
                this.setResponse('SUCCESS');
                return updateData; 
                }
      } 
      else{
        this.setResponse('ISSUE_NOT_EXIST');
        return {}; 
      }
    } catch (e) {
      console.log(`Error: API: IssueChargeTime`, e);
      throw e;
    }
  };

}

module.exports = IssueChargeTimeAction;