<template>
  <view class="flex-col page">
    <Selector class="tabs1" :items="tabItems" @change="onChange" />

    <Selector
      class="followup-type-selector mt-19"
      :items="followupItems"
      @change="onChange"
    />

    <Selector
      class="variant-selector mt-19"
      :items="colorItems"
      @change="onChange"
    />
    <Selector
      class="variant-selector price-unit mt-19"
      :items="tab3Items"
      @change="onChange"
    />

    <Selector class="tabs2 mt-19" :items="tab2Items" @change="onChange" />
  </view>
</template>

<script>
import Selector from "../../components/Selector/Selector";

export default {
  components: { Selector },
  props: {},
  data() {
    return {
      tabItems: ["平台商品", "线下商品"],
      followupItems: ["微信", "电话", "线下"],
      tab2Items: ["进行中", "待启动", "已完成"],
      tab3Items: [
        "按延米核算（元/m)",
        "按面积核算（元/m)",
        "按小时核算（元/人/h)",
      ],
      colorItems: ["黄色", "红色", "黑色", "蓝色"],
    };
  },

  methods: {
    onChange(index) {
      console.log("outter:" + index);
    },
  },
};
</script>

<style scoped lang="less">
.tabs1 {
  /deep/ .selector-wrapper {
    background-color: #f8f8f8;
  }
}

.tabs2 {
  /deep/ .tabs-root {
    background-color: unset;
  }

  /deep/ .item {
    // background-color: red;
    margin-left: 10px;
  }

  /deep/ .item__active {
    padding: 36rpx 0 35rpx;
    background-color: unset;
    background-image: url("https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/65741cd2740f740012ac2996/17021084856937781365.png") !important;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 150rpx;
    border-radius: unset;
  }
}

.followup-type-selector {
  /deep/ .items-layout {
    gap: 20rpx;
  }

  /deep/ .item {
    flex: unset;
    padding: 16rpx 20rpx;
    background-color: #f8f8f8;
    border-radius: 8rpx;
    font-size: 24rpx;
    line-height: 24rpx;
    color: #707070;
  }

  /deep/ .item__active {
    background-color: #b1a76e;
    color: #ffffff;
  }
}

.variant-selector {
  /deep/ .items-layout {
    gap: 20rpx;
  }

  /deep/ .item {
    padding: 16rpx 32rpx;
    border-radius: 32rpx;
    border: solid 2rpx #e1e4eb;
    font-size: 26rpx;
    line-height: 26rpx;
    color: #6c6c6c;
  }

  /deep/ .item__active {
    border: solid 2rpx #b09053;
    background-color: unset;
    color: #b09053;
  }
}

.price-unit {
  /deep/ .items-layout {
    flex-wrap: wrap;
  }
  /deep/ .item {
    flex: unset;
  }
}

.mt-19 {
  margin-top: 38rpx;
}
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  padding: 200rpx 32rpx;
  background-color: #ffffff;
}
</style>
