// Code your solution in this file.
function lowerCaseDrivers(input) {
  return input.map(function (text) { return text.toLowerCase(); });
}
function nameToAttributes(array) {
   return array.map(function (driver) {
     let newDriver = {}
     newDriver.firstName = driver.split(" ")[0];
     newDriver.lastName = driver.split(" ")[1];
     return newDriver;
  })
}
function attributesToPhrase(array) {
  return array.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}