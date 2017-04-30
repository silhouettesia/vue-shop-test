<template>
  <div class="footer">
  	<div class="about"><a href="#">ABOUT US</a></div>
  	<div class="contact">
  		<ul>
  			<li v-for="item in list"><a :href="item.url"><img :src="baseUrl+item.src[0]" :src2="baseUrl+item.src[1]" @mouseover="imageToggle" @mouseout="imageToggle"></a></li>
  			<!-- <li><a href=""><img src="../assets/wechat.png"></a></li>
  			<li><a href=""><img src="../assets/qq.png"></a></li>
  			<li><a href=""><img src="../assets/email.png"></a></li> -->
  		</ul>
  	</div>
  </div>
</template>

<script>
// import fb from '../assets/facebook.png'
// import wx from '../assets/wechat.png'
export default {
  name: 'footer',
  data() {
    return {
      baseUrl: '/static/',
      list: {
        // "fb":{"url":"","src":[require('../assets/facebook.png')]},
        // "wx":{"url":"","src":[wx]},
        "fb":{"url":"", "src":["facebook.png","facebookb.png"]},
        "wx":{"url":"", "src":["wechat.png","wechatb.png"]},
        "qq":{"url":"", "src":["qq.png","qqb.png"]},
        "mb":{"url":"", "src":["email.png","emailb.png"]},
      },
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
    }
  }
}
</script>
