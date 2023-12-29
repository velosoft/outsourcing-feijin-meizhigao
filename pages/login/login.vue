<template>
    <view class="flex-col relative page height-full">
      <image class="bg pos" src="/static/images/bg_login.png" />
      <NavBar class="header" :hasBack="true" :title="title" :fixed="true" :isShow="true" background="transparent"></NavBar>
      <view class="flex-col self-center relative container">
        <view class="flex-col self-center logo-wrap">
          <view class="flex-col justify-start items-center self-stretch logo-bg-wrap">
            <image class="logo" src="/static/images/icon_logo_01.png"/>
          </view>
          <text class="self-center log-name mt-24">收纳大师</text>
        </view>
        <view class="flex-col self-center btn-wrap">
          <view class="flex-row justify-center btn-login">
            <image class="self-center btn-icon" src="/static/images/icon_weixin.png" />
            <text class="font btn-login-text ml-4">一键登录</text>
          </view>
          <view class="flex-col items-center btn-wait mt-16"><text class="font btn-wait-text">暂不登录</text></view>
        </view>
        <view class="flex-row checkbox">
          <u-checkbox-group v-model="v_model">
            <u-checkbox
              v-model="v_model_1"
              name="f4QvH0m2"
              activeColor="#b2a76e"
              inactiveColor="#ffffff"
              iconSize="34rpx"
              shape="circle"
            ></u-checkbox>
          </u-checkbox-group>
          <view class="self-start group ml-4">
            <text class="checkbox-text checkbox-label">进入即代表你已同意</text>
            <text class="checkbox-text checkbox-aggrement">《美之高收纳服务平台用户协议》</text>
          </view>
        </view>
      </view>
    </view>
    </template>
    
    <script>
    import NavBar from '@/components/NavBar/NavBar.vue';
    
    export default {
      components: { NavBar },
      props: {},
      data() {
        return {
          title: '登录',
          v_model: [],
          v_model_1: '',
        };
      },
    
      methods: {},
    };
    </script>
    
    <style scoped lang="less">
    .page {
      background-color: #ffffff;
      width: 100%;
      .bg {
        width: 100vw;
        height: 216.5333vw;
      }
      .pos {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
      .header {
        position: relative;
        align-self: stretch;
      }
      .container {
        margin-top: 104rpx;
        .logo-wrap {
          width: 140rpx;
          .logo-bg-wrap {
            padding: 32rpx 0;
            background-color: #b1a76e;
            border-radius: 20rpx;
            .logo {
              width: 94rpx;
              height: 78rpx;
            }
          }
          .log-name {
            color: #111111;
            font-size: 28rpx;
            font-family: 苹方;
            font-weight: 700;
            line-height: 28rpx;
          }
        }
        .btn-wrap {
          margin-top: 152rpx;
          width: 472rpx;
          .btn-login {
            padding: 32rpx 0;
            background-color: #b1a76e;
            border-radius: 48rpx;
            .btn-icon {
              width: 48rpx;
              height: 38rpx;
            }
            .btn-login-text {
              color: #ffffff;
            }
          }
          .btn-wait {
            padding: 32rpx 0;
            border-radius: 48rpx;
            border: solid 1rpx #b2b2b2;
            .btn-wait-text {
              color: #6d6d6d;
            }
          }
          .font {
            font-size: 34rpx;
            font-family: 苹方;
            line-height: 34rpx;
          }
        }
        .checkbox {
          align-self: stretch;
          margin-top: 28rpx;
          .group {
            line-height: 20rpx;
            height: 20rpx;
            .checkbox-text {
              font-size: 22rpx;
              font-family: 苹方;
              line-height: 22rpx;
              font-weight: 700;
            }
            .checkbox-label {
              color: #111111;
            }
            .checkbox-aggrement {
              color: #b1a76e;
            }
          }
        }
      }
    }
    </style>