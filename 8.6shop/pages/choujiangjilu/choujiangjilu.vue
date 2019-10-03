<template>
	<view class="content">
	<view class="ceng2" style="margin-top: 20rpx;">
		<view class="ceng1 uni-flex uni-row ">
			<view style="font-size: 25rpx; color: #989898;">2019-09-28 16:00:00</view>
			<view style="font-size: 25rpx; color: #896477; margin-left: 310rpx;">-500积分</view>
		</view>
		<view class="ceng1 uni-flex uni-row ">
			<view style="font-size: 28rpx; color: #000000;">获得***奖品*1</view>
			<view style="margin-left: 360rpx;"><uni-fav :checked="checkList[0]" :content-text="contentText" star="false" class="favBtn" @click="favClick(0)" bg-color="#8a5421" bg-color-checked="#e5e5e5" fg-color="#ffffff" fg-color-checked="#ffffff" /></view>
		</view>
		<view class="ceng1 uni-flex uni-row ">
		</view>
	</view>
	<view class="ceng2">
		<view class="ceng1 uni-flex uni-row ">
			<view style="font-size: 25rpx; color: #989898;">2019-09-28 16:00:00</view>
			<view style="font-size: 25rpx; color: #896477; margin-left: 310rpx;">-500积分</view>
		</view>
		<view class="ceng1 uni-flex uni-row ">
			<view style="font-size: 28rpx; color: #000000;">获得***奖品*1</view>
			<view style="margin-left: 360rpx;"><uni-fav :checked="checkList[1]" :content-text="contentText" star="false" class="favBtn" @click="favClick(1)" bg-color="#8a5421" bg-color-checked="#e5e5e5" fg-color="#ffffff" fg-color-checked="#ffffff" /></view>
		</view>
		<view class="ceng1 uni-flex uni-row ">
		</view>
	</view>
	</view>
</template>

<script>
	import uniFav from '@/components/uni-fav/uni-fav.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniFav,
			uniNavBar
		},
		data() {
			return {
				checkList: [false, true],
				contentText: {
					contentDefault: '领取',
					contentFav: '已领取'
				}
			}
		},
		methods: {
			favClick(index) {
				
				if(this.checkList[index] == true){
					this.checkList[index] == this.checkList[index];
				}else{
					this.checkList[index] = !this.checkList[index];
				}
				this.$forceUpdate()
			}
		}
	}
</script>

<style>
	.content {
		width: 750rpx;
		height: 1334rpx;
		background-color: #e5e5e5;
	}
	.ceng1{
		margin-left: 30rpx;
		margin-right: 30rpx;
		
	}
	.ceng2 {
		margin-top: 20rpx;
		height: 116rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}
</style>
