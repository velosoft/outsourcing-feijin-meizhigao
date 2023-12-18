<template>
  <div class="coupon-card" :style="[cardStyle]">
    <slot name="part-one" />
    <div class="relative">
      <div class="absolute" :style="[lineStyle]"></div>
      <div class="absolute" :style="[circle1Style]"></div>
      <div class="absolute" :style="[circle2Style]"></div>
    </div>
    <slot name="part-two" />
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      // row,col
      default: "row",
    },
    line: {
      type: String,
      // 2rpx dashed #d2d2d2
      default: "",
    },
    circelWidth: {
      type: String,
      default: "20rpx",
    },
    circelColor: {
      type: String,
      default: "#ffffff",
    },
  },
  computed: {
    cardStyle() {
      switch (this.mode) {
        case "row":
          return {
            display: "flex",
            flexDirection: "row",
          };
        default:
          return {
            display: "flex",
            flexDirection: "column",
          };
      }
    },
    lineStyle() {
      if (!this.line) return { display: "none" };

      const lineWidth = this.line.split(/\s+/).find((e) => /^\d+/.test(e));
      const width = parseInt(lineWidth);
      const unit = lineWidth.replace(/\d+/, "");

      switch (this.mode) {
        case "row":
          return {
            left: `-${width / 2}${unit}`,
            top: 0,
            height: "100%",
            borderLeft: this.line,
          };
        default:
          return {
            left: 0,
            top: `-${width / 2}${unit}`,
            width: "100%",
            borderTop: this.line,
          };
      }
    },
    circle1Style() {
      const width = parseInt(this.circelWidth);
      const unit = this.circelWidth.replace(/\d+/, "");
      const height = `${width / 2}${unit}`;

      switch (this.mode) {
        case "row":
          return {
            width: this.circelWidth,
            height,
            top: 0,
            left: `-${height}`,
            borderRadius: `0 0 ${height} ${height}`,
            background: this.circelColor,
          };
        default:
          return {
            width: height,
            height: this.circelWidth,
            top: `-${height}`,
            left: 0,
            borderRadius: `0 ${height} ${height} 0`,
            background: this.circelColor,
          };
      }
    },
    circle2Style() {
      const width = parseInt(this.circelWidth);
      const unit = this.circelWidth.replace(/\d+/, "");
      const height = `${width / 2}${unit}`;

      switch (this.mode) {
        case "row":
          return {
            width: this.circelWidth,
            height,
            bottom: 0,
            left: `-${height}`,
            borderRadius: `${height} ${height} 0 0`,
            background: this.circelColor,
          };
        default:
          return {
            width: height,
            height: this.circelWidth,
            top: `-${height}`,
            right: 0,
            borderRadius: `${height} 0 0 ${height}`,
            background: this.circelColor,
          };
      }
    },
  },
};
</script>

<style scoped lang="css">
.absolute {
  position: absolute;
}
</style>
