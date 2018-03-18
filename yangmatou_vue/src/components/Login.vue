<template>
	<div id="login">
		<div class="title">
			<router-link to="/my">
				<span></span>
			</router-link>
			登录
		</div>
		<div class="login">
			<form action="">
				<input type="text" v-model="newUsername" placeholder="输入用户名/邮箱/手机号码"  />
				<input type="password" v-model="newPwd" placeholder="输入登录密码"   />
				<div>注销登录</div>
				<div v-show="showTishi" class="showTishi">{{warning}}</div>
				<button @click="Login()">登录</button>
				<div class="other">
					<router-link to="/regist">快速注册</router-link>
					<a class="fr" href="javascript:;">下载app找回密码</a>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: "Login",
		data() {
			return {
				showTishi : false,
				newUsername :"",
				warning :"",
				newPwd :""
			}
		},
		methods : {
			Login(){
				if(this.newUsername==""||this.newPwd==""){
					alert("请输入用户名和密码")
					return;
				}
				axios.post("/api/login",{
					username : this.newUsername,
					pwd : this.newPwd
				})
				.then((res) => {
					console.log(res)
					if(res.data.status==1){
						alert("登录成功,点击确认2秒后将会跳转")
						setTimeout(()=>{
							this.$router.push('/')
						},2000)
					}else{
						alert(res.data.message)
					}
				})
			}
		}
	}
</script>

<style scoped>
	#login{
		width: 100%;
		background-color: #f1f1f1;
	}
	.title{
		position: relative;
		width: 100%;
	    height: .44rem;
	    line-height: .44rem;
	    font-size: 17px;
	    color: #646464;
	    text-align: center;
	    background-color: #fff;
	}
	.title span{
		position: absolute;
	    display: block;
	    width: .12rem;
	    height: .12rem;
	    border-width: .01rem;
	    border-style: solid;
	    border-color: #9b9b9b #9b9b9b transparent transparent;
	    -webkit-transform: translate(0,-50%) rotate(-135deg);
	    transform: translate(0,-50%) rotate(-135deg);
	    top: 50%;
	    left: .16rem;
	}
	
	.login{
	    width: 2.84rem;
	    margin: auto;
	    padding-top: .29rem;
	}
	.login form>input{
	    width: 100%;
	    height: .38rem;
	    line-height: .18rem;
	    padding: .1rem 0 .1rem .1rem;
	    border: 0;
	    margin-bottom: .1rem;
	}
	.login form>input::-webkit-input-placeholder{
        color: #cecece;
    }
	.login label{
		margin-bottom: .46rem;
		color: #646464;
	}
	.login label>input{
	    width: .16rem;
	    height: .16rem;
	    background-color: #fff;
	    vertical-align: middle;
	}
	.login button{
	    width: 100%;
	    height: .38rem;
	    line-height: .38rem;
	    text-align: center;
	    border-style: none;
	    border-radius: .03rem;
	    background-color: #c33;
	    color: #fff;
	    font-size: .15rem;
	    margin: .46rem 0 .1rem;
	}
	.login .other>a{
		color: #9B9B9B;
		text-decoration: underline;
	}
</style>