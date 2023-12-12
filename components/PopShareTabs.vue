<template>
  <view class="popShareTabsComp">
    <uni-popup
      class="pop pop-share"
      ref="popShare"
      type="bottom"
      :safe-area="false"
    >
      <view class="pop-container">
        <image
          v-if="autoLoad && src"
          class="poster"
          :class="{ hide: !show }"
          :src="src"
          mode="aspectFit"
        ></image>
        <view class="tabs">
          <!-- #ifdef MP-WEIXIN -->
          <button hover-class="none" class="item" open-type="share">
            <image class="icon" :src="shareImg[0]" mode="aspectFit"></image>
            <view class="name">微信好友</view>
          </button>
          <!-- #endif -->
          <!-- #ifdef APP-PLUS -->
          <view class="item" @click="onSelect(1)">
            <image class="icon" :src="shareImg[0]" mode="aspectFit"></image>
            <view class="name">微信好友</view>
          </view>
          <view
            v-if="hasShareTimeline"
            class="item"
            @click="onSelect(1, 'WXSceneTimeline')"
          >
            <image class="icon" :src="shareImg[2]" mode="aspectFit"></image>
            <view class="name">朋友圈</view>
          </view>
          <!-- #endif -->
          <!--无按钮功能，只能手动点右上角菜单-->

          <view class="item" @click="onSelect(2)">
            <image class="icon" :src="shareImg[1]" mode="aspectFit"></image>
            <view class="name">{{ autoLoad ? "保存图片" : "分享图" }}</view>
          </view>
        </view>
        <view class="btn" @click="close">关闭</view>
        <view class="iPhoneX"></view>
      </view>
    </uni-popup>

    <uni-popup class="pop pop-pic" ref="popPic" type="center">
      <view class="pop-container">
        <image class="poster" :src="src" mode="aspectFit"></image>
        <view class="btn" @click="saveImg"><text>点击保存至相册</text></view>
      </view>
    </uni-popup>
    <!-- <l-painter
      ref="painter"
      custom-style="position: fixed; left: 200%; opacity: 0;"
    /> -->
  </view>
</template>

<script>
export default {
  name: "PopShareTabs",
  props: {
    detail: {
      type: Object,
      default() {
        return {};
      },
    },
    width: {
      type: String,
      default: "550rpx",
    },
    height: {
      type: String,
      default: "956rpx",
    },
    borderRadius: {
      type: String,
      default: "12rpx",
    },
    shareType: {
      type: [Number, String],
      default: 1, // 1-商品， 2-积分签到
    },
    hasShareTimeline: {
      type: Boolean,
      default: false,
    },
    autoLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const setImgUrl = this.$setImgUrl;
    return {
      src: "",
      bg_03: setImgUrl("../static/images/bg_03.jpg"),
      // shareImg: [
      //   setImgUrl("/images/icon_shareWechat_01.png"),
      //   setImgUrl("/images/icon_sharePic_01.png"),
      //   setImgUrl("/images/icon_shareWechat_01.png"),
      // ],
      shareImg: [
        "../static/images/icon_shareWechat_01.png",
        "../static/images/icon_sharePic_01.png",
        "../static/images/icon_shareWechat_01.png",
      ],
      show: false,
    };
  },
  watch: {
    detail() {
      this.src = "";
    },
  },
  methods: {
    open() {
      this.autoLoad && this.renderToCanvas().then((res) => {});
      this.$refs.popShare.open();
      this.show = true;
    },
    close() {
      this.$refs.popShare.close();
      this.$refs.popPic.close();
      this.show = false;
      this.$emit("close");
    },
    saveImg() {
      this.$utils.saveImg(this.src);
      this.$emit("saveImg");
    },
    onSelect(type, scene) {
      this.$refs.popShare.close();
      this.show = false;
      this.renderToCanvas().then((res) => {
        switch (type) {
          case 1:
            uni.share({
              provider: "weixin",
              scene: scene || "WXSceneSession",
              type: 2,
              imageUrl: res,
            });
            break;
          case 2:
            if (this.autoLoad) {
              this.saveImg();
            } else {
              this.$refs.popPic.open();
            }
            break;
        }
      });

      this.$emit("select", type);
    },
    renderToCanvas() {
      return new Promise((resolve) => {
        if (this.src) {
          return resolve(this.src);
        }
        clearTimeout(this.timer);
        this.timer = setTimeout(async () => {
          uni.showLoading({
            title: "海报生成中",
            mask: true,
          });
          let {
            detail: {
              poster,
              title,
              qrCodeData,
              inviteCode,
              integral,
              minPrice,
              otherInfo = {},
            },
            width,
            height,
            borderRadius,
            shareType,
          } = this;
          const bg = await this.downImage(poster);
          const code = await this.downImage(qrCodeData || "");
          let mainBg = "#fff";
          let views = [];

          switch (shareType * 1) {
            case 1: // 商品
              views = [
                {
                  type: "view",
                  css: {
                    position: "absolute",
                    bottom: "20rpx",
                    left: "20rpx",
                    width: "510rpx",
                    boxSizing: "border-box",
                    padding: "28rpx",
                    display: "flex",
                    alignItems: "center",
                    background: "#FFFFFF",
                    borderRadius: "8rpx",
                  },
                  views: [
                    {
                      type: "view",
                      css: {
                        flex: 1,
                      },
                      views: [
                        {
                          type: "view",
                          css: {
                            height: "70px",
                            marginBottom: "14rpx",
                          },
                          views: [
                            {
                              type: "text",
                              text: title,
                              css: {
                                fontSize: "26rpx",
                                fontWeigh: "400",
                                color: "#030305",
                                lineHeight: "34rpx",
                                lineClamp: 2,
                              },
                            },
                          ],
                        },
                        {
                          type: "view",
                          views: [
                            {
                              type: "text",
                              text:
                                `${integral}积分` +
                                (minPrice ? `+${minPrice}元` : ""),
                              css: {
                                fontSize: "26rpx",
                                fontWeigh: "600",
                                color: "#EA595E",
                                lineHeight: "36rpx",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: code ? "image" : "view",
                      src: code,
                      css: {
                        width: "120rpx",
                        height: "120rpx",
                        background: "#FFFFFF",
                        objectFit: "contain",
                        marginLeft: "18rpx",
                      },
                    },
                  ],
                },
              ];
              break;
            case 2: // 积分签到
              mainBg = "#3779A5";
              views = [
                {
                  type: "view",
                  css: {
                    position: "absolute",
                    top: "84rpx",
                    left: "40rpx",
                    width: "480rpx",
                  },
                  views: [
                    {
                      type: "text",
                      text: otherInfo.week,
                      css: {
                        fontSize: "32rpx",
                        fontWeigh: "500",
                        color: "#FFFFFF",
                        lineHeight: "44rpx",
                      },
                    },
                    {
                      type: "view",
                      css: {
                        width: "44rpx",
                        height: "4rpx",
                        background: "#FFFFFF",
                        borderRadius: "4rpx",
                        margin: "10rpx 0 20rpx 0",
                      },
                    },
                    {
                      type: "text",
                      text: title,
                      css: {
                        fontSize: "26rpx",
                        fontWeigh: "400",
                        color: "#FFFFFF",
                        lineHeight: "36rpx",
                      },
                    },
                  ],
                },
                {
                  type: "view",
                  css: {
                    position: "absolute",
                    bottom: "356rpx",
                    left: "0",
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "0 42rpx",
                    display: "flex",
                    alignItems: "flex-end",
                  },
                  views: [
                    {
                      type: "view",
                      css: {
                        flex: 1,
                      },
                      views: [
                        {
                          type: "text",
                          text: "来超级爸妈APP\n一起学习修新！",
                          css: {
                            fontSize: "24rpx",
                            fontWeigh: "400",
                            color: "#FFFFFF",
                            lineHeight: "34rpx",
                          },
                        },
                      ],
                    },
                    {
                      type: "view",
                      css: {
                        textAlign: "center",
                      },
                      views: [
                        {
                          type: "text",
                          text: otherInfo.day,
                          css: {
                            fontSize: "72rpx",
                            fontWeigh: "400",
                            color: "#FFFFFF",
                            lineHeight: "90rpx",
                            margin: "0",
                            padding: "0",
                            display: "block",
                          },
                        },
                        {
                          type: "text",
                          text: otherInfo.ym,
                          css: {
                            fontSize: "28rpx",
                            fontWeigh: "400",
                            color: "#FFFFFF",
                            lineHeight: "40rpx",
                            margin: "0",
                            padding: "0",
                            display: "block",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "view",
                  css: {
                    position: "absolute",
                    bottom: "32rpx",
                    left: "32rpx",
                    width: "532rpx",
                    boxSizing: "border-box",
                    padding: "24rpx",
                    display: "flex",
                    alignItems: "flex-end",
                    background: "rgba(0,0,0,0.26)",
                    borderRadius: "16rpx",
                  },
                  views: [
                    {
                      type: "view",
                      css: {
                        flex: 1,
                      },
                      views: [
                        {
                          src: "/static/images/logo_02.png",
                          type: "image",
                          css: {
                            width: "128rpx",
                            height: "42rpx",
                            borderRadius: "8rpx",
                            objectFit: "contain",
                            marginBottom: "20rpx",
                          },
                        },
                        {
                          type: "view",
                          css: {
                            width: "190rpx",
                            height: "2rpx",
                            background: "#FFFFFF",
                            marginBottom: "52rpx",
                          },
                        },
                        {
                          type: "text",
                          text: `天道酬勤，\n我已经在6Q超级爸妈连续签到${otherInfo.continuousNum}天！\n快来超级爸妈跟我一起学习修！`,
                          css: {
                            fontSize: "22rpx",
                            fontWeigh: "500",
                            color: "#FFFFFF",
                            lineHeight: "32rpx",
                          },
                        },
                      ],
                    },
                    {
                      type: code ? "image" : "view",
                      src: code,
                      css: {
                        width: "108rpx",
                        height: "108rpx",
                        background: "#FFFFFF",
                        borderradius: "8rpx",
                        objectFit: "contain",
                        marginLeft: "18rpx",
                      },
                    },
                  ],
                },
              ];
              break;
          }
          this.$refs.painter.render({
            css: {
              width,
              height,
            },
            views: [
              {
                type: "view",
                css: {
                  position: "relative",
                  width,
                  height,
                },
                views: [
                  {
                    // 背景
                    type: bg ? "image" : "view",
                    src: bg,
                    css: {
                      width,
                      height,
                      borderRadius,
                      background: mainBg,
                      objectFit: "cover",
                    },
                  },
                  {
                    //serialNo
                    type: "text",
                    text: "NO." + (inviteCode || ""),
                    css: {
                      position: "absolute",
                      top: "14rpx",
                      right: "20rpx",
                      height: "28rpx",
                      fontSize: "20rpx",
                      fontWeigh: "400",
                      color: "#A7A7A7",
                      lineHeight: "28rpx",
                    },
                  },
                  ...views,
                ],
              },
            ],
          });
          this.$refs.painter.canvasToTempFilePathSync({
            fileType: "png",
            // 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
            pathType: "url",
            quality: 1,
            success: (res) => {
              this.$utils.clearLoadingToast();
              this.src = res.tempFilePath;
              resolve(this.src);
            },
            fail: (err) => {
              console.log("err----", err);
              this.renderToCanvasFail("出错了，请返回重新操作或联系平台客服！");
            },
          });
        });
      }, 100);
    },
    downImage(src) {
      return new Promise((resolve) => {
        if (src) {
          uni.downloadFile({
            url: src || "",
            complete(res) {
              const { statusCode, tempFilePath } = res || {};
              console.log("downImage----", src, res);
              resolve(statusCode === 200 && tempFilePath ? tempFilePath : "");
            },
          });
        } else {
          resolve("");
        }
      });
    },
    renderToCanvasFail(tip) {
      this.$utils.clearLoadingToast();
      tip && this.$utils.toast(tip);
      this.$refs.popPic.close();
    },
  },
};
</script>

<style lang="less" scoped>
.popShareTabsComp {
  position: relative;
  z-index: 99999;
  .poster {
    width: 550rpx;
    height: 956rpx;
  }
  .pop-share {
    .pop-container {
      position: relative;
      padding: 30rpx;
      border-radius: 16rpx 16rpx 0 0;
      background-color: #fff;
      .poster {
        position: absolute;
        left: 50%;
        bottom: 120%;
        transform: translateX(-50%);
        transition: 0.15s opacity;
        &.hide {
          opacity: 0;
        }
      }
      .tabs {
        padding-top: 18rpx;
        margin-bottom: 40rpx;

        &,
        .item {
          display: flex;
          align-items: center;
        }

        .item {
          flex: 1;
          flex-direction: column;
          background: none;

          .icon {
            width: 92rpx;
            height: 92rpx;
            margin-bottom: 12rpx;
          }

          .name {
            font-size: 24rpx;
          }
        }
      }

      .btn {
        height: 80rpx;
        font-family: 苹方;
        font-size: 28rpx;
        line-height: 80rpx;
        color: #666666;
        text-align: center;
        background-color: #f8f8f8;
        border-radius: 40rpx;
      }
    }
  }

  .pop-pic {
    .pop-container {
      .poster {
        margin-bottom: 32rpx;
      }
      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 88rpx;
        font-size: 28rpx;
        background-color: #fff;
        border-radius: 12rpx;
      }
    }
  }

  .widget-box {
    position: relative;
    width: 0;
    height: 0;
    overflow: hidden;

    .widget {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -9;
      opacity: 0;
      transform: translate(-200%, 200%);
    }
  }
}
</style>
