
class IssueCreateIssueInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = true; // values: true/false
    this.initializer.requestMethod = ['POST']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "issueName": {
        "name": "issue_name",
        "type": "string",
        "description": "Name of the Task",
        "required": true,
        "default": ""
      },
      "startDate": {
        "name": "start_date",
        "type": "date",
        "description": "Startdate of the Task",
        "required": true,
        "default": ""
      },
      "endDate": {
        "name": "end_date",
        "type": "date",
        "description": "Enddate of the Task",
        "required": false,
        "default": ""
      },
      "totalHours": {
        "name": "total_hours",
        "type": "date",
        "description": "Total hours required for completion of the task",
        "required": true,
        "default": ""
      },
    };

    return { ...param };
  }
}

module.exports = IssueCreateIssueInitalize;