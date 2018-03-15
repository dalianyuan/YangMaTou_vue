<template>
	<div>
		<!--详情页头部开始-->
		<div class="top">
			<div class="logoBox"><img src="../../static/img/logo.png" alt="" class="logo" /></div>
			<div class="navigate">
				<router-link to="/shopcar">
					<span>购物车</span>
				</router-link>
				<router-link to="/">
					<span>首页</span>
				</router-link>
				<router-link to="/my">
					<span>我的</span>
				</router-link>
			</div>
		</div>
		<!--详情页头部结束-->
		
		<!--详情页swiper开始-->
		<div id="picSwiper" class="swiper-container">
			<div class="img_wrap swiper-wrapper">
				<div class="img swiper-slide">
					<img ref="goodsImg" :src="$route.params.pImg"/>
				</div>
				<div class="img swiper-slide">
					<img src="../../static/img/CgvUA1g_qkSAYMfQAAI2oT0Lz98276_335_447_w_l.jpg"/>
				</div>
			</div>
			<div class="bullet_wrap swiper-pagination"></div>
		</div>
		<!--详情页swiper结束-->
		
		<!--商品信息开始-->
		<div id="pro-info">
			<div class="cont">
				<div class="name">
					<span>包邮 包税</span>
					<span ref="goodsName">{{$route.params.pName}}</span>
				</div>
				<div class="price" ref="goodsPrice">
					￥{{$route.params.pPrice}}
				</div>
			</div>
		</div>
		<!--商品信息结束-->
		
		<!--物流服务开始-->
		<div id="server">
			<div class="logistics">
				<span>物流</span>
				<span>官方直邮，{{$route.params.pCountry}}发货</span>
			</div>
			<div class="carriage">
				<span>运费</span>
				<span>包邮</span>
			</div>
			<div class="after-sale">
				<span>假一赔十</span>
				<span>售后无忧</span>
			</div>
		</div>
		<!--物流服务结束-->
		
		<!--用户评价开始-->
		<div id="comment">
			<div class="m-title">
				<span>
					<i></i>评价<i></i>
				</span>
			</div>
			<div class="buyer-com">
				<span>买家评价</span>
				<span>
					<i class="star"></i>
					<i class="star"></i>
					<i class="star"></i>
					<i class="star"></i>
					<i class="star"></i>
				</span>
				<span class="score">4.9</span>
				<a href="javascript:;" class="num">查看全部138条</a>
			</div>
			<div class="tag">
				购买过该商品的用户认为
			</div>
			<div class="com-list">
				<div class="com-item">
					<div class="cont">
						<div class="info">
							<div class="buyer">
								<div class="avg">
									<img src="../../static/img/CgvUA1cPI4aATQxzAACKp0p-4jY114_m.jpg"/>
								</div>
								<div class="name">鸡涌鸡涌欧巴</div>
								<div class="lever">V5</div>
							</div>
							<div class="desc">
								吃完才想起来评价  卖家服务态度满分 物流贼快贼快的 主要是巧克力也太好吃了吧 大大的赞！！下次还找你家哦@xan411
							</div>
						</div>
						<div class="pic">
							<img :src="$route.params.pImg"/>
						</div>
					</div>
				</div>
				<div class="com-item">
					<div class="cont">
						<div class="info">
							<div class="buyer">
								<div class="avg">
									<img src="../../static/img/CgvUBFZFTS6AEFpXAAA6JQLDKMI127_m.jpg"/>
								</div>
								<div class="name">miki0620</div>
								<div class="lever">V4</div>
							</div>
							<div class="desc">
								包装非常好，趁着过圣诞多买两盒
							</div>
						</div>
						<div class="pic">
							<img src="../../static/img/CgvUBFihdSuAC31AAAIufD3SGlA419_1_1_w_l.jpg"/>
						</div>
					</div>
				</div>
				<div class="com-item">
					<div class="cont">
						<div class="info">
							<div class="buyer">
								<div class="avg">
									<img src="../../static/img/CgvUA1ayAv-AVVomAACbfJCJY70645_m.jpg"/>
								</div>
								<div class="name">396418.alipay</div>
								<div class="lever">V5</div>
							</div>
							<div class="desc">
								卖家很赞 到货很快 很靠谱的卖家 巧克力味道棒棒哒
							</div>
						</div>
						<div class="pic">
							<img src="../../static/img/CgvUA1g_qkSAYMfQAAI2oT0Lz98276_335_447_w_l.jpg"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--用户评价结束-->
		
		<!--卖家店铺开始-->
		<div id="seller">
			<div class="info">
				<div class="pic"></div>
				<div>
					<div class="name">xan411</div>
					<div class="country">
						<span>
							<i>专业买手</i>
							<i>4.8</i>
						</span>
						<span>
							<img ref="countryImg" :src="$route.params.pCouIcon" alt="" />
							<b ref="countryName">{{$route.params.pCountry}}</b>
						</span>
					</div>
				</div>
				<div class="jbtn">+未关注</div>
			</div>
			<div class="point">
				<div>
					<span class="name">最近销量</span>
					<span class="value">998</span>
				</div>
				<div>
					<span class="name">粉丝</span>
					<span class="value">74482</span>
				</div>
				<div>
					<span class="name">综合评分</span>
					<span class="grade">4.8</span>
					<span class="top">高于平均6.9%</span>
				</div>
				<div>
					<span>
						<i class="key">买家评分</i>
						<i class="val">4.7</i>
					</span>
					<span>
						<i class="key">物流服务</i>
						<i class="val">4.9</i>
					</span>
					<span>
						<i class="key">客户服务</i>
						<i class="val">4.8</i>
					</span>
				</div>
			</div>
			<div class="btn">
				<a href="javascript:;">进店看看</a>
			</div>
		</div>
		<!--卖家店铺结束-->
		
		<!--洋码头，购在全球，更多洋货-->
		<div id="intro-pic">
			<img src="../../static/img/intro.cee7167.png"/>
		</div>
		
		<!--详情介绍开始-->
		<div id="detail-wrap">
			<div class="detail m-title">
				<span>
					<i></i>详情<i></i>
				</span>
			</div>
			<div class="picDet">
				图文详情
			</div>
			<div class="picList">
				<div class="mb5">
					<div class="name">
						<h2><span>买家须知</span></h2>
					</div>
					<div class="text">
						{{tips1}}
					</div>
					<div v-for="item1 in pics1" class="pic-div pics1">
						<img :src="item1" />
					</div>
				</div>
				<div class="mb5">
					<div class="name">
						<h2><span>商品参数</span></h2>
					</div>
					<div class="keyList">
						<div v-for="item2 in keyList" class="keyItem">
							<span class="key">{{item2.key}}</span>
							<span class="value">{{item2.value}}</span>
						</div>
					</div>
				</div>
				<div class="mb5">
					<div class="name">
						<h2><span>商品介绍</span></h2>
					</div>
					<div class="text">
						{{tips2}}
					</div>
					<div v-for="item2 in pics2" class="pic-div pics2">
						<img :src="item2"/>
					</div>
				</div>
			</div>
		</div>
		<!--详情介绍结束-->
		
		<!--假一赔十开始-->
		<div id="one-ten">
			<img src="../../static/img/onetoten.57cca1e.png"/>
		</div>
		<!--假一赔十结束-->
		
		<!--猜你喜欢开始-->
		<Like />
		<!--猜你喜欢结束-->
		
		<!--加入购物车或立即购买开始-->
		<div id="operate">
			<div class="fl">
				<span>
					<i></i>
					<i>收藏</i>
				</span>
			</div>
			<div class="fr">
				<a @click="confAdd()" href="javascript:;">加入购物车</a>
				<a href="javascript:;">立即购买</a>
			</div>
		</div>
		<!--加入购物车或立即购买结束-->
		
		<!--点击加入购物车弹出的确认框开始-->
		<div id="confAdd" ref="add" v-if="flag">
			<div class="mask"></div>
			<div class="show">
				<div class="cont">
					<div class="info">
						<img :src="$route.params.pImg" />
						<div class="desc">
							<p class="pri"><span>￥</span>{{$route.params.pPrice}}</p>
							<span>库存充足</span>
						</div>
					</div>
					<div class="amount">
						<span class="text">
							购买数量
						</span>
						<div class="num fr">
							<input type="text" value="-" id="minus" disabled/>
							<span ref="goodsNum">1</span>
							<input type="text" value="+" id="plus" disabled/>
						</div>
					</div>
				</div>
				<div id="ok" @click="goods_add()">确认</div>
				<div id="close" @click="close()"></div>
			</div>
		</div>
		<!--点击加入购物车弹出的确认框结束-->
		
	</div>
</template>

<script>
	import Like from '@/components/Like';
	import axios from "axios";
	export default {
		name: "Detail",
		data() {
			return {
				pics1: [],
				pics2: [],
				tips1: "",
				tips2: "",
				keyList: [],
				flag: false,
				goodsInfo: {
					goodsImg: "",
					goodsName: "",
					goodsPrice: "",
					goodsNum: "",
					countryImg: "",
					countryName: ""
				}
			}
		},
		components: {
			Like
		},
		mounted: function() {
			axios.get("/item/api/getProductDescriptionInfo?productId=" + this.$route.params.pid)
				.then((res)=>{
					var infoArr = res.data.result.moduleList;
//					console.log( infoArr );
					var length = infoArr.length;
					for( let i = 0; i < length; i++ ){
						if( infoArr[i].title == "买家须知" ){
							this.pics1 = infoArr[i].picList;
							this.tips1 = infoArr[i].text;
						}
						if( infoArr[i].title == "商品参数" ){
							this.keyList = infoArr[i].propertyList;
						}
						if( infoArr[i].title == "商品介绍" ){
							this.pics2 = infoArr[i].picList;
							this.tips2 = infoArr[i].text;
						}
					}
					
					this.goodsInfo.goodsImg = this.$refs.goodsImg.src,
					this.goodsInfo.goodsName = this.$refs.goodsName.innerText,
					this.goodsInfo.goodsPrice = this.$refs.goodsPrice.innerText,
					this.goodsInfo.goodsNum = this.$refs.goodsNum.innerText,
					this.goodsInfo.countryImg = this.$refs.countryImg.src,
					this.goodsInfo.countryName = this.$refs.countryName.innerText
					
				})
				
			var mySwiper = new Swiper('.swiper-container',{
			    pagination: {
				    el: '.swiper-pagination',
				    bulletElement : 'span',
				    clickable : true
			    }
			})
		},
		methods: {
			confAdd(){
				this.flag = true;
			},
			close(){
				this.flag = false;
			},
			goods_add(){
				this.$store.dispatch("goods_addA", this.goodsInfo);
				this.flag = false;
//				console.log( this.goodsInfo );
			}
		}
	}
</script>

<style scoped>
	
	/*头部开始*/
	.top{
		background: #fff;
		height: .4rem;
		border-bottom: .01rem solid #DEDEDE;
	}
	.top a{
		display: inline-block;
		height: .4rem;
		width: .4rem;
		text-align: center;
		line-height: .4rem;
	    color: #ccc;
	}
	/*头部结束*/
	
	/*详情页swiper开始*/
	#picSwiper{
		width: 100%;
		height: 3.65rem;
	}
	#picSwiper .img>img{
		width: 100%;
	}
	/*详情页swiper结束*/
	
	/*商品信息开始*/
	#pro-info{
		width: 100%;
	    overflow: hidden;
	    background-color: #fff;
	    padding-left: .12rem;
	    border-bottom: .1rem solid #f1f1f1;
	}
	#pro-info .cont{
		padding: .08rem .12rem .1rem 0;
	}
	#pro-info .name{
		width: 100%;
	    line-height: .22rem;
	    font-family: STHeitiSC-Medium;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: -o-box;
	    display: box;
	    overflow: hidden;
	    white-space: normal;
	}
	#pro-info .name>span:nth-of-type(1){
	    display: inline-block;
	    border: .01rem solid #c33;
	    color: #c33;
	    padding: 0 .04rem .01rem;
	    border-radius: .05rem;
	    margin-right: .05rem;
	    line-height: .16rem;
	    vertical-align: middle;
	}
	#pro-info .name>span:nth-of-type(2){
	    font-size: .16rem;
	    letter-spacing: 1px;
	    color: #292929;
	    vertical-align: middle;
	}
	#pro-info .price{
	    width: 100%;
	    overflow: hidden;
	    margin-top: .05rem;
	    line-height: .22rem;
	    color: #c33;
	    font-size: .2rem;
	}
	/*商品信息结束*/
	
	/*物流服务开始*/
	#server{
		height: 1.25rem;
		margin-bottom: .1rem;
		background: #fff;
	}
	#server .logistics,#server .carriage{
	    width: 100%;
	    padding: .12rem;
	    color: #292929;
	    font-size: .14rem;
        border-bottom: 1px solid hsla(0,0%,87%,.5);
	}
	#server .carriage{
		border: none;
	}
	#server .logistics>span:nth-of-type(1),#server .carriage>span:nth-of-type(1){
		margin-right: .15rem;
	}
	#server .after-sale{
		height: .37rem;
	    padding: .09rem .12rem;
	    background: #f8f8f8;
	}
	#server .after-sale>span{
		position: relative;
		padding-left: .14rem;
		margin-right: .12rem;
	}
	#server .after-sale>span:after{
	    position: absolute;
	    content: "";
	    width: .1rem;
	    height: .1rem;
	    background-image: url(../../static/img/yes.png);
	    background-size: cover;
	    left: 0;
	    top: 50%;
	    transform: translateY(-50%);
	    -webkit-transform: translateY(-50%);
	}
	/*物流服务结束*/
	
	/*用户评价开始*/
	#comment{
		margin-top: .1rem;
	}
	#comment .buyer-com{
		position: relative;
		height: .4rem;
		padding: .1rem .12rem .08rem;
		background: #fff;
	}
	#comment .buyer-com:after{
		position: absolute;
	    content: "";
	    left: .12rem;
	    right: 0;
	    height: 1px;
	    background-color: hsla(0,0%,87%,.5);
	    bottom: 0;
	}
	#comment .buyer-com>span:nth-of-type(2){
		margin: 0 .05rem;
	}
	#comment .buyer-com .star{
		display: inline-block;
		width: .12rem;
		height: .12rem;
		background: url(../../static/img/star.png);
		background-size: cover;
	}
	#comment .buyer-com .score{
	    display: inline-block;
	    line-height: .22rem;
	    font-family: STHeitiSC-Medium;
	    color: #e95656;
	}
	#comment .buyer-com .num{
		position: relative;
		float: right;
	    color: #999;
	    padding-right: .1rem;
	    line-height: .22rem;
	}
	#comment .buyer-com .num:after{
		position: absolute;
		right: 0;
	    top: 50%;
	    content: "";
	    display: block;
	    width: .06rem;
	    height: .06rem;
	    border-width: 1px;
	    border-style: solid;
	    border-color: #9b9b9b #9b9b9b transparent transparent;
	    transform: translateY(-50%) rotate(45deg);
	    -moz-transform: translateY(-50%) rotate(45deg);
	    -ms-transform: translateY(-50%) rotate(45deg);
	    -webkit-transform: translateY(-50%) rotate(45deg)
	}
	#comment .tag{
		padding: .1rem .12rem 0;
		background: #fff;
		color: #999;
	}
	#comment .com-list{
	    width: 100%;
	    overflow: hidden;
	    padding: .15rem 0 .15rem .12rem;
	    height: 1.46rem;
	    white-space: nowrap;
	    overflow-x: auto;
	    background: #fff;
	    vertical-align: middle;
	}
	#comment .com-item{
	    overflow: hidden;
	    width: 2.76rem;
	    height: 1.16rem;
	    display: inline-block;
	    box-shadow: 0 .01rem .08rem 0 rgba(0,0,0,.1);
	    margin-right: .1rem;
	}
	#comment .com-item .cont{
		display: flex;
	}
	#comment .com-item .info{
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: .1rem;
	}
	#comment .com-item .info .buyer{
		display: flex;
		align-items: center;
	}
	#comment .com-item .buyer .avg{
	    width: .25rem;
	    height: .25rem;
	    overflow: hidden;
	    border-radius: 100%;
	    margin-right: .05rem;
	}
	#comment .com-item .buyer .avg>img{
		width: 100%;
	}
	#comment .com-item .buyer .name{
		margin-right: .05rem;
	    flex: 1;
	    -webkit-flex: 1;
	    line-height: .25rem;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: -o-box;
	    display: box;
	    overflow: hidden;
	    white-space: normal;
	    color: #666;
	}
	#comment .com-item .buyer .lever{
		color: #f28f25;
		font-style: italic;
	}
	#comment .com-item .info .desc{
		margin-top: .1rem;
	    width: 100%;
	    line-height: .21rem;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: -o-box;
	    display: box;
	    overflow: hidden;
	    white-space: normal;
	    color: #292929;
	}
	#comment .com-item .pic{
		width: 1.16rem;
		height: 1.16rem;
	}
	#comment .com-item .pic>img{
		width: 100%;
	}
	/*用户评价结束*/
	
	/*卖家店铺开始*/
	#seller{
	    margin-top: .1rem;
	    width: 100%;
	    padding: .15rem .12rem;
	    overflow-x: hidden;
	    background: #fff;
	}
	#seller .info{
		display: flex;
	}
	#seller .info .pic{
	    margin-right: .05rem;
	    width: .3rem;
	    height: .3rem;
	    overflow-x: hidden;
	    border-radius: 100%;
	    background: url(../../static/img/413235_5d182d0f907344a6977f04e500b642e8_m.jpg);
	    background-size: cover;
	}
	#seller .info>div:nth-of-type(2){
		flex: 1;
		margin-right: .12rem;
	}
	#seller .info .country{
		display: flex;
		color: #999;
	}
	#seller .info .country>span i:nth-of-type(2){
		color: #e95656;
		margin-right: .04rem;
	}
	#seller .info .country>span:nth-of-type(2){
		flex: 1;
		height: .16rem;
		line-height: .16rem;
		margin-left: .06rem;
	}
	#seller .info .country>span:nth-of-type(2)>img{
		float: left;
		width: .14rem;
		height: .14rem;
		margin-right: .06rem;
	}
	#seller .jbtn{
	    width: .72rem;
	    overflow: hidden;
	    display: inline-block;
	    border: .01rem solid #c33;
	    color: #c33;
	    border-radius: .06rem;
	    text-align: center;
	    line-height: .3rem;
	    font-size: .14rem;
	}
	#seller .point{
	    margin-top: .15rem;
	    width: 100%;
	    display: flex;
	    display: -webkit-flex;
	    justify-content: space-between;
	    -webkit-justify-content: space-between;
	    font-family: PingFangSC-Regular;
	}
	#seller .point>div{
		display: flex;
		flex-direction: column;
		width: 25%;
	    text-align: center;
	    border-right: .01rem solid hsla(0,0%,87%,.5);
	    height: .65rem;
	}
	#seller .point>div:last-of-type{
		border: none;
	}
	#seller .point .name{
		color: #999;
		line-height: .18rem;
	}
	#seller .point>div span{
		line-height: .21rem;
	}
	#seller .point .value{
		padding-top: .05rem;
		color: #051b2b;
	}
	#seller .point .key{
		color: #666;
		padding-right: .04rem;
	}
	#seller .point .grade,#seller .point .val{
		color: #e95656;
	}
	#seller .point .grade{
		font-size: .16rem;
	}
	#seller .point .top{
		position: relative;
	    width: auto;
	    margin-top: .05rem;
	    display: inline-block;
	    background-color: #e95656;
	    color: #fff;
	    transform: scale(0.9);
	    padding: 0 .04rem;
	    border-radius: .04rem;
	}
	#seller .point .top:after{
		position: absolute;
	    content: "";
	    display: inline-block;
	    width: 0;
	    height: 0;
	    border-left: .06rem solid transparent;
	    border-right: .06rem solid transparent;
	    border-bottom: .07rem solid #e95656;;
	    top: -.05rem;
	    left: 50%;
	    transform: translate(-50%);
	    -webkit-transform: translate(-50%);
	}
	#seller>.btn{
		text-align: center;
		margin: .2rem 0 .1rem;
	}
	#seller>.btn>a{
		position: relative;
	    font-family: PingFangSC-Regular;
	    padding: 0 .2rem;
	    display: inline-block;
	    border-radius: .07rem;
	    line-height: .28rem;
	    border: .01rem solid #f28f25;
	    color: #f28f25;
	    text-indent: .17rem;
	}
	#seller>.btn>a:after{
		position: absolute;
	    content: "";
	    width: .14rem;
	    height: .12rem;
	    background: url(../../static/img/dian.png);
	    background-size: cover;
	    left: .2rem;
	    top: .08rem;
	}
	/*卖家店铺结束*/
	
	/*洋码头，购在全球，更多洋货*/
	#intro-pic{
	    width: 100%;
	    height: 1.15rem;
	    margin: .1rem 0;
	}
	#intro-pic>img{
		width: 100%;
	}
	
	/*详情介绍开始*/
	#detail-wrap{
		margin-top: .1rem;
		background-color: #fff;
	}
	.m-title{
	    width: 100%;
	    overflow: hidden;
	    text-align: center;
	    padding-bottom: .1rem;
	    background-color: #f1f1f1;
        height: .31rem;
    	line-height: .21rem;
	}
	.m-title>span{
		position: relative;
	    display: inline-block;
	    padding: 0 .15rem;
	    color: #999;
	}
	.m-title>span:before,.m-title>span:after{
		position: absolute;
	    content: "";
	    top: 50%;
	    width: .35rem;
	    height: 1px;
	    background-color: #dedede;
	    transform: translateY(-50%);
	    -webkit-transform: translateY(-50%);
	}
	.m-title>span:before{
		right: -.35rem;
	}
	.m-title>span:after{
		left: -.35rem;
	}
	.m-title>span>i{
	    position: absolute;
	    display: inline-block;
	    width: .05rem;
	    height: .05rem;
	    border-radius: 50%;
	    background: #dedede;
	    top: 50%;
	    transform: translateY(-50%);
	    -webkit-transform: translateY(-50%);
	    z-index: 11;
	}
	.m-title>span>i:nth-of-type(1){
		left: -.02rem;
	}
	.m-title>span>i:nth-of-type(2){
		right: -.02rem;
	}
	
	#detail-wrap .picDet{
		height: .38rem;
		padding: .1rem 0 .1rem .12rem;
	    border-bottom: 1px solid hsla(0,0%,87%,.5);
	    color: #292929;
    	margin-bottom: .08rem;
    	font-size: .13rem;
	}
	#detail-wrap .picList{
		padding: 0 .12rem;
	}
	#detail-wrap .name{
		padding: .2rem 0 .15rem;
		text-align: center;
	}
	#detail-wrap .name span{
		position: relative;
	    display: inline-block;
	    line-height: .18rem;
	    font-size: .13rem;
	    padding: 0 .2rem;
	    color: #646464;
	    font-family: PingFangSC-Medium;
	}
	#detail-wrap .name span:before,#detail-wrap .name span:after{
		position: absolute;
		content: "";
	    right: -.25rem;
	    top: .09rem;
	    width: .35rem;
	    height: 1px;
	    background-color: #e95656;
	}
	#detail-wrap .name span:after{
	    left: -.25rem;
	}
	#detail-wrap .text{
		margin-bottom: .1rem;
	    word-break: break-all;
    	color: #292929;
	}
	#detail-wrap .pic-div>img{
		width: 100%;
	}
	#detail-wrap .keyItem{
		display: flex;
		margin-bottom: .1rem;
	}
	#detail-wrap .keyList .key{
	    margin-left: .2rem;
	    width: .7rem;
	    overflow: hidden;
	    padding-right: .1rem;
	    color: #9b9b9b;
	    line-height: .18rem;
	}
	#detail-wrap .keyList .value{
		flex: 1;
	    overflow: hidden;
	    line-height: .18rem;
	    word-break: break-all;
	    color: #383838;
	}
	/*详情介绍结束*/
	
	/*假一赔十开始*/
	#one-ten{
		margin-top: .1rem;
	}
	#one-ten>img{
		width: 100%;
	}
	/*假一赔十结束*/
	
	/*猜你喜欢开始*/
	#like{
	    padding: 0 .1rem .1rem!important;
	}
	/*猜你喜欢结束*/
	
	/*加入购物车或立即购买开始*/
	#operate{
		position: fixed;
		width: 100%;
	    bottom: 0;
	    left: 0;
	    height: .45rem;
	    background-color: #fff;
	    z-index: 999;
	}
	#operate>.fl{
	    width: 40%;
	    height: .44rem;
	    display: flex;
	    display: -webkit-flex;
	    border-top: 1px solid #dedede;
	}
	#operate>.fl>span{
		flex: 1;
	    text-align: center;
	    padding-top: .06rem;
	}
	#operate>.fl>span>i{
		display: inline-block;
	}
	#operate>.fl>span>i:nth-of-type(1){
		width: .16rem;
		height: .16rem;
		background: url(../../static/img/下载.png);
		background-size: cover;
	}
	#operate>.fl>span>i:nth-of-type(2){
		width: 100%;
		color: #999999;
		padding-top: .01rem;
	}
	#operate>.fr{
	    width: 60%;
	    display: flex;
	    display: -webkit-flex;
	    font-size: 0;
	}
	#operate>.fr>a{
	    flex: 1;
    	-webkit-flex: 1;
	    color: #fff;
	    font-size: .15rem;
	    text-align: center;
	    line-height: .45rem;
	}
	#operate>.fr>a:nth-of-type(1){
	    background-color: rgba(242,143,37,.8);
	}
	#operate>.fr>a:nth-of-type(2){
	    background-color: #c33;
	}
	/*加入购物车或立即购买结束*/
	
	/*点击加入购物车弹出的确认框开始*/
	#confAdd .mask{
	    position: fixed;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    background-color: rgba(0,0,0,.6);
	    z-index: 1111;
	}
	#confAdd .show{
	    position: fixed;
	    width: 100%;
	    left: 0;
	    bottom: 0;
	    background: #fff;
	    z-index: 11111;
	}
	#confAdd .cont{
		position: relative;
	    width: 100%;
	    padding: .12rem .15rem 0;
	    background: #fff;
	}
	#confAdd .info{
		position: relative;
	    width: 100%;
	    min-height: 1rem;
	    padding-bottom: .1rem;
	}
	#confAdd .info>img{
	    width: 1.2rem;
	    height: 1.2rem;
	    border: .01rem solid #d8d8d8;
	    position: absolute;
	    top: -.35rem;
	    left: 0;
	    border-radius: .02rem;
	}
	#confAdd .info>.desc{
		padding-left: 1.3rem;
	} 
	#confAdd .info .pri{
	    font-size: .18rem;
	    color: #c33;
	    line-height: .26rem;
	    height: .26rem;
	    font-family: STHeitiSC-Medium;
	    margin-bottom: .03rem;
	}
	#confAdd .info .pri>span{
		font-size: .13rem;
	}
	#confAdd .desc>span{
		color: #646464;
	}
	#confAdd .amount{
		color: #646464;
	    padding: .13rem 0;
	    margin-bottom: .35rem;
	    border-top: .01rem solid #dedede;
	    border-bottom: .01rem solid #dedede;
	}
	#confAdd .amount>.text{
		display: inline-block;
		width: .56rem;
		height: .3rem;
		line-height: .3rem;
	}
	#confAdd .num>input{
	    display: inline-block;
	    width: .3rem;
	    height: .3rem;
	    line-height: .3rem;
	    font-size: .16rem;
	    text-align: center;
	    color: #646464;
	    background-color: #e8e8e8;
	    border: none;
	    border-radius: .03rem;
	}
	#confAdd .num>span{
	    display: inline-block;
	    width: .37rem;
	    height: .3rem;
	    line-height: .3rem;
	    text-align: center;
	}
	#ok{
	    width: 100%;
	    height: .45rem;
	    line-height: .45rem;
	    text-align: center;
	    color: #fff;
	    background: #c33;
	    font-size: .16rem;
	}
	#close{
		position: absolute;
	    display: block;
	    width: .26rem;
	    height: .26rem;
	    top: .05rem;
	    right: .1rem;
	    background: url(../../static/img/close.png) 50% no-repeat;
	    background-size: .16rem .16rem;
	}
	/*点击加入购物车弹出的确认框结束*/
	
</style>