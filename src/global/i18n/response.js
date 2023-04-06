const RESPONSE = {
  INVALID_USER: {
    responseCode: 1001, responseMessage: {
      "en": "Invalid user data"
    }
  },
  INVALID_EMAIL: {
    responseCode: 1002, responseMessage: {
      "en": "Invalid EMAIL_ID"
    }
  },
  USER_EXIST: {
    responseCode: 1003, responseMessage: {
      "en": "User Already Exist"
    }
  },
  USER_NOT_EXIST: {
    responseCode: 1004, responseMessage: {
      "en": "User Not Found"
    }
  },
  OTP_EXPIRED: {
    responseCode: 1005, responseMessage: {
      "en": "Otp Expired"
    }
  },
  OTP_MISMATCH: {
    responseCode: 1006, responseMessage: {
      "en": "Otp doesnot Match"
    }
  },
  ISSUE_EXIST: {
    responseCode: 1007, responseMessage: {
      "en": "Issue Already added"
    }
  },
  INVALID_DATE_OR_TIME: {
    responseCode: 1008, responseMessage: {
      "en": "Invalid date or time"
    }
  },
  INVALID_TIME: {
    responseCode: 1009, responseMessage: {
      "en": "Invalid time"
    }
  },
  CROSSED_8_HOURS: {
    responseCode: 1010, responseMessage: {
      "en": "Spent Time has crossed 8 hours"
    }
  },
  ISSUE_NOT_EXIST: {
    responseCode: 1011, responseMessage: {
      "en": "Issue doesnot exist"
    }
  },
  LOGIN: {
    responseCode: 1012, responseMessage: {
      "en": "Login Successful"
    }
  },
};

module.exports.RESPONSE = RESPONSE;
