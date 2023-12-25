<template>
  <scroll-view class="test" :scroll-x="true">
    <view class="flex-row"><AvatarInfoCard v-for="(item, index) in items" :key="index"></AvatarInfoCard></view>
  </scroll-view>
</template>

<script>
  import AvatarInfoCard from '../../../../../../pages/myOrder/serviceOrder/detail/components/AvatarInfoCard/AvatarInfoCard.vue';

  export default {
    components: { AvatarInfoCard },
    props: { teamData: { type: Object, default: () => ({}) } },
    data() {
      return {
        items: [null, null, null, null, null, null, null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less"></style>
