<template>
	<view>
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item" :style="{ backgroundImage: 'url(' + imageURLa1 + ')' }"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item" :style="{ backgroundImage: 'url(' + imageURLa2 + ')' }"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item" :style="{ backgroundImage: 'url(' + imageURLa3 + ')' }"></view>
				</swiper-item>
			</swiper>
		<view class="ceng1 uni-flex uni-row ">
			<view class="shu1"></view>
			<view class="zi1">奖品池</view>
		</view>
		<view class="ceng2"></view>
		<view class="uni-flex uni-row">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
				@scroll="scroll" show-scrollbar="true">
					<view id="demo1" class="scroll-view-item1" :style="{ backgroundImage: 'url(' + imageURL + ')' }">
						<navigator url="../choujiangjilu/choujiangjilu" style="width: 100rpx;line-height: 50rpx; margin-left: 370rpx; font-size: 1rpx;color: #FFFFFF;">.</navigator>
						<view class="ljcj" @tap="togglePopup('center', 'tip')" :style="{ backgroundImage: 'url(' + imageURLBUY + ')' }"></view>
					</view>
					<view class="">
						<view id="demo2" class="scroll-view-item  uni-flex uni-row">
							<view class="ceng4">
								<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
								<view class="zi2">翡翠手镯</view>
								<view class="zi3">2000积分</view>
								<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
								<view class="bt" @tap="modal1">兑换</view>
								</view>
							</view>
							<view class="ceng4">
								<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
								<view class="zi2">翡翠手镯</view>
								<view class="zi3">2000积分</view>
								<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
								<view class="bt" @tap="modal1">兑换</view>
								</view>
							</view>
						</view>
						<view id="demo3" class="scroll-view-item  uni-flex uni-row">
							<view class="ceng4">
								<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
								<view class="zi2">翡翠手镯</view>
								<view class="zi3">2000积分</view>
								<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
								<view class="bt" @tap="modal1">兑换</view>
								</view>
							</view>
							<view class="ceng4">
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
			
			<view class="ceng5">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
				@scroll="scroll" show-scrollbar="true">
					
						<view id="demo2" class="scroll-view-item ">
							<view class="ceng4">
								<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
								<view class="zi2">翡翠手镯</view>
								<view class="zi3">2000积分</view>
								<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
								<view class="bt" @tap="modal1">兑换</view>
								</view>
							</view>
						</view>
						<view id="demo3" class="scroll-view-item ">
							<view class="ceng4">
								<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
								<view class="zi2">翡翠手镯</view>
								<view class="zi3">2000积分</view>
								<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
								<view class="bt" @tap="modal1">兑换</view>
								</view>
							</view>
						</view>
						<view id="demo2" class="scroll-view-item ">
							<view class="ceng4">
								<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
								<view class="zi2">翡翠手镯</view>
								<view class="zi3">2000积分</view>
								<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
								<view class="bt" @tap="modal1">兑换</view>
								</view>
							</view>
						</view>
						<view id="demo3" class="scroll-view-item ">
							<view class="ceng4">
								<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
								<view class="zi2">翡翠手镯</view>
								<view class="zi3">2000积分</view>
								<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
								<view class="bt" @tap="modal1">兑换</view>
								</view>
							</view>
						</view>
				</scroll-view>
			</view>
			<!-- <view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
				@scroll="scroll">
					<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
				</scroll-view>
			</view> -->
		</view>
		<!-- <view class="swiper-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">指示点</view>
				<switch :checked="indicatorDots" @change="changeIndicatorDots" />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">自动播放</view>
				<switch :checked="autoplay" @change="changeAutoplay" />
			</view>
		</view> -->

		<!-- <view class="uni-padding-wrap">
			<view class="uni-common-mt">
				<text>幻灯片切换时长(ms)</text>
				<text class="info">{{duration}}</text>
			</view>
			<slider @change="durationChange" :value="duration" min="500" max="2000" />
			<view class="uni-common-mt">
				<text>自动播放间隔时长(ms)</text>
				<text class="info">{{interval}}</text>
			</view>
			<slider @change="intervalChange" :value="interval" min="2000" max="10000" />
		</view> -->
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false" @change="change">
			<view class="uni-tip uni-flex uni-row" >
				<view class="zhongjian">
					<view class="zi5" >恭喜你,抽到XXX奖品!</view>
					<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
						<view class="zi6" >领取的商品可在</view>
						<!-- <text class="zi6" style="color:#87572C;" >[抽奖记录]</text> -->
						<view class="zi6" style="color:#87572C;" @tap="choujiangjilu">[抽奖记录]</view>
						<view class="zi6" >中查看</view>
					</view>
					<image src="../../static/shouye/xiaot.png" mode="aspectFit" style="width: 410rpx;height: 230rpx;margin-top: 10rpx;"></image>
					<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
						<view  class="bt1" @tap="xuanzedizhi">立即领取</view>
					</view>
				</view>
				<image class="guanbi" src="../../static/shouye/guanbi.png" mode="aspectFit" @tap="cancel('tip')"></image>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				show: false,
				type: '',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				scrollTop: 0,old: {
					scrollTop: 0
				},
				imageURL: '/static/shouye/dat.png',
				imageURLX: '/static/shouye/xiaot.png',
				imageURLBUY: '/static/shouye/icon_ljcj_sy.png',
				imageURLa1: '/static/shouye/ad-02.jpg',
				imageURLa2: '/static/shouye/ad-03.jpg',
				imageURLa3: '/static/shouye/ad-04.jpg',
			}
		},
		methods: {
			choujiangjilu() {
				uni.navigateTo({
					url:'../choujiangjilu/choujiangjilu'
				})
			},
			xuanzedizhi() {
				uni.navigateTo({
					url:'../xuanzeshouhuodizhi/xuanzeshouhuodizhi'
				})
			},
			togglePopup(type, open) {
				this.type = type
					if (open === 'tip') {
						this.show = true
					} else {
						this.$refs[open].open()
					}
				},
				cancel(type) {
					if (type === 'tip') {
						this.show = false
						return
					}
					this.$refs[type].close()
				},
				change(e) {
					//console.log(e.show)
				},
			upper: function(e) {
				//console.log(e)
			},
			lower: function(e) {
				//console.log(e)
			},
			scroll: function(e) {
				//console.log(e)
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
					content:"抱歉,您的积分不足!",
					confirmColor: "#87572C",
					cancelColor:"#939393"
				})
			}
		},
	}
</script>

<style>
/* 	.uni-margin-wrap {
		width:600rpx;
	} */
	.scroll-Y {
		height: 705rpx;
		margin-top: 30rpx;
		width: 490rpx;
	}
	.scroll-view-item {
		height: 330rpx;
	}
	.scroll-view-item1 {
		height: 450rpx;
		width: 490rpx;
		background-size: 100% 100%;
	}
	.ljcj{
		height: 245rpx;
		width: 85rpx;
		background-size: 100% 100%;
		margin-left: 385rpx;
		margin-top: 50rpx;
	}
	.swiper {
		height: 335rpx;
	}
	.swiper-item {
		display: block;
		height: 335rpx;
		line-height: 335rpx;
		text-align: center;
		background-size: 100% 100%;
	}
	.ceng1{
		height: 60rpx;
	}
	.shu1{
		width: 10rpx;
		height: 40rpx;
		margin-top: 15rpx;
		margin-left: 30rpx;
		background-color: #896744;
		border-radius: 10rpx;
	}
	.zi1{
		font-size: 35rpx;
		color: #000000;
		margin-left: 20rpx;
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
	.bt{
		border-radius: 10rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		font-size: 20rpx;
		line-height: 32rpx;
		color: #FFFFFF;
		background-color: #896744;
	}
	.ceng2{
		height: 20rpx;
		background-color: #F7F7F7;
		/* border: 1rpx solid #000000; *//* 粗细 实线 颜色 */
		/* border-radius: 10rpx; *//* 圆角弧度 */
	}
	.ceng4{
		margin-left: 20rpx;
		height: 300rpx;
		width: 220rpx;
		border: 5rpx solid #F7F7F7;
		border-radius: 10rpx;
	}
	.ceng5{
		/* margin-left: 215rpx; */
		position: absolute;
	}
	.xiaotu{
		height: 165rpx;
		width: 220rpx;
		background-size: 100% 100%;
	}
	/* 提示窗口 */
	.uni-tip {
		padding: 15rpx;
		width: 600rpx;
		height: 460rpx;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10rpx;
		align-items: center;
	}
	.zhongjian{
		width: 410rpx;
		margin-left: 85rpx;
		height: 410rpx;
		align-items: center;
		/* background-color: #000000; */
	}
	.guanbi{
		margin-bottom: 400rpx;
		margin-left: 30rpx;
		width: 45rpx;
		height: 45rpx;
	}
	.zi5{
		font-size: 30rpx;
		text-align: center;
		color: #000000;
	}
	.zi6{
		font-size: 25rpx;
		color: #1c1c1c;
	}
	.bt1{
		width: 178rpx;
		background-color: #8a5421;
		border-radius: 10rpx;
		font-size: 25rpx;
		color: #FFFFFF;
		
	}
/* 	.swiper-list {
		margin-top: 40upx;
		margin-bottom: 0;
	} */
	
/* 	.uni-common-mt{
		margin-top:60upx;
		position:relative;
	} */
	
/* 	.info {
		position: absolute;
		right:20upx;
	} */
</style>
