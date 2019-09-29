<template>
	<view style="background-color: #F7F7F7; height: 1334rpx;">
		<view class="bg" :style="{ backgroundImage: 'url(' + imageURLtx + ')' }"></view>
		<view class="bg1">
			<view class="qdbj" :style="{ backgroundImage: 'url(' + imageURL + ')' }"><image class="qd" src="../../static/wode/icon_yqd_wd.png" mode="aspectFit"></image></view>
			<!-- 横向的手机号输入框div -->
			<view class="hx uni-flex uni-row" @tap="tiao">
				<image class="tx" src="../../static/wode/touxiang.jpg" mode="aspectFit"></image>
				<view class="zi">
					<text class="mz">扎西德路</text>
					<text class="sjh">12345678910</text>
				</view>
				<image class="yjt" src="../../static/wode/icon_jr_wd.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="hx2 uni-flex uni-row">
			<image class="zuotu" src="../../static/wode/icon_jf_wd.png" mode="aspectFit"></image>
			<text class="jf">我的积分</text>
			<text class="jf2">10000</text>
		</view>
		<view class="hx2 uni-flex uni-row" style="margin-top: 20rpx;" @tap="tiao1()">
			<image class="zuotu" src="../../static/wode/icon_dz_wd.png" mode="aspectFit"></image>
			<text class="jf">我的地址</text>
			<image class="yjt1" src="../../static/wode/youjiantou4.png" mode="aspectFit"></image>
		</view>
		<button class="dl" @click="tiao3">退出登录</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imageURL: '/static/wode/icon_wqd_wo.png',
			imageURLtx: '/static/wode/touxiang.jpg'
		};
	},
	methods: {
		tiao() {
			uni.navigateTo({
				url: '../gerenxinxi/gerenxinxi'
			});
		},
		tiao1() {
			uni.navigateTo({
				url: '../xuanzeshouhuodizhi/xuanzeshouhuodizhi'
			});
		},
		tiao3() {
			uni.reLaunch({
				url: '../index/index'
			});
		}
	}
};
</script>

<style>
.bg {
	height: 415rpx;
	background-size: 100% 100%;
	width: 100%;
	-webkit-filter: blur(3px);
	-moz-filter: blur(3px);
	-o-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
	position: absolute;
}
.bg1{
	height: 415rpx;
}

/* 	        .bg {
	            background: url('1.jpg');
	            height:600px;
	            text-align: center;
	            line-height: 600px;
	        }
	        .bg-blur {
	            float: left;
	            width: 100%;
	            background-repeat: no-repeat;
	            background-position: center;
	            background-size: cover;
	            -webkit-filter: blur(15px);
	            -moz-filter: blur(15px);
	            -o-filter: blur(15px);
	            -ms-filter: blur(15px);
	            filter: blur(15px);
	        }
 */
.qd {
	width: 40rpx;
	height: 40rpx;
}
.qdbj {
	padding-top: 45rpx;
	margin-left: 675rpx;
	width: 40rpx;
	height: 40rpx;
	background-size: 100% 100%;
}
.hx {
	margin-top: 30rpx;
	margin-left: 30rpx;
	width: 690rpx;
	height: 155rpx;
}
.tx {
	width: 155rpx;
	height: 155rpx;
	border-radius: 150rpx;
	border: 4rpx solid #e5b582;
	position: absolute;
}
.zi {
	margin-top: 35rpx;
	margin-left: 190rpx;
	width: 180rpx;
	height: 75rpx;
	position: absolute;
}
.mz {
	font-size: 30rpx;
	color: #ffffff;
	/* position:absolute; */
}
.sjh {
	font-size: 25rpx;
	color: #ffffff;
	/* position:absolute; */
/* 	margin-top: 40rpx;
 */}
.yjt {
	width: 35rpx;
	height: 35rpx;
	margin-top: 75rpx;
	margin-left: 640rpx;
	
}
.yjt1 {
	width: 40rpx;
	height: 40rpx;
	margin-left: 450rpx;
}
.zuotu {
	width: 35rpx;
	height: 35rpx;
	margin-left: 30rpx;
}
.hx2 {
	height: 100rpx;
	background-color: #ffffff;
	align-items: center;
}
.jf {
	margin-left: 20rpx;
	font-size: 30rpx;
	color: #000000;
}
.jf2 {
	margin-left: 420rpx;
	font-size: 30rpx;
	color: #e5b582;
}
.dl {
	border-radius: 15rpx;
	line-height: 85rpx;
	background-color: #8a5421;
	font-size: 32rpx;
	margin-left: 30rpx;
	margin-right: 30rpx;
	margin-top: 233rpx;
	color: #ffffff;
	font-size: 35rpx;
}
</style>
