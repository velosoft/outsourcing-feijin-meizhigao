<template>
  <view class="dialog">
    <u-popup :show="show" mode="center" :closeOnClickOverlay="!data.compulsory && shoMask" @close="handleClose">
      <view class="content">
        <view class="title">升级提示</view>
        <view class="text" v-if="data.content">
          <!-- <u-parse :content="data.content"></u-parse> -->
        </view>
        <view class="btn_group" v-if="!hasUpdate">
          <view class="sort_btn" v-if="!data.compulsory">
            <button class="btn" @click="close">下次再说</button>
            <button class="btn" @click="upgrade">立即升级</button>
          </view>
          <button class="long_btn" @click="upgrade" v-else>立即升级</button>
        </view>
        <view class="progress" v-else>
          <view class="active" :style="{width: progress + '%'}">{{progress}}%</view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
  // import uParse from '@/components/u-parse/u-parse.vue';

  export default {
    mounted() {
      this.checkUpdate();
    },
    data() {
      return {
        show: false,
        // #ifdef APP-PLUS
        version: plus.runtime.version,
        // #endif
        // #ifdef H5
        version: '1.0.0',
        // #endif
        data: {},
        hasUpdate: false,
        progress: 0,
        shoMask: true,
      };
    },
    methods: {
      handleClose(e) {
        uni.showTabBar({
          animation: true,
        });
      },
      open () {
        this.shoe = true;
      },
      close() {
        this.show = false;
      },
      upgrade() {
        this.hasUpdate = true;
        this.shoMask = false;
        const downloadTask = uni.downloadFile({
          url: this.data.name,
          success: (downloadResult) => {
            if (downloadResult.statusCode === 200) {
              console.log('安装包下载成功，即将安装：' + JSON.stringify(downloadResult, null, 4));
              plus.runtime.openFile(downloadResult.tempFilePath);
              this.hasUpdate = false;
              this.shoMask = true;
              this.close();
            }
          }
        });
        downloadTask.onProgressUpdate((res) => {
          this.hasUpdate = res.progress !== 100 ? true : false;
          this.progress = res.progress;
        });
        uni.$on("cancelUpdate", () => {
          console.log("用户点击了取消下载");
          this.hasUpdate = false;
          this.shoMask = true;
          this.close();
          downloadTask.abort();
        })
      },
      checkUpdate() {
        this.$http.get({
          url: 'version/checkUpdate',
          showErrorToast: true,
        }).then(res => {
          const {
            data
          } = res;
          this.data = res.data;

          if (data.code && data.code !== this.version) {
            this.$refs.dialog.open();
            uni.hideTabBar();
          }


        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .dialog {
    .content {
      position: relative;
      padding: 0 30rpx;
      width: 570rpx;
      height: 529rpx;
      background-color: #ffffff;
      border-radius: 8rpx;

      .title {
        padding: 39rpx 0;
        text-align: center;
        font-size: 30rpx;
        font-weight: bold;
        color: #333333;
      }

      .text {
        font-size: 26rpx;
        color: #666666;
        line-height: 1.6;
      }

      .btn_group {
        position: absolute;
        bottom: 10rpx;
        left: 0;
        padding: 30rpx;
        width: 100%;

        .sort_btn {
          display: flex;
          justify-content: space-between;
        }

        .btn {
          padding: 0;
          margin: 0;
          width: 240rpx;
          height: 56rpx;
          font-size: 26rpx;
          line-height: 56rpx;
          text-align: center;
          color: #999999;
          background-color: #f4f4f4;
          border-radius: 28rpx;

          &:last-child {
            color: #ffffff;
            background-image: linear-gradient(90deg,
                #ff8f34 0%,
                #ff6a56 100%),
              linear-gradient(#ffffff,
                #ffffff);
            background-blend-mode: normal,
              normal;
          }
        }

        .long_btn {
          padding: 0;
          margin: 0;
          width: 510rpx;
          height: 56rpx;
          font-size: 26rpx;
          line-height: 56rpx;
          text-align: center;
          color: #fff;
          background-image: linear-gradient(90deg,
              #ff8f34 0%,
              #ff6a56 100%),
            linear-gradient(#ffffff,
              #ffffff);
          background-blend-mode: normal,
            normal;
          border-radius: 28rpx;
        }
      }

      .progress {
        position: absolute;
        bottom: 40rpx;
        left: 50%;
        width: 100%;
        width: 510rpx;
        height: 56rpx;
        border: 1rpx solid #ff8f34;
        transform: translateX(-50%);
        border-radius: 56rpx;

        .active {
          height: 100%;
          font-size: 26rpx;
          line-height: 56rpx;
          text-align: center;
          border-radius: 56rpx;
          background: #ff8f34;
          color: #fff;
          white-space: nowrap;
        }
      }
    }
  }
</style>
