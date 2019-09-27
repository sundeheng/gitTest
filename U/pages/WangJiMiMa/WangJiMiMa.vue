<template>
	<view>
		<view class="xian"></view>
		<!-- 横向排列 -->
		<view class="uni-form-item uni-column">
			<view class="with-fun" style="margin-top: 21rpx;">
				<input class="uni-input" placeholder="请输入手机号" />
				<navigator url="#" class="a_1">获取验证码</navigator>
			</view>
		</view>
			<view class="xian2"></view>
			<input class="uni-input" placeholder="请输入短信验证码" />
			<view class="xian"></view>
			<input class="uni-input" placeholder="请输入邀请码"  />
			<view class="xian"></view>
			<input class="uni-input" placeholder="请输入新密码"  />
			<view class="xian"></view>
			<input class="uni-input" placeholder="再次确认新密码"  />
			<view class="xian"></view>
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
	.xian2 {
		margin-left: 30rpx;
		width: 690rpx;
		height: 1rpx;
		background-color: #e5e5e5;
		border-radius: 1rpx;
	}
	.uni-input {
		margin-top: 17rpx;
		margin-left: 29rpx;
		width: 500rpx;
		height: 20rpx;
		font-family: PingFang-SC-Regular;
		font-size: 29rpx;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0rpx;
		color: #999999;
	}
	.a_1 {
		margin-top: 22rpx;
		margin-right: 29rpx;
		width: 167rpx;
		height: 28rpx;
		font-family: PingFang-SC-Regular;
		font-size: 29rpx;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0rpx;
		color: #66aaff;
	}
</style>
