<template>
	<view class="dimian">
		<view class="xian1"></view>
		<image src="../../static/logo.png" class="TouXiang"></image>
			<view class="zu">
				<text class="ZiZuo">昵称</text>
				<text class="ZiYou" style="margin-left: 447rpx;">alexandar</text>
				<image src="../../static/YouJianTou3.png" class="YouJianTou" style="margin-left: 22rpx;"></image>
			</view>
			<view class="xian"></view>
			<view class="zu2">
				<text class="ZiZuo">性别</text>
				<text class="ZiYou" style="margin-left: 534rpx;" >男</text>
				<image src="../../static/YouJianTou3.png" class="YouJianTou" style="margin-left: 22rpx;"></image>
			</view>
			<view class="xian"></view>
			<view class="zu2">
				<text class="ZiZuo">修改密码</text>
				<image src="../../static/YouJianTou3.png" class="YouJianTou" style="margin-left: 522rpx;"></image>
			</view>
			<view class="xian"></view>
			<view class="zu2">
				<text class="ZiZuo">手机号</text>
				<text class="ZiYou" style="margin-left: 379rpx;">12345678910</text>
				<image src="../../static/YouJianTou3.png" class="YouJianTou" style="margin-left: 12rpx;"></image>
			</view>
			<view class="xian"></view>
			<view class="zu2">
				<text class="ZiZuo">城市</text>
				<text class="ZiYou" style="margin-left: 425rpx;">江苏省徐州市</text>
				<image src="../../static/YouJianTou3.png" class="YouJianTou" style="margin-left: 12rpx;"></image>
			</view>
			<view class="xian"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.dimian {
		width: 750rpx;
		height: 1334rpx;
	}
.xian1 {
	width: 750rpx;
	height: 1rpx;
	background-color: #e5e5e5;
	border-radius: 1rpx;
}
.xian {
	margin-left: 30rpx;
	width: 691rpx;
	height: 1rpx;
	background-color: #e5e5e5;
}
.TouXiang {
	margin-top: 40rpx;
	margin-left: 300rpx;
	width: 140rpx;
	height: 140rpx;
}
.YouJianTou {
	margin-right: 30rpx;
	width: 11rpx;
	height: 20rpx;
}
.zu {
	margin-left: 30rpx;
	margin-top: 41rpx;
}
.zu2 {
	margin-left: 30rpx;
	margin-top: 30rpx;
}
.ZiZuo {
	width: 57rpx;
	height: 28rpx;
	font-family: PingFang-SC-Regular;
	font-size: 30rpx;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0rpx;
	color: #191919;
}
.ZiYou {
	width: 153rpx;
	height: 19rpx;
	font-family: PingFang-SC-Regular;
	font-size: 26rpx;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0rpx;
	color: #464646;
}
</style>
