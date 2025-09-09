console.log('Current directory: ' + process.cwd());
console.log('This process is pid ' + process.pid);
process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});
    console.log("Loading...");
    setTimeout(() => {
        console.log("\rDone!   "); // Overwrites "Loading..."
    }, 2000);

let text = "First line\rSecond line";
console.log(text);

let originalString = "   Hello, World!   ";
let trimmedString = originalString.trim();

console.log(originalString); // Output: "   Hello, World!   "
console.log(trimmedString);  // Output: "Hello, World!"
