<template>
	<view class="dimian">
		<view class="hang"></view>
		<view class="hang1 uni-flex uni-row">
			<text class="zi1">头像</text>
			<image type="button" @tap="togglePopup('bottom', 'dibu')" class="tx" src="../../static/wode/touxiang.jpg" mode="aspectFit"></image>
			<image class="yjt" src="../../static/wode/youjiantou4.png" mode="aspectFit"></image>
		</view>
		<view class="hang2 uni-flex uni-row">
			<text class="zi2">手机号</text>
			<view class="zi4" @tap="xiugaisjh">{{ shoujihao }}</view>
			<image class="yjt" src="../../static/wode/youjiantou4.png" mode="aspectFit"></image>
		</view>
		<view class="hang2 uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
			<text class="zi2">昵称</text>
			<view class="zi4" @tap="togglePopup('center', 'tip')">{{ nicheng }}</view>
			<image class="yjt" src="../../static/wode/youjiantou4.png" mode="aspectFit"></image>
		</view>
		<uni-popup ref="dibu" :custom="true" :type="type" @change="change">
			<view class="bendixiangce" @tap="cancel('xiangce')">本地相册</view>
			<view class="quxiao" @tap="cancel('dibu')">取消</view>
		</uni-popup>
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false" @change="change">
			<view class="tanchukuangNC">
				<view class="xiugainicheng">修改昵称</view>
				<input type="text" class="shurukuang" placeholder="请输入昵称" @input="onKeyInput" />
				<view class="hengxian"></view>
				<view class="cuowutishi">{{ cuowutishi }}</view>
				<view class="hengxian1"></view>
				<view class="hengpai uni-flex uni-row">
					<view class="quxiaoNC" @click="quxiao1">取消</view>
					<view class="shuxian"></view>
					<view class="queding"  @click="queding1">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
	components: {
		uniPopup
	},
	data() {
		return {
			type: '',
			show: false,
			/* content: '顶部弹 popup', */
			nicheng: '',
			nicheng1: '',
			shoujihao: '',
			cuowutishi: ''
		};
	},
	methods: {
		queding1() {
			/* 			if ((this.nicheng1.length <= 1) || (this.nicheng1.length >= 3)) {
				this.cuowutishi = '昵称必须2-4位!';
			} else { */
			this.nicheng = getApp().globalData.nicheng;
			this.show = !this.show;
			/* 			} */
		},
		quxiao1() {
			this.show = !this.show;
		},
		onKeyInput: function(event) {
			getApp().globalData.nicheng = event.detail.value;
		},
		xiugaisjh() {
			uni.navigateTo({
				url: '../xiugaishoujihao/xiugaishoujihao'
			});
		},
		togglePopup(type, open) {
			this.type = type;
			if (open === 'tip') {
				this.show = true;
			} else {
				this.$refs[open].open();
			}
		},
		cancel(type) {
			if (type === 'tip') {
				this.show = false;
				return;
			}
			if (type === 'xiangce') {
				uni.chooseImage({
					//从本地相册选图片
					count: 1, //可选图片数量
					sizeType: ['original', 'compressed'], //指定原图还是压缩图
					success: function() {
						uni.getImageInfo({
							success: function(image) {
								console.log('图片的路径:' + image.path);
							}
						});
					}
				});
			}
			this.$refs[type].close();
		}
		/* 				change(e) {
					console.log(e.show)
			} */
	},
	onShow() {
		this.nicheng = getApp().globalData.nicheng;
		var sjh = getApp().globalData.shoujihao;
		this.shoujihao = sjh.substr(0, 3) + '****' + sjh.substr(7);
	}
};
</script>

<style>
.dimian {
	background-color: #f7f7f7;
	height: 1197rpx;
}
.cuowutishi {
	color: #ff0000;
	height: 40rpx;
}
.hengpai {
	-webkit-justify-content: space-between;
	justify-content: space-between;
}
.hengxian {
	width: 550rpx;
	height: 2rpx;
	margin-left: 30rpx;
	margin-right: 30rpx;
	background-color: #929292;
	margin-bottom: 20rpx;
}
.hengxian1 {
	width: 590rpx;
	height: 2rpx;
	background-color: #929292;
	margin-left: 10rpx;
}
.shurukuang {
	margin-top: 80rpx;
}
.xiugainicheng {
	font-size: 35rpx;
}
.shuxian {
	width: 2rpx;
	background-color: #929292;
}
.quxiaoNC {
	-webkit-flex: 1;flex: 1;
	font-size: 35rpx;
	color: #929292;
	text-align: center;
	padding-top: 20rpx;
	padding-bottom: 20rpx;
}
.queding {
	-webkit-flex: 1;flex: 1;
	font-size: 35rpx;
	color: #896744;
	text-align: center;
	padding-top: 20rpx;
	padding-bottom: 20rpx;
}
.hang {
	background-color: #f7f7f7;
	height: 20rpx;
}
.hang1 {
	height: 160rpx;
	background-color: #ffffff;
	align-items: center;
}
.hang2 {
	height: 120rpx;
	margin-top: 5rpx;
	background-color: #ffffff;
	align-items: center;
}
.zi1 {
	margin-left: 30rpx;
	font-size: 30rpx;
	color: #000000;
}
.zi2 {
	margin-left: 30rpx;
	font-size: 30rpx;
	color: #000000;
}
.tx {
	width: 90rpx;
	height: 90rpx;
	border-radius: 150rpx;
	margin-left: 500rpx;
}
.yjt {
	width: 40rpx;
	height: 40rpx;
	margin-right: 25rpx;
}
.zi3 {
	margin-left: 385rpx;
	font-size: 30rpx;
	color: #929292;
}
.zi4 {
	-webkit-flex: 1;
	flex: 1;
	font-size: 30rpx;
	text-align: right;
	color: #929292;
}
.bendixiangce {
	text-align: center;
	font-size: 35rpx;
	border-radius: 60rpx;
	margin: 25rpx;
	padding: 10rpx;
	background-color: #ffffff;
}
.quxiao {
	text-align: center;
	font-size: 35rpx;
	border-radius: 60rpx;
	margin: 25rpx;
	padding: 10rpx;
	background-color: #ffffff;
	color: #929292;
}
.tanchukuangNC {
	background-color: #ffffff;
	border-radius: 10rpx;
}
</style>
