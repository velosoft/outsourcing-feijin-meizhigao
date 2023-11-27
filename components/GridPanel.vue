<template>
  <view class="flex-col group_8">
    <view class="flex-row items-baseline group_9">
      <text class="font_4 text_11">从收纳开始,</text>
      <text class="ml-4 font_5 text_17">探索家具灵感</text>
    </view>
    <view class="mt-12 flex-row equal-division_2">
      <view class="flex-col items-center equal-division-item_1">
        <image
          class="image_12"
          src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=6087d03087f61aefa21604e8a8260437.png"
        />
        <text class="mt-8 font_2">客厅收纳</text>
      </view>
      <view class="flex-col items-start equal-division-item_1 group_23">
        <image
          class="image_12"
          src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=61bc2017b76d4955d49230334853d186.png"
        />
        <text class="mt-8 font_2">衣柜收纳</text>
      </view>
      <view class="flex-col items-center equal-division-item_4">
        <image
          class="shrink-0 image_12"
          src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=3824feb130eaa18a0145cbe83a7076df.png"
        />
        <text class="mt-10 font_2">厨房收纳</text>
        <image
          class="mt-10 shrink-0 image_13"
          src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=c4e8c8d415dd690090db099c3f917af8.png"
        />
      </view>
      <view class="flex-col items-center group_10 group_29">
        <image
          class="image_12"
          src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=b5dd0a42660421740bd5ff8e89a49f51.png"
        />
        <text class="mt-8 font_2">卧室收纳</text>
      </view>
      <view class="flex-col items-center group_10 group_1">
        <image
          class="image_12"
          src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=e20217164f231e0999467a2457261afb.png"
        />
        <text class="mt-8 font_8 text_22">杂物房收纳</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="less">
.group_8 {
  .group_9 {
    padding: 0 1rem;
    .font_4 {
      font-size: 0.94rem;
      font-family: PingFang SC;
      line-height: 0.94rem;
      color: #000000;
    }
    .text_11 {
      line-height: 0.94rem;
    }
    .font_5 {
      font-size: 0.94rem;
      font-family: PingFang SC;
      line-height: 0.94rem;
      color: #a7a7a7;
    }
    .text_17 {
      font-size: 0.88rem;
      line-height: 0.88rem;
    }
  }
  .equal-division_2 {
    padding: 0 0.25rem;
    .equal-division-item_1 {
      flex: 1 1 4.59rem;
      align-self: center;
    }
    .group_23 {
      padding: 0 0.5rem;
    }
    .equal-division-item_4 {
      flex: 1 1 4.59rem;
      align-self: flex-start;
      margin-top: 1rem;
      .image_13 {
        border-radius: 0.13rem;
        width: 1.88rem;
        height: 0.25rem;
      }
    }
    .image_12 {
      width: 3rem;
      height: 3rem;
    }
    .font_2 {
      font-size: 0.75rem;
      font-family: 苹方;
      line-height: 0.75rem;
      color: #030305;
    }
    .group_10 {
      flex: 1 1 4.59rem;
      .font_8 {
        font-size: 0.63rem;
        font-family: 苹方;
        line-height: 0.63rem;
        color: #030305;
      }
      .text_22 {
        font-size: 0.69rem;
        line-height: 0.69rem;
      }
    }
    .group_29 {
      padding: 0.75rem 0;
    }
    .group_1 {
      padding: 1rem 0;
    }
  }
}
</style>
