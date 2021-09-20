// 打印欢迎界面
const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))

const {clone} = require('./download')
//const { spawn } = require('child_process')
const open = require('open')
require('child_process')
const spawn = async (...args) => {
  const {spawn} = require('child_process')
  return new Promise(resolve => {
    const proc = spawn(...args)

    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}

module.exports = async name => {
  clear()
  const data = await figlet('KKB Welcome')
  log(data)

  //项目模板
  log('创建项目')
  //await clone('github:su37josephxia/vue-template',name)

  // 下载依赖 npm i
  //spawn('npm', ['install']) 
  // 同步 Promise api
  // 输出流 子进程 
  log(`安装依赖...`)
  //await spawn('npm', ['install'], {cwd: `./${name}`})
  log(chalk.green(`安装完成`))

  open('http://localhost:8080')
  await spawn('npm', ['run','serve'], {cwd: `./${name}`})
  log(`install完成`)
}