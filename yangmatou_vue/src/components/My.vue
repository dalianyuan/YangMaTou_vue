<template>
	<div id="my">
		<div id="head">
			<div>个人中心</div>
			<router-link to="shopcar">购物车</router-link>
			<router-link to="/">首页</router-link>
		</div>
		<div id="content">
			<div class="c-head">
				<div class="login">
					<span class="userIcon"></span>
					<span @click="login()">请登录</span>
				</div>
				<div class="involue">
					<span>粉丝数&nbsp;0位</span>
					<span>加入洋码头&nbsp;0天</span>
				</div>
			</div>
			<div class="c-cont">
				<ul>
					<li>
						<a href="javascript:;">
							<div>
								<span></span> 我的订单
							</div>
							<i></i>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div>
								<span></span> 我的优惠券
							</div>
							<i></i>
						</a>
					</li>
				</ul>
			</div>
			<div class="c-foot">
				<a href="javascript:;">客户端</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "My",
		data() {
			return {}
		},
		methods:{
			login(){
				this.$router.history.push({
					name: "Login"
				})
			}
		}
	}
</script>

<style scoped>
	#head {
		position: relative;
		width: 100%;
		overflow: hidden;
		height: .4rem;
	}
	
	#head>div {
		position: absolute;
		width: 100%;
		height: .4rem;
		background: #fff;
		text-align: center;
		line-height: .4rem;
		color: #515151;
		font-size: .16rem;
	}
	
	#head>a {
		position: absolute;
		width: .4rem;
		height: .4rem;
		line-height: .4rem;
		color: #ccc;
		font-size: .14rem;
	}
	
	#head>a:nth-of-type(1) {
		right: .4rem;
	}
	
	#head>a:nth-of-type(2) {
		right: 0;
	}
	
	#content .c-head {
		color: #fff;
		height: 1.5rem;
		background: url(../../static/img/p_bg-52636adcae.png);
		background-size: 3.75rem 1.5rem;
		padding-top: .35rem;
	}
	
	#content .c-head span {
		display: inline-block;
	}
	
	#content .c-head .login {
		display: flex;
		padding-left: .3rem;
	}
	
	#content .c-head .login>span:nth-of-type(2) {
		height: .6rem;
		line-height: .6rem;
		margin-left: .18rem;
		font-size: .16rem;
	}
	
	#content .c-head .userIcon {
		width: .6rem;
		height: .6rem;
		border-radius: 50%;
		background: url(../../static/img/share_personal-9287711f0c.png);
		background-size: cover;
	}
	
	#content .c-head .involue {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: .47rem;
		margin-top: .08rem;
	}
	
	#content .c-cont {
		margin-top: .11rem;
	}
	
	#content .c-cont>ul {
		color: #515151;
	}
	
	#content .c-cont>ul>li {
		background: #fff;
		height: .43rem;
		border-bottom: .01rem solid #dedede;
	}
	
	#content .c-cont>ul>li>a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: .43rem;
		padding-left: .15rem;
	}
	
	#content .c-cont>ul>li>a>div {
		display: flex;
		align-items: center;
	}
	
	#content .c-cont>ul>li>a span {
		width: .33rem;
		height: .2rem;
		background: url(../../static/img/p_ordericon-67f7e5447d.png) .01rem no-repeat;
		background-size: .16rem .18rem;
	}
	
	#content .c-cont>ul>li:nth-of-type(2) span {
		background: url(../../static/img/p_coupon-57b49cca12.png) .01rem no-repeat;
		background-size: .16rem .18rem;
	}
	
	#content .c-cont>ul>li>a>i {
		width: .09rem;
		height: .17rem;
		margin-right: .11rem;
		background: url(../../static/img/p_arrowright-23118a5433.png);
		background-size: contain;
	}
	
	#content .c-foot {
		position: fixed;
		bottom: .3rem;
		width: 100%;
		text-align: center;
	}
	
	#content .c-foot>a {
		color: #9b9b9b;
	}
</style>