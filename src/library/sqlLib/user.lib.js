const SQLManager = require("@njs2/sql");

class user {   
    async getUserDetail(user_id) {
      return await SQLManager.findOne("user", { user_id: user_id });
    }
  
    async getUserList(whereClause) {
      return await SQLManager.find("user", whereClause);
    }
  
    async updateUser(whereClause, updateData) {
      return await SQLManager.update("user", whereClause, updateData);
    }
  
    async createUser(userObj) {
      return await SQLManager.insert("user", userObj);
    }
  
    async getCustomUserData(gender) {
      return await SQLManager.doExecuteRawQuery(`SELECT * FROM user WHERE gender = :gender`, { gender: gender });
    }
    async getUserByEmail(email_id){
      return  await SQLManager.findOne('user',{email_id});
    }
    async insertUser(obj){
      return await SQLManager.insert("user",obj);
    }
    async updateUserDetails(email_id,updateData){
      return await SQLManager.update('user',{email_id},updateData)
    }
    async createIssue(issueObj){
      return await SQLManager.insert("issue",issueObj);
    }
    async getIssueByName(obj){
      return  await SQLManager.findOne('issue',{user_id:obj.user_id,issue_name:obj.issueName});
    }
    async getIssueById(obj){
      return  await SQLManager.findOne('issue',{user_id:obj.user_id,issue_id:obj.issueId});
    }
    async updateIssueDetails(issue_id,updateData){
      return await SQLManager.update('issue',{issue_id},updateData)
    }
    async getIssueByUserId(user_id){
      return  await SQLManager.find('issue',{user_id});
    }
  }
  
  module.exports = user;