// 测试数据库使用的用例
const mysql = require('mysql2')
// 建立与MySQL数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'zjj19991118',
    database: 'xiechengdatabase'
})

const user = {username: 'yhm', password: '123456yhm', profile: 'YXZ_MZS\\DuckAndMountain\\src\\assets\\profile.png'}
const sqlInsert = 'INSERT INTO user SET ?'
db.query(sqlInsert, user, function(error, dataStr){
    if(error) return console.log(error.message) // 若是失败了就return出该函数了
    if(dataStr.affectedRows === 1){console.log('插入数据成功')}
    console.log(dataStr)
})