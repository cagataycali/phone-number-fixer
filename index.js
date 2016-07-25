var countryCodes = require('../countryCodes.json');
var PNF = require('google-libphonenumber').PhoneNumberFormat;
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
var pkg = require('./package.json');
updateNotifier({pkg}).notify();

module.exports = {
  check: function (number, countryCode) {
    try {
      var phoneNumber = phoneUtil.parse(number.split('+').join(''), countryCode);

      var output = {
        formatted : phoneUtil.format(phoneNumber, PNF.INTERNATIONAL),
        isValid : phoneUtil.isValidNumber(phoneNumber),
        success: true,
        code: countryCode,
      }
      return output;
    } catch (e) {
      return { formatted: '', isValid: '', success: false, code: ''}
    }
  },
  suggestion: function (number) {
    var suggestions = [];
    countryCodes.forEach((country) => {
      try {
        var output = this.check(number, country.code);
        if (output.isValid) {
          suggestions.push(output);
        }
      } catch (e) {

      }
    });
    return suggestions;
  }
}
