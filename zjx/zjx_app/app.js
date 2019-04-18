import { Session } from 'inspector';

// 使用eXpress构建web服务器
const express = require('express');
// 引入mysql
const mysql = require('mysql');

const bodyParser = require('body-parser');
var cors = require('cors');

// 创建连接池
const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"zjx"
});
// 引入路由模块
const Index = require()

// 创建express对象
var app = express();
// 配置session
app.use(Session({
    secret:"128位字符串",    //配置秘钥
    resave:false,           //每次请求是否更新数据
    saveUninitialized:true, //保存初始化数据
}))
// 监听端口
var server = app.listen(3000);
// 启用cors跨域，允许http://127.0.0.1:8000及http://localhost:8000的请求访问该服务端
app.use(cors({
    origin:["http://127.0.0.1:8000","http://localhost:8000"]
}));
// 使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
// 托管静态资源到public目录下
// 指定静态目录.保存图片资源
//项目中所有图片都需要保存在服务器端
//重启动服务器
app.use(express.static("public"));
