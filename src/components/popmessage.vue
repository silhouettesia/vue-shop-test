<template>
  <div class="pop-message">
    <img :src="info" v-if="type=='img'">
    <p v-if="type=='text'">{{info}}</p>
  </div>
</template>

<style>
.pop-message {
  position: absolute;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0,0,0,.2);
  padding: 8px 16px;
}
.pop-message:after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  margin: auto;
  width: 0;
  height: 0;
  border: 4px solid;
  border-color: transparent;
  border-top-color: #fff;
}
</style>

<script>
export default {
  name: 'popMessage',
  data() {
    return {
    }
  },
  props: ['type','info','params'],
  watch: {
    // params: {
    //   handler:function(val,oldVal) {
    //     console.log(val,oldVal);
    //   },
    //   deep:true
    // },
    'params.width':function(val,oldVal) {
      // console.log(val,oldVal);
      this.$el.style.width = val;
    },
    'params.left':function(val,oldVal) {
      this.$el.style.left = val;
    },
    'params.top':function(val,oldVal) {
      this.$el.style.top = val;
    },
  }
}
</script>
