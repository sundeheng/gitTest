<template>
	<view class="dimian">
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
			<text class="jf2">{{wdjf}}</text>
		</view>
		<view class="hx2 uni-flex uni-row" style="margin-top: 20rpx;" @tap="tiao1()">
			<image class="zuotu" src="../../static/wode/icon_dz_wd.png" mode="aspectFit"></image>
			<text class="jf">我的地址</text>
			<image class="yjt1" src="../../static/wode/youjiantou4.png" mode="aspectFit"></image>
		</view>
		<button class="dl" @click="tiao3">退出登录</button>
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false" @change="change">
			<view class="uni-flex uni-row tanchukuangchahao" >
			<view class="cha" @tap="cancel('tip')"><image src="../../static/qiandao/guanbi%201.png" mode="aspectFit" class="cha1"></image><view class="shugang"></view></view>
			</view>
			<view class="uni-tip">
				<view class="qiandao1"><image class="qiandao5" src="../../static/qiandao/bg_qd.png" mode="aspectFit"></image></view>
				<view class="qiandao2">
					<view class="qiandao6 uni-flex uni-row">
						<view class="dui" v-for="(item,index) in list" :key='index' v-show="item.tu" :style="{marginLeft: 125+(170*index)+'rpx'}"><image src="../../static/qiandao/icon_yqd_qd.png" mode="aspectFit" class="dui"></image></view>
					</view>
					<view class="qiandao7 uni-flex uni-row">
						<view class="uni-flex uni-row qiandao8" v-for="(item,index) in list" :key='index'>
							<view class="qiandaotu">
								<view class="qiandaozi">第{{index+1}}天</view>
								<view class="qiandaotu1"><image src="../../static/qiandao/icon_dzh_qd.png" mode="aspectFit" class="qiandaotu3"></image></view>
								<view class="qiandaotu2" v-show="item.tu"><image src="../../static/qiandao/icon_dzl_qd.png" mode="aspectFit" class="qiandaotu4"></image></view>
								<view class="qiandaojifen">+100积分</view>
							</view>
							<view class="hengxian1" v-show="item.huixian"></view>
							<view class="hengxian" v-show="item.huangxian"></view>
						</view>
					</view>
					<view class="qiandao6 uni-flex uni-row">
						<view class="dui" v-for="(item,index) in list1" :key='index' :style="{marginLeft: 210+(170*index)+'rpx'}" v-show="item.tu"><image src="../../static/qiandao/icon_yqd_qd.png" mode="aspectFit" class="dui"></image></view>
					</view>
					<view class="qiandao7 uni-flex uni-row">
						<view class="uni-flex uni-row qiandao8" v-for="(item,index) in list1" :key='index'>
							<view class="qiandaotu">
								<view class="qiandaozi">第{{5+index}}天</view>
								<view class="qiandaotu1"><image src="../../static/qiandao/icon_dzh_qd.png" mode="aspectFit" class="qiandaotu3"></image></view>
								<view class="qiandaotu2" v-show="item.tu"><image src="../../static/qiandao/icon_dzl_qd.png" mode="aspectFit" class="qiandaotu4"></image></view>
								<view class="qiandaojifen">+{{item.jifen}}积分</view>
							</view>
							<view class="hengxian1" v-show="item.huixian"></view>
							<view class="hengxian" v-show="item.huangxian"></view>
						</view>
					</view>
				</view>
				<view class="uni-flex uni-row lijiqiandaoanniu"><view class="qiandao3" @tap="lijiqiandao">立即签到</view></view>
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
			nicheng:'',
			shoujihao:'', 
			show: false,
			type: '',
			num:0,
			wdjf:11000,
			imageURL: '/static/wode/icon_wqd_wo.png',
			imageURLtx: '/static/wode/touxiang.jpg',
			list:[{huixian:true,huangxian:false,tu:false},{huixian:true,huangxian:false,tu:false},{huixian:true,huangxian:false,tu:false},{huixian:false,huangxian:false,tu:false}],
			list1:[{huixian:true,huangxian:false,tu:false,jifen:100},{huixian:true,huangxian:false,tu:false,jifen:100},{huixian:false,huangxian:false,tu:false,jifen:400}],
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
			/* 签到的 */
			lijiqiandao(){
				if (this.num === 0) {
					this.list[this.num].tu = true;
					this.list[this.num].huangxian = true;
					for (let i = 0; i < this.list1.length; i++) {
						this.list[i+1].tu = false;
						this.list[i+1].huangxian = false;
						this.list1[i].tu = false;
						this.list1[i].huangxian = false;
					}
					this.num++;
				}else if((this.num<3)&&(this.num>0)){
					this.list[this.num].tu = true;
					this.list[this.num].huangxian = true;
					this.num++;
				}else if (this.num===3) {
					this.list[this.num].tu = true;
					this.list[this.num].huangxian = false;
					this.num++;
				}else if((this.num >=4)&&(6>this.num)){
					this.list1[this.num-4].tu = true;
					this.list1[this.num-4].huangxian = true;
					this.num++;
				}else if(this.num === 6){
					this.list1[this.num-4].tu = true;
					this.list1[this.num-4].huangxian = false;
					this.num = 0;
				}
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
	.dimian{
		background-color: #F7F7F7; height: 1220rpx;
	}
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
	width: 150rpx;
	text-align: right;
	margin-left: 340rpx;
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
		-webkit-justify-content: center;justify-content: center;
		height: 175rpx;
		align-items: center;
	}
	.qiandao8{
		-webkit-justify-content: center;justify-content: center;
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
	.qiandaotu3{
		height: 70rpx;
		width: 65rpx;
	}
	.qiandaotu4{
		height: 70rpx; 
		width: 75rpx;
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
	.lijiqiandaoanniu{
		-webkit-justify-content: center;justify-content: center; margin-top: 225rpx;
	}
	.dui{
		position: absolute;
		width: 30rpx;
		height: 30rpx;
		margin-top: 5rpx;
	}
	.tanchukuangchahao{
		-webkit-justify-content: flex-end;justify-content: flex-end;
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
