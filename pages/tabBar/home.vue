<!--
 * @file: 首页
-->
<template>
	<view class="homePage" @click="setAnimateDotPosition">
    <UpgradeDialog />
	</view>
</template>

<script>
  import {mapActions} from 'vuex'
  import UpgradeDialog from '@/components/UpgradeDialog';
  
	export default {
    components: { UpgradeDialog },
		data() {
			return {
        // svga: 'http://static-user-test.kemiba.cn/gift_ani/341609146206090.svga',
        svga: 'https://jmg-sit-obs01.obs.cn-south-1.myhuaweicloud.com/8ee070da42baf99a13e5fd03f7f85777.svga',
        list: []
			}
		},
		computed: {

		},
		onLoad() {
      console.log('version---', this.$u.config.version);
      this.setList();
      this.pageTitle = '首页';
      
      // this.$refs.svga.render(async (parser, player) => {
      //     const videoItem = await parser.load(this.svga);
      //     await player.setVideoItem(videoItem);
      //     // 设置当前动画的循环次数，0代表无限循环 默认 0
      //     player.loops = 1
      //     // 开始播放动画，reverse = true 时则反向播放。
      //     player.startAnimation()
      //     // 监听动画完成
      //     player.onFinished(() => {
      //         console.log('动画结束')
      //     })
      // })
		},
		onShow() {

		},
		methods: {
      ...mapActions(['setAnimateDotPosition']),
      setList () {
        this.list.push(...new Array(30).fill('标题'))
      }
		},
		onPageScroll(e) {
		},
		onReachBottom () {
      this.setList();
		},
		onPullDownRefresh() {
		}
	}
</script>

<style lang="less" scoped>
	.homePage {
    height: 100vh;
    padding-top: 120rpx;
	}
</style>
