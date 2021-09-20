#!/usr/bin/env node


// 定制命令行界面

const program = require('commander')

program.version(require('../package').version)
program.command('init <name>')
  .description('init project')
  .action(require('../lib/init'))
program.parse(process.argv) 

console.log(process.argv);