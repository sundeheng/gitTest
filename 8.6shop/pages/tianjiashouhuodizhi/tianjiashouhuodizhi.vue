<template>
	<view class="dimian">
		<view class="hang1">
			<view class="hang3 uni-flex uni-row">
				<text class="zi11">收货人</text>
				<input @input="inpshouhuoren" type="text" placeholder="请输入收件人姓名" placeholder-class="kuang1" class="kuang"/>
			</view>
			<view class="hang2"></view>
			<view class="hang3 uni-flex uni-row">
				<text class="zi1">手机号码</text>
				<input @input="inpshoujihao" type="number" placeholder="请输入手机号" placeholder-class="kuang1" class="kuang"/>
			</view>
			<view class="hang2"></view>
			<view class="hang3 uni-flex uni-row">
				<text class="zi1">所在地区</text>
				<!-- <input type="text" placeholder="请输入收件人姓名" placeholder-class="kuang1" class="kuang"/> -->
				<picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
					<view class="kuang xiala">{{multiArray[0][multiIndex[0]]}} {{multiArray[1][multiIndex[1]]}}</view>
				</picker>
				<image class="yjt1" src="../../static/wode/youjiantou4.png" mode="aspectFit"></image>
			
			</view>
			<view class="hang2"></view>
			<view class="hang3 uni-flex uni-row">
				<text class="zi1">详细地址</text>
				<input @input="inpxiangxidizhi" type="text" placeholder="请输入详细住址" placeholder-class="kuang1" class="kuang"/>
			</view>
		</view>
		<view class="hang3 uni-flex uni-row morendizhi" >
			<text class="zi1">设为默认地址</text>
			<switch @change="shifoumoren" color="#8a5421" class="duihao"/>
		</view>
		<button class="dl" @click="baocun">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shoujihao:'',
				shouhuoren:'',
				xiangxizhuzhi:'',
				moren:false,
				title: 'picker',
				multiArray: [
					['山东省', '广东省','江苏省'],
					['济南市', '淄博市' ,'烟台市','青岛市'],
				],
				multiIndex: [0, 0, 0],
			}
		},
		methods: {
			bindMultiPickerColumnChange: function(e) {
				console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value)
				this.multiIndex[e.detail.column] = e.detail.value
				switch (e.detail.column) {
					case 0: //拖动第1列
						switch (this.multiIndex[0]) {
							case 0:
								this.multiArray[1] = ['济南市', '淄博市','烟台市','青岛市']
								break
							case 1:
								this.multiArray[1] = ['汕头市', '深圳市','广州市','珠海市']
								break
							case 2:
								this.multiArray[1] = ['徐州市', '无锡市','连云港市','南京市']
						}
						this.multiIndex.splice(1, 1, 0)
						this.multiIndex.splice(2, 1, 0)
						/* this.multiIndex.splice(2, 1, 0) */
						break
				}
				this.$forceUpdate()
			},
			baocun(){
				uni.navigateTo({
					url:'../xuanzeshouhuodizhi/xuanzeshouhuodizhi'
				})
			},
			inpshoujihao:function(e){
				this.shoujihao = e.detail.value;
				getApp().globalData.shouhuorenshoujihao = this.shoujihao;
			},
			inpshouhuoren:function(e){
				this.shouhuoren = e.detail.value;
				getApp().globalData.shouhuorenmingcheng = this.shouhuoren;
			},
			inpxiangxidizhi:function(e){
				this.xiangxizhuzhi = e.detail.value;
				getApp().globalData.shouhuorenxiangxidizhi = this.xiangxizhuzhi;
			},
			shifoumoren:function(e){
				this.moren = !this.moren;
				getApp().globalData.shouhuorenmoren = this.moren;
			}
		}
	}
</script>

<style>
	.dimian{
		background-color: #F7F7F7; height: 1197rpx;
	}
	.hang1{
		background-color: #FFFFFF;
	}
.hang3{
	padding-left: 20rpx;
	height: 80rpx;
	align-items: center;
	background-color: #FFFFFF;
}
.morendizhi{
	margin-top: 20rpx;
}
.duihao{
	transform: scale(0.8);margin-left: 430rpx;
}
.hang2{
	height: 3rpx;
	background-color: #F7F7F7;
	margin-left: 155rpx;
	margin-right: 30rpx;
}
.dl {
		border-radius: 15rpx;
		line-height: 85rpx;
		background-color: #8a5421;
		font-size: 32rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-top: 233rpx;
		color: #FFFFFF;
		font-size: 35rpx;
	}
	.zi1{
		font-size: 28rpx;
		color: #000000;
		text-align: left;
	}
	.zi11{
		letter-spacing: 10rpx;
		font-size: 28rpx;
		color: #000000;
		text-align: left;
	}
	.kuang1{
		font-size: 25rpx;
		color: #929292;
	}
	.kuang{
		width: 400rpx;
		margin-left: 60rpx;
		font-size: 28rpx;
		color: #1C1C1C;
	}
	.xiala{
		font-size: 25rpx;width: 480rpx;
	}
	.yjt1{
		width: 35rpx;
		height: 35rpx;
	}
</style>
