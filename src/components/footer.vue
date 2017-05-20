<template>
  <div class="footer">
    <popMessage v-bind:type="popMsgType" v-bind:info="popMsgInfo" v-bind:params="popMsgParams" v-show="popMsgShow"></popMessage>
  	<div class="about"><a href="#">ABOUT US</a></div>
  	<div class="contact">
  		<!-- <ul> -->
  			<!-- <li v-for="item in list"><a :href="item.url"><img :src="baseUrl+item.src[0]" :src2="baseUrl+item.src[1]" @mouseover="imageToggle" @mouseout="imageToggle"></a></li> -->
  			<!-- <li><a href=""><img src="../assets/wechat.png"></a></li>
  			<li><a href=""><img src="../assets/qq.png"></a></li>
  			<li><a href=""><img src="../assets/email.png"></a></li> -->
  		<!-- </ul> -->
      <ul>
        <li><a href="" target="_blank"><img src="/static/img/facebook.png" src2="/static/img/facebookb.png" @mouseover="imageToggle" @mouseout="imageToggle"></a></li>
        <li><img src="/static/img/wechat.png" src2="/static/img/wechatb.png" @mouseover="imageToggle(); popMsg($event,'img','wxCode.jpg')" @mouseout="imageToggle();popMsgClose()"></li>
        <li><img src="/static/img/qq.png" src2="/static/img/qqb.png" @mouseover="imageToggle(),popMsg($event,'img','wxCode.jpg')" @mouseout="imageToggle();popMsgClose()" ></li>
        <li><a href="mailto:xxx@xxx.xxx"><img src="/static/img/email.png" src2="/static/img/emailb.png" @mouseover="imageToggle" @mouseout="imageToggle"></a></li>
      </ul>
  	</div>
  </div>
</template>

<style>
.footer {
	height: 100px;
	width: 98%;
  margin: 0 auto;
	border-top: 1px solid #ccc;
	text-align: center;
}
.footer.footer-fix {
  position: absolute;
  /*position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;*/
}
.about {
	margin: 20px 0 10px;
}
.contact {
	margin: 10px;
}
.contact ul li{
	display: inline-block;
	padding: 0 5px;
  cursor: pointer;
}
.contact img {
	width: 30px;
}
</style>

<script>
import popMessage from './popmessage';
export default {
  name: 'footer',
  data() {
    return {
      baseUrl: '/static/',
      // list: {
      //   // "fb":{"url":"","src":[require('../assets/facebook.png')]},
      //   // "wx":{"url":"","src":[wx]},
      //   "fb":{"url":"", "src":["facebook.png","facebookb.png"]},
      //   "wx":{"url":"", "src":["wechat.png","wechatb.png"]},
      //   "qq":{"url":"", "src":["qq.png","qqb.png"]},
      //   "mb":{"url":"", "src":["email.png","emailb.png"]},
      // },
      popMsgParams: {'width':'','left':'','top':''},
      popMsgType: 'text',
      popMsgInfo: '',
      popMsgShow: false,
    }
  },
  methods: {
    imageToggle: function() {
      var target = event.target, src = target.src, src2 = target.getAttribute('src2');
      if (src2) {
        [src, src2] = [src2, src];
        target.src = src;
        target.setAttribute('src2', src2);
      }
    },
    popMsg(event,type,info) {
      this.popMsgType = type;
      this.popMsgInfo = type=='text' ? info : '/static/img/'+info;
      this.popMsgParams.width = '200px';
      let target = event.target,
        // left = this.getElementLeft(target),
        // top = this.getElementTop(target);
        left = target.offsetLeft,
        top = target.offsetTop;
      this.popMsgParams.left = left-100+'px';
      this.popMsgParams.top = top-230+'px';
      this.popMsgShow = true;
    },
    popMsgClose() {
      this.popMsgShow = false;
    },
    getElementLeft(el) {
      var actualLeft = el.offsetLeft;
      var current = el.offsetParent;
      while (current!==null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
      }
      return actualLeft;
    },
    getElementTop(el) {
      var actualTop = el.offsetTop;
      var current = el.offsetParent;
      while (current!==null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
      }
      return actualTop;
    }
  },
  components: {
    'popMessage': popMessage,
  }
}
</script>
