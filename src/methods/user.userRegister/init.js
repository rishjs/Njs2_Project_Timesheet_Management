
class UserUserRegisterInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['POST']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "userName": {
        "name": "user_name",
        "type": "string",
        "description": "Name of the User",
        "required": true,
        "default": ""
      },
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

module.exports = UserUserRegisterInitalize;