const fs = require('fs')

const rs = fs.createReadStream('./a.png')
const ws = fs.createWriteStream('./b.png')
rs.pipe(ws)