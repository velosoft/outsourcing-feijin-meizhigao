<template>
  <view class="flex-col page">
    <Selector class="simple-tabs" :items="tabItems" @change="onChange" />

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

    <view class="flex-col">
      <Selector
        class="miaosha-tabs mt-19"
        :items="miaoshaItems"
        @change="onChange"
      />
      <view class="miaosha-body"> </view>
    </view>

    <Selector
      class="timeline-selector mt-19"
      :items="timelineItems"
      @change="onChange"
    >
      <template v-slot="{ item }">
        <view class="flex-col items-center">
          <text class="time">{{ item.time }}</text>
          <text class="label">{{ item.label }}</text>
        </view>
      </template>
    </Selector>

    <Selector class="status-tabs mt-19" :items="tab2Items" @change="onChange">
      <template v-slot="{ item }">
        <view class="flex-col items-center">
          <text class="count">{{ item.count }}</text>
          <text class="label mt-12">{{ item.label }}</text>
        </view>
      </template>
    </Selector>
  </view>
</template>

<script>
import Selector from "@/components/Selector/Selector";

export default {
  components: { Selector },
  props: {},
  data() {
    return {
      tabItems: ["平台商品", "线下商品"],
      followupItems: ["微信", "电话", "线下"],
      tab3Items: [
        "按延米核算（元/m)",
        "按面积核算（元/m)",
        "按小时核算（元/人/h)",
      ],
      colorItems: ["黄色", "红色", "黑色", "蓝色"],
      tab2Items: [
        { count: 5, label: "进行中" },
        { count: 4, label: "待启动" },
        { count: 2, label: "已完成" },
      ],
      timelineItems: [
        { time: "10:00", label: "已结束" },
        { time: "11:00", label: "抢购中" },
        { time: "12:00", label: "已结束" },
        { time: "13:00", label: "已结束" },
        { time: "14:00", label: "已结束" },
      ],
      miaoshaItems: ["活动商品", "活动服务", "活动课程"],
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
.simple-tabs {
  /deep/ .selector-wrapper {
    padding: 4rpx 0;
    background-color: #f8f8f8;
    border-radius: 100rpx;
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

.mt-25 {
  margin-top: 50rpx;
}

.page {
  padding: 32rpx 32rpx;
}

.status-tabs {
  /deep/ .item {
    min-height: 150rpx;
    justify-content: center;
    align-items: center;
    padding: 36rpx 0;

    .count {
      font-size: 48rpx;
      line-height: 48rpx;
      font-weight: 700;
      color: #030305;
    }

    .label {
      font-size: 24rpx;
      line-height: 24rpx;
      color: #999999;
    }

    background-color: unset;
    border-radius: unset;
  }

  /deep/ .item__active {
    background-color: unset;
    background-image: url("https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/65741cd2740f740012ac2996/17021084856937781365.png") !important;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 36rpx 0;
    .count {
      color: #ffffff;
    }

    .label {
      color: #ffffff;
    }
  }
}

.miaosha-tabs {
  /deep/ .selector-wrapper {
    padding-top: 10rpx;
  }

  /deep/ .items-layout {
    // gap: 20rpx;
    background-color: #ff564e;
    border-radius: 16rpx 16rpx 0rpx 0rpx;
    height: 68rpx;
  }

  /deep/ .item {
    // padding: 16rpx 20rpx;
    background-color: unset;
    justify-content: center;
    align-items: center;
    border-radius: unset;
    font-size: 28rpx;
    line-height: 28rpx;
    color: #ffffff;
  }

  /deep/ .item__active {
    margin-top: -10rpx;
    background-image: linear-gradient(180deg, #fcf1ce 0%, #faebae 100%);
    border: solid 1rpx #ffffff;
    border-radius: 16rpx 16rpx 0rpx 0rpx;
    font-size: 30rpx;
    font-weight: 600;
    line-height: 30rpx;
    color: #030305;
  }
}

.miaosha-body {
  // margin-top: -4rpx;
  height: 80px;
  background-image: linear-gradient(86.8deg, #fbebbc 4.9%, #fefde2 95.3%);
  border-radius: 0rpx 0rpx 16rpx 16rpx;
}

.timeline-selector {
  /deep/ .selector-wrapper {
    background-color: unset;
    padding: unset;
  }

  /deep/ .items-layout {
    // gap: 20rpx;
    background-color: #ff564e;
    border-radius: 16rpx 16rpx 0rpx 0rpx;
    height: 68rpx;
  }

  /deep/ .item {
    // padding: 16rpx 20rpx;
    background-color: unset;
    justify-content: center;
    align-items: center;
    border-radius: unset;
    color: #ffffff;

    .time {
      font-size: 22rpx;
      line-height: 22rpx;
    }

    .label {
      font-size: 20rpx;
      line-height: 20rpx;
    }
  }

  /deep/ .item__active {
    margin-top: -10rpx;
    background-image: linear-gradient(180deg, #fcf1ce 0%, #faebae 100%);
    border: solid 1rpx #ffffff;
    border-radius: 16rpx 16rpx 0rpx 0rpx;
    color: #030305;
    .time {
      font-size: 26rpx;
      line-height: 26rpx;
    }

    .label {
      font-size: 20rpx;
      line-height: 20rpx;
      margin-top: 8rpx;
    }
  }
}
</style>
