<script>
  
export default {
  data () {
    return {
    };
  },
  onLaunch: function () {
    
  },
  onShow (option) {
    
  },
  onHide: function () {
    
  },
  methods: {
    
  }
};
</script>
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
<style lang="less">
  /*每个页面公共css */
  page,
  view,
  navigator,
  div,
  p,
  span,
  a {
    word-break: break-all;
  }

  page {
    width: 100%;
    color: #333444;
    font-family: "Microsoft YaHei", Arial, sans-serif;
    position: relative;
    box-sizing: border-box;
    background-color: @primaryBg;
    min-height: 100%;

    &::before {
      position: fixed;
      top: 0;
      left: 0;
      display: none;
      width: 100%;
      height: 20rpx;
      content: '';
      box-shadow: 0 10rpx 24rpx rgba(180, 172, 172, 0.11);
      transform: translateY(-20rpx);
    }
  }

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
    opacity: .8;
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
    background-color: @primaryGrey;
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

  /*单行文本切割*/
  .text-ellipsis {
    .text-overflow();
  }

  .omit {
    .multi-line-omit();
  }

  .del {
    text-decoration: line-through;
  }

  /*空标签*/
  .empty {
    // min-height: 500upx;
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
      content: '';
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
</style>
