import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		goodsList: []
	},
	mutations: {
		goods_addM(state, data){
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