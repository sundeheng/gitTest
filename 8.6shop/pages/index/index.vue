<template>
	<!-- 最外层背景 -->
	<view class="content" :style="{ backgroundImage: 'url(' + imageURL + ')' }" >
		<page-head :title="title"></page-head>
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
				<view class="inp"><input name = "shoujihao" @input="shoujihaoChange" class="srk" type="number" placeholder-class="text2" placeholder="请输入手机号" style="background-color:#515151 ;" /></view>
			</view>
			<!-- 横向的密码输入框div -->
			<view class="ceng2 uni-flex uni-row " style="margin-top: 20rpx;">
				<!-- 锁的标志 -->
				<view style="width: 115rpx;">
					<image style="width: 40rpx;height: 40rpx; margin-top: 20rpx;margin-left: 30rpx;" src="../../static/denglu/icon_password_3login.png" mode="aspectFit"></image>
				</view>
				<!-- 竖杠 -->
				<view class="text">丨</view>
				<!-- 输入框 -->
				<view class="inp"><input name = "mima" @input="mimaChange" class="srk" password="true" placeholder-class="text2" placeholder="请输入密码" style="background-color:#515151 ;" /></view>
			</view>
			<!-- 忘记密码短信验证 横向排列的div -->
			<view class="uni-flex uni-row">
				<!-- 信息图标 -->
				<image src="../../static/denglu/icon_dx_dl.png" mode="aspectFit" style="width: 35rpx;height: 35rpx; margin-top: 7rpx;"></image>
				<view class="text1" @tap="navigateTo" style="margin-left: 10rpx;">短信验证</view>
				<view class="text1" @tap="navigateTo1"  style="margin-left: 305rpx;">忘记密码?</view>
			</view>
			<!-- 记住密码横向div -->
			<view class="uni-flex uni-row" style="align-items: center;">
				<!-- 对号图标 -->
				<radio value="r2" :checked="checked" color="#26904d" style="transform:scale(0.7);margin-top: 10rpx;" @tap="jizhumima"/>
				<view class="text1" style="margin-top: 10rpx;" @tap="jizhumima">记住密码</view>
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
			/* name:'', */
			/* 手机号输入框的内容 */
			shoujihao:'',
			/* 密码输入框的内容 */
			mima:'',
			title: 'toast',
			checked: true,
			/* 返回的最外层背景图片路径 */
			imageURL: '/static/denglu/bg_dl.png',
			/* title: 'picker', */
			array: [{name:'+86'},{name: '+87'}, {name:'+88'}, {name:'+89'}],
			index: 0
		};
	},
	methods: {
		jizhumima(){
			this.checked = !this.checked
		},
		/* 手机号输入框返回的值 */
		shoujihaoChange:function (e) {
			this.shoujihao = e.detail.value;
			getApp().globalData.shoujihao = this.shoujihao;
		},
		/* 密码输入框返回的值 */
		mimaChange:function (e) {
			this.mima = e.detail.value;
		},
		bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为：' + e.target.value)
			this.index = e.target.value
		},
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
				if (this.shoujihao === '') {
					uni.showToast({
						title: "请输入手机号!",
						icon: 'none',
					})
				}else if(this.mima === ''){
					uni.showToast({
						title: "请输入密码!",
						icon: 'none',
					})
				}else if(this.shoujihao.length !=11){
					uni.showToast({
						title: "手机号必须为11位!",
						icon: 'none',
					})
				}else if(this.mima.length<8){
					uni.showToast({
						title: "密码必须大于8位!!",
						icon: 'none',
					})
				}else{
					uni.reLaunch({
						url:'../shouye/shouye'
					})
				}
		},
		navigateTo3() {
			uni.navigateTo({
				url:'../zhuce/zhuce'
			})
		}
	},
	onShow() {
		plus.screen.lockOrientation("portrait-primary");
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
	align-items: center;
	height: 80rpx;
	background-color: #515151;
	border-radius: 10rpx;
}
.text {
	margin: 15rpx 10rpx;
	text-align: center;
	color: #ffffff;
	font-size: 26rpx;
}
.text1 {
	color: #ffffff;
	font-size: 26rpx;
}
.inp {
	color: #ffffff;
	font-size: 26rpx;
}
.bt {
	border-radius: 10rpx;
	height: 80rpx;
	font-size: 32rpx;
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
	font-size:25rpx;
}
</style>
