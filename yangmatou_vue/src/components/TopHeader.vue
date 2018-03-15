<template>
	<div id="header">
		<div class="fl left">
			<router-link active-class="active" to="/" exact><span>首页</span></router-link>
			<router-link active-class="active" to="/community"><span>社区</span></router-link>
		</div>
		<div class="fr right">
			<router-link to="/shopcar">购物车</router-link>
			<router-link to="/my">我的</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style scoped>
	.active>span {
		color: #383838;
		border-bottom: 2px solid #cc3333;
	}
	
	#header {
		position: sticky;
		z-index: 10;
		width: 100%;
		height: .4rem;
		top: 0;
		left: 0;
		background: #fff;
		border-bottom: 1px solid #DEDEDE;
	}
	
	#header>div>a {
		padding: 0 .08rem;
	}
	
	#header .left>a>span {
		display: inline-block;
		height: .33rem;
		line-height: .33rem;
	}
	
	#header .right>a {
		display: inline-block;
		height: .4rem;
		line-height: .4rem;
	}
</style>