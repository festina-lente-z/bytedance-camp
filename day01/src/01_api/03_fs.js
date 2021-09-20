// 文件系统
//const fs = require('fs')



//同步IO 二进制文件 图片 视频
// const data = fs.readFileSync('./conf.js')

// console.log('data', data.toString())

//异步IO
// fs.readFile('./conf.js', (err, data) => {
//   // 错误优先的回调
//   if (err) throw err;
//   console.log(data.toString())
// })

(async () => {
  const fs = require('fs')
  const {promisify} = promisify(fs.readFile)
  const data = await fs.readFile('./conf.js')
  console.log(data.toString())
})