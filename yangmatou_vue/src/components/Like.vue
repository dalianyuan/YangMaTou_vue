<template>
	<!--猜你喜欢开始-->
	<div id="like" class="bgf5">
		<div class="title">
			<i></i>
			<span>猜你喜欢</span>
		</div>
		<ul class="list">
			<li v-for="item in infoArr">
				<router-link :to="{name: 'Detail', 
					params:{
						pid:item.id, 
						pImg:item.pic, 
						pName:item.name, 
						pPrice:item.price,
						pCountry:item.sellerInfo.countryName,
						pCouIcon:item.sellerInfo.countryIconUrl
					}}">
					<div class="img-div">
						<img class="proImg" :src="item.pic" alt="" />
						<img class="icon" src="http://s1.ymatou.com/homem/images/icon_goods_activity-3ebdcdc998.png" />
					</div>
					<div class="info">
						<div class="name">
							{{item.name}}
						</div>
						<div class="info-tag">
							<span>包邮包税</span>
						</div>
						<div class="pri-wrap">
							<div class="price">
								¥ {{item.price}}
							</div>
							<div class="country">
								<img :src="item.sellerInfo.countryIconUrl" /> {{item.sellerInfo.countryName}}
							</div>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
		<div class="more">
			加载更多
		</div>
	</div>
	<!--猜你喜欢结束-->
</template>

<script>
	import axios from 'axios';
	export default {
		name: "Like",
		data() {
			return {
				infoArr: [],
			}
		},
		mounted() {
			axios.get("/home/api/getLikeList?pageNub=2&pageSize=32")
				.then((res) => {
					//					console.log(res.data.likeProductInfo);
					this.infoArr = res.data.likeProductInfo;
				});
		},
		methods: {}
	}
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
	
	#like {
		padding: 0 .16rem .1rem;
	}
	
	#like .list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	#like .list>li {
		width: 49%;
		margin-bottom: .08rem;
	}
	
	#like .list>li>a {
		display: block;
		height: 2.8rem;
		background: #fff;
	}
	
	#like .img-div {
		position: relative;
		height: 1.73rem;
	}
	
	#like .img-div .proImg {
		width: 100%;
	}
	
	#like .img-div .icon {
		position: absolute;
		width: .27rem;
		height: .3rem;
		right: 3%;
		top: 0;
	}
	
	#like .info {
		padding: 0 .06rem;
	}
	
	#like .name {
		font-size: 12px;
		color: #383838;
		height: .34rem;
		line-height: .17rem;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		overflow: hidden;
		white-space: normal;
		margin-top: .1rem;
	}
	
	#like .info-tag {
		height: .19rem;
		margin: .07rem 0 .1rem;
	}
	
	#like .info-tag>span {
		display: inline-block;
		width: .6rem;
		height: .18rem;
		line-height: .15rem;
		text-align: center;
		border: 1px solid #c33;
		color: #c33;
		margin: 1px;
		border-radius: .05rem;
	}
	
	#like .pri-wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: .16rem;
	}
	
	#like .price {
		font-size: .16rem;
		color: #c33;
	}
	
	#like .country {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-right: .12rem;
		color: #646464;
	}
	
	#like .country>img {
		width: .1rem;
		height: .1rem;
		border-radius: 50%;
		margin-right: .04rem;
		vertical-align: middle;
	}
	
	#like .title>span {
		background: #f5f5f5 url(../../static/img/tag_heart-dc2c84d296.png) 10% 0 no-repeat;
		background-size: contain;
	}
	
	#like .more {
		height: .35rem;
		border: 1px solid #dedede;
		color: #9b9b9b;
		font-size: .14rem;
		line-height: .3rem;
		text-align: center;
		background: #fff;
		margin: .1rem 0;
	}
</style>