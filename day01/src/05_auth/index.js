const http = require('http')

http.createServer((req, res) => {
  console.log('cookie:',res.headersSent.cookie);
  res.setHeader('Set-Cookie','abc=123;')
  res.end('Hello')
})
.listen(3000)