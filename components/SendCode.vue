<!-- 获取验证码组件 -->
<template>
  <view class="GetCode"
       :class="{'sendCode':disabled}"
	   :style="{'color':info.txtColor||'#bb1b38'}"
  ><text>{{showText}}</text></view>
</template>

<script>
  export default {
    name: "GetCode",
    props:{
      obj: Object,
    },
    data(){
      return {
        showText: '',
        second: '',
        disabled: false,
        info:{
          second: 60,
          startText: "发送验证码",
          endText: "重新发送",
        },
		timer:null
      }
    },
    mounted(){
      let {info,obj} = this;
      info = Object.assign(info,obj);
	  
      this.second = info.second
      this.showText = info.startText
    },
	destroyed(){
		clearInterval(this.timer);
	},
    methods: {
      toSend(callback){
        let {second,disabled,info} = this
        this.disabled = true;
        this.showText = '重新发送('+second+')'
		callback&&callback(this.disabled);
        this.timer = setInterval( () => {
          second--;
		  console.log(second)
          this.showText = '重新发送('+second+')'
          if (second <= 0) {
            clearInterval(this.timer);
            this.second = info.second,
			this.showText = info.endText,
			this.disabled = false;
			callback&&callback(this.disabled);
          }
        }, 1000)
      },
    }
  }
</script>

<style scoped lang="less">
  .GetCode{
    font-size: 28upx;
    display: flex;
    align-items: center;
    justify-content: center;
    &.sendCode{
      color: #c1c1c1 !important;
    }
  }
</style>
