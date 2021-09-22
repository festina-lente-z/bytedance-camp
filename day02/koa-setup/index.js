import fs from "fs";
import { createIndexTemplate }

const inputConfig = {
  middleware: {
    router: true,
  }
}

fs.mkdirSync(getRootPath())

fs.writeFileSync("./haha/index.js","index")