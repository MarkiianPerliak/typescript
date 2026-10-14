"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 50;
let username = 'Max'; // name wasnt working
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => { return 100 + a; };
let anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
str = "some";
const person = ['Max', 21];
var status;
(function (status) {
    status["REST"] = "resting";
    status["ready"] = "yes";
})(status || (status = {}));
console.log(status.REST);
const stringnumber = "hello";
const enabledisable = "enable";
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
// 2. done
//# sourceMappingURL=script.js.map