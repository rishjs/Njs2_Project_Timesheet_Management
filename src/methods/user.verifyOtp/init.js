
class UserVerifyOtpInitalize extends baseInitialize {

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
      "otp": {
        "name": "otp",
        "type": "string",
        "description": "Otp for User",
        "required": true,
        "default": ""
      },
    };

    return { ...param };
  }
}

module.exports = UserVerifyOtpInitalize;