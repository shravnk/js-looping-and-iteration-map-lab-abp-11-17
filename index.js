// Code your solution in this file.
function lowerCaseDrivers(input) {
  return input.map(function (text) { return text.toLowerCase(); });
}
function nameToAttributes(input) {
  return input.map(function (text) { return object.assign({},text,{firstName: text.split(" ")[0]) })}


}
