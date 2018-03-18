import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		goodsList: []
	},
	mutations: {
		goods_addM(state, data){
//			console.log( data );
//			console.log( state.goodsList );
			for( var i = 0; i < state.goodsList.length; i++ ){
				if( data.goodsId == state.goodsList[i].goodsId ){
					state.goodsList[i].goodsNum = parseInt(state.goodsList[i].goodsNum) + parseInt(data.goodsNum);
					return;
				}
			}
			state.goodsList.push( data );
		}
	},
	actions: {
		goods_addA({commit}, data){
			commit( 'goods_addM', data )
		}
	}
})

export default store;