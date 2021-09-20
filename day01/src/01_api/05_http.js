const fs = require('fs')
const http = require('http')

http.createServer((request, response) => {
  // console.log('a request')
  // response.end('Hi Node')
  const {url, method} = request
  if(url === '/' && method === 'GET') {
    fs.readFile('./index.html', (err, data) => {
      if(err) {
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        })

        response.end('500 报错 ')
        return
      }
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  }
  //else if(url ===)
  else {
    response.statusCode = 400
    response.setHeader('Content-Type','text/plain;charset=utf-8')
    response.end('404')
  }
}).listen(3000, () => {
  console.log('server at 3000');
})

function getPrototypeChain(obj) {

}