<template>
	<view class="content">
		<!-- 横向的密码输入框div -->
		<view class="ceng2 uni-flex uni-row ">
			<!-- 锁的标志 -->
			<view class="suokuang"><image class="suo" src="../../static/duanxindenglu/icon_sjh_dx.png" mode="aspectFit"></image></view>
			<!-- 竖杠 -->
			<view class="text">丨</view>
			<!-- 输入框 -->
			<view class="inp"><input class="srk" type="number" placeholder="请输入手机号" /></view>
			<!-- 叉号 -->
			<view class="suokuang"><image class="chahao" src="../../static/duanxindenglu/icon_sc_dl.png" mode="aspectFit"></image></view>
		</view>
		<!-- 横向的密码输入框div -->
		<view class="ceng3 uni-flex uni-row ">
			<!-- 锁的标志 -->
			<view class="suokuang">
				<image class="suo" src="../../static/duanxindenglu/icon_yzm_dl.png" mode="aspectFit"></image>
			</view>
			<!-- 竖杠 -->
			<view class="text">丨</view>
			<!-- 输入框 -->
			<view class="inp"><input class="srk" type="number" placeholder="请输入验证码" /></view>
			<view class="bt">获取验证码</view>
		</view>
		<!-- 登录按钮 -->
		<button type="primary" class="bt1">登录</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
.srk {
	width: 400rpx;
	margin-top: 12rpx;
	color: #1c1c1c;
}
.content {
	width: 750rpx;
	height: 1197rpx;
	background-color: #e5e5e5;
}
.ceng2 {
	height: 80rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
}
.ceng3 {
	height: 80rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	margin-top: 20rpx;
}
.text {
	margin: 15upx 10upx;
	text-align: center;
	color: #e5e5e5;
	font-size: 26upx;
}
.inp {
	background-color: #ffffff;
	color: #e5e5e5;
	font-size: 26upx;
}
.bt {
	height: 40rpx;
	margin-top: 20rpx;
	position: absolute;
	color: #896744;
	font-size: 25rpx;
	border: 3rpx solid #896744;
	border-radius: 10rpx;
}
.bt1 {
	border-radius: 10rpx;
	height: 80rpx;
	font-size: 32rpx;
	background-color: #8a5421;
	margin-top: 273rpx;
	margin-left: 30rpx;
	margin-right: 30rpx;
}
.suo {
	width: 40rpx;
	height: 40rpx;
	margin-top: 20rpx;
	margin-left: 30rpx;
}
.suokuang {
	width: 95rpx;
}
.chahao {
	width: 30rpx;
	height: 30rpx;
	margin-top: 20rpx;
	position: absolute;
}
</style>
