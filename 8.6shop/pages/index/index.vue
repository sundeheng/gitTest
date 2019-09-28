<template>
	<!-- 最外层背景 -->
	<view class="content" :style="{ backgroundImage: 'url(' + imageURL + ')' }">
		<!-- 上面中间的头像logo -->
		<image src="../../static/logo.png" mode="aspectFit" class="logo"></image>
		<!-- 竖向的大div -->
		<view class="ceng1">
			<!-- 横向的手机号输入框div -->
			<view class="ceng2 uni-flex uni-row ">
				<!-- +86字段 -->
				<view class="text">+86</view>
				<!-- 向下箭头 -->
				<view class=""><image style="width: 25rpx;height: 25rpx; margin-top: 25rpx;" src="../../static/shiliangtu/XiaJianTou.png" mode="aspectFit"></image></view>
				<!-- 竖杠 -->
				<view class="text">丨</view>
				<!-- 输入框 -->
				<view class="inp"><input class="uni-input" type="number" placeholder="请输入手机号" style="background-color:#515151 ;" /></view>
			</view>
			<!-- 横向的密码输入框div -->
			<view class="ceng2 uni-flex uni-row " style="margin-top: 20rpx;">
				<!-- 锁的标志 -->
				<view style="width: 95rpx;">
					<image style="width: 40rpx;height: 40rpx; margin-top: 20rpx;margin-left: 30rpx;" src="../../static/denglu/icon_password_3login.png" mode="aspectFit"></image>
				</view>
				<!-- 竖杠 -->
				<view class="text">丨</view>
				<!-- 输入框 -->
				<view class="inp"><input class="uni-input" password type="text" placeholder="请输入密码" style="background-color:#515151 ;" /></view>
			</view>
			<!-- 忘记密码短信验证 横向排列的div -->
			<view class="uni-flex uni-row">
				<!-- 信息图标 -->
				<image src="../../static/denglu/icon_dx_dl.png" mode="aspectFit" style="width: 35rpx;height: 35rpx; margin-top: 7rpx;"></image>
				<view class="text1" @tap="navigateTo" style="margin-left: 10rpx;">短信验证</view>
				<view class="text1" @tap="navigateTo1"  style="margin-left: 305rpx;">忘记密码?</view>
			</view>
			<!-- 记住密码横向div -->
			<view class="uni-flex uni-row">
				<!-- 对号图标 -->
				<image src="../../static/denglu/icon_jzmm_dl.png" mode="aspectFit" style="width: 35rpx;height: 35rpx; margin:20rpx 25rpx"></image>
				<view class="text1" style="margin-top: 10rpx;">记住密码</view>
			</view>
			<!-- 登录按钮 -->
			<button type="primary" class="bt" @tap="navigateTo2" style="background-color: #8a5421;margin-top: 15rpx;">登录</button>
			<!-- 注册按钮 -->
			<button type="primary" class="bt" @tap="navigateTo3" style="background-color: #6a6a6a;position: absolute;left: 0;bottom: 0;width: 574rpx;">注册</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			/* 返回的最外层背景图片路径 */
			imageURL: '/static/denglu/bg_dl.png'
		};
	},
	methods: {
		navigateTo() {
			uni.navigateTo({
				url:'../duanxindenglu/duanxindenglu'
			})
		},
		navigateTo1() {
			uni.navigateTo({
				url:'../zhaohuimima/zhaohuimima'
			})
		},
		navigateTo2() {
			uni.reLaunch({
				url:'../shouye/shouye'
			})
		},
		navigateTo3() {
			uni.navigateTo({
				url:'../zhuce/zhuce'
			})
		}
	}
};
</script>

<style>
/*  */
.content {
	width: 750rpx;
	height: 1334rpx;
	background-size: 100% 100%;
}
.logo {
	width: 136rpx;
	height: 136rpx;
	margin-top: 133rpx;
	margin-left: 316rpx;
}
.ceng1 {
	width: 574rpx;
	height: 500rpx;
	margin-top: 145rpx;
	margin-left: 88rpx;
	position: relative;
}
.ceng2 {
	height: 80rpx;
	background-color: #515151;
	border-radius: 10rpx;
}
.text {
	margin: 15upx 10upx;
	text-align: center;
	color: #ffffff;
	font-size: 26upx;
}
.text1 {
	text-align: left;
	color: #ffffff;
	font-size: 26upx;
}
.inp {
	color: #ffffff;
	font-size: 26upx;
}
.bt {
	border-radius: 10rpx;
	height: 80rpx;
	font-size: 32rpx;
}
</style>
