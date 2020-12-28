<template>
  <view class="wrap">
    <view class="top"></view>
    <view class="content">
      <view class="title">{{ register ? '欢迎注册' : '欢迎登录'}}</view>
      <u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
        <u-form-item :label-position="labelPosition" label="账号" prop="password">
          <u-input class="u-border-bottom" :password-icon="true" :border="border" type="number" v-model="model.id"
            placeholder="请输入账号"></u-input>
        </u-form-item>
        <u-form-item :label-position="labelPosition" label="密码" prop="password">
          <u-input :password-icon="true" :border="border" type="password" v-model="model.password" placeholder="请输入密码"></u-input>
        </u-form-item>
        <u-form-item v-if="register" :label-position="labelPosition" label="确认密码" label-width="150" prop="rePassword">
          <u-input :border="border" type="password" v-model="model.rePassword" placeholder="请确认密码"></u-input>
        </u-form-item>
      </u-form>
      <!-- <view class="tips">未注册的手机号验证后自动创建账号</view> -->
      <button @tap="submit" :style="[inputStyle]" class="getCaptcha">提交</button>
      <u-toast ref="uToast" />
      <view class="alternative">
        <view class="password" @click="register = !register">{{register ? '已有账号' : '注册账号'}}</view>
        <view class="issue" @click="goBack()">暂不登录</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        register: false,
        model: {
          id: '',
          password: ''
        },
        rules: {
          password: [{
              required: true,
              message: '请输入密码',
              trigger: ['change', 'blur'],
            },
            {
              // 正则不能含有两边的引号
              pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
              message: '需同时含有字母和数字，长度在6-12之间',
              trigger: ['change', 'blur'],
            }
          ]
        },
        rePassword: [
					{
						required: true,
						message: '请重新输入密码',
						trigger: ['change','blur'],
					},
					{
						validator: (rule, value, callback) => {
							return value === this.model.password;
						},
						message: '两次输入的密码不相等',
						trigger: ['change','blur'],
					}
				],
      }
    },
    computed: {
      inputStyle() {
        let style = {};
        if (this.model.id && this.model.password && this.model.rePassword) {
          style.color = "#fff";
          style.backgroundColor = this.$u.color['success'];
          style.opacity = 1
        }
        return style;
      }
    },
    methods: {
      showToast (val) {
        this.$refs.uToast.show(val)
      },
      submit() {
        this.$refs.uForm.validate(valid => {
          this.showToast({
            title: '注册成功',
            type: 'success',
            // back: true
          })
        });
      },
      goBack() {
        uni.navigateBack({
          delta: 1
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  .wrap {
    font-size: 28rpx;
    .content {
      width: 600rpx;
      margin: 80rpx auto 0;

      .title {
        text-align: left;
        font-size: 60rpx;
        font-weight: 500;
        margin-bottom: 100rpx;
      }

      input {
        text-align: left;
        margin-bottom: 10rpx;
        padding-bottom: 6rpx;
      }

      .tips {
        color: $u-type-info;
        margin-bottom: 60rpx;
        margin-top: 8rpx;
      }

      .getCaptcha {
        background-color: #4cdd64;
        opacity: 0.7;
        color: $u-tips-color;
        border: none;
        font-size: 30rpx;
        padding: 12rpx 0;

        &::after {
          border: none;
        }
      }

      .alternative {
        color: $u-tips-color;
        display: flex;
        justify-content: space-between;
        margin-top: 30rpx;
      }
    }

    .buttom {
      .loginType {
        display: flex;
        padding: 350rpx 150rpx 150rpx 150rpx;
        justify-content: space-between;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: $u-content-color;
          font-size: 28rpx;
        }
      }

      .hint {
        padding: 20rpx 40rpx;
        font-size: 20rpx;
        color: $u-tips-color;

        .link {
          color: $u-type-warning;
        }
      }
    }
  }
</style>
