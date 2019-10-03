<template>
	<view>
		<view class="tu1"><image style="width: 670rpx;height: 300rpx;" src="../../static/youxi/btn_5jf.png" mode="aspectFit" @tap="jifenchang5"></image></view>
		<view class="tu1"><image style="width: 670rpx;height: 300rpx;" src="../../static/youxi/btn_50jf.png" mode="aspectFit"></image></view>
		<view class="tu1"><image style="width: 670rpx;height: 300rpx;" src="../../static/youxi/btn_500jf.png" mode="aspectFit"></image></view>
		<view class="zi1" @tap="togglePopup" >游戏规则</view>
		<uni-popup :show="show">
			<view class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;" ><image @tap="togglePopup1" style="width: 75rpx;height: 75rpx; margin-bottom: -45rpx; margin-right: -8rpx;" src="../../static/youxiguize/icon_gb_yxgz.png" mode="aspectFit"></image></view>
			<view class="tan1">
				<view class="guize1 " :style="{ backgroundImage: 'url(' + imageURL + ')' }">
					<view class="guize2">游戏规则</view>
					<view class="guize3">游戏规则内容游戏规则内容游戏规则内容
					游戏规则内容游戏规则内容游戏规则内容
					游戏规则内容游戏规则内容游戏规则内容
					游戏规则内容游戏规则内容游戏规则内容
					游戏规则内容游戏规则内容游戏规则内容
					游戏规则内容游戏规则内容游戏规则内容</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup,
			
		},
		data() {
			return {
				show: false,
				imageURL: '/static/youxiguize/img_ts_yxgz.png',
			}
		},
		methods: {
			togglePopup() {
					this.show = true
				},
				togglePopup1() {
						this.show = false
				},
				jifenchang5(){
					uni.reLaunch({
						url:'../hengpingyouxi/hengpingyouxi'
					})
				}
		}
	}
</script>

<style>
.tu1{
	margin-top: 25rpx;
	align-items: center;
	margin-left: 45rpx;
}
.zi1{
	margin-left: 550rpx;
	margin-right: 65rpx;
	margin-top: 25rpx;
	color: #89633B;
	font-size: 35rpx;
	border-bottom: 1rpx solid #89633B;
}
.guize1{
	background-size: 100% 100%;
	width: 580rpx;
	height: 500rpx;
}
.guanbi{
	align-items: center;
}
.guize2{
	padding-top: 40rpx;
	font-size: 35rpx;
	color: #FFFFFF;
}
.guize3{
	color: #481b19;
	font-size: 26rpx;
	padding-top: 55rpx;
	padding-left: 55rpx;
	padding-right: 55rpx;
	
}
</style>
