<template>
  <view class="nav-wrap">
    <u-navbar title-color="#fff" back-icon-color="#ffffff" :is-fixed="true" :is-back="false" :background="background"
      :back-text-style="{color: '#fff'}" :title="title">
    </u-navbar>
    <view class="nav-title" @click="login()">
      <!-- <view class="logo">
        <u-avatar size="large" :src="src"></u-avatar>
      </view> -->
      <view class="nav-info">
        <view class="nav-title__text">
          <!-- {{$t('common.title')}} -->
          点击登录
        </view>
        <view class="nav-slogan">
          <!-- {{$t('common.intro')}} -->
          今日状态
        </view>
      </view>
    </view>
    <view class="nav-desc">
      <!-- {{desc}} -->
    </view>
    <!-- <view class="lang" @tap="switchLang">
      <u-icon size="46" color="warning" :name="lang"></u-icon>
    </view> -->
    <view class="list-wrap" style="border-top: 1px solid #CCCCCC;">
      <u-cell-group>
        <u-cell-item :titleStyle="{fontWeight: 500}" @click="openPage(item.path)" :title="item.title" v-for="(item, index) in list"
          :key="index">
          <!-- <image slot="icon" class="u-cell-icon" :src="getIcon(item1.icon)" mode="widthFix"></image> -->
        </u-cell-item>
      </u-cell-group>
    </view>
    <u-gap height="70"></u-gap>
    <view class="foot">
      <view class="left">
        <view class="title">今日打卡</view>
        <view class="bottom">
          <view class="u-no-demo-here">未完成</view>
        </view>
      </view>
      <view class="right">
        <view class="title">累计打卡</view>
        <view class="bottom">
          <view class="u-no-demo-here">20次</view>
        </view>
      </view>
    </view>
    <view class="foot">
      <view class="left">
        <view class="title">健康天数</view>
        <view class="bottom">
          <view class="u-no-demo-here">50天</view>
        </view>
      </view>
      <view class="right">
        <view class="title">异常天数</view>
        <view class="bottom">
          <view class="u-no-demo-here">200天</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '我的',
        right: false,
        showAction: false,
        background: {
          'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
        },
        list: [{
          path: '/pages/userInfo/index',
          title: '个人信息',
          title_en: 'Color',
        }],
        src: ''
      }
    },
    methods: {
      login() {
        this.$u.route({
          url: '/pages/login/index'
        })
      },
      openPage(path) {
        this.$u.route({
          url: path
        })
      },
    }
    // computed: {
    // 	lang() {
    // 		return this.$i18n.locale == 'zh' ? 'zh' : 'en';
    // 	}
    // },
    // methods: {
    // 	switchLang() {
    // 		this.$i18n.locale = this.$i18n.locale == 'en' ? 'zh' : 'en';
    // 		this.vuex_tabbar[0].text = this.$t('nav.components')
    // 		this.vuex_tabbar[1].text = this.$t('nav.js')
    // 		this.vuex_tabbar[2].text = this.$t('nav.template')
    // 		uni.setNavigationBarTitle({
    // 			title: this.$t(this.title)
    // 		});
    // 	}
    // }
  }
</script>

<style lang="scss" scoped>
  .foot {
    border-width: 1px;
    border-color: #ddd;
    border-style: dashed;
    background-color: #fafafa;
    padding: 20px 10px;
    border-radius: 3px;
    display: flex;

    view {
      flex: 1;
      text-align: center;

      .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .bottom {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  .nav-wrap {
    padding: 15px;
    position: relative;
  }

  .lang {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .nav-title {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
  }

  .nav-info {
    margin-left: 15px;
  }

  .nav-title__text {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    color: $u-main-color;
    font-size: 25px;
    font-weight: bold;
  }

  .logo {
    width: 70px;
    /* #ifndef APP-NVUE */
    height: auto;
    /* #endif */
  }

  .nav-slogan {
    color: $u-tips-color;
    font-size: 14px;
  }

  .nav-desc {
    margin-top: 10px;
    font-size: 14px;
    color: $u-content-color;
  }
</style>
