// 测试响应的router用例
const express = require('express')
const router = express.Router()

router.get('/api/users', (req, res)=>{
    console.log('this is get')
    res.send({name: 'zs', age:20})
})

router.post('/api/users', (req, res)=>{
    console.log('this is post')
    res.send('请求成功')
})

module.exports = router