var phoneNumberFixer = require('phone-number-fixer');

var number = '05054146201';

console.log(phoneNumberFixer.check(number, 'TR'));

console.log(phoneNumberFixer.suggestion(number));
