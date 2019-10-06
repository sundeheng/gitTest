<template>
	<view>
		<swiper class="" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="guanggaowei" :style="{ backgroundImage: 'url(' + imageURLa1 + ')' }"></view>
			</swiper-item>
			<swiper-item>
				<view class="guanggaowei" :style="{ backgroundImage: 'url(' + imageURLa2 + ')' }"></view>
			</swiper-item>
			<swiper-item>
				<view class="guanggaowei" :style="{ backgroundImage: 'url(' + imageURLa3 + ')' }"></view>
			</swiper-item>
		</swiper>
		<view class="uni-flex uni-row" style="margin-top: 15rpx;">
			<view class="shu"></view>
			<view class="jiangpinchi">奖品池</view>
		</view>
		<view class="fengexian1"></view>
		<view class="uni-flex uni-row" style="margin-top: 20rpx;">
			<view class="">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" @scrolltoupper="upper" @scrolltolower="lower"
			@scroll="scroll" show-scrollbar="true">
				<view class="choujiangdatu" :style="{ backgroundImage: 'url(' + imageURL + ')' }">
					<view class="choujiangjilu" @tap="choujiangjilu"></view>
					<view class="lijichoujiang" @tap="lijichoujiang" :style="{ backgroundImage: 'url(' + imageURLBUY + ')' }"></view>
				</view>
				<view class="hengxiang uni-flex uni-row hengxiang">
					<view class="biankuang">
						<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
						<view class="zi2">翡翠手镯</view>
						<view class="zi3">2000积分</view>
						<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
						<view class="bt" @tap="modal1">兑换</view>
						</view>
					</view>
					<view class="biankuang">
						<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
						<view class="zi2">翡翠手镯</view>
						<view class="zi3">2000积分</view>
						<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
						<view class="bt" @tap="modal1">兑换</view>
						</view>
					</view>
				</view>
				<view class="hengxiang uni-flex uni-row hengxiang">
					<view class="biankuang">
						<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
						<view class="zi2">翡翠手镯</view>
						<view class="zi3">2000积分</view>
						<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
						<view class="bt" @tap="modal1">兑换</view>
						</view>
					</view>
					<view class="biankuang">
						<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
						<view class="zi2">翡翠手镯</view>
						<view class="zi3">2000积分</view>
						<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
						<view class="bt" @tap="modal1">兑换</view>
						</view>
					</view>
				</view>
				<view class="hengxiang uni-flex uni-row hengxiang">
					<view class="biankuang">
						<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
						<view class="zi2">翡翠手镯</view>
						<view class="zi3">2000积分</view>
						<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
						<view class="bt" @tap="modal1">兑换</view>
						</view>
					</view>
					<view class="biankuang">
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
			<view style="margin-left: 20rpx;">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" @scrolltoupper="upper" @scrolltolower="lower"
				@scroll="scroll" show-scrollbar="true">
				<view class="biankuang">
					<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
					<view class="zi2">翡翠手镯</view>
					<view class="zi3">2000积分</view>
					<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
					<view class="bt" @tap="modal1">兑换</view>
					</view>
				</view>
				<view class="biankuang" style="margin-top: 15rpx;">
					<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
					<view class="zi2">翡翠手镯</view>
					<view class="zi3">2000积分</view>
					<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
					<view class="bt" @tap="modal1">兑换</view>
					</view>
				</view>
				<view class="biankuang" style="margin-top: 15rpx;">
					<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
					<view class="zi2">翡翠手镯</view>
					<view class="zi3">2000积分</view>
					<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
					<view class="bt" @tap="modal1">兑换</view>
					</view>
				</view>
				<view class="biankuang" style="margin-top: 15rpx;">
					<view class="xiaotu" :style="{ backgroundImage: 'url(' + imageURLX + ')' }"></view>
					<view class="zi2">翡翠手镯</view>
					<view class="zi3">2000积分</view>
					<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
					<view class="bt" @tap="modal1">兑换</view>
					</view>
				</view>
				</scroll-view>
			</view>
		</view>
			<view class="uni-tip uni-flex uni-row" v-if="choujiangtankuang">
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
				<image class="guanbi" src="../../static/shouye/guanbi.png" mode="aspectFit" @tap="guanbitankuang"></image>
			</view>
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
				choujiangtankuang: false,
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
			lijichoujiang(){
				this.choujiangtankuang = true;
			},
			guanbitankuang(){
				this.choujiangtankuang = false;
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
		}
	}
</script>

<style>
	.guanggaowei{
		background-size: 100% 100%;
		height: 350rpx;
	}
	.shu{
		height: 35rpx;
		width: 7rpx;
		margin-left: 30rpx;
		background-color: #896744;
		border-radius: 10rpx;
		margin-top: 10rpx;
	}
	.jiangpinchi{
		font-size: 30rpx;
		margin-left: 15rpx;
	}
	.fengexian1{
		height: 20rpx;
		background-color: #F7F7F7;
	}
	.choujiangdatu{
		height: 450rpx;
		width: 490rpx;
		background-size: 100% 100%;
	}
	.lijichoujiang{
		height: 245rpx;
		width: 85rpx;
		background-size: 100% 100%;
		position: absolute;
		top: 6%;
		left: 80%;
	}
	.choujiangjilu{
		height: 30rpx;
		width: 85rpx;
		position: absolute;
		top: 1.8%;
		left: 79%;
	}
	.hengxiang{
		margin-top: 15rpx;
		margin-left: 25rpx;
	}
	.biankuang{
		height: 300rpx;
		border: 5rpx solid #F7F7F7;
		border-radius: 10rpx;
	}
	.xiaotu{
		height: 165rpx;
		width: 220rpx;
		background-size: 100% 100%;
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
	.uni-tip {
		width: 600rpx;
		height: 460rpx;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10rpx;
		align-items: center;
		position: fixed;
		left: 10%;
		top: 30%;
		z-index: 998;
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
		text-align: center;
		width: 178rpx;
		background-color: #8a5421;
		border-radius: 10rpx;
		font-size: 25rpx;
		color: #FFFFFF;
	}
</style>
