
class ViewIssuesInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = true; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "pageNo": {
        "name": "page_no",
        "type": "int",
        "description": "Specific pageno",
        "required": false,
        "default": ""
      },
      "issueId": {
        "name": "issue_id",
        "type": "string",
        "description": "Specific issues",
        "required": false,
        "default": ""
      },
    };

    return { ...param };
  }
}

module.exports = ViewIssuesInitalize;