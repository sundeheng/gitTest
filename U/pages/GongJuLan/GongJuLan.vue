<template>
	<view class="dimian">
		<view class="xian1"></view>
		<view class="Zu20">
			<text class="QunFa">群发消息</text>
			<image src="../../static/YouJianTou3.png" class="back"></image>
			<view class="xian"></view>
			<text class="YaoQingMa">邀请码</text>
			<image src="../../static/YouJianTou3.png" class="back"></image>
			<view class="xian"></view>
		</view>
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
.Zu20 {
	margin: 29rpx;
	width: 692rpx;
	height: 147rpx;
}
.QunFa {
	width: 118rpx;
	height: 28rpx;
	font-family: PingFang-SC-Medium;
	font-size: 30rpx;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0rpx;
	color: #191919;
}
.back {
	float: right;
	margin-top: 20rpx;
	width: 25rpx;
	height: 25rpx;
}
.xian {
	width: 691rpx;
	height: 1rpx;
	background-color: #e5e5e5;
}
.YaoQingMa {
	width: 87rpx;
	height: 28rpx;
	font-family: PingFang-SC-Medium;
	font-size: 30rpx;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0rpx;
	color: #191919;
}
</style>
