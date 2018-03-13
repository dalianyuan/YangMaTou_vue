<template>
	<div id="home">
		<!--banner开始-->
		<div id="banner" class="swiper-container">
			<div class="img_wrap swiper-wrapper">
				<div class="img swiper-slide">
					<a href="javascript:;">
						<img src="../../static/img/CgvUBVqiKfCAMgY8AAEx-BtWOiE031_75_52_o.jpg" />
					</a>
				</div>
				<div class="img swiper-slide">
					<a href="javascript:;">
						<img src="../../static/img/CgvUA1qieReAdxNFAAGVvrip65Q942_75_52_o.jpg" />
					</a>
				</div>
				<div class="img swiper-slide">
					<a href="javascript:;">
						<img src="../../static/img/CgvUBFqiKwqAIfnHAAEvXk7XE6A974_75_52_o.jpg" />
					</a>
				</div>
				<div class="img swiper-slide">
					<a href="javascript:;">
						<img src="../../static/img/CgvUBFqiX8qADYXBAAJSsWTaF8w776_75_52_o.png" />
					</a>
				</div>
				<div class="img swiper-slide">
					<a href="javascript:;">
						<img src="../../static/img/CgvUBVqiJySAU_oGAAJlDRb_WyY175_75_52_o.png" />
					</a>
				</div>
				<div class="img swiper-slide">
					<a href="javascript:;">
						<img src="../../static/img/CgvUA1qiekyAcVMYAAEGuy3Qyeg878_75_52_o.jpg" />
					</a>
				</div>
			</div>
			<div class="bullet_wrap swiper-pagination"></div>
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
					<span>仅剩 01:21:39</span>
				</a>
				<a href="javascript:;">
					<div class="img"></div>
					<span>仅剩 02:17:39</span>
				</a>
				<a href="javascript:;">
					<div class="img"></div>
					<span>仅剩 02:17:39</span>
				</a>
				<a href="javascript:;">
					<div class="img"></div>
					<span>仅剩 02:17:39</span>
				</a>
				<a href="javascript:;">
					<div class="img"></div>
					<span>仅剩 05:17:31</span>
				</a>
				<a href="javascript:;">
					<div class="img"></div>
					<span>仅剩 02:17:39</span>
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
			<div class="cont">
				<img src="../../static/img/CgvUA1qiECmATjiLAAFwbk_hYwk274_15_8_w_o.jpg" />
				<div class="disc">
					<div class="text">
						<h2>没它还敢自称少女，抓起来！</h2>
						<a href="javascript:;">查看更多</a>
					</div>
				</div>
			</div>
		</div>
		<!--小编精选结束-->

		<!--洋货集开始-->
		<div id="yanghuo" class="bgf5">
			<div class="title">
				<i></i>
				<span>洋货集</span>
			</div>
			<div class="cont">
				<a href="javascript:;">
					<div>
						<span>靓包潮鞋</span>
						<span>Shoe&bag</span>
					</div>
				</a>
				<a href="javascript:;">
					<div>
						<span>服装配饰</span>
						<span>Clothing</span>
					</div>
				</a>
				<a href="javascript:;">
					<div>
						<span>美颜护肤</span>
						<span>Skin care</span>
					</div>
				</a>
				<a href="javascript:;">
					<div>
						<span>生活家居</span>
						<span>Living home</span>
					</div>
				</a>
			</div>
		</div>
		<!--洋货集结束-->

		<!--猜你喜欢开始-->
		<router-view></router-view>
		<!--猜你喜欢结束-->

		<!--底部开始-->
		<div id="footer" class="bgf5">
			<div class="text">
				<a href="javascript:;">客户端</a> |
				<a href="javascript:;">关于洋码头</a> |
				<a href="javascript:;">媒体报道</a>
			</div>
			<div class="desc">上海洋码头网络技术有限公司 版权所有</div>
		</div>
		<!--底部结束-->

		<!--回到顶部开始-->
		<div id="gotoTop"></div>
		<!--回到顶部结束-->
	</div>
</template>

<script>
	export default {
		name: "Home",
		data() {
			return {}
		},
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
					bulletElement: 'span',
					clickable: true
				}
			})
		}
	}
	$( document ).scroll( function(){
		if( $(this).scrollTop() > 1000 ){
			$( "#gotoTop" ).show();
		}else{
			$( "#gotoTop" ).hide();
		}
	} )
	
</script>

<style scoped>
	
	/*公共的样式*/
	.title {
		width: 2.4rem;
		margin: .25rem auto;
		position: relative;
		height: 1px;
		background: #ccc;
		box-shadow: 0 1px 0 #fff;
	}
	
	.title:before {
		position: absolute;
		content: '';
		width: .04rem;
		height: .04rem;
		border-radius: 50%;
		background: #ccc;
		top: -.02rem;
		right: 0;
		box-shadow: 0 1px 0 #fff;
	}
	
	.title:after {
		position: absolute;
		content: '';
		width: .04rem;
		height: .04rem;
		border-radius: 50%;
		background: #ccc;
		top: -.02rem;
		left: 0;
		box-shadow: 0 1px 0 #fff;
	}
	
	.title>span {
		display: inline-block;
		color: #646464;
		font-size: .16rem;
		padding: 0 .1rem 0 .4rem;
		position: absolute;
		height: .2rem;
		left: 50%;
		top: 46%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		line-height: .2rem;
		text-shadow: 0 1px 0 #fff;
		white-space: nowrap;
		background: #f5f5f5 url(../../static/img/tag_xsq-d72323a492.png) 10% 0 no-repeat;
		background-size: contain;
	}
	
	/*banner开始*/
	#banner {
		position: relative;
		background-color: #fff;
		width: 100%;
		height: 2.6rem;
		overflow: hidden;
	}
	
	#banner .img {
		width: 100%;
		position: absolute;
		overflow: hidden;
	}
	
	#banner .img:nth-of-type(2) {
		left: 3.75rem;
	}
	
	#banner .img:nth-of-type(3) {
		left: 7.5rem;
	}
	
	#banner .img:nth-of-type(4) {
		left: 11.25rem;
	}
	
	#banner .img:nth-of-type(5) {
		left: 15rem;
	}
	
	#banner .img:nth-of-type(6) {
		left: 18.75rem;
	}
	
	#banner .img>a {
		display: block;
		width: 100%;
		height: 2.6rem;
	}
	
	#banner .img>a>img {
		display: block;
		width: 100%;
	}
	
	#banner .bullet_wrap {
		position: absolute;
		left: 0;
		text-align: center;
		bottom: .1rem;
		width: 100%;
	}
	/*banner结束*/
	
	/*限时抢开始*/
	#timelimit .list {
		display: flex;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		overflow-x: auto;
		background: #fff;
		padding: .16rem .08rem;
	}
	
	#timelimit .list::-webkit-scrollbar {
		display: none;
	}
	
	#timelimit .list>a {
		position: relative;
		width: 2.8rem;
		height: 1.3rem;
		margin-right: .08rem;
	}
	
	#timelimit .list>a>span{
		position: absolute;
		left: -.5rem;
		top: 1.02rem;
		width: 1.88rem;
		height: .32rem;
		transform: scale(.5);
		font-size: .19rem;
		color: #fff;
		text-indent: .12rem;
		background: url(../../static/img/countdown-bg-fb044aac5f.png) no-repeat;
		background-size: contain;
	}
	
	#timelimit .list>a .img {
		width: 2.8rem;
		height: 1.3rem;
		border-radius: .04rem;
		background-image: url(../../static/img/CgvUA1qiATGABl1XAAFumb_xsN803_28_13_w_o.jpeg);
		background-size: 100%;
	}
	
	#timelimit .list>a:nth-of-type(2) .img {
		background-image: url(../../static/img/CgvUA1qiAWKAW0ugAAFNpWO1OJY60_28_13_w_o.jpeg);
	}
	
	#timelimit .list>a:nth-of-type(3) .img {
		background-image: url(../../static/img/CgvUBFqiAWCADqJLAAE3uIWz-Hc43_28_13_w_o.jpeg);
	}
	
	#timelimit .list>a:nth-of-type(4) .img {
		background-image: url(../../static/img/CgvUBVqiAJ-AIElLAAFwJ83Qn_855_28_13_w_o.jpeg);
	}
	
	#timelimit .list>a:nth-of-type(5) .img {
		background-image: url(../../static/img/CgvUA1qiAUeAbiXnAAFmwy_ZjY080_28_13_w_o.jpeg);
	}
	
	#timelimit .list>a:nth-of-type(6) .img {
		background-image: url(../../static/img/CgvUBVqiARWAUfJRAAGFbWsWn8Y92_28_13_w_o.jpeg);
	}
	/*限时抢结束*/
	/*小编精选开始*/
	
	#select .cont {
		position: relative;
		border: .08rem solid #fff;
		background: #fff;
		overflow: hidden;
		font-size: 0;
	}
	
	#select .cont>img {
		width: 100%;
	}
	
	#select .cont .disc {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .6);
	}
	
	#select .cont .disc .text {
		position: absolute;
		width: 80%;
		top: 50%;
		left: 10%;
		overflow: hidden;
		-webkit-transform: translate(0, -50%);
		transform: translate(0, -50%);
		text-align: center;
		color: #fff;
	}
	
	#select .cont .disc .text>h2 {
		font-size: .18rem;
		margin-bottom: 8%;
	}
	
	#select .cont .disc .text a {
		position: relative;
		display: inline-block;
		padding: .05rem .25rem .06rem .15rem;
		border-radius: .1rem;
		border: .01rem solid #fff;
		color: #fff;
		margin: 1px;
		font-size: .13rem;
	}
	
	#select .cont .disc .text a:after {
		content: '';
		position: absolute;
		top: 50%;
		width: .08rem;
		height: .08rem;
		border-width: .01rem;
		border-style: solid;
		border-color: #fff #fff transparent transparent;
		-webkit-transform: translate(0, -50%) rotate(45deg);
		transform: translate(0, -50%) rotate(45deg);
	}
	
	#select .title>span {
		background: #f5f5f5 url(../../static/img/tag_select-cb4a47d788.png) 10% 0 no-repeat;
		background-size: contain;
	}
	/*小编精选结束*/
	/*洋货集开始*/
	
	#yanghuo .cont {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding: .12rem;
		background: #fff;
		overflow: hidden;
	}
	
	#yanghuo .cont a {
		display: inline-block;
		width: 48%;
		height: .88rem;
		margin: .03rem;
		overflow: hidden;
		background-image: url(../../static/img/yhj_pic2-ba37cf91db.png);
		background-size: 100%;
	}
	
	#yanghuo .cont a:nth-of-type(2) {
		background-image: url(../../static/img/yhj_pic4-0af2cca806.png);
	}
	
	#yanghuo .cont a:nth-of-type(3) {
		background-image: url(../../static/img/yhj_pic3-505214cb4f.png);
	}
	
	#yanghuo .cont a:nth-of-type(4) {
		background-image: url(../../static/img/yhj_pic5-2702ebb41f.png);
	}
	
	#yanghuo .cont>a>div {
		text-align: right;
		margin-top: 14%;
	}
	
	#yanghuo .cont>a>div>span {
		display: block;
		margin-right: 9%;
	}
	
	#yanghuo .cont>a>div>span:nth-of-type(1) {
		font-size: .14rem;
		color: #383838;
	}
	
	#yanghuo .cont>a>div>span:nth-of-type(2) {
		font-size: .1rem;
		color: #ccc;
		margin-top: 2%;
	}
	
	#yanghuo .title>span {
		background: #f5f5f5 url(../../static/img/tag_yhj-2f872d77cd.png) 10% 0 no-repeat;
		background-size: contain;
	}
	/*洋货集结束*/
	/*底部开始*/
	
	#footer {
		height: 1.14rem;
		padding-bottom: .65rem;
		text-align: center;
		color: #646464;
	}
	
	#footer .text {
		height: .31rem;
		line-height: .31rem;
	}
	
	#footer a {
		color: #646464;
		font-size: .14rem;
		padding: .05rem .03rem;
	}
	
	#footer .desc {
		height: .18rem;
		line-height: .18rem;
		color: #9b9b9b;
	}
	/*底部结束*/
	/*回到顶部开始*/
	
	#gotoTop {
		position: fixed;
		right: .16rem;
		bottom: .72rem;
		width: .4rem;
		height: .4rem;
		background: url(../../static/img/gototop-2ab3b79818.png);
		background-size: contain;
		display: none;
	}
	/*回到顶部结束*/
</style>