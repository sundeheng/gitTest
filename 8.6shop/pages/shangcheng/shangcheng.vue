<template>
	<view class="content">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
			@scroll="scroll">
		<view id="demo3" class="scroll-view-item  uni-flex uni-row">
			<view class="ceng6" v-for="(item, index) in list" :key="item.id">
			<view class="ceng4" v-for="(item, index) in list1" :key="item.id">
				<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
				<view class="zi2">翡翠手镯</view>
				<view class="zi3">2000积分</view>
				<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
				<view class="bt" @tap="modal1">兑换</view>
				</view>
			</view>
				</view>
				</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
			data() {
				return {
					list:[{id:1},{id:2},{id:3}],
					list1:[{id:1},{id:2},{id:3},{id:4},{id:5}],
					background: ['color1', 'color2', 'color3'],
					indicatorDots: true,
					autoplay: true,
					interval: 2000,
					duration: 500,
					scrollTop: 0,
					old: {
						scrollTop: 0
					},
					imageURLX: '/static/shouye/xiaot.png',
				}
			},
			methods: {
				upper: function(e) {
					console.log(e)
				},
				lower: function(e) {
					console.log(e)
				},
				scroll: function(e) {
					console.log(e)
					this.old.scrollTop = e.detail.scrollTop
				},
				goTop: function(e) {
					// 解决view层不同步的问题
					this.scrollTop = this.old.scrollTop
					this.$nextTick(function() {
						this.scrollTop = 0
					});
					uni.showToast({
						icon:"none",
						title:"纵向滚动 scrollTop 值已被修改为 0"
					})
				},
				modal1: function(e){
					uni.showModal({
						content:"您的积分不足!请兑换\n其他商品...",
						confirmColor: "#87572C",
						cancelColor:"#939393"
					})
				}
	/* 			changeIndicatorDots(e) {
					this.indicatorDots = !this.indicatorDots
				}, */
	/* 			changeAutoplay(e) {
					this.autoplay = !this.autoplay
				}, */
	/* 			intervalChange(e) {
					this.interval = e.target.value
				}, */
	/* 			durationChange(e) {
					this.duration = e.target.value
				} */
			}
		}
</script>

<style>
	.scroll-Y {
		/* height: 1334rpx; */
	}
	.ceng6{
		margin-left: 17rpx;
	}
	.ceng4{
		margin-top: 20rpx;
		/* margin-left: 17rpx; */
		height: 300rpx;
		width: 220rpx;
		border: 5rpx solid #F7F7F7;
		border-radius: 10rpx;
	}
	.scroll-view-item {
		height: 1334rpx;
	}
	.xiaotu{
		height: 165rpx;
		width: 220rpx;
		background-size: 100% 100%;
	}
	.bt{
		border-radius: 10rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		font-size: 20rpx;
		line-height: 32rpx;
		color: #FFFFFF;
		background-color: #896744;
	}
	.zi2{
		font-size: 25rpx;
		color: #000000;
		margin-top: 10rpx;
		text-align: center;/* 居中 */
	}
	.zi3{
		font-size: 20rpx;
		color: #896744;
		text-align: center;/* 居中 */
	}
</style>
