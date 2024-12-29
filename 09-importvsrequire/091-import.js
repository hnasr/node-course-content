console.log("Start Initial phase")
const fs = require('fs');
import ("./099-moduleA.js")
function loadModule() {
    console.log("before importing module B")
    import ("./097-moduleB.mjs")
    console.log("after importing module B")
}
console.log("Before calling B")
loadModule();
console.log("After calling B")

setTimeout( ()=>console.log("timer"),0)

fs.readFile(__filename, () => {
  console.log("read file done")
  setImmediate(() => console.log('immediate'));
});
console.log("End initial phase ")
