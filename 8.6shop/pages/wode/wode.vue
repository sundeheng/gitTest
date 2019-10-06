<template>
	<view style="background-color: #F7F7F7; height: 1334rpx;">
		<view class="bg" :style="{ backgroundImage: 'url(' + imageURLtx + ')' }"></view>
		<view class="bg1">
			<view @tap="togglePopup('center', 'tip')" class="qdbj" :style="{ backgroundImage: 'url(' + imageURL + ')' }"><image class="qd" src="../../static/wode/icon_yqd_wd.png" mode="aspectFit"></image></view>
			<!-- 横向的手机号输入框div -->
			<view class="hx uni-flex uni-row" @tap="tiao">
				<image class="tx" src="../../static/wode/touxiang.jpg" mode="aspectFit"></image>
				<view class="zi">
					<text class="mz">{{nicheng}}\n</text>
					<text class="sjh">{{shoujihao}}</text>
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
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false" @change="change">
			<view class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
			<view class="cha" @tap="cancel('tip')"><image src="../../static/qiandao/guanbi%201.png" mode="aspectFit" class="cha1"></image><view class="shugang"></view></view>
			</view>
			<view class="uni-tip">
				<view class="qiandao1"><image class="qiandao5" src="../../static/qiandao/bg_qd.png" mode="aspectFit"></image></view>
				<view class="qiandao2">
					<view class="qiandao6 uni-flex uni-row">
						<view class="dui" style="margin-left: 125rpx;" v-show="dui1"><image src="../../static/qiandao/icon_yqd_qd.png" mode="aspectFit" class="dui"></image></view>
						<view class="dui" style="margin-left: 297rpx;" v-show="dui2"><image src="../../static/qiandao/icon_yqd_qd.png" mode="aspectFit" class="dui"></image></view>
						<view class="dui" style="margin-left: 460rpx;" v-show="dui3"><image src="../../static/qiandao/icon_yqd_qd.png" mode="aspectFit" class="dui"></view>
						<view class="dui" style="margin-left: 625rpx;" v-show="dui4"><image src="../../static/qiandao/icon_yqd_qd.png" mode="aspectFit" class="dui"></view>
					</view>
					<view class="qiandao7 uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
						<view class="qiandaotu">
							<view class="qiandaozi">第1天</view>
							<view class="qiandaotu1"><image src="../../static/qiandao/icon_dzh_qd.png" mode="aspectFit" style="height: 70rpx; width: 65rpx;"></image></view>
							<view class="qiandaotu2" v-show="tu1"><image src="../../static/qiandao/icon_dzl_qd.png" mode="aspectFit" style="height: 70rpx; width: 75rpx;"></image></view>
							<view class="qiandaojifen">+100积分</view>
						</view>
						<view class="hengxian1"></view>
						<view class="hengxian" v-show="xian1"></view>
						<view class="qiandaotu">
							<view class="qiandaozi">第2天</view>
							<view class="qiandaotu1"><image src="../../static/qiandao/icon_dzh_qd.png" mode="aspectFit" style="height: 70rpx; width: 65rpx;"></image></view>
							<view class="qiandaojifen">+100积分</view>
						</view>
						<view class="hengxian1"></view>
						<view class="qiandaotu">
							<view class="qiandaozi">第3天</view>
							<view class="qiandaotu1"><image src="../../static/qiandao/icon_dzh_qd.png" mode="aspectFit" style="height: 70rpx; width: 65rpx;"></image></view>
							<view class="qiandaojifen">+100积分</view>
						</view>
						<view class="hengxian1"></view>
						<view class="qiandaotu">
							<view class="qiandaozi">第4天</view>
							<view class="qiandaotu1"><image src="../../static/qiandao/icon_dzh_qd.png" mode="aspectFit" style="height: 70rpx; width: 65rpx;"></image></view>
							<view class="qiandaojifen">+100积分</view>
						</view>
					</view>
					<view class="qiandao6 uni-flex uni-row">
						<view class="dui" style="margin-left: 210rpx;" v-show="dui7"><image src="../../static/qiandao/icon_yqd_qd.png" mode="aspectFit" class="dui"></view>
						<view class="dui" style="margin-left: 375rpx;" v-show="dui6"><image src="../../static/qiandao/icon_yqd_qd.png" mode="aspectFit" class="dui"></view>
						<view class="dui" style="margin-left: 550rpx;" v-show="dui5"><image src="../../static/qiandao/icon_yqd_qd.png" mode="aspectFit" class="dui"></view>
					</view>
					<view class="qiandao7 uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
						<view class="qiandaotu">
							<view class="qiandaozi">第7天</view>
							<view class="qiandaotu1"><image src="../../static/qiandao/icon_dzh_qd.png" mode="aspectFit" style="height: 70rpx; width: 65rpx;"></image></view>
							<view class="qiandaojifen" style="color: #ef9143;">+400积分</view>
						</view>
						<view class="hengxian1"></view>
						<view class="qiandaotu">
							<view class="qiandaozi">第6天</view>
							<view class="qiandaotu1"><image src="../../static/qiandao/icon_dzh_qd.png" mode="aspectFit" style="height: 70rpx; width: 65rpx;"></image></view>
							<view class="qiandaojifen">+100积分</view>
						</view>
						<view class="hengxian1"></view>
						<view class="qiandaotu">
							<view class="qiandaozi">第5天</view>
							<view class="qiandaotu1"><image src="../../static/qiandao/icon_dzh_qd.png" mode="aspectFit" style="height: 70rpx; width: 65rpx;"></image></view>
							<view class="qiandaojifen">+100积分</view>
						</view>
						<!-- <view class="hengxian"></view>
						<view class="qiandaotu">
							<view class="qiandaozi">第1天</view>
							<view class="qiandaotu1"><image src="../../static/qiandao/icon_dzh_qd.png" mode="aspectFit" style="height: 70rpx; width: 65rpx;"></image></view>
							<view class="qiandaojifen">+100积分</view>
						</view> -->
					</view>
				</view>
				<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center; margin-top: 225rpx;"><view class="qiandao3" @tap="lijiqiandao">立即签到</view></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup,
		},
	data() {
		return {
			dui1:false,
			dui2:false,
			dui3:false,
			dui4:false,
			dui5:false,
			dui6:false,
			dui7:false,
			tu1:false,
			xian1:false,
			nicheng:'',
			shoujihao:'', 
			show: false,
			type: '',
			imageURL: '/static/wode/icon_wqd_wo.png',
			imageURLtx: '/static/wode/touxiang.jpg',
		};
	},
	methods: {
		togglePopup(type, open) {
			this.type = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			cancel(type) {
				if (type === 'tip') {
					this.show = false
					return
				}
				this.$refs[type].close()
			},
			change(e) {
				console.log(e.show)
			},
			lijiqiandao(){
				this.dui1=true;
				this.tu1=true;
				this.xian1=true;
			},
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
	},
	onShow() {
		this.shoujihao = getApp().globalData.shoujihao;
		this.nicheng = getApp().globalData.nicheng;
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
	position: absolute;
}
.hx {
	padding-top: 120rpx;
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
	position: absolute;
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
	/* 提示窗口 */
	.uni-tip {
		width: 700rpx;
		height: 850rpx;
		background: #fff;
		box-sizing: border-box;
		border-radius: 20rpx;
		align-items: center;
	}
	.qiandao1{
		height: 230rpx;
		background-color: #b38350;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
	}
	.qiandao2{
		height: 230rpx;
	}
	.qiandao3{
		height: 90rpx;
		width: 400rpx;
		background-color: #c17a37;
		font-size: 40rpx;
		color: #FFFFFF;
		border-radius: 50rpx;
		padding-top: 10rpx;
	}
	.qiandao5{
		height: 230rpx;
	}
	.qiandao6{
		height: 25rpx;
		margin-top: 30rpx;
	}
	.qiandao7{
		height: 175rpx;
		align-items: center;
	}
	.qiandaotu{
		width: 120rpx;
		height: 185rpx;
		/* background-color: #000000; */
		/* border-radius: 20rpx; */
	}
	.hengxian{
		margin-top: 87rpx;
		margin-left: -50rpx;
		position: absolute;
		width: 50rpx;
		height: 5rpx;
		background-color: #DD524D;
	}
	.hengxian1{
		width: 50rpx;
		height: 5rpx;
		background-color: #d1d5d1;
	}
	.qiandaozi{
		color: #FFFFFF;
		font-size: 30rpx;
		background-color: #b68655;
		height: 50rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
	}
	.qiandaotu1{
		background-color: #fae4cf;
		height: 100rpx;
		align-items: center;
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
	}
	.qiandaotu2{
		position: absolute;
		background-color: #fae4cf;
		height: 100rpx;
		margin-top: -100rpx;
		margin-left: 20rpx;
	}
	.qiandaojifen{
		color: #d1d5d1;
		font-size: 20rpx;
	}
	.dui{
		position: absolute;
		width: 30rpx;
		height: 30rpx;
		margin-top: 5rpx;
	}
	.cha{
		width: 40rpx;
		height: 80rpx;
		align-items: center;
	}
	.cha1{
		width: 40rpx;
		height: 40rpx;
		margin-left: -35rpx;
		}
	.shugang{
		background-color: #FFFFFF;
		width: 5rpx;
		height: 40rpx;
		margin-top: -15rpx;
	}
</style>
