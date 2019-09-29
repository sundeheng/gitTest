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
				<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
					<view class="shuzi"><text class="shuzi1">{{array[index].name}}</text></view>
				</picker>
				<!-- 向下箭头 -->
				<view class=""><image style="width: 25rpx;height: 25rpx; margin-top: 25rpx;" src="../../static/shiliangtu/XiaJianTou.png" mode="aspectFit"></image></view>
				<!-- 竖杠 -->
				<view class="text">丨</view>
				<!-- 输入框 -->
				<view class="inp"><input class="uni-input" type="number" placeholder="请输入手机号登录" style="background-color:#515151 ;" /></view>
			</view>
			<!-- 横向的密码输入框div -->
			<view class="ceng2 uni-flex uni-row " style="margin-top: 20rpx;">
				<!-- 锁的标志 -->
				<view style="width: 95rpx;">
					<image style="width: 40rpx;height: 40rpx; margin-top: 20rpx;margin-left: 30rpx;" src="../../static/denglu/icon_dx_dl.png" mode="aspectFit"></image>
				</view>
				<!-- 竖杠 -->
				<view class="text">丨</view>
				<!-- 输入框 -->
				<view class="inp"><input class="uni-input" type="number" placeholder="请输入验证码" style="background-color:#515151 ;" /></view>
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
			<!-- 横向的密码输入框div -->
			<view class="ceng2 uni-flex uni-row " style="margin-top: 20rpx;">
				<!-- 锁的标志 -->
				<view style="width: 95rpx;">
					<image style="width: 40rpx;height: 40rpx; margin-top: 20rpx;margin-left: 30rpx;" src="../../static/denglu/icon_password_3login.png" mode="aspectFit"></image>
				</view>
				<!-- 竖杠 -->
				<view class="text">丨</view>
				<!-- 输入框 -->
				<view class="inp"><input class="uni-input" password type="text" placeholder="请再次输入密码" style="background-color:#515151 ;" /></view>
			</view>
			<!-- 登录按钮 -->
			<button type="primary" class="bt1" >注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageURL: '/static/denglu/bg_dl.png',
				title: 'picker',
				array: [{name:'+86'},{name: '+87'}, {name:'+88'}, {name:'+89'}],
				index: 0
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.target.value)
				this.index = e.target.value
			}
		}
	}
</script>

<style>
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
	align-items: center;
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
.uni-input{
	color: #ffffff;
}
.bt1 {
	border-radius: 10rpx;
	height: 80rpx;
	font-size: 32rpx;
	background-color: #8a5421;
	margin-top: 65rpx;
}
.shuzi{
	width: 70rpx;
	align-items: center;
	text-align: right;
/* 	padding-left: 20rpx;
	padding-top: 20rpx; */
	background-color: #515151;
	border-radius: 10rpx;
}
.shuzi1{
	color: #FFFFFF;
	font-size:25upx;
}
</style>
