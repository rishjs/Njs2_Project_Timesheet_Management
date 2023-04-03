
class UserUserLoginInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['POST']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "emailId": {
        "name": "email_id",
        "type": "string",
        "description": "EmailId of the User",
        "required": true,
        "default": ""
      },
    };

    return { ...param };
  }
}

module.exports = UserUserLoginInitalize;