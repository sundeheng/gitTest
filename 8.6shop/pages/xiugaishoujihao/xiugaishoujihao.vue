<template>
	<view class="content">
		<!-- 横向的密码输入框div -->
		<view class="ceng2 uni-flex uni-row ">
			<!-- 锁的标志 -->
			<view class="suokuang"><image class="suo" src="../../static/duanxindenglu/icon_sjh_dx.png" mode="aspectFit"></image></view>
			<!-- 竖杠 -->
			<view class="text">丨</view>
			<!-- 输入框 -->
			<view class="inp" ><input class="srk" type="number" placeholder="请输入旧手机号" @input="shoujihaoChange" /></view>
			<!-- 叉号 -->
			<view class="suokuang" ><image @click="chahao" class="chahao" src="../../static/duanxindenglu/icon_sc_dl.png" mode="aspectFit"></image></view>
		</view>
		<!-- 横向的密码输入框div -->
		<view class="ceng2 uni-flex uni-row mimakuang">
			<!-- 锁的标志 -->
			<view class="suokuang"><image class="suo2" src="../../static/duanxindenglu/icon_yzm_dl.png" mode="aspectFit"></image></view>
			<!-- 竖杠 -->
			<view class="text">丨</view>
			<!-- 输入框 -->
			<view class="inp"><input class="srk" type="number" placeholder="请输入验证码" /></view>
			<view class="bt">获取验证码</view>
		</view>
		<!-- 登录按钮 -->
		<view class="bt1" @tap="xiayibu">下一步</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			shoujihao:'',
		};
	},
	methods: {
		/* 手机号输入框返回的值 */
		shoujihaoChange: function(e) {
			this.shoujihao = e.detail.value;
		},
		xiayibu() {
			if (getApp().globalData.shoujihao === this.shoujihao) {
				uni.navigateTo({
					url: '../xiugaishoujihao2/xiugaishoujihao2'
				});
			}else{
				uni.showToast({
					title: '旧手机号输入有误!',
					icon: 'none'
				});
			}
		},
	}
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
.suokuang {
	width: 95rpx;
}
.suo2 {
	width: 40rpx;
	height: 40rpx;
	margin-top: 20rpx;
	margin-left: 30rpx;
}
.chahao {
	width: 30rpx;
	height: 30rpx;
	margin-top: 20rpx;
	position: absolute;
}
.suo {
	width: 40rpx;
	height: 40rpx;
	margin-top: 20rpx;
	margin-left: 30rpx;
}
.ceng2 {
	height: 80rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
}
.mimakuang {
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
	text-align: center;
	height: 80rpx;
	font-size: 35rpx;
	padding-top: 10rpx;
	color: #ffffff;
	background-color: #8a5421;
	margin-top: 273rpx;
	margin-left: 30rpx;
	margin-right: 30rpx;
}
</style>
