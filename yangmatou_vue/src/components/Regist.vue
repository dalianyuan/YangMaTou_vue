<template>
	<div>
		<div class="Register">
			<div class="title">
				<router-link to="/login">
					<span></span>
				</router-link>
				注册
			</div>
			<div class="centerBar">
				<div class="center">
					<!--表单控件部分============================-->
					<div class="inputBox">
						<input type="tel" v-model="tel" placeholder="输入手机号" @blur="telPhone()" />
					</div>
					<div class="inputBox">
						<input type="text" v-model="code" placeholder="输入图形验证码" @blur="codeCheck()" />
						<div class="verifyPic" @click="toggle()"><em>{{msg}}</em></div>
					</div>
					<div class="inputBox">
						<input type="text" v-model="username" placeholder="输入用户名" @blur="nameCheck()" />
						<!--<div class="smsBox">获取验证码</div>-->
					</div>
					<div class="inputBox">
						<input type="password" v-model="pwd" placeholder="请设置6-16位登录密码" @blur="pwdCheck()" />
					</div>
					<!--表单控件部分===============结束=============-->
					<div class="deal">
						注册即视为同意<em><<洋码头用户协议>></em>
					</div>
					<div v-show="showTishi" class="showTishi" :class="(flagOk)?'ok':''">{{warning}}</div>
					<button class="but" @click="regist()">注册</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { Toast } from 'mint-ui';
	export default {
		name: 'Regist',
		data() {
			return {
				msg: Math.random().toString(32).substr(2, 4),
				showTishi: false,
				warning: "",
				tel: "",
				code: "",
				username: "",
				pwd: "",
				flagTel: "",
				flagCode: "",
				flagName: "",
				flagPwd: "",
				flagOk: false
			}
		},
		methods: {
			toggle() {
				this.msg = Math.random().toString(32).substr(2, 4)
			},
			telPhone() { //手机号
				var reg = /^1[3,5,8]\d{9}$/
				if(reg.test(this.tel)) {
					this.showTishi = true
					this.warning = "手机格式输入正确"
					this.flagTel = true
					this.flagOk = true
				} else {
					this.showTishi = true
					this.warning = "手机格式输入错误"
					this.flagTel = false
					this.flagOk = false
				}
			},
			codeCheck() { //验证码
				if(this.code == this.msg) {
					this.showTishi = true
					this.warning = "正确"
					this.flagCode = true
					this.flagOk = true
				} else {
					this.showTishi = true
					this.warning = "验证码错误,请重新输入"
					this.flagCode = false
					this.flagOk = false
				}
			},
			nameCheck() { //用户名
				var reg = /^\w{6,16}$/
				if(reg.test(this.username)) {
					this.showTishi = true
					this.warning = "用户名正确"
					this.flagName = true
					this.flagOk = true
				} else {
					this.showTishi = true
					this.warning = "用户名错误"
					this.flagName = false
					this.flagOk = false
				}
			},
			pwdCheck() { //密码
				var reg = /^\w{6,16}$/
				if(reg.test(this.pwd)) {
					this.showTishi = true
					this.warning = "输入正确"
					this.flagPwd = true
					this.flagOk = true
				} else {
					this.showTishi = true
					this.warning = "输入6-16位"
					this.flagPwd = false
					this.flagOk = false
				}
			},
			regist() { //点击提交时
				//将原有数据放到数组中
				if(this.flagTel && this.flagCode && this.flagName && this.flagPwd) {
					axios.post("/api/regist", {
							username: this.username,
							pwd: this.pwd
						})
						.then((res) => {
							console.log(res)
							if(res.data.status == 1) {
								Toast({
									message: '哈尼,注册成功。2秒后跳转~',
									duration: 1800
								});
								setTimeout(() => {
									this.$router.push('/Login')
								}, 2000)
							} else {
								Toast({
									message: res.data.message,
									duration: 1400
								});
							}
						})

				}
			}
		}
	}
</script>

<style scoped>
	.Register {
		width: 100%;
		height: 100%;
	}
	
	.title {
		position: relative;
		width: 100%;
		height: .44rem;
		line-height: .44rem;
		font-size: 17px;
		color: #646464;
		text-align: center;
		background-color: #fff;
	}
	
	.title span {
		position: absolute;
		display: block;
		width: .12rem;
		height: .12rem;
		border-width: .01rem;
		border-style: solid;
		border-color: #9b9b9b #9b9b9b transparent transparent;
		-webkit-transform: translate(0, -50%) rotate(-135deg);
		transform: translate(0, -50%) rotate(-135deg);
		top: 50%;
		left: .16rem;
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
	
	.showTishi{
		padding: .12rem 0;
		color: #c33;
	}
	
	.ok{
		color: green;
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
		margin-top: .26rem;
	}
</style>