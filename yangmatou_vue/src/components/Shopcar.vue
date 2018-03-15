<template>
	<div id="shopcar">
		<div id="head">
			<div>购物车 ( <span>3</span> ) </div>
			<router-link to="/">首页</router-link>
			<router-link to="my">我的</router-link>
		</div>
		<div class="notice">海外买手会根据现行国家政策要求，通过不同的物流方式分别发货，其实对你没有影响啦~</div>
		
		<!--商品列表开始-->
		<div id="shop_wrap">
			
			<!--一件商品start-->
			<div class="list"  v-for="item in $store.state.goodsList">
				<div class="seller">
					<input type="checkbox" />
					<img src="../../static/img/413235_5d182d0f907344a6977f04e500b642e8_m.jpg" alt="" />
					<div class="sInfo">
						<p>小枫叶Sunny</p>
						<p>
							<img src="../../static/img/America.png" alt="" />
							<span class="country">美国</span>
						</p>
					</div>
				</div>
				<div class="goods">
					<input type="checkbox" />
					<img :src="item.goodsImg" alt="" />
					<div class="gInfo">
						<div>
							<span>包邮包税</span>
							<span>{{item.goodsName}}</span>
						</div>
						<p><img src="../../static/img/you.png" alt="" />官方直邮</p>
					</div>
					<div class="operation">
						<div class="price">{{item.goodsPrice}}</div>
						<div class="update">
							<input type="text" value="-" id="minus" disabled/>
							<span ref="goodsNum">1</span>
							<input type="text" value="+" id="plus" disabled/>						
						</div>
						<img src="../../static/img/del.png" alt="" />
					</div>
				</div>
			</div>
			<!--一件商品end-->
			
		</div>
		<!--商品列表结束-->
		
		<!--去结算开始-->
		<div id="operate">
			<div class="l">
				<span>
					<input class="fl" type="checkbox" />
					<i>全选</i>
				</span>
			</div>
			<div class="desc">
				<p> <b> 总价 : </b> ￥ <span>0</span> </p>
				<p>(不含运费)</p>
			</div>
			<div class="r">
				<a href="javascript:;">去结算  </a>
			</div>
		</div>
		<!--去结算结束-->
		
		
		<!--猜你喜欢开始-->
		<Like />
		<!--猜你喜欢结束-->
		
	</div>
</template>

<script>
	import Like from '@/components/Like';
	export default{
		name: "Shopcar",
		data(){
			return {
			}
		},
		components: {
			Like
		}
	}
</script>

<style scoped>
	/*头部开始*/
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
	/*头部结束*/
	
	.notice{
	    width: 100%;
	    padding: .1rem;
	    overflow: hidden;
	    line-height: .18rem;
	    color: #9b9b9b;
	}
	
	/*商品列表开始*/
	#shop_wrap{
		
	}
	#shop_wrap .list{
		position: relative;
	    width: 100%;
	    overflow: hidden;
	    margin-bottom: .1rem;
	    background: #fff;
	}
	#shop_wrap .seller{
		display: flex;
		justify-content: space-between;
		align-items: center;
	    width: 100%;
	    overflow: hidden;
	    padding: .05rem .1rem;
	    height: .5rem;
	    border-bottom: .01rem solid #dedede;
	}
	#shop_wrap .seller>img{
		width: .38rem;
		height: .38rem;
		border: 1px solid #dedede;
		border-radius: 50%;
		margin-left: .1rem;
	}
	#shop_wrap .seller .sInfo{
		display: flex;
		flex-direction: column;
		flex: 1;
		color: #646464;
		padding-left: .12rem;
	}
	#shop_wrap .seller .sInfo img{
		width: .12rem;
		height: .12rem;
	}
	#shop_wrap .goods{
		display: flex;
		/*align-items: center;*/
		justify-content: space-between;
		padding: .14rem .1rem .1rem;
	}
	#shop_wrap .goods>input{
		margin-top: .12rem;
	}
	#shop_wrap .goods>img{
		width: .7rem;
		height: .7rem;
		margin: 0 .1rem;
	}
	#shop_wrap .goods .gInfo{
		flex: 1;
	}
	#shop_wrap .gInfo>div{
	    width: 100%;
	    line-height: .16rem;
	    padding-right: .08rem;
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
	#shop_wrap .gInfo span:nth-of-type(1){
	    display: inline-block;
	    border: .01rem solid #c33;
	    color: #c33;
	    padding: 0 .02rem .01rem;
	    border-radius: .04rem;
	    margin-right: .03rem;
	    line-height: .16rem;
	    vertical-align: middle;
	    transform: scale(.9);
	}
	#shop_wrap .gInfo span:nth-of-type(2){
	    color: #292929;
	    vertical-align: middle;
	}
	#shop_wrap .gInfo>p{
		color: #646464;
		margin-top: .37rem;
	}
	#shop_wrap .gInfo>p>img{
		float: left;
		width: .12rem;
		height: .12rem;
		margin: .03rem;
	}
	#shop_wrap .goods .operation{
		width: .8rem;
	}
	#shop_wrap .goods .operation input{
		float: left;
		display: inline-block;
	    width: .22rem;
	    border: .01rem solid #cecece;
	    line-height: .2rem;
	    text-align: center;
	    color: #cdcdcd;
	    font-size: .18rem;
	    background-color: #fff;
	}
	#shop_wrap .goods .operation span{
		float: left;
	    width: .3rem;
	    line-height: .2rem;
	    color: #383838;
	    border-top: .01rem solid #cecece;
	    border-bottom: .01rem solid #cecece;
	    text-align: center;
	}
	#shop_wrap .goods .price{
		color: #CC3333;
		font-size: .16rem;
		text-align: right;
		padding-right: .08rem;
	}
	#shop_wrap .goods .update{
		margin: .1rem 0;
		height: .22rem;
	}
	#shop_wrap .goods .operation>img{
		float: right;
		margin-right: .08rem;
		width: .14rem;
		height: .15rem;
	}
	/*商品列表结束*/
	
	/*去结算开始*/
	#operate{
		display: flex;
		position: fixed;
		width: 100%;
	    bottom: 0;
	    left: 0;
	    height: .5rem;
	    background-color: #fff;
	    z-index: 999;
	    color: #646464;
	}
	#operate .l{
		width: 1rem;
		text-align: center;
		padding: .1rem;
		line-height: .3rem;
	}
	#operate .l input{
		margin-left: .1rem;
		margin-top: .1rem;
	}
	#operate .l i{
		font-size: .15rem;
		margin-left: .04rem;
	}
	#operate .desc{
		flex: 1;
		padding: .08rem .1rem .6rem;
	}
	#operate .desc>p{
		text-align: right;
	}
	#operate .desc>p:nth-of-type(1){
		color: #c33;
		font-size: .15rem;
	}
	#operate .desc b{
		color: #383838;
	}
	#operate .desc span{
	}
	#operate .r>a{
		display: inline-block;
		width: 1.12rem;
		height: 100%;
	    color: #fff;
	    font-size: .15rem;
	    text-align: center;
	    line-height: .5rem;
	    background-color: #9b9b9b;
	}
	/*去结算结束*/
	
	
	
</style>