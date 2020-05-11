'use strict'

module.exports.formattedDate = formattedDate;
module.exports.testDate = testDate;

function formattedDate() {
    const now = new Date();
    const formattedDate = `${now.getFullYear()} - ${now.getMonth() + 1} - ${now.getDate()}`;
    return formattedDate;
}

function testDate() {
    return  'Hello peobs! :)'
}
