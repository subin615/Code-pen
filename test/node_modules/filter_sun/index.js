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

module.exports = { filter, debounce, throttle, lodash };
