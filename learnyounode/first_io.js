var fs = require('fs');
text = fs.readFileSync(process.argv[2]).toString();
lines = text.split('\n');
console.log(lines.length -1);
