let http = require('http')
let users = [
    { id:222, name: '黑哥' },
    { id:322, name: '杰哥' },
	{ id:323, name: '卡子' }
]
let server = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin','*')
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users))
    }else{
        res.end('NOT Found')
    }
})

server.listen(3000,()=>{
    console.log('客户端服务器已经启动了，端口3000')
})