<template>
	<div id="home">
		<!--banner开始-->
		<div id="banner">
			<div class="img_wrap">
				<div class="img">
					<a href="javascript:;">
						<img src="../../static/img/CgvUBVqiKfCAMgY8AAEx-BtWOiE031_75_52_o.jpg"/>
					</a>
				</div>
				<div class="img">
					<a href="javascript:;">
						<img src="../../static/img/CgvUA1qiekyAcVMYAAEGuy3Qyeg878_75_52_o.jpg"/>
					</a>
				</div>
				<div class="img">
					<a href="javascript:;">
						<img src="../../static/img/CgvUA1qieReAdxNFAAGVvrip65Q942_75_52_o.jpg"/>
					</a>
				</div>
				<div class="img">
					<a href="javascript:;">
						<img src="../../static/img/CgvUBFqiKwqAIfnHAAEvXk7XE6A974_75_52_o.jpg"/>
					</a>
				</div>
				<div class="img">
					<a href="javascript:;">
						<img src="../../static/img/CgvUBFqiX8qADYXBAAJSsWTaF8w776_75_52_o.png"/>
					</a>
				</div>
				<div class="img">
					<a href="javascript:;">
						<img src="../../static/img/CgvUBVqiJySAU_oGAAJlDRb_WyY175_75_52_o.png"/>
					</a>
				</div>
				<div class="img">
					<a href="javascript:;">
						<img src="../../static/img/CgvUBVqiKfCAMgY8AAEx-BtWOiE031_75_52_o.jpg"/>
					</a>
				</div>
				<div class="img">
					<a href="javascript:;">
						<img src="../../static/img/CgvUA1qiekyAcVMYAAEGuy3Qyeg878_75_52_o.jpg"/>
					</a>
				</div>
			</div>
			<div class="bullet_wrap">
				<span class="bullet"></span>
				<span class="bullet"></span>
				<span class="bullet"></span>
				<span class="bullet"></span>
				<span class="bullet"></span>
				<span class="bullet"></span>
			</div>
		</div>
		<!--banner结束-->
		
		<!--限时抢开始-->
		<div id="timelimit" class="bgf5">
			<div class="title">
				<i></i>
				<span>限时抢</span>
			</div>
			<div class="list">
				<a href="javascript:;">
					<div class="img"></div>
				</a>
				<a href="javascript:;">
					<div class="img"></div>
				</a>
				<a href="javascript:;">
					<div class="img"></div>
				</a>
				<a href="javascript:;">
					<div class="img"></div>
				</a>
				<a href="javascript:;">
					<div class="img"></div>
				</a>
				<a href="javascript:;">
					<div class="img"></div>
				</a>
			</div>
		</div>
		<!--限时抢结束-->
		
		<!--小编精选开始-->
		<div id="select" class="bgf5">
			<div class="title">
				<i></i>
				<span>小编精选</span>
			</div>
		</div>
		<!--小编精选结束-->
	</div>
</template>

<script>
	export default{
		name: "Home",
		data(){
			return {
			}
		}
	}
</script>

<style scoped>
	/*公用的类样式*/
	.bgf5{
		width: 100%;
	    overflow: hidden;
	    background: #f5f5f5;
	}
	.title{
		width: 2.4rem;
	    margin: .25rem auto;
	    position: relative;
	    height: 1px;
	    background: #ccc;
	    box-shadow: 0 1px 0 #fff;
	}
	.title>span{
		display: inline-block;
	    color: #646464;
	    font-size: .16rem;
	    padding: 0 .1rem 0 .4rem;
	    position: absolute;
	    height: .2rem;
	    left: 50%;
	    top: 46%;
	    -webkit-transform: translate(-50%,-50%);
	    transform: translate(-50%,-50%);
	    line-height: .2rem;
	    text-shadow: 0 1px 0 #fff;
	    white-space: nowrap;
	    background: #f5f5f5 url(../../static/img/tag_xsq-d72323a492.png) 10% 0 no-repeat;
	    background-size: contain;
	}
	
	/*banner开始*/
	#banner{
	    position: relative;
	    background-color: #fff;
	    width: 100%;
	    height: 2.6rem;
	    overflow: hidden;
	}
	#banner .img{
		width: 100%;
		position: absolute;
		overflow: hidden;
	}
	#banner .img>a{
		display: block;
		width: 100%;
		height: 2.6rem;
	}
	#banner .img>a>img{
		display: block;
		width: 100%;
	}
	#banner .bullet_wrap{
	    position: absolute;
	    left: 0;
	    text-align: center;
	    bottom: .1rem;
	    width: 100%;
	}
	#banner .bullet_wrap>span{
		display: inline-block;
	    width: .09rem;
	    height: .09rem;
	    border-radius: 50%;
	    background: #e6e6e6;
	    margin: 0 .02rem;
	    cursor: pointer;
	    border: 1px solid #e6e6e6;
	}
	/*banner结束*/
	
	/*限时抢开始*/
	#timelimit .list{
		display: flex;
	    width: 100%;
	    white-space: nowrap;
	    overflow: hidden;
	    overflow-x: auto;
	    background: #fff;
	    padding: .16rem .08rem;
	    font-size: 0;
	}
	#timelimit .list>a{
		width: 2.8rem;
		height: 1.3rem;
		margin-right: .08rem;
	}
	#timelimit .list .img{
		width: 2.8rem;
		height: 1.3rem;
		border-radius: .04rem;
		background: url(../../static/img/CgvUA1qiATGABl1XAAFumb_xsN803_28_13_w_o.jpeg);
		background-size: 100%;
	}
	/*限时抢结束*/
	
	
	/*小编精选开始*/
	#select{
		
	}
	/*小编精选结束*/
</style>