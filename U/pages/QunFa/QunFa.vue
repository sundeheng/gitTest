<template>
	<view class="dimian">
		<view class="xian1"></view>
		<view class="dimian2">
		<view class="TuCeng uni-form-item uni-column">
			<view class="ShuRuKuang"><textarea  auto-height  maxlength="-1" placeholder="dahaadsklhkhsahkahadhhksd"/></view>
			<view class="JinDuTiao"></view>
		</view>
		<view class="">
			<text class="Zi1">发送给列表好友</text>
			<image src="../../static/DuiHao.png" class="selected-1" style="margin-left: 420rpx;"></image>
		</view>
		<view class="">
			<text class="Zi1">发送给自己的成员</text>
			<image src="../../static/YuanQuan.png" class="selected-1" style="margin-left: 395rpx;"></image>
		</view>
		<view class="">
			<text class="Zi1">发送给所有人</text>
			<image src="../../static/YuanQuan.png" class="selected-1" style="margin-left: 447rpx;"></image>
		</view>
		<button type="primary" style="margin-top: 405rpx;margin-left: 30rpx;">发送</button>
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
.TuCeng {
	margin-top: 11rpx;
	margin-left: 30rpx;
	width: 690rpx;
	height: 404rpx;
	background-color: #ffffff;
}
.ShuRuKuang{
	margin-top: 19rpx;
	margin-left: 20rpx;
	width: 568rpx;
	height: 87rpx;
	font-family: PingFang-SC-Medium;
	font-size: 28rpx;
	font-weight: normal;
	font-stretch: normal;
	line-height: 30rpx;
	letter-spacing: 0rpx;
	color: #999999;
}
.dimian2 {
	
	width: 690rpx;
	height: 1153rpx;
}
.Zi1 {
	margin-left: 31rpx;
	margin-top: 57rpx;
	width: 163rpx;
	height: 25rpx;
	font-family: PingFang-SC-Regular;
	font-size: 26rpx;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0rpx;
	color: #191919;
}
.selected-1 {
	margin-top: 15rpx;
	width: 37rpx;
	height: 37rpx;
}
</style>
