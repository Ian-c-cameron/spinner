const countOnly = require("../../../w1/lotide/countOnly");

process.stdout.write('hello from spinner2.js... \rheyyy\n');

const output = ['\r|   ', '\r-   ', '\r\\   ']

let index = 0;
let count = 40;

const interval = setInterval(() => {
  process.stdout.write(output[index]);
  index++;
  count--;
  if (index >= output.length) {
    index = 0;
  }
  if (count <= 0) {
    clearInterval(interval);
    process.stdout.write('\n');
  }
}, 200);

