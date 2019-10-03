<template>
	<view style="background-color: #F7F7F7; height: 1334rpx;">
		<view class="hang"></view>
		<view class="hang1 uni-flex uni-row" >
			<text class="zi1">头像</text>
			<image type='button' @tap="togglePopup('bottom', 'popup')" class="tx" src="../../static/wode/touxiang.jpg" mode="aspectFit"></image>
			<image class="yjt" src="../../static/wode/youjiantou4.png" mode="aspectFit"></image>
		</view>
		<view class="hang2 uni-flex uni-row">
			<text class="zi2">手机号</text>
			<view class="zi4" style="-webkit-flex: 1;flex: 1;" @tap="xiugaisjh">{{shoujihao}}</view>
			<image class="yjt" src="../../static/wode/youjiantou4.png" mode="aspectFit"></image>
		</view>
		<view class="hang2 uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
			<text class="zi2">昵称</text>
			<view class="zi4" style="-webkit-flex: 1;flex: 1;" @tap="togglePopup('center','tip')">{{nicheng}}</view>
			<image class="yjt" src="../../static/wode/youjiantou4.png" mode="aspectFit"></image>
		</view>
		<uni-popup ref="popup"  :custom="true" :type="type" @change="change">	
				<view class="bendixiangce" @tap="cancel('popup')">本地相册</view>
				<view class="quxiao" @tap="cancel('popup')">取消</view>
		</uni-popup>
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false" @change="change">
			<view class="tanchukuangNC">
				<view class="xiugainicheng">修改昵称</view>
				<input type="text" class="shurukuang" placeholder="请输入昵称" @input="onKeyInput"/>
				<view class="hengxian"></view>
				<view class="hengxian1"></view>
				<view class="hengpai uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="quxiaoNC" style="-webkit-flex: 1;flex: 1;" @click="quxiao1">取消</view>
					<view class="shuxian" ></view>
					<view class="queding" style="-webkit-flex: 1;flex: 1;" @click="queding1">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				type: '',
				show: false,
				/* content: '顶部弹 popup', */
				nicheng: '扎德西路',
				shoujihao: '123****8910',
			}
		},
		methods: {
/* 			queding1(){
				this.show = !this.show;
			},
			quxiao1(){
				this.show = !this.show;
			}, */
				onKeyInput: function(event) {
					this.nicheng = event.target.value
				},
			xiugaisjh() {
				uni.navigateTo({
					url:'../xiugaishoujihao/xiugaishoujihao'
				})
			},
			togglePopup(type, open) {
/* 				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break
					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				} */
				this.type = type
				if (open === 'tip') {
						this.show = true
					} else {
						this.$refs[open].open()
					}
				},
/* 				cancel(type) {
					if (type === 'tip') {
						this.show = false
						return
					}
					this.$refs[type].close()
				}, */
/* 				change(e) {
					console.log(e.show)
			} */
		}
	}
</script>

<style>
	.hengxian{
		width: 550rpx;
		height: 3rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		background-color: #929292;
		margin-bottom: 80rpx;
	}
	.hengxian1{
		width: 590rpx;
		height: 2rpx;
		background-color: #929292;
		margin-left: 10rpx;
	}
	.shurukuang{
		margin-top: 80rpx;
	}
	.xiugainicheng{
		font-size: 35rpx;
	}
	.shuxian{
		width: 2rpx;
		background-color: #929292;
	}
	.quxiaoNC{
		font-size: 35rpx;
		color: #929292;
		text-align: center;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
	.queding{
		font-size: 35rpx;
		color: #896744;
		text-align: center;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
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
		margin-right: 25rpx;
	}
	.zi3{
		margin-left: 385rpx;
		font-size: 30rpx;
		color: #929292;
	}
	.zi4{
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
	background-color: #FFFFFF;
	}
	.quxiao {
	text-align: center;
	font-size: 35rpx;
	border-radius: 60rpx;
	margin: 25rpx;
	padding: 10rpx;
	background-color: #FFFFFF;
	color: #929292;
	}
	.tanchukuangNC{
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}
</style>
