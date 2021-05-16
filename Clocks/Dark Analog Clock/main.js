const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval((timer)=>{

let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

// console.log(
//   `hour = ${new Date().getHours()}, minutes = ${new Date().getMinutes()}, seconds = ${new Date().getSeconds()}`
// );

let mm12 = mm / 12;

console.log(`hh = ${hh}, mm = ${mm}, mm/12 = ${mm12} sc = ${ss}`);

hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
},1000)