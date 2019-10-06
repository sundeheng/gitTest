import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
	var music = uni.createInnerAudioContext();
Vue.prototype.ScanAudio = function(){
	music.src='/static/music/DDZbeijingyinyue.mp3';
	music.play();
	music.loop = true;
}
Vue.prototype.ScanAudio1 = function(){
	music.stop();
}
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
