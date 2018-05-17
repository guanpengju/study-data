import Vue from 'vue'
import App from './App.vue'
//将.vue文件转换成一个对象，显示到jsp页面上
//webpack配置

new Vue({
	el:'#app',
	render:h=>h(App)
	
})