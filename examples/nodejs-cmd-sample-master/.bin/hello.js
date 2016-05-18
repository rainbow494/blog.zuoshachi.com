#!/usr/bin/env node

// ## Refer doc
// > http://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm
// > http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html

// ## Sample for shell
// ```
var name = process.argv[2];
var shell = require("shelljs");

shell.exec("echo hello " + name);
// ```

// ## Sample for cmd paramater
// ```
// var argv = require('yargs')
//   .option('n', {
//     alias : 'name',
//     demand: true,
//     default: 'tom',
//     describe: 'your name',
//     type: 'string'
//   })
//   .usage('Usage: hello [options]')
//   .example('hello -n tom', 'say hello to Tom')
//   .help('h')
//   .alias('h', 'help')
//   .epilog('copyright 2015')
//   .argv;

// console.log('hello ', argv.n);
// ```

// ## Others
// ```
// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', function(data) {
//   process.stdout.write(data);
// });

// process.on('SIGINT', function () {
//   console.log('Got a SIGINT');
//   process.exit(0);
// });
// ```