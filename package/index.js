// function getAllApi(url,headers){
//     new Promise((resolve,reject)=>{
//         fetch()
//     })
// }
const path = "./functions/";
const _ = require("lodash");
const filter = require(`${path}dateFormat`);
const debounce = require(`${path}debounce`);
const throttle = require(`${path}throttle`);
const iterator = require(`${path}iterator`);
const generator = require(`${path}generator`);
const fibonacci = require(`${path}fibonacci`);

module.exports = { filter, debounce, throttle, iterator, generator, fibonacci };
