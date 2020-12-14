<template>
	<view class="real-data-page">
		<view class="loadiing" v-if="!loading">
			<view class="cu-load load-modal">
				<image src="https://ncov.zhouxuanyu.com/logo.png" mode="widthFix"></image>
				<view class="gray-text">加载中...</view>
			</view>
		</view>
		<view v-if="loading">
			<!-- 顶部导航 -->
			<cu-custom bgColor="bg-blue" :isBack="false"><block slot="content">实时数据</block></cu-custom>
			<image src="https://mat1.gtimg.com/news/images/inews/2020/feiyan/area/news_head.png" mode="widthFix" style="width: 100%;"></image>
			<!-- 实时播放 -->
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-blue"></text>
					<text class="text-xl text-bold">实时播报</text>
				</view>
			</view>
			<!-- 列表 -->
			<view class="cu-timeline">
				<view class="cu-item" v-for="(item, index) in newData" :key="index">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-blue">{{ computedBeforeTime(index) }}</view>
							<view class="cu-tag line-blue">{{ item.publish_time }}</view>
						</view>
						<view class="margin-top-xs">
							<view class="title text-black text-bold">{{ item.title }}</view>
							<view class="text-sm text-gray">{{ item.desc }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>
			<button class="load-more">
				了解更多可关注腾讯新闻抗疫专题>>
			</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			newData: [] //数据
		};
	},
	created() {
		this.getData();
	},
	methods: {
		getData() {
			uni.request({
				method: 'GET',
				url: 'http://127.0.0.1:3001/Timeline',
<<<<<<< HEAD
				success: res => {
=======
				success: ({ data  }) => {
>>>>>>> 4cb29eeaf68d888ffd7c937c494014be3eca6827
					setTimeout(() => {
						this.loading = true
					}, 500);
					console.log(data)
					this.newData = data;
				}
			});
		},
		computedBeforeTime (idx) {
			let nowTime = new Date().getTime()
			let newsTime = new Date(this.newData[idx].publish_time).getTime()
			console.log(this.getHoursAndMinutesAndSeconds(nowTime - newsTime))
			return this.getHoursAndMinutesAndSeconds(nowTime - newsTime)
		},
		getHoursAndMinutesAndSeconds (ms) {
			let ss = 1000;
			let mi = ss * 60;
			let hh = mi * 60;
			let dd = hh * 24;
						  
			let day = parseInt(ms / dd);
			let hour = parseInt((ms - day * dd) / hh);
			let minute = parseInt((ms - day * dd - hour * hh) / mi);
			let second = parseInt((ms - day * dd - hour * hh - minute * mi) / ss);
			let milliSecond = parseInt(ms - day * dd - hour * hh - minute * mi - second * ss);
			 
			let sb = ''
			if(day > 0) {
			    sb += day + "天";
			}
			if(hour > 0) {
			    sb += hour + "小时" ;
			}
			if(minute > 0) {
			    sb += minute + "分";
			}
			if(second > 0) {
			    sb += second + "秒前";
			}
			return sb;
		}
	}
};
</script>

<style lang="scss" scoped>
.real-data-page {
	padding-bottom: 100upx;
}
.cu-timeline > .cu-item::before {
	color: #0081ff;
}
.cu-timeline > .cu-item::after {
	background-color: #0081ff;
	width: 4upx;
	border-radius: 100%;
}
.real-data-page .load-more {
	background-color: blue;
	border: none;
	border-radius: 10px;
	color: white;
	margin-left: 10px;
	margin-right: 10px;
	
}
</style>
