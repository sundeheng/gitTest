<template>
	<view>
		<view class="xian"></view>
		<view class="uni-form-item uni-column">
			<view class="with-fun" style="margin-top: 21rpx;">
				<image src="../../static/MiMaSuo.png" class="mms"></image>
				<input class="uni-input" placeholder="请输入密码" />
			</view>
		</view>
		<view class="uni-form-item uni-column">
			<view class="with-fun">
				<image src="../../static/MiMaSuo.png" class="mms"></image>
				<input class="uni-input" placeholder="请输入密码"  />
			</view>
		</view>
		<view class="uni-form-item uni-column">
			<view class="with-fun">
				<image src="../../static/MiMaSuo.png" class="mms"></image>
				<input class="uni-input" placeholder="请输入密码"  />
			</view>
		</view>
		<button type="primary" class="bt_1"><text class="tx_1">确认</text></button>
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
	.xian {
		width: 750rpx;
		height: 1rpx;
		background-color: #e5e5e5;
		border-radius: 1rpx;
	}
	.with-fun {
		margin-left: 29rpx;
		width: 691rpx;
		height: 88rpx;
		border: solid 1rpx #e5e5e5;
	}
	.mms {
		margin-left: 22rpx;
		margin-top: 30rpx;
		width: 23rpx;
		height: 27rpx;
	}
	.uni-input {
		margin-left: 15rpx;
		margin-top: 10rpx;
		width: 153rpx;
		height: 25rpx;
		font-family: PingFang-SC-Regular;
		font-size: 26rpx;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0rpx;
		color: #999999;
	}
	.bt_1 {
		margin-top: 756rpx;
		width: 690rpx;
		height: 88rpx;
		background-color: #66aaff;
		border-radius: 6rpx;
		border: solid 1rpx #66aaff;
	}
	.tx_1 {
		width: 62rpx;
		height: 30rpx;
		font-family: PingFang-SC-Medium;
		font-size: 32rpx;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0rpx;
		color: #ffffff;
	}
</style>
