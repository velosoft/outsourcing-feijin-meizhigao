<script>
export default {
  data() {
    return {};
  },
  onLaunch: function () {},
  onShow(option) {},
  onHide: function () {},
  methods: {},
};
</script>
<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "uview-ui/index.scss";
</style>
<style lang="less">
/************************************************************
  ** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
  ** 否则页面将无法正常显示                                  **
  ************************************************************/

html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

view,
image,
text {
  box-sizing: border-box;
  flex-shrink: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}

.uni-nav-bar-text {
  color: #030305;
  font-size: 36rpx;
  font-family: PingFang SC Bold;
  font-weight: 700;
  line-height: 36rpx;
}

.border-tabs .u-tabs__wrapper__nav {
  border-bottom: 1rpx solid #d3d3d3 !important;
}

.border-tabs .u-tabs__wrapper__nav__line {
  bottom: 0 !important;
}

.tag-coupon ::v-deep .u-tag {
  height: 44rpx !important;
  line-height: 44rpx !important;
  padding: 0 12rpx !important;
  background-color: #fdeee9 !important;
  border: unset !important;
  border-radius: 6rpx;
}

.tag-coupon ::v-deep .u-tag__text {
  font-size: 22rpx !important;
  font-family: 苹方 !important;
  color: #bb3e0c !important;
}


.tag-feature ::v-deep .u-tag {
  height: 44rpx !important;
  line-height: 44rpx !important;
  padding: 0 12rpx !important;
  background-color: #FFF5DE !important;
  border: unset !important;
  border-radius: 6rpx;
}

.tag-feature ::v-deep .u-tag__text {
  font-size: 22rpx !important;
  font-family: 苹方 !important;
  color: #B09053 !important;
}

// 单行文本超出显示省略
.line-clamp-one {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
}

// 文本超出两行显示省略
.line-clamp-two {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-evenly {
  justify-content: space-evenly;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.items-baseline {
  align-items: baseline;
}

.items-stretch {
  align-items: stretch;
}

.self-start {
  align-self: flex-start;
}

.self-end {
  align-self: flex-end;
}

.self-center {
  align-self: center;
}

.self-baseline {
  align-self: baseline;
}

.self-stretch {
  align-self: stretch;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-auto {
  flex: 1 1 auto;
}

.grow {
  flex-grow: 1;
}

.grow-0 {
  flex-grow: 0;
}

.shrink {
  flex-shrink: 1;
}

.shrink-0 {
  flex-shrink: 0;
}

.relative {
  position: relative;
}

.ml-2 {
  margin-left: 4rpx;
}

.mt-2 {
  margin-top: 4rpx;
}

.ml-4 {
  margin-left: 8rpx;
}

.mt-4 {
  margin-top: 8rpx;
}

.ml-6 {
  margin-left: 12rpx;
}

.mt-6 {
  margin-top: 12rpx;
}

.ml-8 {
  margin-left: 16rpx;
}

.mt-8 {
  margin-top: 16rpx;
}

.ml-10 {
  margin-left: 20rpx;
}

.mt-10 {
  margin-top: 20rpx;
}

.ml-12 {
  margin-left: 24rpx;
}

.mt-12 {
  margin-top: 24rpx;
}

.ml-14 {
  margin-left: 28rpx;
}

.mt-14 {
  margin-top: 28rpx;
}

.ml-16 {
  margin-left: 32rpx;
}

.mt-16 {
  margin-top: 32rpx;
}

.ml-18 {
  margin-left: 36rpx;
}

.mt-18 {
  margin-top: 36rpx;
}

.ml-20 {
  margin-left: 40rpx;
}

.mt-20 {
  margin-top: 40rpx;
}

.ml-22 {
  margin-left: 44rpx;
}

.mt-22 {
  margin-top: 44rpx;
}

.ml-24 {
  margin-left: 48rpx;
}

.mt-24 {
  margin-top: 48rpx;
}

.ml-26 {
  margin-left: 52rpx;
}

.mt-26 {
  margin-top: 52rpx;
}

.ml-28 {
  margin-left: 56rpx;
}

.mt-28 {
  margin-top: 56rpx;
}

.ml-30 {
  margin-left: 60rpx;
}

.mt-30 {
  margin-top: 60rpx;
}

.ml-32 {
  margin-left: 64rpx;
}

.mt-32 {
  margin-top: 64rpx;
}

.ml-34 {
  margin-left: 68rpx;
}

.mt-34 {
  margin-top: 68rpx;
}

.ml-36 {
  margin-left: 72rpx;
}

.mt-36 {
  margin-top: 72rpx;
}

.ml-38 {
  margin-left: 76rpx;
}

.mt-38 {
  margin-top: 76rpx;
}

.ml-40 {
  margin-left: 80rpx;
}

.mt-40 {
  margin-top: 80rpx;
}

.ml-42 {
  margin-left: 84rpx;
}

.mt-42 {
  margin-top: 84rpx;
}

.ml-44 {
  margin-left: 88rpx;
}

.mt-44 {
  margin-top: 88rpx;
}

.ml-46 {
  margin-left: 92rpx;
}

.mt-46 {
  margin-top: 92rpx;
}

.ml-48 {
  margin-left: 96rpx;
}

.mt-48 {
  margin-top: 96rpx;
}

.ml-50 {
  margin-left: 100rpx;
}

.mt-50 {
  margin-top: 100rpx;
}

.ml-52 {
  margin-left: 104rpx;
}

.mt-52 {
  margin-top: 104rpx;
}

.ml-54 {
  margin-left: 108rpx;
}

.mt-54 {
  margin-top: 108rpx;
}

.ml-56 {
  margin-left: 112rpx;
}

.mt-56 {
  margin-top: 112rpx;
}

.ml-58 {
  margin-left: 116rpx;
}

.mt-58 {
  margin-top: 116rpx;
}

.ml-60 {
  margin-left: 120rpx;
}

.mt-60 {
  margin-top: 120rpx;
}

.ml-62 {
  margin-left: 124rpx;
}

.mt-62 {
  margin-top: 124rpx;
}

.ml-64 {
  margin-left: 128rpx;
}

.mt-64 {
  margin-top: 128rpx;
}

.ml-66 {
  margin-left: 132rpx;
}

.mt-66 {
  margin-top: 132rpx;
}

.ml-68 {
  margin-left: 136rpx;
}

.mt-68 {
  margin-top: 136rpx;
}

.ml-70 {
  margin-left: 140rpx;
}

.mt-70 {
  margin-top: 140rpx;
}

.ml-72 {
  margin-left: 144rpx;
}

.mt-72 {
  margin-top: 144rpx;
}

.ml-74 {
  margin-left: 148rpx;
}

.mt-74 {
  margin-top: 148rpx;
}

.ml-76 {
  margin-left: 152rpx;
}

.mt-76 {
  margin-top: 152rpx;
}

.ml-78 {
  margin-left: 156rpx;
}

.mt-78 {
  margin-top: 156rpx;
}

.ml-80 {
  margin-left: 160rpx;
}

.mt-80 {
  margin-top: 160rpx;
}

.ml-82 {
  margin-left: 164rpx;
}

.mt-82 {
  margin-top: 164rpx;
}

.ml-84 {
  margin-left: 168rpx;
}

.mt-84 {
  margin-top: 168rpx;
}

.ml-86 {
  margin-left: 172rpx;
}

.mt-86 {
  margin-top: 172rpx;
}

.ml-88 {
  margin-left: 176rpx;
}

.mt-88 {
  margin-top: 176rpx;
}

.ml-90 {
  margin-left: 180rpx;
}

.mt-90 {
  margin-top: 180rpx;
}

.ml-92 {
  margin-left: 184rpx;
}

.mt-92 {
  margin-top: 184rpx;
}

.ml-94 {
  margin-left: 188rpx;
}

.mt-94 {
  margin-top: 188rpx;
}

.ml-96 {
  margin-left: 192rpx;
}

.mt-96 {
  margin-top: 192rpx;
}

.ml-98 {
  margin-left: 196rpx;
}

.mt-98 {
  margin-top: 196rpx;
}

.ml-100 {
  margin-left: 200rpx;
}

.mt-100 {
  margin-top: 200rpx;
}

/*每个页面公共css */
.navigation-bar-shadow {
  width: 100%;
  height: 10px;
  overflow: hidden;
  box-shadow: 0 6upx 18upx 0 rgba(239, 239, 239, 0.6);
  position: fixed;
  top: -10px;
  /* #ifdef H5 */
  top: 34px;
  /* #endif */
  left: 0;
  z-index: 9;
}

view,
text,
input,
textarea,
button,
navigator {
  box-sizing: border-box;
}

button {
  line-height: initial;
  padding: 0;
  border: none;
  border-radius: 0;
}

button:active {
  opacity: 0.8;
}

button::after {
  border: none;
}

input,
textarea {
  font-size: inherit;
}

input {
  height: auto;
}

textarea {
  width: 100%;
}

.textarea {
  height: 176rpx;
  padding: 24rpx;
  border-radius: 12rpx;
  /* background-color: @primaryGrey; */
}

img,
image {
  display: block;
  max-width: 100%;
}

.status_bar {
  width: 100%;
}

.iPhoneXT {
  padding-top: constant(safe-area-inset-top) !important;
  padding-top: env(safe-area-inset-top) !important;
}

.iPhoneX {
  padding-bottom: constant(safe-area-inset-bottom) !important;
  padding-bottom: env(safe-area-inset-bottom) !important;
}

.placeholderClass {
  color: #ccccd4;
}

.placeholderClass1 {
  color: #c1c1c1;
}

/*清除浮动*/
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  overflow: hidden;
  clear: both;
  position: relative;
}

/*元素居中*/
.position-cm {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

/* 单行文本切割 */
/* .text-ellipsis {
  .text-overflow();
}

.omit {
  .multi-line-omit();
} */

.del {
  text-decoration: line-through;
}

/*空标签*/
.empty {
  min-height: 500upx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 28upx;
  line-height: 36upx;
  color: #666666;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  margin: auto;
  background-color: #fff;
  padding-bottom: 60upx;

  .empty-img {
    width: 400upx;
    height: 310upx;
    margin-bottom: 40upx;
  }

  .empty-tip-btn {
    width: 310upx;
    height: 80upx;
    font-size: 26upx;
    color: #ffffff;
    margin-top: 72upx;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(70deg, #bb1b38 0%, #fd4184 100%);
    box-shadow: 0 7upx 40upx 0 rgba(206, 38, 78, 0.4);
    border-radius: 40upx;
  }
}

/*列表底部*/
.finished,
.loading {
  display: block;
  padding: 40upx 0;
  font-size: 28upx;
  color: #999999;
  text-align: center;
}

.fixed-nav {
  margin-bottom: constant(safe-area-inset-bottom) !important;
  margin-bottom: env(safe-area-inset-bottom) !important;
}

.custom-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;

  .icon-selected {
    width: 40upx;
    height: 40upx;
    box-shadow: 0 5upx 16upx 0 rgba(199, 48, 84, 0.4);
    border-radius: 100%;
    display: none;
  }

  &::after {
    display: block;
    width: 40upx;
    height: 40upx;
    box-sizing: border-box;
    border-radius: 100%;
    border: solid 2upx #888888;
    content: "";
  }

  &.active {
    &::after {
      display: none;
    }

    .icon-selected {
      display: block;
    }
  }
}

rich-text {
  text-align: justify;
  white-space: normal;
  word-break: break-all;

  image {
    max-width: 100% !important;
    height: auto !important;
  }
}

.u-number-box {
  /deep/ .u-number-box__minus {
    margin-right: 8rpx;
    width: 48rpx;
    height: 48rpx !important;
    background-color: unset !important;
    background-image: url(static/images/number-box-minus.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  /deep/ .u-icon {
    display: none;
  }

  /deep/ .u-number-box__plus {
    margin-left: 8rpx;
    width: 48rpx;
    height: 48rpx !important;
    background-color: unset !important;
    background-image: url(static/images/number-box-plus.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /deep/ .u-number-box__input {
    padding: 6rpx 12rpx;
    margin: 0;
    background-color: #f4f4f4 !important;
    color: #030305 !important;
    font-size: 28rpx;
    line-height: 24rpx;
    font-family: 苹方;
    box-sizing: border-box;
  }

  /deep/ .u-number-box__plus--hover {
    background-color: unset !important;
  }

  /deep/ .u-number-box__minus--hover {
    background-color: unset !important;
  }
}
</style>
