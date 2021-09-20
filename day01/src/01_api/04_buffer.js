// 图片切割 合并 
// Buffer就是在内存中预留指定大小的存储空间用来对输入/输出（I/O）的数据作临时存储，这部分预留的内存空间就叫缓冲区：
// 使用缓冲区优点：
//   1. 减少实际的物理读写次数
//   2. 缓冲区在创建时就被分配内存，这块内存一直被重用，可以减少动态分配和回收内存的次数

const buf1 = Buffer.alloc(10)
// 分配10个字节的缓冲区
console.log(buf1)

const buf2 = Buffer.from('a') // 16进制
console.log(buf2)

const buf3 = Buffer.from('中')
console.log(buf3) // utf-8

const buf4 = Buffer.concat([buf2, buf3])
console.log(buf4, buf4.toString())