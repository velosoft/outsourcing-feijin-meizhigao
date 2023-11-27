<template>
  <view class="flex-row">
    <view
      class="flex-col justify-start items-center group_3 equal-division-item"
    >
      <image
        class="a-i-background-image"
        src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692420408547664.png"
      />
      <text class="font_3 text_1 pos_2">服务分类</text>
      <image
        class="image_8 pos_4"
        src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/df525343176bc7b3e6b09594229fe5ad.png"
      />
    </view>
    <view
      class="ml-12 flex-col justify-start items-center group_3 equal-division-item"
    >
      <image
        class="a-i-background-image"
        src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692420887214705.png"
      />
      <text class="font_3 text_1 pos_3">商品分类</text>
      <image
        class="image_8 pos_5"
        src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/df525343176bc7b3e6b09594229fe5ad.png"
      />
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
.group_3 {
  position: relative;
  flex: 1 1 10.38rem;
  .a-i-background-image {
    width: 10.38rem;
    height: 5.5rem;
  }
  .font_3 {
    font-size: 0.75rem;
    font-family: PingFangSC-Medium;
    line-height: 0.75rem;
    color: #ffffff;
  }
  .text_1 {
    font-size: 0.81rem;
    line-height: 0.81rem;
  }
  .pos_2 {
    position: absolute;
    left: 0.78rem;
    top: 0.94rem;
  }
  .image_8 {
    width: 1.06rem;
    height: 0.19rem;
  }
  .pos_4 {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .pos_3 {
    position: absolute;
    left: 0.8rem;
    top: 0.94rem;
  }
  .pos_5 {
    position: absolute;
    left: 0.81rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
.equal-division-item {
  height: 5.5rem;
}
</style>
