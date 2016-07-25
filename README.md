# Installation

```
sudo npm i phone-number-fixer --save
```

# Using

(In demo.js)[https://github.com/ccali14/phone-number-fixer/blob/master/demo.js]
```
var phoneNumberFixer = require('phone-number-fixer');

var number = '05054146201';

console.log(phoneNumberFixer.check(number, 'TR'));

console.log(phoneNumberFixer.suggestion(number));
```
