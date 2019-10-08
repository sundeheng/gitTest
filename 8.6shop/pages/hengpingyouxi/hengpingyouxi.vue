<template>
	<view class="content">
		<view class="content1" :style="{ backgroundImage: 'url(' + imageURL + ')' }">
			<view class="content3 uni-flex uni-row">
				<!-- 玩家左上角的头像-点击可弹出计分板 -->
				<view @tap="tanchucengJFBBT"><image src="../../static/hengpingyouxi/wanjiatouxiang.jpg" mode="aspectFit" class="touxiang"></image></view>
				<view class="nicheng">{{ nicheng }}</view>
				<!-- 顶部中间的金币 -->
				<view class="toubujifen uni-flex uni-row">
					<image class="jifenbiaozhi" src="../../static/hengpingyouxi/icon_jb_yx.png" mode="aspectFit"></image>
					<view class="jifen">{{ jifen }}</view>
				</view>
				<!-- 右上角菜单键 -->
				<view class="caidan" @tap="tanchucengSZBT"><image src="../../static/hengpingyouxi/btn_gd_yx.png" mode="aspectFit" class="caidantu"></image></view>
			</view>
			<view class="content2" :style="{ backgroundImage: 'url(' + imageURL1 + ')' }">
				<view class="content4 uni-flex uni-row">
					<!-- 上家的头像以一系列东西 -->
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
					<!-- AI出的牌 -->
					<!--<view class="chupai">
						<view class="pai" :style="{ backgroundImage: 'url(' + imageURLPK20 + ')' }"></view>
						<view class="pai" style="margin-left: 30rpx;" :style="{ backgroundImage: 'url(' + imageURLPK20 + ')' }"></view>
					</view> -->
					<!-- AI出的牌 -->
					<!-- <view class="chupai1">
						<view class="pai" :style="{ backgroundImage: 'url(' + imageURLPK20 + ')' }"></view>
						<view class="pai" style="margin-left: 30rpx;" :style="{ backgroundImage: 'url(' + imageURLPK20 + ')' }"></view>
					</view> -->
					<!-- <view class="dipai uni-flex uni-row">
						<view class="dipai1" :style="{ backgroundImage: 'url(' + imageURLKPBJ + ')' }"></view>
						<view class="dipai2" :style="{ backgroundImage: 'url(' + imageURLKPBJ + ')' }"></view>
						<view class="dipai3" :style="{ backgroundImage: 'url(' + imageURLKPBJ + ')' }"></view>
					</view> -->
					<view class="jiaofen1"><view class="AIjiaofen" :style="{ backgroundImage: 'url(' + imageURLAIJF1 + ')' }"></view></view>
					<view class="AIkapai1" :style="{ backgroundImage: 'url(' + imageURLKPBJ + ')' }">
						<view class="kapaishuliang">{{ kapaishuliang }}</view>
					</view>
					<!-- 下家的头像以及一系列东西 -->
					<view class="AItouxiang1">
						<image src="../../static/hengpingyouxi/AItouxiang.jpg" mode="aspectFit" class="AItouxiangtu"></image>
						<view class="AImingcheng">供货方</view>
						<view class="AIjifen">3000</view>
					</view>
				</view>
				<!-- 上家下家叫的分数 -->
				<view class="fenshujibei uni-flex uni-row">
					<view class="fenshu1" :style="{ backgroundImage: 'url(' + imageURLFS1 + ')' }"></view>
					<view class="fenshu2" :style="{ backgroundImage: 'url(' + imageURLFS2 + ')' }"></view>
				</view>
				<!-- 玩家操作-加倍钟表不加倍 -->
				<!-- <view class="WJjiaofen uni-flex uni-row">
					<view class="dizhu" :style="{ backgroundImage: 'url(' + imageURLDZ + ')' }"></view>
					<view class="jiabei" @tap="tapjiabei" v-show="showjiabeianniu"   :style="{ backgroundImage: 'url(' + imageURLJB + ')' }"></view>
					<view class="zhongbiao" v-show="showzhongbiao" :style="{ backgroundImage: 'url(' + imageURLZB + ')' }">
						<view class="daojishi"  >{{ daojishi }}</view>
					</view>
					<view class="bujiabei" @tap="tapbujiabei" v-show="showbujiabeianniu" :style="{ backgroundImage: 'url(' + imageURLBJB + ')' }"></view> -->
				<!-- 玩家叫加倍以后的字 -->
				<!-- 					<view class="jiabeizi" v-show="showjiabei" :style="{ backgroundImage: 'url(' + imageURLAIJF1 + ')' }"></view> 
					<view class="jiabeizi" v-show="showbujiabei" :style="{ backgroundImage: 'url(' + imageURLAIJF + ')' }"></view> 
				 </view> -->

				<!-- 玩家操作-不叫一分二分三分 -->
				<!-- <view class="WJjiaofen uni-flex uni-row">
					<view class="zhongbiao1"  v-show="showjiaofenanniu" :style="{ backgroundImage: 'url(' + imageURLZB + ')' }">
						<view class="daojishi">{{ daojishi }}</view>
					</view>
					<view class="dizhu" :style="{ backgroundImage: 'url(' + imageURLDZ + ')' }"></view>
					<view class="bujiao" @tap="tapbujiao" v-show="showjiaofenanniu" :style="{ backgroundImage: 'url(' + imageURLBJ + ')' }"></view>
					<view class="jiaofenanniu" @tap="tapjiaofen" v-show="showjiaofenanniu"  :style="{ backgroundImage: 'url(' + imageURL1F + ')' }"></view>
					<view class="jiaofenanniu" @tap="tapjiaofen" v-show="showjiaofenanniu"  :style="{ backgroundImage: 'url(' + imageURL2F + ')' }"></view>
					<view class="jiaofenanniu" @tap="tapjiaofen" v-show="showjiaofenanniu"  :style="{ backgroundImage: 'url(' + imageURL3F + ')' }"></view> -->
				<!-- 玩家叫加倍以后的字 -->
				<!-- 					<view class="jiabeizi"  v-show="showbujiaozi" :style="{ backgroundImage: 'url(' + imageURLBJZ + ')' }"></view>
					<view class="jiabeizi" v-show="showjiaofenzi" :style="{ backgroundImage: 'url(' + imageURL2FZ + ')' }"></view>
			 	</view> -->
				<!-- 玩家操作-要不起 -->
				<!-- 	<view class="WJjiaofen uni-flex uni-row">
					<view class="zhongbiao1" v-show="showyaobuqianniu" :style="{ backgroundImage: 'url(' + imageURLZB + ')' }">
						<view class="daojishi">{{ daojishi }}</view>
					</view>
					<view class="dizhu" :style="{ backgroundImage: 'url(' + imageURLDZ + ')' }"></view>
					<view class="yaobuqianniu"  v-show="showyaobuqianniu" @tap="tapyaobuqi" :style="{ backgroundImage: 'url(' + imageURLYBQ + ')' }"></view>
					 <view class="yaobuqizi"  v-show="showyaobuqizi" :style="{ backgroundImage: 'url(' + imageURLYBQZ + ')' }"></view> 
					 <view class="yaobuqitishi"  v-show="showyaobuqianniu" :style="{ backgroundImage: 'url(' + imageURLYBQTS + ')' }"></view>
				 </view> -->
				<!-- 玩家操作-抢地主钟表不抢 -->
				<!-- <view class="WJjiaofen uni-flex uni-row">
					<view class="dizhu" :style="{ backgroundImage: 'url(' + imageURLDZ + ')' }"></view>
					<view class="jiabei" @tap="tapbuqiang" v-show="showqianganniu" :style="{ backgroundImage: 'url(' + imageURLBQDZ + ')' }"></view>
					<view class="zhongbiao" v-show="showqianganniu" :style="{ backgroundImage: 'url(' + imageURLZB + ')' }">
						<view class="daojishi">{{ daojishi }}</view>
					</view>
					<view class="bujiabei" @tap="tapqiangdizhu" v-show="showqianganniu" :style="{ backgroundImage: 'url(' + imageURLQDZ + ')' }"></view> -->
				<!-- 玩家叫抢不抢以后的字 -->
				<!-- 					<view class="jiabeizi" v-show="showbuqiang" :style="{ backgroundImage: 'url(' + imageURLBQ + ')' }"></view>
					<view class="jiabeizi" v-show="showqiangdizhu" :style="{ backgroundImage: 'url(' + imageURLQDZz + ')' }"></view>
				</view> -->

				<!-- 玩家操作-出牌不出提示 -->
				<view class="WJjiaofen uni-flex uni-row">
					<view class="kapailan1 uni-flex uni-row">
							<view
								v-for="(item, index) in listchupai" :key="index"
								class="pai"
								v-show="chukapai"
								:style="{ backgroundImage: 'url(' + item.pukepai + ')' , marginLeft: 30 * (index + 1) + 'rpx' }"
							></view>
					</view>
					<view class="zhongbiao1" v-show="showyaobuqianniu1" :style="{ backgroundImage: 'url(' + imageURLZB + ')' }">
						<view class="daojishi">{{ daojishi }}</view>
					</view>
					<view class="dizhu" :style="{ backgroundImage: 'url(' + imageURLDZ + ')' }"></view>
					<view class="yaobuqianniu2" @tap="tapyaobuqi1" v-show="showyaobuqianniu1" :style="{ backgroundImage: 'url(' + imageURLBC + ')' }"></view>
					<view class="tishianniu" @tap="taptishi" v-show="showtishianniu" :style="{ backgroundImage: 'url(' + imageURLTS + ')' }"></view>
					<view class="chupaianniu" @tap="tapchupai" v-show="showchupaianniu" :style="{ backgroundImage: 'url(' + imageURLCP + ')' }"></view>
					<!-- 玩家叫加倍以后的字 -->
					<view class="yaobuqizi" v-show="showyaobuqizi" :style="{ backgroundImage: 'url(' + imageURLYBQZ + ')' }"></view>
				</view>
				<!-- 玩家的卡牌 -->
				<view class="WJkapai uni-flex uni-row">
					<view class="WJtouxiang">
						<image src="../../static/hengpingyouxi/wanjiatouxiang.jpg" mode="aspectFit" class="touxiang1"></image>
						<view class="AImingcheng">{{ nicheng }}</view>
					</view>
					<view class="wanjiajiabei" :style="{ backgroundImage: 'url(' + imageURLWJJB + ')' }"></view>
					<view class="kapailan uni-flex uni-row">
						<!-- margin-top: -25rpx; -->
						<view v-for="(item, index) in list" :key="index" class="kapai11" :style="{ marginLeft: 45 * (index + 1) + 'rpx' }">
							<view
								:class="{ kapai: item.show1, kapai2: item.show2 }"
								@click="tapdikapai(index)"
								v-show="item.show1"
								:style="{ backgroundImage: 'url(' + item.pukepai + ')' }"
							></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 设置弹出层 -->
		<view class="tanchukuang" v-if="tanchucengSZ">
			<view class="shezhibeijing" :style="{ backgroundImage: 'url(' + imageURLSZBJ + ')' }">
				<view class="guanbitanchuceng" @tap="tanchucengguanbi" :style="{ backgroundImage: 'url(' + imageURLGBTCC + ')' }"></view>
				<view class="yinyue uni-flex uni-row" style="position: absolute;margin-top: 70rpx;margin-left: 100rpx;">
					<view class="shezhiziti">音乐</view>
					<view class="zuoyouhuadong"><slider activeColor="#1ab341" backgroundColor="#9c8185" block-color="#3b2209" block-size="14" value="60" /></view>
					<view class="yinyuetubiao" @tap="jinyongYY" :style="{ backgroundImage: 'url(' + imageURLYY + ')' }"></view>
				</view>
				<view class="yinxiao uni-flex uni-row" style="position: absolute;margin-top: 170rpx;margin-left: 100rpx;">
					<view class="shezhiziti">音效</view>
					<view class="zuoyouhuadong"><slider activeColor="#1ab341" backgroundColor="#9c8185" block-color="#3b2209" block-size="14" value="60" /></view>
					<view class="yinyuetubiao" @tap="jinyongYX" :style="{ backgroundImage: 'url(' + imageURLYX + ')' }"></view>
				</view>
				<view class="tuichuyouxi" @tap="tuichuyouxi" :style="{ backgroundImage: 'url(' + imageURLTCYX + ')' }"></view>
			</view>
		</view>
		<!-- 战绩弹出层 -->
		<view class="tanchukuang" v-if="tanchucengJFB">
			<view class="shezhibeijing" :style="{ backgroundImage: 'url(' + imageURLZJBJ + ')' }">
				<view class="guanbitanchuceng" @tap="tanchucengguanbi" :style="{ backgroundImage: 'url(' + imageURLGBTCC + ')' }"></view>
				<view class=" uni-flex uni-row">
					<view class="zhanji">
						<view class="zhanjibiaoti uni-flex uni-row" :style="{ backgroundImage: 'url(' + imageURLZJBT + ')' }">
							<view class="wenben duizhanshijian">对战时间</view>
							<view class="wenben zhankuang">战况</view>
							<view class="wenben duizhanjinbi">金币</view>
						</view>
						<scroll-view scroll-y="true" class="zhanjibiao">
							<view :key="index" class="zhanjiliebiao uni-flex uni-row" v-for="(item, index) in zhanji">
								<view class="wenben">{{ item.shijian }}</view>
								<view :class="item.yangshi">{{ item.shengfu }}</view>
								<view class="wenben jinbi">{{ item.fenshu }}</view>
							</view>
						</scroll-view>
					</view>
					<view class="huadongtiao" :style="{ backgroundImage: 'url(' + imageURLZJHDT + ')' }"></view>
				</view>
			</view>
		</view>
		<!-- 胜弹出层 -->
		<view class="tanchukuangshengfu" v-if="tanchucengS">
			<view class="shengfubeijing">
				<view class="shenglibeijing" :style="{ backgroundImage: 'url(' + imageURLSL + ')' }">
					<view class="guanbishengfu" @tap="tanchucengguanbi"></view>
					<!-- 胜负战绩 -->
					<view class="shengliliebiao uni-flex uni-row" style="margin-top: 270rpx;">
						<view class="dizhumao"></view>
						<view class="jieshubiaoti shengfubiaotinicheng">昵称</view>
						<view class="jieshubiaoti shengfubiaotidifen">底分</view>
						<view class="jieshubiaoti shengfubiaotibeishu">倍数</view>
						<view class="jieshubiaoti shengfubiaotidifen">得分</view>
					</view>
					<view class="fengexian" style="margin-top: 320rpx;" :style="{ backgroundImage: 'url(' + imageURLFGX + ')' }"></view>
					<view class="shengliliebiao uni-flex uni-row" style="margin-top: 330rpx;">
						<view class="dizhumao" :style="{ backgroundImage: 'url(' + imageURLDZM + ')' }"></view>
						<view class="jieshubiaoti1 shengfumingcheng">张三</view>
						<view class="jieshubiaoti1 shengfudifen">50</view>
						<view class="jieshubiaoti1 shengfubeishu">X6</view>
						<view class="jieshubiaotijia shengfudifen">+300</view>
					</view>
					<view class="fengexian" style="margin-top: 380rpx;" :style="{ backgroundImage: 'url(' + imageURLFGX + ')' }"></view>
					<view class="shengliliebiao uni-flex uni-row" style="margin-top: 390rpx;">
						<view class="dizhumao"></view>
						<view class="jieshubiaoti1 shengfumingcheng">李四</view>
						<view class="jieshubiaoti1 shengfudifen">50</view>
						<view class="jieshubiaoti1 shengfubeishu">X2</view>
						<view class="jieshubiaotijian shengfudifen">-150</view>
					</view>
					<view class="fengexian" style="margin-top: 440rpx;" :style="{ backgroundImage: 'url(' + imageURLFGX + ')' }"></view>
					<view class="shengliliebiao uni-flex uni-row" style="margin-top: 450rpx;">
						<view class="dizhumao"></view>
						<view class="jieshubiaoti1 shengfumingcheng">王五</view>
						<view class="jieshubiaoti1 shengfudifen">50</view>
						<view class="jieshubiaoti1 shengfubeishu">X3</view>
						<view class="jieshubiaotijian shengfudifen">-150</view>
					</view>
					<view class="zailaiyiju" @tap="zailaiyiju" :style="{ backgroundImage: 'url(' + imageURLZLYJ + ')' }"></view>
				</view>
			</view>
		</view>
		<!-- 负弹出层 -->
		<view class="tanchukuangshengfu" v-if="tanchucengF">
			<view class="shengfubeijing">
				<view class="shenglibeijing" :style="{ backgroundImage: 'url(' + imageURLSB + ')' }">
					<view class="guanbishengfu" @tap="tanchucengguanbi"></view>
					<!-- 胜负战绩 -->
					<view class="shengliliebiao uni-flex uni-row" style="margin-top: 270rpx;">
						<view class="dizhumao"></view>
						<view class="jieshubiaoti shengfubiaotinicheng">昵称</view>
						<view class="jieshubiaoti shengfubiaotidifen">底分</view>
						<view class="jieshubiaoti shengfubiaotibeishu">倍数</view>
						<view class="jieshubiaoti shengfubiaotidifen">得分</view>
					</view>
					<view class="fengexian" style="margin-top: 320rpx;" :style="{ backgroundImage: 'url(' + imageURLFGX + ')' }"></view>
					<view class="shengliliebiao uni-flex uni-row" style="margin-top: 330rpx;">
						<view class="dizhumao" :style="{ backgroundImage: 'url(' + imageURLDZM + ')' }"></view>
						<view class="jieshubiaoti1 shengfumingcheng">张三</view>
						<view class="jieshubiaoti1 shengfudifen">50</view>
						<view class="jieshubiaoti1 shengfubeishu">X6</view>
						<view class="jieshubiaotijia shengfudifen">+300</view>
					</view>
					<view class="fengexian" style="margin-top: 380rpx;" :style="{ backgroundImage: 'url(' + imageURLFGX + ')' }"></view>
					<view class="shengliliebiao uni-flex uni-row" style="margin-top: 390rpx;">
						<view class="dizhumao"></view>
						<view class="jieshubiaoti1 shengfumingcheng">李四</view>
						<view class="jieshubiaoti1 shengfudifen">50</view>
						<view class="jieshubiaoti1 shengfubeishu">X2</view>
						<view class="jieshubiaotijian shengfudifen">-150</view>
					</view>
					<view class="fengexian" style="margin-top: 440rpx;" :style="{ backgroundImage: 'url(' + imageURLFGX + ')' }"></view>
					<view class="shengliliebiao uni-flex uni-row" style="margin-top: 450rpx;">
						<view class="dizhumao"></view>
						<view class="jieshubiaoti1 shengfumingcheng">王五</view>
						<view class="jieshubiaoti1 shengfudifen">50</view>
						<view class="jieshubiaoti1 shengfubeishu">X3</view>
						<view class="jieshubiaotijian shengfudifen">-150</view>
					</view>
					<view class="zailaiyiju" @tap="zailaiyiju" :style="{ backgroundImage: 'url(' + imageURLZLYJ + ')' }"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			/* 玩家出的卡牌 */
			chukapai:false,
			/* 音乐禁用按钮 */
			yinyueJY: false,
			/* 音效禁用按钮 */
			yinxiaoJY: false,
			/* 抢地主 字 */
			showqiangdizhu: false,
			/* 不抢 字 */
			showbuqiang: false,
			/* 叫分不叫分的按钮和钟表 */
			showjiaofenanniu: true,
			/* 不叫分字 */
			showbujiaozi: false,
			/* 叫分字 */
			showjiaofenzi: false,
			/* 要不起按钮和钟表和卡牌上的提示 */
			showyaobuqianniu: true,
			/* 要不起字 */
			showyaobuqizi: false,
			/* 不加倍按钮 */
			showbujiabeianniu: true,
			/* 加倍按钮 */
			showjiabeianniu: true,
			/* 出牌的要不起按钮和钟表 */
			showyaobuqianniu1: true,
			/* 出牌的提示按钮 */
			showtishianniu: true,
			/* 出牌的出牌按钮 */
			showchupaianniu: true,
			/* 抢 钟表 不抢按钮 */
			showqianganniu: true,
			/* 钟表 */
			showzhongbiao: true,
			/* 加倍-字 */
			showjiabei: false,
			/* 不加倍-字 */
			showbujiabei: false,
			/* 设置弹出层 */
			tanchucengSZ: false,
			/* 战绩弹出层 */
			tanchucengJFB: false,
			/* 胜弹出层 */
			tanchucengS: false,
			/* 胜弹出层 */
			tanchucengF: false,
			/* 游戏中的昵称 */
			nicheng: '',
			/* 游戏中的金币 */
			jifen: '30000',
			/* AI的卡牌数量 */
			kapaishuliang: '17',
			/* 钟表的倒计时 */
			daojishi: '30',
			/* 倒计时用 */
			timet: null,
			/* 玩家战绩数组 */
			zhanji: [
				{
					shijian: '2019-10-04',
					shengfu: '胜',
					yangshi: 'zhanjisheng',
					fenshu: '+500'
				},
				{
					shijian: '2019-10-04',
					shengfu: '负',
					yangshi: 'zhanjifu',
					fenshu: '-500'
				},
				{
					shijian: '2019-10-04',
					shengfu: '胜',
					yangshi: 'zhanjisheng',
					fenshu: '+500'
				},
				{
					shijian: '2019-10-04',
					shengfu: '负',
					yangshi: 'zhanjifu',
					fenshu: '-500'
				},
				{
					shijian: '2019-10-04',
					shengfu: '胜',
					yangshi: 'zhanjisheng',
					fenshu: '+500'
				},
				{
					shijian: '2019-10-04',
					shengfu: '负',
					yangshi: 'zhanjifu',
					fenshu: '-500'
				},
				{
					shijian: '2019-10-04',
					shengfu: '负',
					yangshi: 'zhanjifu',
					fenshu: '-500'
				},
				{
					shijian: '2019-10-04',
					shengfu: '胜',
					yangshi: 'zhanjisheng',
					fenshu: '+500'
				},
				{
					shijian: '2019-10-04',
					shengfu: '负',
					yangshi: 'zhanjifu',
					fenshu: '-500'
				},
				{
					shijian: '2019-10-04',
					shengfu: '胜',
					yangshi: 'zhanjisheng',
					fenshu: '+500'
				}
			],
			/* 玩家卡牌数组 */
			list: [
				{
					pukepai: '/static/kapai/poker_79.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_78.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_2.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_18.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_34.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_50.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_1.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_17.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_33.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_49.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_13.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_29.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_45.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_61.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_12.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_28.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_44.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_60.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_11.png',
					show1: true,
					show2: false
				},
				{
					pukepai: '/static/kapai/poker_27.png',
					show1: true,
					show2: false
				}
			],
			listchupai: [],
			/* ==========================================大背景==================================================== */
			/* 大背景 */
			imageURL: '/static/hengpingyouxi/img_bj_yx.png',
			/* 圆桌背景 */
			imageURL1: '/static/hengpingyouxi/img_qp_yx.png',
			/* =======================================操作按钮======================================================== */
			/* 加倍-按钮 */
			imageURLJB: '/static/hengpingyouxi/btn_jb_yx.png',
			/* 不加倍-按钮 */
			imageURLBJB: '/static/hengpingyouxi/btn_bjb_yx.png',
			/* 抢地主-按钮 */
			imageURLQDZ: '/static/hengpingyouxi/btn_qdz_yx.png',
			/* 不抢地主-按钮 */
			imageURLBQDZ: '/static/hengpingyouxi/btn_bq_yx.png',
			/* 不出-按钮 */
			imageURLBC: '/static/hengpingyouxi/btn_bc_cp.png',
			/* 出牌-按钮 */
			imageURLCP: '/static/hengpingyouxi/btn_cp_cp.png',
			/* 提示-按钮 */
			imageURLTS: '/static/hengpingyouxi/btn_ts_cp.png',
			/* 不叫-按钮 */
			imageURLBJ: '/static/hengpingyouxi/btn_bj_jf.png',
			/* 1分-按钮 */
			imageURL1F: '/static/hengpingyouxi/btn_1f_jf.png',
			/* 2分-按钮 */
			imageURL2F: '/static/hengpingyouxi/btn_2f_jf.png',
			/* 3分-按钮 */
			imageURL3F: '/static/hengpingyouxi/btn_3f_jf.png',
			/* 要不起-按钮 */
			imageURLYBQ: '/static/hengpingyouxi/btn_ybq_ybq.png',
			/* 设置-背景 */
			imageURLSZBJ: '/static/youxishezhi/img_sz_sz.png',
			/* 音乐-按钮 */
			imageURLYY: '/static/youxishezhi/icon_yy_sz.png',
			/* 音效-按钮 */
			imageURLYX: '/static/youxishezhi/icon_yx.png',
			/* ========================================插图======================================================= */
			/* 地主帽儿 */
			imageURLDZ: '/static/hengpingyouxi/icon_dz_yx.png',
			/* 地主帽 */
			imageURLDZM: '/static/hengpingyouxi/icon_dz_sl.png',
			/* X6 */
			imageURLWJJB: '/static/hengpingyouxi/icon_x6.png',
			/* 不加倍-字 */
			imageURLAIJF: '/static/hengpingyouxi/icon_bjb_yx.png',
			/* 加倍-字 */
			imageURLAIJF1: '/static/hengpingyouxi/icon_jb_yx_19.png',
			/* X4 */
			imageURLFS2: '/static/hengpingyouxi/icon_x4.png',
			/* X3 */
			imageURLFS1: '/static/hengpingyouxi/icon_x3.png',
			/* 钟表 */
			imageURLZB: '/static/hengpingyouxi/icon_djs_yx.png',
			/* 不叫-字 */
			imageURLBJZ: '/static/hengpingyouxi/icon_bj_bj.png',
			/* 2分-字 */
			imageURL2FZ: '/static/hengpingyouxi/icon_2f_jf.png',
			/* 要不起-字 */
			imageURLYBQZ: '/static/hengpingyouxi/icon_ybq.png',
			/* 要不起-提示 */
			imageURLYBQTS: '/static/hengpingyouxi/img_ybq_ybq.png',
			/* 不抢地主-字 */
			imageURLBQ: '/static/hengpingyouxi/img_bq_bq.png',
			/* 抢地主-字 */
			imageURLQDZz: '/static/hengpingyouxi/img_qdz_qdz.png',
			/* ========================================胜利失败弹出层======================================================= */
			/* 胜利背景 */
			imageURLSL: '/static/hengpingyouxi/img_sl_sl.png',
			/* 失败背景 */
			imageURLSB: '/static/hengpingyouxi/img_sb_sb.png',
			/* 再来一局-按钮 */
			imageURLZLYJ: '/static/hengpingyouxi/btn_zlyj_sl.png',
			/* 分割线 */
			imageURLFGX: '/static/hengpingyouxi/img_fgx_sl.png',
			/* 退出游戏按钮 */
			imageURLTCYX: '/static/youxishezhi/btn_tcyx_sz.png',
			/* 关闭弹出层-红叉号 */
			imageURLGBTCC: '/static/youxiguize/icon_gb_yxgz.png',
			/* ===========================================历史战绩弹出层==================================================== */
			/* 历史战绩-背景 */
			imageURLZJBJ: '/static/hengpingyouxi/img_bj_lszj.png',
			/* 历史战绩-标题栏 */
			imageURLZJBT: '/static/hengpingyouxi/img_bj.png',
			/* 历史战绩右边滑动条 */
			imageURLZJHDT: '/static/hengpingyouxi/img_jd_lszj.png',
			/* =========================================扑克牌====================================================== */
			/* 扑克牌背面 */
			imageURLKPBJ: '/static/hengpingyouxi/icon_bm_yx.png'
		};
	},
	/* 钟表倒计时 */
	created: function(e) {
		this.shuzi();
		this.timer = setInterval(() => {
			this.daojishi--;
			if (this.daojishi <= 0) {
				this.shijiandao();
				this.tapyaobuqi1();
				return;
			}
			this.shuzi();
		}, 1000);
	},
	methods: {
		/* 倒计时时间到 */
		shijiandao() {
			clearInterval(this.timer);
		},
		/* 处理数字 */
		shuzi() {
			let s = this.daojishi;
			if (s < 10) {
				s = '0' + s;
			}
			this.daojishi = s;
		},
		/* 设置按钮 */
		tanchucengSZBT() {
			this.tanchucengSZ = true;
		},
		/* 音乐禁用按钮 */
		jinyongYY() {
			this.yinyueJY = !this.yinyueJY;
		},
		/* 音乐禁用按钮 */
		jinyongYX() {
			this.yinxiaoJY = !this.yinxiaoJY;
		},
		/* 关闭弹出层红叉号 */
		tanchucengguanbi() {
			this.tanchucengSZ = false;
			this.tanchucengJFB = false;
			this.tanchucengS = false;
			this.tanchucengF = false;
		},
		/* 打开计分板 */
		tanchucengJFBBT() {
			this.tanchucengJFB = true;
		},
		/* 再来一局 */
		zailaiyiju() {
			this.tanchucengS = false;
			this.tanchucengF = false;
		},
		/* 加倍按钮 */
		tapjiabei() {
			this.showjiabei = true;
			this.showjiabeianniu = false;
			this.showbujiabeianniu = false;
			this.showzhongbiao = false;
		},
		/* 不加倍按钮 */
		tapbujiabei() {
			this.showbujiabei = true;
			this.showjiabeianniu = false;
			this.showbujiabeianniu = false;
			this.showzhongbiao = false;
		},
		/* 不叫按钮 */
		tapbujiao() {
			this.showbujiaozi = true;
			this.showjiaofenanniu = false;
		},
		/* 叫分按钮 */
		tapjiaofen() {
			this.showjiaofenzi = true;
			this.showjiaofenanniu = false;
		},
		/* 要不起按钮 */
		tapyaobuqi() {
			this.showyaobuqianniu = false;
			this.showyaobuqizi = true;
		},
		/* 出牌的要不起按钮 */
		tapyaobuqi1() {
			this.showyaobuqianniu1 = false;
			this.showtishianniu = false;
			this.showchupaianniu = false;
			this.showyaobuqizi = true;
			for (let i = 0; i < this.list.length; i++) {
				if (this.list[i].show2) {
					this.list[i].show1 = true;
					this.list[i].show2 = false;
				}
			}
		},
		/* 抢地主按钮 */
		tapqiangdizhu() {
			this.showqiangdizhu = true;
			this.showqianganniu = false;
		},
		/* 不抢地主按钮 */
		tapbuqiang() {
			this.showbuqiang = true;
			this.showqianganniu = false;
		},
		/* 卡牌点击事件 */
		tapdikapai(index) {
			/* 	this.list[index].show1 = !this.list[index].show1; */
			this.list[index].show2 = !this.list[index].show2;
		},
		/* 出牌按钮 */
		tapchupai() {
			for (let i = 0; i < this.list.length; i++) {
				if (this.list[i].show2) {
					this.listchupai.push(this.list[i]);
				}
			}
			this.chukapai = true;
			for (let j = 0; j < this.list.length; j++) {
				for (let i = 0; i < this.list.length; i++) {
					if (this.list[i].show2) {
						this.list.splice(i, 1);
					}
					if (this.list[i].show2) {
						this.list.splice(i, 1);
					}
				}
			}
			if (this.list.length === 0) {
				this.tanchucengS = true;
			}else{
				this.showyaobuqianniu1 = false;
				this.showtishianniu= false;
				this.showchupaianniu= false;
			}
			clearInterval(this.timer);
		},
		/* 退出游戏跳转 */
		tuichuyouxi() {
			uni.reLaunch({
				url: '../youxi/youxi'
			});
		}
	},
	onLoad() {
		/* 强制横屏 */
		plus.screen.lockOrientation('landscape-primary');
		this.nicheng = getApp().globalData.nicheng;
		this.ScanAudio();
	},
	onUnload() {
		this.ScanAudio1();
	}
};
</script>

<style>
/* 大背景 */
.content1 {
	width: 1334rpx;
	height: 750rpx;
	background-size: 100% 100%;
	position: relative;
}
/* 桌子背景 */
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
/* 玩家头像 */
.touxiang {
	margin-left: 30rpx;
	margin-top: 15rpx;
	width: 70rpx;
	height: 70rpx;
	border-radius: 150rpx;
	border: 4rpx solid #af9788;
}
/* 玩家头像 */
.touxiang1 {
	margin-left: 22rpx;
	margin-top: 15rpx;
	width: 70rpx;
	height: 70rpx;
	border-radius: 150rpx;
	border: 4rpx solid #af9788;
}
/* 玩家昵称 */
.nicheng {
	position: absolute;
	color: #ffffff;
	font-size: 30rpx;
	margin-left: 20rpx;
	margin-top: 20rpx;
}
/* 头部金币 */
.toubujifen {
	margin-left: 460rpx;
	margin-top: 25rpx;
	width: 205rpx;
	height: 50rpx;
	border-radius: 150rpx;
	border: 4rpx solid #af9788;
	position: absolute;
	background: rgba(0, 0, 0, 0.3);
}
/* 金币的图标 */
.jifenbiaozhi {
	width: 50rpx;
	height: 50rpx;
}
/* 金币字 */
.jifen {
	color: #ffffff;
	font-size: 30rpx;
	text-align: center;
	/* 	display: table-cell;/* 作为表格单元格显示 vertical-align:middle  属性起作用了。去掉display可就不行了哦！！ */
	/*vertical-align: middle; */
	margin-left: 10rpx;
}
/* 右上角菜单 */
.caidan {
	width: 65rpx;
	height: 65rpx;
	margin-top: 30rpx;
	margin-left: 1100rpx;
}
/* 右上角菜单的图 */
.caidantu {
	width: 65rpx;
	height: 65rpx;
}
/* 电脑头像 */
.AItouxiang {
	height: 170rpx;
	width: 120rpx;
	border-radius: 15rpx;
	/* border: 4rpx solid #af9788; */
	background: rgba(0, 0, 0, 0.3);
	margin-left: 30rpx;
}
/* 玩家头像 */
.WJtouxiang {
	height: 135rpx;
	width: 120rpx;
	border-radius: 15rpx;
	/* border: 4rpx solid #af9788; */
	background: rgba(0, 0, 0, 0.3);
	margin-left: 30rpx;
}
/* 电脑头像 */
.AItouxiang1 {
	height: 170rpx;
	width: 120rpx;
	border-radius: 15rpx;
	/* border: 4rpx solid #af9788; */
	background: rgba(0, 0, 0, 0.3);
	margin-left: 40rpx;
	position: absolute;
	margin-left: 725rpx;
}
/* 电脑头像图 */
.AItouxiangtu {
	margin-top: 10rpx;
	margin-left: 20rpx;
	width: 75rpx;
	height: 75rpx;
	border-radius: 150rpx;
	border: 4rpx solid #af9788;
}
/* 电脑名字 */
.AImingcheng {
	text-align: center;
	color: #ffffff;
	font-size: 20rpx;
	margin-top: -10rpx;
}
/* 电脑金币 */
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
/* 电脑的卡牌 */
.AIkapai {
	background-size: 100% 100%;
	height: 105rpx;
	width: 75rpx;
	align-items: center;
	margin-left: 40rpx;
	margin-top: 40rpx;
}
/* 电脑的卡牌 */
.AIkapai1 {
	background-size: 100% 100%;
	height: 105rpx;
	width: 75rpx;
	align-items: center;
	margin-top: 40rpx;
	position: absolute;
	margin-left: 600rpx;
	/*	margin-top: 40rpx; */
}
/* 卡牌数量字 */
.kapaishuliang {
	margin-top: 15rpx;
	font-size: 45rpx;
	color: #ffffff;
	text-align: center;
}
/* 中间底牌 */
.dipai {
	margin-top: 90rpx;
	margin-left: 60rpx;
}
/* 中间底牌 */
.dipai1 {
	background-size: 100% 100%;
	height: 105rpx;
	width: 75rpx;
	margin-left: 15rpx;
}
/* 中间底牌 */
.dipai2 {
	background-size: 100% 100%;
	height: 105rpx;
	width: 75rpx;
	margin-left: 15rpx;
}
/* 中间底牌 */
.dipai3 {
	background-size: 100% 100%;
	height: 105rpx;
	width: 75rpx;
	margin-left: 15rpx;
}
/* 玩家叫分 */
.jiaofen {
	height: 140rpx;
	width: 200rpx;
}
/* 电脑叫分 */
.AIjiaofen {
	height: 50rpx;
	width: 135rpx;
	background-size: 100% 100%;
	margin-left: 35rpx;
	margin-top: 85rpx;
}
.jiaofen1 {
	margin-left: 80rpx;
	position: absolute;
	margin-left: 400rpx;
}
/* 电脑下面的倍数 */
.fenshu1 {
	margin-left: 55rpx;
	height: 40rpx;
	width: 75rpx;
	/* 	background-color: #000000; */
	background-size: 100% 100%;
}
/* 电脑下面的倍数 */
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
/* 玩家叫分 */
.WJjiaofen {
	position: absolute;
	margin-top: 265rpx;
}
/* 地主帽子 */
.dizhu {
	width: 75rpx;
	height: 75rpx;
	background-size: 100% 100%;
	margin-left: 200rpx;
}
/* 加倍按钮 */
.jiabei {
	height: 65rpx;
	width: 160rpx;
	background-size: 100% 100%;
	margin-left: 150rpx;
}
/* 加倍的字 */
.jiabeizi {
	height: 50rpx;
	width: 135rpx;
	background-size: 100% 100%;
	position: absolute;
	margin-left: 330rpx;
}
/* 钟表 */
.zhongbiao {
	width: 85rpx;
	height: 85rpx;
	background-size: 100% 100%;
	margin-left: 30rpx;
}
/* 倒计时数字 */
.daojishi {
	color: #ef550a;
	font-size: 30rpx;
	margin-left: 23rpx;
	margin-top: 15rpx;
}
/* 不加倍按钮 */
.bujiabei {
	height: 65rpx;
	width: 200rpx;
	background-size: 100% 100%;
	margin-left: 30rpx;
}
/* 玩家的卡牌 */
.WJkapai {
	margin-top: 365rpx;
	position: absolute;
}
/* 卡牌栏 */
.kapailan {
	z-index: 995;
	-webkit-justify-content: center;
	justify-content: center;
}
.kapailan1 {
	position: absolute;
	z-index: 995;
	-webkit-justify-content: center;
	justify-content: center;
	margin-left: 480rpx;
	margin-top: -70rpx;
}
/* 卡牌 */
.kapai {
	/* z-index: 995; */
	width: 130rpx;
	height: 185rpx;
	position: absolute;
	background-size: 100% 100%;
}

.kapai2 {
	margin-top: -20rpx;
}
.kapai11 {
	position: absolute;
}
/* AI出的牌 */
.pai {
	width: 100rpx;
	height: 135rpx;
	position: absolute;
	background-size: 100% 100%;
}
/* AI出牌背景框子 */
.chupai {
	position: absolute;
	margin-left: -160rpx;
	margin-top: 25rpx;
}
.chupai1 {
	margin-top: 25rpx;
	position: absolute;
	margin-left: 445rpx;
}
/* 设置和战绩的弹出框 */
.tanchukuang {
	position: fixed;
	left: 20%;
	top: 15%;
	z-index: 998;
}
/* 胜负弹出框背景 */
.shengfubeijing {
	background: rgba(21, 19, 19, 0.82);
	width: 1334rpx;
	height: 750rpx;
}
/* 胜负的弹出框 */
.tanchukuangshengfu {
	position: fixed;
	left: 0%;
	top: 0%;
	z-index: 998;
}
/* 设置的背景图 */
.shezhibeijing {
	width: 820rpx;
	height: 510rpx;
	background-size: 100% 100%;
}
/* 设置和战绩的红叉 */
.guanbitanchuceng {
	width: 75rpx;
	height: 80rpx;
	background-size: 100% 100%;
	margin-left: 745rpx;
}
/* 胜负的红叉 */
.guanbishengfu {
	width: 85rpx;
	height: 90rpx;
	background-size: 100% 100%;
	margin-left: 1115.5rpx;
	position: absolute;
	margin-top: 95rpx;
}
/* 退出游戏 */
.tuichuyouxi {
	margin-left: 275rpx;
	margin-top: 300rpx;
	width: 240rpx;
	height: 75rpx;
	background-size: 100% 100%;
}
/* 再来一局 */
.zailaiyiju {
	position: absolute;
	width: 240rpx;
	height: 80rpx;
	background-size: 100% 100%;
	margin-left: 575rpx;
	margin-top: 530rpx;
}
/* 战绩的标题背景 */
.zhanjibiaoti {
	margin-left: 65rpx;
	margin-top: 45rpx;
	line-height: 50rpx;
	width: 630rpx;
	background-size: 100% 100%;
	text-align: center;
}
/* 战绩列表 */
.zhanjiliebiao {
	margin-left: 80rpx;
}
/* 战绩的文本 */
.wenben {
	color: #8c6348;
}
.duizhanshijian {
	margin-left: 40rpx;
}
.zhankuang {
	margin-left: 165rpx;
}
.duizhanjinbi {
	margin-left: 190rpx;
}
/* 战绩滑动条高度 */
.zhanjibiao {
	height: 280rpx;
}
/* 战绩的加减金币 */
.jinbi {
	margin-left: 200rpx;
}
/* 战绩胜利颜色 */
.zhanjisheng {
	margin-left: 170rpx;
	color: #fd0309;
}
/* 战绩失败颜色 */
.zhanjifu {
	margin-left: 170rpx;
	color: #0064a1;
}
/* 战绩滑动条 */
.huadongtiao {
	margin-left: 25rpx;
	margin-top: 45rpx;
	width: 20rpx;
	height: 320rpx;
	background-size: 100% 100%;
}
/* 胜利的背景 */
.shenglibeijing {
	margin-left: 40rpx;
	height: 650rpx;
	width: 1260rpx;
	background-size: 100% 100%;
}
/* 胜利列表 */
.shengliliebiao {
	position: absolute;
	margin-left: 350rpx;
}
/* 胜负地主帽 */
.dizhumao {
	width: 45rpx;
	height: 45rpx;
	background-size: 100% 100%;
}
/* 胜负分割线 */
.fengexian {
	width: 800rpx;
	height: 2rpx;
	background-size: 100% 100%;
	position: absolute;
	margin-left: 320rpx;
}
/* 胜负结束标题字 */
.jieshubiaoti {
	color: #dbdbdb;
}
.shengfubiaotinicheng {
	margin-left: 40rpx;
}
.shengfubiaotidifen {
	margin-left: 120rpx;
}
.shengfubiaotibeishu {
	margin-left: 115rpx;
}

.shengfumingcheng {
	margin-left: 40rpx;
}
.shengfudifen {
	margin-left: 130rpx;
}
.shengfubeishu {
	margin-left: 140rpx;
}
/*  */
.jieshubiaoti1 {
	color: #f7cf09;
}
/* 胜负加分颜色 */
.jieshubiaotijia {
	color: #509e2b;
}
/* 胜负减分颜色 */
.jieshubiaotijian {
	color: #ff031c;
}
/* 设置音效左右滑动条 */
.zuoyouhuadong {
	width: 400rpx;
	margin-top: -10rpx;
	margin-left: 30rpx;
}
/* 设置音效的字体 */
.shezhiziti {
	font-size: 35rpx;
	color: #1c1c1c;
}
/* 音乐音效按钮 */
.yinyuetubiao {
	background-size: 100% 100%;
	height: 65rpx;
	width: 60rpx;
}
/* 玩家加倍的数字 */
.wanjiajiabei {
	height: 40rpx;
	width: 75rpx;
	background-size: 100% 100%;
	position: absolute;
	margin-top: 145rpx;
	margin-left: -100rpx;
}
/* 不叫 按钮 */
.bujiao {
	margin-top: 15rpx;
	width: 160rpx;
	height: 60rpx;
	background-size: 100% 100%;
	margin-left: 65rpx;
}
/* 叫分按钮 */
.jiaofenanniu {
	margin-top: 15rpx;
	margin-left: 40rpx;
	width: 120rpx;
	height: 60rpx;
	background-size: 100% 100%;
}
.zhongbiao1 {
	width: 85rpx;
	height: 85rpx;
	background-size: 100% 100%;
	position: absolute;
	margin-left: 625rpx;
	margin-top: -70rpx;
}
/* 出牌的要不起按钮 */
.yaobuqianniu2 {
	margin-top: 15rpx;
	width: 140rpx;
	height: 60rpx;
	background-size: 100% 100%;
	margin-left: 115rpx;
}
/* 出牌 */
.chupaianniu {
	margin-top: 15rpx;
	width: 140rpx;
	height: 60rpx;
	background-size: 100% 100%;
	margin-left: 65rpx;
}
/* 提示 */
.tishianniu {
	margin-top: 15rpx;
	width: 140rpx;
	height: 60rpx;
	background-size: 100% 100%;
	margin-left: 65rpx;
}
/* 要不起按钮 */
.yaobuqianniu {
	margin-top: 15rpx;
	width: 160rpx;
	height: 60rpx;
	position: absolute;
	background-size: 100% 100%;
	margin-left: 310rpx;
}
/* 要不起字 */
.yaobuqizi {
	height: 50rpx;
	width: 135rpx;
	background-size: 100% 100%;
	position: absolute;
	margin-left: 320rpx;
	margin-top: 15rpx;
}
/* 要不起提示 */
.yaobuqitishi {
	width: 350rpx;
	height: 40rpx;
	background-size: 100% 100%;
	margin-left: 260rpx;
	margin-top: 160rpx;
	position: absolute;
	z-index: 997;
}
</style>
