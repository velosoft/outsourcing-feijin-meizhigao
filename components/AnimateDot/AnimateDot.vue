<template>
  <view class="animateDotComp">
    <view class="animate-dot" v-for="(item, index) in animates" :style="{top: item.top, left: item.left}" :key="index" 
      :animation="item.animationData"></view>
  </view>

</template>

<script>
  let animation = null;
  let timer = null;
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    name: "AnimateDot",
    props: {
      top: {
        type: String,
        default: ''
      },
      left: {
        type: String,
        default: ''
      },
      tabLen: {
        type: Number,
        default: 5
      },
      tabIndex: {
        type: Number,
        default: 3
      },
      duration: {
        type: Number,
        default: 30
      },
      offset: {
        type: Number, // 抛物线偏移量
        default: 150
      },
      // 是否每次点击震动
      isVibrateShort: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        animates: []
      };
    },
    computed: {
      ...mapGetters(['animateDotPosition']),
      busPos() {
        const {
          tabLen,
          tabIndex,
          left,
          top
        } = this;
        const itemWidth = 750 / tabLen;
        return {
          x: left || uni.upx2px(itemWidth * (tabIndex + 1) - itemWidth / 2),
          y: top || uni.getSystemInfoSync().windowHeight
        }
      },
    },
    mounted() {
      animation = uni.createAnimation({
        timingFunction: 'ease-in',
        delay: 0,
        duration: 0
      });
      animation.export()
    },
    watch: {
      animateDotPosition(v) {
        if(!v) {
          return false
        } 
        const {
          busPos,
          duration,
          offset
        } = this;
        //定义手指点击位置
        const finger = {
          x: v.left,
          y: v.top
        };
        //定义动画顶点位置
        const topPoint = {};
        if (finger.y < busPos.y) {
          // 当手指点击位置y轴小于购物车位置时，顶点以手指点击位置向上移offset
          topPoint.y = finger.y - offset;
        } else {
          // 当手指点击位置y轴大于购物车位置时，顶点以购物车位置向上移offset
          topPoint.y = busPos.y - offset;
        }
        // topPoint.x = finger.x + (busPos.x - finger.x) / 2;
        //点击位置是否在购物车右面
        if (finger.x > busPos.x) {
          topPoint.x = (finger.x - busPos.x) / 2 + busPos.x;
        } else {
          topPoint.x = (busPos.x - finger.x) / 2 + finger.x;
        }
        //计算出贝塞尔曲线运动位置数组
        let linePos = this.bezier([finger, topPoint, busPos], duration);
        this.startAnimation(linePos);
      }
    },
    methods: {
      ...mapMutations(['setAnimateDotPosition']),
      startAnimation(linePos) {
        this.isVibrateShort && uni.vibrateShort(); //震动方法
        let {
          bezier_points
        } = linePos;
        const finger = bezier_points[0];
        const len = bezier_points.length;
        const duration = this.duration + 3;
        const animate = {
          top: finger.y,
          left:  finger.x
        };
        this.animates.push(animate);
        this.$nextTick(() => {
          setTimeout(()=>{
            bezier_points.forEach((i, idx) => {
              animation
                .left(i.x)
                .top(i.y)
                .step({
                  duration
                });
            });
            this.$set(animate, 'animationData', animation.export());
          },1000);
        })
        
      },
       bezier (points, part) {
          let sx = points[0]['x'];
          let sy = points[0]['y'];
          let cx = points[1]['x'];
          let cy = points[1]['y'];
          let ex = points[2]['x'];
          let ey = points[2]['y'];
          var bezier_points = [];
          // 起始点到控制点的x和y每次的增量
          var changeX1 = (cx - sx) / part;
          var changeY1 = (cy - sy) / part;
          // 控制点到结束点的x和y每次的增量
          var changeX2 = (ex - cx) / part;
          var changeY2 = (ey - cy) / part;
          //循环计算
          for (var i = 0; i <= part; i++) {
            // 计算两个动点的坐标
            var qx1 = sx + changeX1 * i;
            var qy1 = sy + changeY1 * i;
            var qx2 = cx + changeX2 * i;
            var qy2 = cy + changeY2 * i;
            // 计算得到此时的一个贝塞尔曲线上的点
            var lastX = qx1 + (qx2 - qx1) * i / part;
            var lastY = qy1 + (qy2 - qy1) * i / part;
            // 保存点坐标
            var point = {};
            point['x'] = lastX;
            point['y'] = lastY;
            bezier_points.push(point);
          }
          return {
            'bezier_points': bezier_points
          };
      }
    }
  }
</script>

<style lang="less" scoped>
  .animate-dot {
    width: 24rpx;
    height: 24rpx;
    position: fixed;
    z-index: 100000;
    border-radius: 100%;
    background-color: #ff5500;
  }
</style>