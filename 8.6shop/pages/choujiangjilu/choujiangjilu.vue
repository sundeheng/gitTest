<template>
	<view class="content">
		<view class="ceng2" v-for="(item, index) in choujiangjilu" :key="index">
			<view class="ceng1 uni-flex uni-row ">
				<view class="shijianzi">{{ item.shijian }}</view>
				<view class="jifenzi">{{ item.jifen }}</view>
			</view>
			<view class="ceng1 uni-flex uni-row ">
				<view class="jiangpinzi">{{ item.miaoshu }}</view>
				<view class="lingquanniu">
					<uni-fav
						:checked="checkList[index]"
						:content-text="contentText"
						star="false"
						class="favBtn"
						@click="favClick(index)"
						bg-color="#8a5421"
						bg-color-checked="#e5e5e5"
						fg-color="#ffffff"
						fg-color-checked="#ffffff"
					/>
				</view>
			</view>
			<view class="ceng1 uni-flex uni-row"></view>
		</view>
	</view>
</template>

<script>
import uniFav from '@/components/uni-fav/uni-fav.vue'
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
export default {
	components: {
		uniFav,
		uniNavBar
	},
	data() {
		return {
			choujiangjilu:[
				{
					shijian:'2019-10-07 16:00:00',
					jifen:'-500积分',
					miaoshu:'获得***奖品*1'
				},
				{
					shijian:'2019-10-07 16:00:00',
					jifen:'-500积分',
					miaoshu:'获得***奖品*1'
				},
				{
					shijian:'2019-10-07 16:00:00',
					jifen:'-500积分',
					miaoshu:'获得***奖品*1'
				}
			],
			checkList: [true],
			contentText: {
				contentDefault: '领取',
				contentFav: '已领取'
			}
		}
	},
	methods: {
		favClick(index) {
			if(this.checkList[index] == true){
				this.checkList[index] == this.checkList[index];
			}else{
				this.checkList[index] = !this.checkList[index];
			}
			this.$forceUpdate()
		}
	}
}
</script>

<style>
.content {
	width: 750rpx;
	height: 1160rpx;
	background-color: #e5e5e5;
}
.ceng1 {
	margin-left: 30rpx;
	margin-right: 30rpx;
}
.ceng2 {
	margin-top: 20rpx;
	height: 116rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
}
.shijianzi {
	font-size: 25rpx;
	color: #989898;
}
.jifenzi {
	font-size: 25rpx;
	color: #896477;
	margin-left: 310rpx;
}
.jiangpinzi {
	font-size: 28rpx;
	color: #000000;
}
.lingquanniu {
	margin-left: 360rpx;
}
</style>
