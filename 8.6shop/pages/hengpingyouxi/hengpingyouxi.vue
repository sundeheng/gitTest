<template>
	<view class="content">
		<view class="content1" :style="{ backgroundImage: 'url(' + imageURL + ')' }">
			<view class="content3 uni-flex uni-row">
				<view><image src="../../static/hengpingyouxi/wanjiatouxiang.jpg" mode="aspectFit" class="touxiang"></image></view>
				<view style="color: #FFFFFF;font-size: 30rpx;margin-left: 20rpx;margin-top: 20rpx;">{{ nicheng }}</view>
				<view class="toubujifen uni-flex uni-row">
					<image src="../../static/hengpingyouxi/icon_jb_yx.png" mode="aspectFit" style="width: 50rpx;height: 50rpx;"></image>
					<view class="jifen">{{ jifen }}</view>
				</view>
				<view class="caidan" @tap="togglePopup"><image src="../../static/hengpingyouxi/btn_gd_yx.png" mode="aspectFit" class="caidantu"></image></view>
			</view>
			<view class="content2" :style="{ backgroundImage: 'url(' + imageURL1 + ')' }">
				<view class="content4 uni-flex uni-row">
					<view class="AItouxiang">
						<image src="../../static/hengpingyouxi/AItouxiang.jpg" mode="aspectFit" class="AItouxiangtu"></image>
						<view class="AImingcheng">供货方</view>
						<view class="AIjifen">3000</view>
					</view>
					<view class="AIkapai" :style="{ backgroundImage: 'url(' + imageURLKPBJ + ')' }">
						<view class="kapaishuliang">{{ kapaishuliang }}</view>
					</view>
					<view class="jiaofen">
						<view class="AIjiaofen" :style="{ backgroundImage: 'url(' + imageURLAIJF + ')' }"></view>
						<!-- <view class="AIchupai" :style="{ backgroundImage: 'url(' + imageURLAICP + ')' }"></view> -->
					</view>
					<view class="dipai uni-flex uni-row">
						<view class="dipai1" :style="{ backgroundImage: 'url(' + imageURLKPBJ + ')' }"></view>
						<view class="dipai2" :style="{ backgroundImage: 'url(' + imageURLKPBJ + ')' }"></view>
						<view class="dipai3" :style="{ backgroundImage: 'url(' + imageURLKPBJ + ')' }"></view>
					</view>
					<view class="jiaofen1"><view class="AIjiaofen" :style="{ backgroundImage: 'url(' + imageURLAIJF1 + ')' }"></view></view>
					<view class="AIkapai1" :style="{ backgroundImage: 'url(' + imageURLKPBJ + ')' }">
						<view class="kapaishuliang">{{ kapaishuliang }}</view>
					</view>
					<view class="AItouxiang1">
						<image src="../../static/hengpingyouxi/AItouxiang.jpg" mode="aspectFit" class="AItouxiangtu"></image>
						<view class="AImingcheng">供货方</view>
						<view class="AIjifen">3000</view>
					</view>
				</view>
				<view class="fenshujibei uni-flex uni-row">
					<view class="fenshu1" :style="{ backgroundImage: 'url(' + imageURLFS1 + ')' }"></view>
					<view class="fenshu2" :style="{ backgroundImage: 'url(' + imageURLFS2 + ')' }"></view>
				</view>
				<view class="WJjiaofen uni-flex uni-row">
					<view class="dizhu" :style="{ backgroundImage: 'url(' + imageURLDZ + ')' }"></view>
					<view class="jiabei" :style="{ backgroundImage: 'url(' + imageURLJB + ')' }"></view>
					<view class="zhongbiao" :style="{ backgroundImage: 'url(' + imageURLZB + ')' }">
						<view class="daojishi">{{ daojishi }}</view>
					</view>
					<view class="bujiabei" :style="{ backgroundImage: 'url(' + imageURLBJB + ')' }"></view>
				</view>
				<view class="WJkapai uni-flex uni-row">
					<view class="WJtouxiang">
						<image src="../../static/hengpingyouxi/wanjiatouxiang.jpg" mode="aspectFit" class="touxiang1"></image>
						<view class="AImingcheng">{{ nicheng }}</view>
					</view>
					<view class="kapailan uni-flex uni-row">
						<view class="kapai" style="margin-left: 45rpx;" :style="{ backgroundImage: 'url(' + imageURLPK1 + ')' }"></view>
						<view class="kapai" style="margin-left: 90rpx;" :style="{ backgroundImage: 'url(' + imageURLPK2 + ')' }"></view>
						<view class="kapai" style="margin-left: 135rpx;" :style="{ backgroundImage: 'url(' + imageURLPK3 + ')' }"></view>
						<view class="kapai" style="margin-left: 180rpx;" :style="{ backgroundImage: 'url(' + imageURLPK4 + ')' }"></view>
						<view class="kapai" style="margin-left: 225rpx;" :style="{ backgroundImage: 'url(' + imageURLPK5 + ')' }"></view>
						<view class="kapai" style="margin-left: 270rpx;" :style="{ backgroundImage: 'url(' + imageURLPK6 + ')' }"></view>
						<view class="kapai" style="margin-left: 315rpx;" :style="{ backgroundImage: 'url(' + imageURLPK7 + ')' }"></view>
						<view class="kapai" style="margin-left: 360rpx;" :style="{ backgroundImage: 'url(' + imageURLPK8 + ')' }"></view>
						<view class="kapai" style="margin-left: 405rpx;" :style="{ backgroundImage: 'url(' + imageURLPK9 + ')' }"></view>
						<view class="kapai" style="margin-left: 450rpx;" :style="{ backgroundImage: 'url(' + imageURLPK10 + ')' }"></view>
						<view class="kapai" style="margin-left: 495rpx;" :style="{ backgroundImage: 'url(' + imageURLPK11 + ')' }"></view>
						<view class="kapai" style="margin-left: 540rpx;" :style="{ backgroundImage: 'url(' + imageURLPK12 + ')' }"></view>
						<view class="kapai" style="margin-left: 585rpx;" :style="{ backgroundImage: 'url(' + imageURLPK13 + ')' }"></view>
						<view class="kapai" style="margin-left: 630rpx;" :style="{ backgroundImage: 'url(' + imageURLPK14 + ')' }"></view>
						<view class="kapai" style="margin-left: 675rpx;" :style="{ backgroundImage: 'url(' + imageURLPK15 + ')' }"></view>
						<view class="kapai" style="margin-left: 720rpx;" :style="{ backgroundImage: 'url(' + imageURLPK16 + ')' }"></view>
						<view class="kapai" style="margin-left: 765rpx;" :style="{ backgroundImage: 'url(' + imageURLPK17 + ')' }"></view>
						<view class="kapai" style="margin-left: 810rpx;" :style="{ backgroundImage: 'url(' + imageURLPK18 + ')' }"></view>
						<view class="kapai" style="margin-left: 855rpx;" :style="{ backgroundImage: 'url(' + imageURLPK19 + ')' }"></view>
						<view class="kapai" style="margin-left: 900rpx;" :style="{ backgroundImage: 'url(' + imageURLPK20 + ')' }"></view>
					</view>
				</view>
			</view>
		</view>
		<!-- <uni-popup :show="show" class="tanchuceng">
			<view class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
				<image
					@tap="togglePopup1"
					style="width: 75rpx;height: 75rpx; margin-bottom: -45rpx; margin-right: -8rpx;"
					src="../../static/youxiguize/icon_gb_yxgz.png"
					mode="aspectFit"
				></image>
			</view>
			<view class="shezhitanchu " :style="{ backgroundImage: 'url(' + imageURLSZBJ + ')' }">
				<view><image class="tuichu" @tap="tuichu" src="../../static/youxishezhi/btn_tcyx_sz.png" mode="aspectFit"></image></view>
			</view>
		</uni-popup> -->
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
			show: false,
			nicheng: '张三',
			jifen: '30000',
			kapaishuliang: '17',
			daojishi: '10',
			imageURL: '/static/hengpingyouxi/img_bj_yx.png',
			imageURL1: '/static/hengpingyouxi/img_qp_yx.png',
			imageURLKPBJ: '/static/hengpingyouxi/icon_bm_yx.png',
			imageURLAIJF: '/static/hengpingyouxi/icon_bjb_yx.png',
			imageURLAIJF1: '/static/hengpingyouxi/icon_jb_yx_19.png',
			imageURLFS2: '/static/hengpingyouxi/icon_x4.png',
			imageURLFS1: '/static/hengpingyouxi/icon_x3.png',
			imageURLDZ: '/static/hengpingyouxi/icon_dz_yx.png',
			imageURLJB: '/static/hengpingyouxi/btn_jb_yx.png',
			imageURLZB: '/static/hengpingyouxi/icon_djs_yx.png',
			imageURLBJB: '/static/hengpingyouxi/btn_bjb_yx.png',
			imageURLSZBJ: '/static/youxishezhi/img_sz_sz.png',

			imageURLPK1: '/static/kapai/poker_79.png',
			imageURLPK2: '/static/kapai/poker_78.png',
			imageURLPK3: '/static/kapai/poker_2.png',
			imageURLPK4: '/static/kapai/poker_18.png',
			imageURLPK5: '/static/kapai/poker_34.png',
			imageURLPK6: '/static/kapai/poker_50.png',
			imageURLPK7: '/static/kapai/poker_1.png',
			imageURLPK8: '/static/kapai/poker_17.png',
			imageURLPK9: '/static/kapai/poker_33.png',
			imageURLPK10: '/static/kapai/poker_49.png',
			imageURLPK11: '/static/kapai/poker_13.png',
			imageURLPK12: '/static/kapai/poker_29.png',
			imageURLPK13: '/static/kapai/poker_45.png',
			imageURLPK14: '/static/kapai/poker_61.png',
			imageURLPK15: '/static/kapai/poker_12.png',
			imageURLPK16: '/static/kapai/poker_28.png',
			imageURLPK17: '/static/kapai/poker_44.png',
			imageURLPK18: '/static/kapai/poker_60.png',
			imageURLPK19: '/static/kapai/poker_11.png',
			imageURLPK20: '/static/kapai/poker_27.png'
		};
	},
		methods: {
			togglePopup() {
					this.show = true
				},
				togglePopup1() {
						this.show = false
				},
				tuichu(){
					uni.reLaunch({
						url:'../youxi/youxi'
					})
				}
		},
	onShow() {
		plus.screen.lockOrientation('landscape-primary');
	}
};
</script>

<style>
.content1 {
	width: 1334rpx;
	height: 750rpx;
	background-size: 100% 100%;
	position: relative;
}
.content2 {
	width: 1334rpx;
	height: 578rpx;
	background-size: 100% 100%;
	position: relative;
}
.content3 {
	/* 	padding-left: 30rpx;
	padding-top: 15rpx; */
	width: 1334rpx;
	height: 172rpx;
}
.content4 {
	height: 200rpx;
	width: 1334rpx;
	/* 	background-color: #000000; */
	position: absolute;
}
.touxiang {
	margin-left: 30rpx;
	margin-top: 15rpx;
	width: 70rpx;
	height: 70rpx;
	border-radius: 150rpx;
	border: 4rpx solid #af9788;
}
.touxiang1 {
	margin-left: 22rpx;
	margin-top: 15rpx;
	width: 70rpx;
	height: 70rpx;
	border-radius: 150rpx;
	border: 4rpx solid #af9788;
}
.toubujifen {
	margin-left: 390rpx;
	margin-top: 25rpx;
	width: 205rpx;
	height: 50rpx;
	border-radius: 150rpx;
	border: 4rpx solid #af9788;
	position: absolute;
	background: rgba(0, 0, 0, 0.3);
}
.jifen {
	color: #ffffff;
	font-size: 30rpx;
	text-align: center;
	/* 	display: table-cell;/* 作为表格单元格显示 vertical-align:middle  属性起作用了。去掉display可就不行了哦！！ */
	/*vertical-align: middle; */
	margin-left: 10rpx;
}
.caidan {
	width: 65rpx;
	height: 65rpx;
	margin-top: 30rpx;
	margin-left: 1050rpx;
}
.caidantu {
	width: 65rpx;
	height: 65rpx;
}
.AItouxiang {
	height: 170rpx;
	width: 120rpx;
	border-radius: 15rpx;
	/* border: 4rpx solid #af9788; */
	background: rgba(0, 0, 0, 0.3);
	margin-left: 30rpx;
}
.WJtouxiang {
	height: 135rpx;
	width: 120rpx;
	border-radius: 15rpx;
	/* border: 4rpx solid #af9788; */
	background: rgba(0, 0, 0, 0.3);
	margin-left: 30rpx;
}
.AItouxiang1 {
	height: 170rpx;
	width: 120rpx;
	border-radius: 15rpx;
	/* border: 4rpx solid #af9788; */
	background: rgba(0, 0, 0, 0.3);
	margin-left: 40rpx;
}
.AItouxiangtu {
	margin-top: 10rpx;
	margin-left: 20rpx;
	width: 75rpx;
	height: 75rpx;
	border-radius: 150rpx;
	border: 4rpx solid #af9788;
}
.AImingcheng {
	text-align: center;
	color: #ffffff;
	font-size: 20rpx;
	margin-top: -10rpx;
}
.AIjifen {
	background: rgba(0, 0, 0, 0.3);
	border-radius: 10rpx;
	text-align: center;
	font-size: 20rpx;
	color: #ffb400;
	margin-left: 15rpx;
	margin-right: 15rpx;
	margin-bottom: -15rpx;
}
.AIkapai {
	background-size: 100% 100%;
	height: 105rpx;
	width: 75rpx;
	align-items: center;
	margin-left: 40rpx;
	margin-top: 40rpx;
}
.AIkapai1 {
	background-size: 100% 100%;
	height: 105rpx;
	width: 75rpx;
	align-items: center;
	margin-left: 35rpx;
	margin-top: 40rpx;
	/*	margin-top: 40rpx; */
}
.kapaishuliang {
	margin-top: 15rpx;
	font-size: 45rpx;
	color: #ffffff;
	text-align: center;
}
.dipai {
	margin-top: 90rpx;
	margin-left: 60rpx;
}
.dipai1 {
	background-size: 100% 100%;
	height: 105rpx;
	width: 75rpx;
	margin-left: 15rpx;
}
.dipai2 {
	background-size: 100% 100%;
	height: 105rpx;
	width: 75rpx;
	margin-left: 15rpx;
}
.dipai3 {
	background-size: 100% 100%;
	height: 105rpx;
	width: 75rpx;
	margin-left: 15rpx;
}
.jiaofen {
	height: 140rpx;
	width: 200rpx;
}
.AIjiaofen {
	height: 50rpx;
	width: 135rpx;
	background-size: 100% 100%;
	margin-left: 35rpx;
	margin-top: 85rpx;
}
.jiaofen1 {
	margin-left: 80rpx;
}
.fenshu1 {
	margin-left: 55rpx;
	height: 40rpx;
	width: 75rpx;
	/* 	background-color: #000000; */
	background-size: 100% 100%;
}
.fenshu2 {
	margin-left: 1080rpx;
	height: 40rpx;
	width: 75rpx;
	/* 	background-color: #000000; */
	background-size: 100% 100%;
}
.fenshujibei {
	margin-top: 190rpx;
	position: absolute;
}
.WJjiaofen {
	position: absolute;
	margin-top: 265rpx;
}
.dizhu {
	width: 75rpx;
	height: 75rpx;
	background-size: 100% 100%;
	margin-left: 200rpx;
}
.jiabei {
	height: 65rpx;
	width: 160rpx;
	background-size: 100% 100%;
	margin-left: 150rpx;
}
.zhongbiao {
	width: 85rpx;
	height: 85rpx;
	background-size: 100% 100%;
	margin-left: 30rpx;
}
.daojishi {
	color: #ef550a;
	font-size: 30rpx;
	margin-left: 23rpx;
	margin-top: 15rpx;
}
.bujiabei {
	height: 65rpx;
	width: 200rpx;
	background-size: 100% 100%;
	margin-left: 30rpx;
}
.WJkapai {
	margin-top: 365rpx;
	position: absolute;
}
.kapai {
	width: 130rpx;
	height: 185rpx;
	position: absolute;
	background-size: 100% 100%;
}
.shezhitanchu {
	width: 820rpx;
	height: 510rpx;
	background-size: 100% 100%;
}
.shezhitanchu {
	align-items: center;
}
.tuichu {
	width: 240rpx;
	height: 75rpx;

	
	/* position: relative; */
}
.tanchuceng{
	/* position: relative; */
	margin-top: -600rpx;
	position: fixed;
	/* position: relative; */
}
</style>
