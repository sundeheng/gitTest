<template>
	<view class="dimian">
		<view >
			<image src="../../static/logo.png" class="TouXiang"></image>
		</view>
		<view class="TuCeng" style="margin-top: 20rpx;">
			<text class="ZiZuo" >手机号</text>
			<text class="shoujihao">12345678910</text>
		</view>
		<view class="xian1"></view>
		<view class="TuCeng">
			<text class="ZiZuo">昵称</text>
			<text class="NiCheng">花满楼</text>
		</view>
		<view class="xian1"></view>
		<view class="TuCeng">
			<text class="ZiZuo">所在城市</text>
			<text class="ChengShi">中国江苏省徐州市</text>
		</view>
		<view class="xian1"></view>
		<view class="TuCeng" style="margin-top: 10rpx;">
			<text class="ZiZuo">密码</text>
			<image src="../../static/YouJianTou3.png" class="back"></image>
		</view>
		<view class="xian1"></view>
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
.TouXiang {
	width: 750rpx;
	height: 600rpx;
}
.xian1 {
	width: 750rpx;
	height: 1rpx;
	background-color: #e5e5e5;
}
.ZiZuo {
	margin-left: 30rpx;
	width: 88rpx;
	height: 28rpx;
	font-family: PingFang-SC-Medium;
	font-size: 30rpx;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0rpx;
	color: #191919;
}
.shoujihao {
	margin-left: 420rpx;
	text-align: right;
	width: 182rpx;
	height: 22rpx;
	font-family: PingFang-SC-Regular;
	font-size: 28rpx;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0rpx;
	color: #999999;
}
.NiCheng {
	margin-left: 550rpx;
	text-align: right;
	width: 82rpx;
	height: 27rpx;
	font-family: PingFang-SC-Regular;
	font-size: 28rpx;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0rpx;
	color: #999999;
}
.ChengShi {
	margin-left: 360rpx;
	text-align: right;
	width: 220rpx;
	height: 28rpx;
	font-family: PingFang-SC-Regular;
	font-size: 28rpx;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0rpx;
	color: #999999;
}
.back {
	margin-left: 622rpx;
	text-align: right;
	width: 25rpx;
	height: 25rpx;
}
</style>
