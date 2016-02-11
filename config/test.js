var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
  customService.populate();
});

module.exports.test = function(cb){
  console.log('test init');
}
