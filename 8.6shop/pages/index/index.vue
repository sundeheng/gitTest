<template>
	<!-- 最外层背景 -->
	<view class="content" :style="{ backgroundImage: 'url(' + imageURL + ')' }">
		<page-head :title="title"></page-head>
		<!-- 上面中间的头像logo -->
		<image src="../../static/logo.png" mode="aspectFit" class="logo"></image>
		<!-- 竖向的大div -->
		<view class="ceng1">
			<!-- 横向的手机号输入框div -->
			<view class="ceng2 uni-flex uni-row ">
				<!-- +86字段 -->
				<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
					<view class="shuzi">
						<text class="shuzi1">{{ array[index].name }}</text>
					</view>
				</picker>
				<!-- 向下箭头 -->
				<view><image class="xiajiantou" src="../../static/shiliangtu/XiaJianTou.png" mode="aspectFit"></image></view>
				<!-- 竖杠 -->
				<view class="text">丨</view>
				<!-- 输入框 -->
				<view class="inp">
					<input
						v-model="account"
						@input="shoujihaoChange"
						class="srk"
						type="number"
						placeholder-class="text2"
						placeholder="请输入手机号"
					/>
				</view>
			</view>
			<!-- 横向的密码输入框div -->
			<view class="ceng2 uni-flex uni-row  mimakuang">
				<!-- 锁的标志 -->
				<view class="suokuang"><image class="suo" src="../../static/denglu/icon_password_3login.png" mode="aspectFit"></image></view>
				<!-- 竖杠 -->
				<view class="text0">丨</view>
				<!-- 输入框 -->
				<view class="inp">
					<input
						v-model="password"
						@input="mimaChange"
						class="srk"
						password="true"
						placeholder-class="text2"
						placeholder="请输入密码"
					/>
				</view>
			</view>
			<!-- 忘记密码短信验证 横向排列的div -->
			<view class="uni-flex uni-row">
				<!-- 信息图标 -->
				<image class="xinxi" src="../../static/denglu/icon_dx_dl.png" mode="aspectFit"></image>
				<view class="text1 duanxin" @tap="navigateTo">短信验证</view>
				<view class="text1 wangji" @tap="navigateTo1">忘记密码?</view>
			</view>
			<!-- 记住密码横向div -->
			<view class="uni-flex uni-row" style="align-items: center;">
				<!-- 对号图标 -->
				<radio value="r2" class="r2" :checked="checked" color="#26904d" @tap="jizhumima" />
				<view class="text1 jizhu" @tap="jizhumima">记住密码</view>
			</view>
			<!-- 登录按钮 -->
			<button type="primary" class="bt denglu" style="background-color: #8a5421;" @tap="navigateTo2">登录</button>
			<!-- 注册按钮 -->
			<button type="primary" class="bt zhuce" style="	background-color: #6a6a6a;" @tap="navigateTo3">注册</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
export default {
	data() {
		return {
			/* name:'', */
			/* 手机号输入框的内容 */
			/* 密码输入框的内容 */
			account: '',
			password: '',
			title: 'toast',
			checked: true,
			/* 返回的最外层背景图片路径 */
			imageURL: '/static/denglu/bg_dl.png',
			/* title: 'picker', */
			array: [{ name: '+86' }, { name: '+87' }, { name: '+88' }, { name: '+89' }],
			index: 0
		};
	},
	methods: {
		jizhumima() {
			this.checked = !this.checked;
		},
		/* 手机号输入框返回的值 */
		shoujihaoChange: function(e) {
			this.account = e.detail.value;
			getApp().globalData.shoujihao = this.account;
		},
		/* 密码输入框返回的值 */
		mimaChange: function(e) {
			this.mima = e.detail.value;
		},
		bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为：' + e.target.value);
			this.index = e.target.value;
		},
		navigateTo() {
			uni.navigateTo({
				url: '../duanxindenglu/duanxindenglu'
			});
		},
		navigateTo1() {
			uni.navigateTo({
				url: '../zhaohuimima/zhaohuimima'
			});
		},
		navigateTo2() {
			/* 记住密码的 */
			if (this.checked) {
				uni.setStorage({
					key: 'sjsj',
					data: this.account
				});
				uni.setStorage({
					key: 'mmmm',
					data: this.password
				});
			} else {
				uni.setStorage({
					key: 'sjsj',
					data: ''
				});
				uni.setStorage({
					key: 'mmmm',
					data: ''
				});
			}
			/**
			 * 客户端对账号信息进行一些必要的校验。
			 * 实际开发中，根据业务需要进行处理，这里仅做示例。
			 */
			if (this.account.length != 11) {
				uni.showToast({
					title: '手机号必须为11位!',
					icon: 'none'
				});
				return;
			} else if (this.password.length < 8) {
				uni.showToast({
					title: '密码必须大于8位!!',
					icon: 'none'
				});
				return;
			}
			/**
			 * 下面简单模拟下服务端的处理
			 * 检测用户账号密码是否在已注册的用户列表中
			 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
			 */
			 const data = {
			     account: this.account,
			     password: this.password
			 };
			 const validUser = service.getUsers().some(function (user) {
			     return data.account === user.account && data.password === user.password;
			 });
			 if (validUser) {
			     uni.reLaunch({
			     	url: '../shouye/shouye'
			     });
			 } else {
			     uni.showToast({
			         icon: 'none',
			         title: '用户账号或密码不正确',
			     });
				 return;
			 }
		},
		navigateTo3() {
			uni.navigateTo({
				url: '../zhuce/zhuce'
			});
		}
	},
	onShow() {
		plus.screen.lockOrientation('portrait-primary');
	},
	onLoad() {
		/* 记住密码回填 */
		this.account = uni.getStorageSync('sjsj');
		this.password = uni.getStorageSync('mmmm');

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
.suokuang {
	width: 100rpx;
}
.suo {
	width: 40rpx;
	height: 40rpx;
	margin-top: 20rpx;
	margin-left: 30rpx;
}
.mimakuang {
	margin-top: 20rpx;
}
.xiajiantou {
	width: 25rpx;
	height: 25rpx;
	margin-top: 25rpx;
}
.text {
	margin: 15rpx 10rpx;
	text-align: center;
	color: #ffffff;
	font-size: 26rpx;
}
.text0 {
	margin: 15rpx 10rpx;
	text-align: center;
	color: #ffffff;
	font-size: 26rpx;
	padding-left: 15rpx;
}
.text1 {
	color: #ffffff;
	font-size: 26rpx;
}
.jizhu {
	margin-top: 10rpx;
}
.r2 {
	transform: scale(0.7);
	margin-top: 10rpx;
}
.duanxin {
	margin-left: 10rpx;
}
.wangji {
	margin-left: 305rpx;
}
.xinxi {
	width: 35rpx;
	height: 35rpx;
	margin-top: 7rpx;
}
.inp {
	background-color:#515151;
	color: #ffffff;
	font-size: 26rpx;
}
.bt {
	border-radius: 10rpx;
	height: 80rpx;
	font-size: 32rpx;
}
.zhuce {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 574rpx;
}
.denglu {
	margin-top: 15rpx;
}
.shuzi {
	width: 70rpx;
	align-items: center;
	text-align: right;
	/* 	padding-left: 20rpx;
	padding-top: 20rpx; */
	background-color: #515151;
	border-radius: 10rpx;
}
.shuzi1 {
	color: #ffffff;
	font-size: 25rpx;
}
</style>
