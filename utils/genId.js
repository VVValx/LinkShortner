module.exports = function(limit){
const gen = "abcdefghijklmnopqrstuvwxyz1234567890";
 let uniqid = "";

 for(let i=0; i<limit; i++){
  uniqid += gen[parseInt(Math.random() * gen.length)];
 }

 return uniqid;
}