<template>
	<view style="background-color: #F7F7F7; height: 1334rpx;">
		<view class="hang"></view>
		<view class="hang1 uni-flex uni-row">
			<text class="zi1">头像</text>
			<image class="tx" src="../../static/wode/touxiang.jpg" mode="aspectFit"></image>
			<image class="yjt" src="../../static/wode/youjiantou4.png" mode="aspectFit"></image>
		</view>
		<view class="hang2 uni-flex uni-row">
			<text class="zi2">手机号</text>
			<text class="zi3">123****1234</text>
			<image class="yjt" src="../../static/wode/youjiantou4.png" mode="aspectFit"></image>
		</view>
		<view class="hang2 uni-flex uni-row">
			<text class="zi2">昵称</text>
			<text class="zi4">扎西德路</text>
			<image class="yjt" src="../../static/wode/youjiantou4.png" mode="aspectFit"></image>
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
.hang{
		background-color: #F7F7F7;
		height: 20rpx;
}
.hang1{
	height: 160rpx;
	background-color: #FFFFFF;
	align-items: center;
}
.hang2{
	height: 120rpx;
	margin-top: 5rpx;
	background-color: #FFFFFF;
	align-items: center;
}
.zi1{
	margin-left: 30rpx;
	font-size: 30rpx;
	color: #000000;
}
.zi2{
	margin-left: 30rpx;
	font-size: 30rpx;
	color: #000000;
}
.tx{
		width: 90rpx;
		height: 90rpx;
		border-radius: 150rpx;
		margin-left: 500rpx;
	}
	.yjt{
		width: 40rpx;
		height: 40rpx;
		margin-left: 10rpx;
	}
	.zi3{
		margin-left: 385rpx;
		font-size: 30rpx;
		color: #929292;
	}
	.zi4{
		margin-left: 460rpx;
		font-size: 30rpx;
		color: #929292;
	}
</style>
