<template>
	<div>
		<div class="Community">
			<div class="logoBox"><img src="../../static/img/logo.png" alt="" class="logo" /></div>
			<div class="navigate">
				<router-link to="/" class="homePage">
					<span>首页</span>
				</router-link>
				<router-link to="/community" class="homePage" active-class="active" exact>
					<span>社区</span>
				</router-link>
			</div>
		</div>
		<div class="mainPart swiper-container">
			<!--<mt-swipe :auto="3500">
		    <mt-swipe-item><img class="banner-pic" src="http://pic1.ymatou.com/G02/M05/34/B6/CgvUBVqea1mAWOj-AACl2kC6L9I864_5_2_o.jpg" alt="下载洋码头APP立即领取现金大礼包"></mt-swipe-item>
		    <mt-swipe-item><img class="banner-pic" src="http://pic1.ymatou.com/G02/M01/48/A8/CgvUA1qiKsuAKn5RAAEr9rjmttM316_75_52_o.jpg" alt="下载洋码头APP立即领取现金大礼包"></mt-swipe-item>
		    <mt-swipe-item><img class="banner-pic" src="http://pic1.ymatou.com/G02/M06/51/1A/CgvUBVqiTBaABF3lAAGC0ARYlRc896_75_52_o.jpg" alt="下载洋码头APP立即领取现金大礼包"></mt-swipe-item>
			</mt-swipe>-->
			<!--注释部分为mint-ui实现滑动效果，实现时出现bug-->
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img class="banner-pic" src="http://pic1.ymatou.com/G02/M05/34/B6/CgvUBVqea1mAWOj-AACl2kC6L9I864_5_2_o.jpg" alt="下载洋码头APP立即领取现金大礼包">
				</div>
				<div class="swiper-slide">
					<img class="banner-pic" src="http://pic1.ymatou.com/G02/M01/48/A8/CgvUA1qiKsuAKn5RAAEr9rjmttM316_75_52_o.jpg" alt="下载洋码头APP立即领取现金大礼包">
				</div>
				<div class="swiper-slide">
					<img class="banner-pic" src="http://pic1.ymatou.com/G02/M06/51/1A/CgvUBVqiTBaABF3lAAGC0ARYlRc896_75_52_o.jpg" alt="下载洋码头APP立即领取现金大礼包">
				</div>
			</div>

			<div class="mainCenter">
				<!--左侧部分-->
				<div class="mianLeft">
					<div class="bigBox" v-for="item in list2">
						<div @click="getText(item.NoteInfo.NoteId)">
							<img :src="item.NoteInfo.TagImage[0].Pic" alt="" class="pic1" />
							<p class="title">{{item.NoteInfo.Title}}</p>
							<p class="detail">{{item.NoteInfo.Content}}</p>
							<div class="info">
								<div class="one"><img :src="item.UserInfo.UserLogo" alt="" class="name" /><span id="username1">{{item.UserInfo.UserName}}</span></div>
								<div class="two"><img src="../../static/img/zan.jpg" alt="" class="zan" /><span class="zan">赞</span></div>
							</div>
						</div>
					</div>
				</div>
				<!--左侧部分===========结束=================-->

				<!--右侧部分-->
				<div class="mianRigth">
					<div class="smallBox" v-for="item in list">
						<div @click="getText(item.NoteInfo.NoteId)">
							<img :src="item.NoteInfo.TagImage[0].Pic" alt="" class="pic2" />
							<p class="title">{{item.NoteInfo.Title}}</p>
							<p class="detail">{{item.NoteInfo.Content}}</p>
							<div class="info">
								<div class="one"><img :src="item.UserInfo.UserLogo" alt="" class="name" /><span id="username2">{{item.UserInfo.UserName}}</span></div>
								<div class="two"><img src="../../static/img/zan.jpg" alt="" class="zan" /><span class="zan">赞</span></div>
							</div>
						</div>
					</div>
				</div>
				<!--右侧部分===========结束=================-->
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'Community',
		data() {
			return {
				list: [],
				list2: []
			}
		},
		mounted() {

			var mySwiper = new Swiper('.swiper-container', {
				loop: true,
				autoplay: true,
				pagination: {
					el: '.swiper-pagination',
				}
			})

			axios.get("/note/api/GetSocialDiscoverList?Page=0&pageSize=35&AccessToken=&UserID=&Cookieid=&yid=")
				.then((res) => {
//					console.log(res);	
					for(var i = 0; i < res.data.Result.length; i++) {
						if(i % 2) {
							this.list.push(res.data.Result[i])
						} else {
							this.list2.push(res.data.Result[i])
						}
					}
//					console.log(res.data.Result);
				})
		},
		methods: {
			getText(fid) { //形参
				this.$router.history.push({
					name: "Detailsmall",
					params: { fid: fid }
				})
			}
		}
	}
</script>

<style src="../../static/css/Header.css"></style>

<style scoped>
	
	.Community{
		background: #fff;
		margin-bottom: .1rem;
	}
	.active>span{
		display: inline-block;
		height: .33rem;
		line-height: .33rem;
	    color: #383838;
    	border-bottom: 2px solid #cc3333;
	}
	
	/*以下是主体部分================================================*/
	.mainPart {
		width: 100%;
		/*height: 6.28rem;*/
		overflow: auto;
		display: flex;
		flex-direction: column;
		background: #e8e8e8;
	}
	
	.mainCenter {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	
	.mianLeft {
		width: 46.8%;
		height: auto;
		flex-direction: column;
	}
	
	.mianRigth {
		width: 46.8%;
		height: auto;
		flex-direction: column;
	}
	
	.bigBox {
		width: 100%;
		height: auto;
		margin-bottom: 0.11rem;
		font-size: 0.12rem;
		background: #fff;
	}
	
	.pic1 {
		width: 100%;
		height: 2.2rem;
	}
	
	.smallBox {
		width: 100%;
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
	
	#username1,
	#username2 {
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
	/*懒加载的地方*/
	
	.lazyload {
		width: 100%;
		height: auto;
	}
</style>