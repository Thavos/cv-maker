const iconJson = require('../src/assets/icomoon/selection.json');
const fs = require('fs');

function main() {
  let data = [];
  iconJson['icons'].forEach((icon) => {
    data = data.concat(icon['properties']['name'].split(',').map((i) => i.trim()));
  });

  data = `"${data.join('"|"')}"`;
  let string = `export type IconName = ${data}`;

  fs.writeFile('../src/assets/icomoon/icon.ts', string, (err) => {
    if (err) console.error(err);
    console.log('File created!');
  });
}

main();
