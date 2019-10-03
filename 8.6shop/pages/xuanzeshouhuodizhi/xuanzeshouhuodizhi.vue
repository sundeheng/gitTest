<template>
	<view style="background-color: #F7F7F7; height: 1334rpx;">
		<view class="di1">
			<view class="hang1 uni-flex uni-row">
				<text class="zi1">刘夏</text>
				<text class="zi2">12345678910</text>
			</view>
			<text class="zi3">江苏省徐州市铜山区北京路111号</text>
			<view class="hang2"></view>
			<view class="hang3 uni-flex uni-row">
				<radio class="tu1" value="r2" :checked="check0" color="#896744" style="transform:scale(0.7); margin-top: -15rpx;" @tap="jizhumima"/>
				<text class="zi4" @tap="jizhumima">默认地址</text>
				<image style="margin-left: 300rpx;" class="tu1" src="../../static/xuanzeshouhuodizhi/icon_bj_shdz.png" mode="aspectFit"></image>
				<text class="zi4">编辑</text>
				<image style="margin-left: 20rpx;" class="tu1" src="../../static/xuanzeshouhuodizhi/icon_sc_shdz.png" mode="aspectFit"></image>
				<text class="zi4">删除</text>
			</view>
		</view>

		<view class="di1" style="margin-top: 20rpx;">
			<view class="hang1 uni-flex uni-row">
				<text class="zi1">刘夏</text>
				<text class="zi2">12345678910</text>
			</view>
			<text class="zi3">江苏省徐州市铜山区北京路111号</text>
			<view class="hang2"></view>
			<view class="hang3 uni-flex uni-row">
				<radio class="tu1"  value="r2" :checked="check1" color="#896744" style="transform:scale(0.7);margin-top: -15rpx;" @tap="jizhumima1"/>
				<text class="zi4" @tap="jizhumima1">默认地址</text>
				<image style="margin-left: 300rpx;" class="tu1" src="../../static/xuanzeshouhuodizhi/icon_bj_shdz.png" mode="aspectFit"></image>
				<text class="zi4">编辑</text>
				<image style="margin-left: 20rpx;" class="tu1" src="../../static/xuanzeshouhuodizhi/icon_sc_shdz.png" mode="aspectFit"></image>
				<text class="zi4">删除</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			check0: true,
			check1: false,
		};
	},
	onNavigationBarButtonTap(e) {
		uni.navigateTo({
			url: '../tianjiashouhuodizhi/tianjiashouhuodizhi'
		});
	},
	methods: {
	jizhumima() {
		if((this.check1 == false)&& (this.check0 == true)){
			this.check1 = false;
			this.check0 = true;
		}else if((this.check0 == false)&& (this.check1 == true)) {
			this.check1 = false;
			this.check0 = true;
		}
	},
	jizhumima1() {
		if((this.check0 == false)&&(this.check1 == true)){
			this.check0 = false;
			this.check1 = true;
		}else if((this.check1 == false)&&(this.check0 == true)) {
			this.check0 = false;
			this.check1 = true;
		}
	}
	}
};
</script>

<style>
.di1 {
	height: 205rpx;
	background-color: #ffffff;
}
.hang1 {
	padding-top: 25rpx;
	margin-left: 30rpx;
	margin-right: 30rpx;
}
.zi1 {
	font-size: 30rpx;
	color: #000000;
}
.zi2 {
	font-size: 30rpx;
	color: #000000;
	margin-left: 75rpx;
}
.zi3 {
	margin-left: 30rpx;
	font-size: 27rpx;
	color: #000000;
}
.hang2 {
	height: 3rpx;
	background-color: #f7f7f7;
	margin-left: 30rpx;
	margin-right: 30rpx;
}
.hang3 {
	height: 75rpx;
	margin-left: 30rpx;
	margin-right: 30rpx;
	align-items: center;
}
.tu1 {
	width: 35rpx;
	height: 35rpx;
}
.zi4 {
	margin-left: 15rpx;
	font-size: 25rpx;
	color: #929292;
}
</style>
