<template>
	<view class="dimian">
		<view class="di1" v-for="(item, index) in arrayList" :key="index">
			<view class="hang1 uni-flex uni-row">
				<text class="zi1">{{ item.xingming }}</text>
				<text class="zi2">{{item.dianhua}}</text>
			</view>
			<text class="zi3">{{ item.xiangxidizhi }}</text>
			<view class="hang2"></view>
			<view class="hang3 uni-flex uni-row">
				<radio class="tu1 r2" value="r2" :checked="item.moren" color="#896744" @tap="jizhumima(index)" />
				<text class="zi4 " @tap="jizhumima(index)">默认地址</text>
				<image class="tu1 bianji" src="../../static/xuanzeshouhuodizhi/icon_bj_shdz.png" mode="aspectFit"></image>
				<text class="zi4">编辑</text>
				<image class="tu1 shanchu" src="../../static/xuanzeshouhuodizhi/icon_sc_shdz.png" @click="shanchu(index)" mode="aspectFit"></image>
				<text class="zi4" @click="shanchu(index)">删除</text>
			</view>
		</view>

		<!-- 		<view class="di1" style="margin-top: 20rpx;">
			<view class="hang1 uni-flex uni-row">
				<text class="zi1">刘夏</text>
				<text class="zi2">12345678910</text>
			</view>
			<text class="zi3">江苏省徐州市铜山区北京路111号</text>
			<view class="hang2"></view>
			<view class="hang3 uni-flex uni-row">
				<radio class="tu1 r2" value="r2" :checked="check1" color="#896744" @tap="jizhumima1" />
				<text class="zi4" @tap="jizhumima1">默认地址</text>
				<image  class="tu1 bianji" src="../../static/xuanzeshouhuodizhi/icon_bj_shdz.png" mode="aspectFit"></image>
				<text class="zi4">编辑</text>
				<image  class="tu1 shanchu" src="../../static/xuanzeshouhuodizhi/icon_sc_shdz.png" mode="aspectFit"></image>
				<text class="zi4">删除</text>
			</view>
		</view> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			check0: true,
			check1: false,
			jihe: {xingming:'',dianhua:'',xiangxidizhi:'',moren:false},
			arrayList: [
				{
					xingming: '张三',
					dianhua: '12345678910',
					xiangxidizhi: 'XX省XX市XX区XX镇XX村XX号',
					moren: true
				},
				{
					xingming: '张三',
					dianhua: '12345678910',
					xiangxidizhi: 'XX省XX市XX区XX镇XX村XX号',
					moren: false
				}
			]
		};
	},
	onNavigationBarButtonTap(e) {
		uni.navigateTo({
			url: '../tianjiashouhuodizhi/tianjiashouhuodizhi'
		});
	},
	methods: {
		shanchu(index){
			this.arrayList.splice(index, 1);
		},
		jizhumima(index) {
			for (let i = 0; i < this.arrayList.length; i++) {
				this.arrayList[i].moren = false;
			}
			this.arrayList[index].moren = true;
		}
	},
	onLoad() {
			if (getApp().globalData.shouhuorenmingcheng != '') {
				this.jihe.xingming = getApp().globalData.shouhuorenmingcheng;
				this.jihe.dianhua = getApp().globalData.shouhuorenshoujihao;
				this.jihe.xiangxidizhi = getApp().globalData.shouhuorenxiangxidizhi;
				this.jihe.moren = getApp().globalData.shouhuorenmoren;
				this.arrayList.push(this.jihe);
				if (getApp().globalData.shouhuorenmoren) {
					for (let i = 0; i < this.arrayList.length-1; i++) {
						this.arrayList[i].moren = false;
					}
				}
			}
			/* this.arrayList.push(this.jihe);
			if (this.jihe.moren) {
				for (let i = 0; i < this.arrayList.length; i++) {
					this.arrayList[i].moren = false;
				}
			} */
	}
};
</script>

<style>
.dimian {
	background-color: #f7f7f7;
	height: 1197rpx;
}
.di1 {
	height: 205rpx;
	background-color: #ffffff;
}
.hang1 {
	padding-top: 25rpx;
	margin-left: 30rpx;
	margin-right: 30rpx;
}
.zi1 {
	font-size: 30rpx;
	color: #000000;
}
.zi2 {
	font-size: 30rpx;
	color: #000000;
	margin-left: 75rpx;
}
.zi3 {
	margin-left: 30rpx;
	font-size: 27rpx;
	color: #000000;
}
.hang2 {
	height: 3rpx;
	background-color: #f7f7f7;
	margin-left: 30rpx;
	margin-right: 30rpx;
}
.hang3 {
	height: 75rpx;
	margin-left: 30rpx;
	margin-right: 30rpx;
	align-items: center;
}
.tu1 {
	width: 35rpx;
	height: 35rpx;
}
.bianji {
	margin-left: 300rpx;
}
.shanchu {
	margin-left: 20rpx;
}
.r2 {
	transform: scale(0.7);
	margin-top: -15rpx;
}
.zi4 {
	margin-left: 15rpx;
	font-size: 25rpx;
	color: #929292;
}
</style>
