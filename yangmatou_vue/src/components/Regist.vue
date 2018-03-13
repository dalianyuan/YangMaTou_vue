<template>
	<div>
		<div class="Register">
			<div class="titleBar"><span>&lt;</span>注册</div>
			<div class="centerBar">
				<div class="center">
					<!--表单控件部分============================-->
					<div class="inputBox">
						<input type="tel" id="tel" placeholder="输入手机号" />
					</div>
					<div class="inputBox">
						<input type="text" id="verify" placeholder="输入图形验证码" />
						<div class="verifyPic" @click="toggle()"><em>{{msg}}</em></div>
					</div>
					<div class="inputBox">
						<input type="text" id="sms" placeholder="输入短信验证码" />
						<div class="smsBox">获取验证码</div>
					</div>
					<div class="inputBox">
						<input type="password" id="password" placeholder="请设置6-16位登录密码" />
					</div>
					<!--表单控件部分===============结束=============-->
					<div class="deal">
						注册即视为同意<em><<洋码头用户协议>></em>
					</div>
					<div class="message"></div>
					<button class="but">注册</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Regist',
		data() {
			return {
				msg: Math.random().toString(32).substr(2, 4)
			}
		},
		methods: {
			toggle() {
				this.msg = Math.random().toString(32).substr(2, 4)
			}
		}
	}
</script>

<style scoped>
	.Register {
		width: 100%;
		height: 100%;
	}
	
	.titleBar {
		width: 100%;
		height: 0.44rem;
		font-size: 0.17rem;
		line-height: 0.44rem;
		background-color: #fff;
		color: #646464;
	}
	
	.titleBar>span {
		margin-left: 0.1rem;
		margin-right: 1.44rem;
	}
	
	.centerBar {
		width: 100%;
		height: 6.23rem;
		background: #f1f1f1;
		display: flex;
		justify-content: center;
	}
	
	.center {
		width: 75.7%;
		height: 3.14rem;
		padding-top: 0.29rem;
	}
	
	.inputBox {
		width: 100%;
		height: 0.38rem;
		display: flex;
		align-items: center;
		background: #fff;
		margin-bottom: 0.1rem;
	}
	
	.inputBox>input {
		height: 0.3rem;
		width: 62%;
		padding-left: 0.1rem;
		border: 0;
	}
	
	input::-webkit-input-placeholder {
		color: #ccc;
		font-size: 0.14rem;
	}
	
	.verifyPic {
		width: 23%;
		height: 80%;
		font-size: 0.16rem;
		color: #CC00CC;
		display: flex;
		align-items: center;
		justify-content: center;
		background: url(../../static/img/yanbg.jpg) repeat;
		background-size: cover;
		margin-left: 0.52rem;
		border-radius: 0.04rem;
	}
	
	.smsBox {
		width: 38%;
		height: 100%;
		background: #c33;
		border-radius: 0.03rem;
		color: #fff;
		font-size: 0.14rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.deal {
		width: 100%;
		height: 0.18rem;
		font-size: 0.12rem;
		color: #383838;
	}
	
	.deal>em {
		color: #c33;
	}
	
	.message {
		width: 100%;
		height: 0.66rem;
		padding-top: 0.4rem;
		background: #ffc;
		visibility: hidden;
	}
	
	.but {
		width: 100%;
		height: 0.38rem;
		background: #CC3333;
		font-size: 0.16rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		border: 0;
		border-radius: 0.02rem;
	}
</style>