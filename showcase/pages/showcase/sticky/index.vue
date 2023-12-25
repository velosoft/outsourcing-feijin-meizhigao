<template>
  <view class="flex-col page">
    <!-- 
      吸顶布局现在必须要删掉每层一父亲身上的 overflow 设置，
      auto  hidden 都不行。必须层层删除掉
      Stikcy 进行量少层级，不需要的层级都可以解除掉，尽量避免出现失效的问题

      现在 Stikcy 还有一个问题没有解决，就是 Custom Header 的高度问题
      这个需要在 Sticky 组件内部做一个改造，通过这个 Header 自动来计算 Custom Header 的高度
     -->
    <u-cell-group>
      <!--cf：https://dev.ft.velosoft.cn/projects/65741cd2740f740012ac2996/pages/65782a63740f740012ac4419  -->
      <u-cell title="case1" isLink url="/showcase/pages/showcase/sticky/case1"></u-cell>
    </u-cell-group>
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

<style scoped lang="less"></style>
