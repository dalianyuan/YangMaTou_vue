<template>
	<div>
		<router-link to="/" class="pos">首页</router-link>
		<!--头部====================-->
		<div class="Detailsmall">
			<router-link to="/" class="logoBox"><img src="../../static/img/logo.png" alt="" class="logo" /></router-link>
			<div class="navigate">
				<router-link to="/" class="homePage" active-class="active" exact>
					<span>首页</span>
				</router-link>
				<router-link to="/community" class="homePage" active-class="active">
					<span>社区</span>
				</router-link>
			</div>
		</div>
		<!--头部===========结束========-->
		<div class="pannel">
			<!--banner图====================-->
			<div class="bannerALl">
				<div class="bgpic swiper-container">
					<!--<mt-swipe :auto="0">
		  				<mt-swipe-item>
		  					<img src="http://pic1.ymatou.com/G02/M0A/D5/C5/CgvUA1qQl--AOBYWAABmveEDqNA184_533_400_w_o.jpg" />
		  				</mt-swipe-item>
			  			<mt-swipe-item>
			  				<img src="http://pic1.ymatou.com/G02/M0A/D5/C5/CgvUA1qQl--ALFg7AADWhtvXkhY036_325_244_w_t.jpg" />
			  			</mt-swipe-item>
			  			<mt-swipe-item>
			  				<img src="http://pic1.ymatou.com/G02/M00/DC/85/CgvUBVqQl3-AC3yVAAA_ImAO9Us060_1_1_w_t.jpg" />
			  			</mt-swipe-item>
		  			</mt-swipe>-->
					<!--注释部分为mint-ui实现滑动效果，实现时出现bug-->
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img src="http://pic1.ymatou.com/G02/M0A/D5/C5/CgvUA1qQl--AOBYWAABmveEDqNA184_533_400_w_o.jpg" />
						</div>
						<div class="swiper-slide">
							<img src="http://pic1.ymatou.com/G02/M0A/D5/C5/CgvUA1qQl--ALFg7AADWhtvXkhY036_325_244_w_t.jpg" />
						</div>
						<div class="swiper-slide">
							<img src="http://pic1.ymatou.com/G02/M00/DC/85/CgvUBVqQl3-AC3yVAAA_ImAO9Us060_1_1_w_t.jpg" />
						</div>
					</div>

				</div>
				<ol class="uPic" id="uPic">
					<li><img src="http://pic1.ymatou.com/G02/M0A/D5/C5/CgvUA1qQl--AOBYWAABmveEDqNA184_533_400_w_o.jpg" /></li>
					<li><img src="http://pic1.ymatou.com/G02/M0A/D5/C5/CgvUA1qQl--ALFg7AADWhtvXkhY036_325_244_w_t.jpg" /></li>
					<li><img src="http://pic1.ymatou.com/G02/M00/DC/85/CgvUBVqQl3-AC3yVAAA_ImAO9Us060_1_1_w_t.jpg" /></li>
				</ol>
			</div>
			<!--banner图============结束========-->
			<!--中间介绍======================-->
			<div class="detailTitle">
				<h2>👏好物推荐🎺夏季必囤【欧缇丽保湿喷雾】</h2></div>
			<div class="detailName">
				<span class="nameImg"><img src="http://pic1.ymatou.com/p5img/upload/userlogo/small/1562136_4f9cf26c479848e49a8003b6006f7bfa_s.png" /></span>
				<span>手动创造</span>
				<span></span>
			</div>
			<div class="detailSay">
				#每日推荐#欧缇丽保湿喷雾。透明液体，喷出细密水雾。<br/>
				<br/> 使用感：水雾很细，很适合空调间里通勤上学随时拿出来喷一喷。开始化妆的时候可以拿出来喷一喷，以免爆皮，或者化妆之后当定妆水来用。总之是一瓶不可或缺的百搭基础款。
			</div>
			<div class="redFont">
				<em>#空瓶记#</em>
				<em>#护肤日常#</em>
				<em>#种草福利社#</em>
			</div>
			<div class="country">
				<em>中国福建省</em>
				<em>3天前</em>
			</div>
			<!--中间介绍=============结束=========-->
			<!--中间空的用来做边框====================-->
			<strong class="strong"></strong>
			<!--中间空的用来做边框===================-->
			<!--评论部分===================-->
			<div class="say"><em>评论</em></div>
			<ol class="discuss">
				<li class="discussLi">我已经是老顾客了，东西质量跟我在免税店买的一样，真心不错，给5分好评…</li>
			</ol>
			<p class="View">查看剩余评论 > </p>
			<!--评论部分===========结束========-->
			<!--swiper部分===================-->
			<strong class="strong"></strong>
			<div class="say"><em>相关好货</em></div>
			<!--swiper部分========结束===========-->
			<div class="allList">
				<ol class="ooList">
					<li v-for="item in list3" class="liList">
						<img :src="item.ProductPic" alt="" />
						<p class="oneP">{{item.ProductDes}}</p>
						<p class="twoP"><em>¥</em>{{item.Price}}</p>
					</li>
				</ol>
			</div>
			<strong class="strong"></strong>
			<div class="say"><em>相关笔记</em></div>
			<!--下面的其他推荐========================================-->
			<div class="loadAll">
				<div class="smallBox" v-for="item in list4">
					<img :src="item.CoverPic" alt="" class="pic2" />
					<p class="detail">{{item.Title}}</p>
					<div class="info">
						<div class="one"><img :src="item.UserLogo" alt="" class="name" /><span class="username2">{{item.UserName}}</span></div>
						<div class="two"><img src="../../static/img/zan.jpg" alt="" class="zan" /><span class="zan">赞</span></div>
					</div>
				</div>
			</div>
			<!--下面的其他推荐====================结束====================-->
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		name: 'Detailsmall',
		data() {
			return {
				list3: [],
				list4: []
			}
		},
		mounted() {

			var mySwiper = new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
					bulletElement: 'span',
					clickable: true
				}
			})

			axios.get("/note/api/GetSimilarProductAndNoteAsync?Page=0&pageSize=10&NoteId=100843545&Channel=3")
				.then((res) => {
					this.list4 = res.data.Result.Notes
					this.list3 = res.data.Result.Products
				})

		},
		methods: {
			getText(fid) { //形参
				this.$router.history.push({
					name: "Detailsmall",
					params: {
						fid: fid
					}
				})
			}
		}
	}
</script>

<style src="../../static/css/Header.css"></style>

<style scoped>
	.pos {
		width: 0.4rem;
		height: 0.4rem;
		position: fixed;
		right: 0.15rem;
		bottom: 0.8rem;
		border-radius: 50%;
		background: #d42121;
		opacity: 0.9;
		font-size: 0.12rem;
		color: #fff;
		text-align: center;
		padding-top: 0.12rem;
		z-index: 2;
	}
	
	.pannel {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
	
	.bgpic {
		display: flex;
		background: #fff;
		height: 2.81rem;
		justify-content: center;
		position: relative;
	}
	
	.mint-swipe-item,
	.mint-swipe {
		width: 100%;
		height: 2.7rem;
	}
	
	.mint-swipe-indicators {
		display: none;
	}
	
	.bgpic img {
		width: 100%;
		height: 90%;
		position: absolute;
		top: 0;
		margin-top: 0.2rem;
		left: auto;
	}
	
	.uPic {
		width: 100%;
		height: 0.6rem;
		background: #fff;
		display: flex;
		flex-direction: row;
	}
	
	.uPic li {
		width: 0.6rem;
		height: 0.6rem;
		display: flex;
		margin-left: 0.06rem;
		border: 0.01rem solid #ccc;
		border-radius: 0.05rem;
	}
	
	.uPic li>img {
		width: 100%;
		height: 100%;
	}
	
	.detailTitle {
		height: 0.51rem;
		width: 100%;
		padding: .22rem .16rem 0;
		font-size: 0.12rem;
	}
	
	.detailName {
		width: 100%;
		height: 0.25rem;
		margin-top: .04rem;
		margin-bottom: .14rem;
		font-size: 0.12rem;
	}
	
	.nameImg {
		width: 0.25rem;
		height: 0.25rem;
	}
	
	.nameImg>img {
		height: 100%;
		border-radius: 50%;
		margin-left: 0.1rem;
	}
	
	.detailSay {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		font-size: 0.18rem;
		padding-left: 0.14rem;
		padding-right: 0.08rem;
	}
	
	.content {
		width: 92%;
	}
	
	.redFont {
		width: 100%;
		height: 0.62rem;
		padding: .16rem;
		font-size: 0.14rem;
		display: flex;
		align-items: center;
	}
	
	.redFont em {
		margin-right: 0.26rem;
		color: #cc3333;
	}
	
	.country {
		width: 100%;
		height: 0.23rem;
		display: flex;
		justify-content: flex-end;
		font-size: 0.1rem;
		align-items: center;
	}
	
	.country>em {
		margin-right: 0.16rem;
	}
	
	.strong {
		width: 100%;
		height: 0.12rem;
		background: #e8e3e3;
	}
	
	.say {
		width: 100%;
		height: 0.34rem;
		font-size: 0.14rem;
		display: flex;
		align-items: center;
		flex-direction: row;
		border-bottom: 0.01rem solid #e8e3e3;
	}
	
	.say>em {
		width: 50%;
		height: 0.16rem;
		border-left: 0.02rem solid #f00;
		padding-left: 0.1rem;
	}
	
	.discuss {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		padding-left: 0.15rem;
	}
	
	.discussLi {
		width: 98%;
		height: 0.5rem;
		padding: 0.1rem 0 0.12rem;
		border-bottom: 0.01rem solid #e8e3e3;
		font-size: 0.14rem;
	}
	
	.View {
		width: 100%;
		height: 0.4rem;
		font-size: 0.12rem;
		line-height: 0.4rem;
		text-align: center;
	}
	/*相关好货=====================================*/
	
	.allList {
		width: 100%;
		height: 2rem;
		overflow-x: auto;
	}
	
	.allList::-webkit-scrollbar {
		display: none;
	}
	
	.ooList {
		width: 750%;
		height: 1.9rem;
		float: left;
	}
	
	.ooList .liList {
		float: left;
		width: 1.28rem;
		height: 1.9rem;
		font-size: 0.12rem;
		margin-left: 0.12rem;
	}
	
	.liList img {
		width: 100%;
		height: 1.28rem;
	}
	
	.oneP {
		width: 100%;
		height: 0.34rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		color: #383838;
		margin: .04rem 0
	}
	
	.twoP {
		width: 100%;
		height: 0.17rem;
		font-size: 0.14rem;
		color: #f00;
	}
	
	.twoP>em {
		margin-right: 0.04rem;
	}
	/*下面推荐部分===============================*/
	
	.loadAll {
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
		background: #e8e8e8;
	}
	
	.smallBox {
		width: 46.8%;
		height: auto;
		margin-bottom: 0.11rem;
		font-size: 0.12rem;
		background: #fff;
	}
	
	.pic2 {
		width: 100%;
		height: 1.9rem;
	}
	
	.title {
		width: 100%;
		height: auto;
		font-weight: bold;
		padding: 0 0.1rem;
		margin-top: 0.1rem;
		overflow: hidden;
	}
	
	.detail {
		width: 100%;
		height: 0.47rem;
		padding: 0 0.1rem;
		margin-top: 0.05rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
	
	.info {
		width: 100%;
		height: 0.3rem;
		margin-top: 0.1rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.one {
		width: 75%;
		height: 0.2rem;
		padding: 0 0.1rem;
		white-space: nowrap;
	}
	
	.two {
		width: 23%;
	}
	
	.name {
		float: left;
		width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
	}
	
	.username2 {
		display: inline-block;
		font-size: 12px;
		color: #666;
		transform: scale(0.8)
	}
	
	.zan {
		display: inline-block;
		width: 0.2rem;
		height: 0.2rem;
		transform: scale(0.8);
		color: #666;
	}
</style>