var express = require('express');
var router = express.Router();
var UserModel = require("../model/UserModel");

/* GET home page. */
router.get('/api/admin', function(req, res, next) {
  res.render('index', { title: 'express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: '主页面' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录页面' });
});
router.get('/regist', function(req, res, next) {
  res.render('regist', { title: '注册页面' });
});


router.post("/api/login", function(req, res) {
	var username = req.body.username;
	var pwd = req.body.pwd ;

	var result = {
		status: 1,
		message: "登录成功"
	}
	UserModel.find({username: username, pwd: pwd}, function(err, docs){
		if(!err && docs.length > 0) {
			console.log("登录成功");
			res.send(result);
		} else {
			console.log("登录失败，请检查您的用户名或者密码");
			result.status = -109;
			result.message = "登录失败，请检查您的用户名或者密码"
			res.send(result);
		}
	})
})

router.post("/api/regist", function(req, res){
	var result = {
		status: 1,
		message: "注册成功"
	}
	// express post参数接收。
	// 所有的post参数都被包装到req.body中
	var username = req.body.username;
	var pwd = req.body.pwd;
	// 用户名是否被使用查询
	// docs：查询结果。 解构是数组
	UserModel.find({username: username}, function(err, docs) {
		if(!err && docs.length > 0) {
			console.log("用户名已经被使用，请选择别的用户名");
			result.status = -111;
			result.message = "用户名已经被使用，请选择别的用户名";
			res.send(result);
			return;
		}

		// 保存功能 (mongodb的调用使用mongoose组件)
		var um = new UserModel();
		um.username = username;
		um.pwd = pwd;
		um.save(function(err){
			if(err) {
				console.log("注册失败", err);
				result.status = -110;
				result.message = "注册失败";
				res.send(result);
			} else {
				console.log("注册成功");
				res.send(result);
			}
		})
	})


})

module.exports = router;
