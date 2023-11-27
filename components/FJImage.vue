<template>
	<view>
		<image :class="className" :src="src" :mode="mode" v-if="hasNetwork" />
		<image :class="className" :src="src" :mode="mode" v-else />
	</view>
</template>

<script>
	export default {
		name:"FJImage",
    props: {
      className: {
        type: String,
        default: ''
      },
      src: {
        type: String,
        default: ''
      },
      mode: {
        type: String,
        default: 'widthFix'
      }
    },
    mounted () {
      this.hasNetwork = this.src.indexOf('http') > -1
    },
		data() {
			return {
				hasNetwork: false // 是否为网络图片
			};
		},
    watch: {
      src (nv) {
        this.hasNetwork = nv.indexOf('http') > -1
      }
    }
	}
</script>

<style>

</style>
