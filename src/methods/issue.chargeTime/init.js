
class IssueChargeTimeInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = true; // values: true/false
    this.initializer.requestMethod = ['POST']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "issueId": {
        "name": "issue_id",
        "type": "string",
        "description": "Issue id",
        "required": true,
        "default": ""
      },
      "todaysSpentTime": {
        "name": "todaysSpentTime",
        "type": "time",
        "description": "Time spent for task today",
        "required": true,
        "default": ""
      },
      "progress": {
        "name": "progress",
        "type": "time",
        "description": "Progress of the task",
        "required": false,
        "default": ""
      },
    };

    return { ...param };
  }
}

module.exports = IssueChargeTimeInitalize;