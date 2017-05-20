<template>
  <div class="content">
    <div class="searchResult">
      <div class="searchResult-header"></div>
      <div class="searchResult-content">
        <ul class="searchResult-ul">
          <li class="searchResult-li" v-for="prod in prodList">
            <router-link :to="'/prod/'+prod.id">
            <div class="prod-image">
              <img v-bind:src="basicURL+prod.src[0]" v-bind:data-src2="prod.src[1]?(basicURL+prod.src[1]):''" v-on:mouseover="imageToggle" v-on:mouseout="imageToggle">
              <!-- <img v-bind:src="basicURL+prod.img[0]" v-bind:data-src2="basicURL+prod.img[1]" v-on:mouseover="imageToggle" v-on:mouseout="imageToggle"> -->
            </div>
            <div class="prod-detail" :date="prod.date">
              <p>{{prod.name}}</p>
              <p>&yen {{prod.price}}</p>
            </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.content {
	overflow: hidden;
}
.searchResult {
	overflow: hidden;
}
.searchResult-header {
	/*height: 30px;*/
}
.searchResult-content {
	overflow: hidden;
}
.searchResult-ul {
	list-style: none;
	overflow: hidden;
}
.searchResult-li {
	display: inline;
	float: left;
	width: 30%;
	margin-right: 5%;
	text-align: center;
}
.searchResult-li:nth-child(3n) {
	margin-right: 0;
}

.prod-image {
	max-width: 100%;
	width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
}
.prod-image>img {
  position: absolute;
  margin: auto;
  top: 0;bottom: 0;
  left: 0;right: 0;
}
.prod-detail {
	margin: 10px 0 40px;
}
@media screen and (max-width: 1000px) {
	.content {
		box-sizing: border-box;
		width: 100%;
		padding: 15px;
		margin: 0 auto;
	}
}
@media screen and (max-width: 750px) {
	.searchResult-li {
		width: 45%;
		margin-right: 10%;
	}
	.searchResult-li:nth-child(2n) {
		margin-right: 0;
	}
	.searchResult-li:nth-child(3n) {
		margin-right: 10%;
	}
}
</style>

<script>
import bus from '../bus.js'
export default {
  name: 'catcontent',
  data() {
    return {
      basicURL: '/static/upload/product/',
      prodList: [],
      page: 1,
      limit: 30,
      // footFix: false,
    }
  },
  beforeMount() {
    console.log(this.$route.params);
    if (this.$route.params['cat']) {
      this.getContent(this.$route.params['cat'],this.$route.params['subcat'],this.$route.query['color']);
    }
    else if (this.$route.params['query']) {
      this.getSearchContent(this.$route.params['query']);
    }
  },
  created() {
    let _this = this;
    window.addEventListener('scroll',this.scrollHandler);
    // bus.$on('searchProd', function(query,color) {
    //   console.log('content:',query);
    //   console.log('color',color);
    //   // axios.get("/search?search="+query+"&color="+(this.$route.query['color']?this.$route.query['color']:''))
    //   //   .then((res)=>{
    //   //     console.log(res);
    //   //   })
    //   //   .catch((err)=>{
    //   //     console.log(err);
    //   //   });
    // })
  },
  watch: {
    $route: function() {
      console.log(this.$route.params);
      if (this.$route.params['cat']) {
        this.getContent(this.$route.params['cat'],this.$route.params['subcat'],this.$route.query['color']);
      }
      else if (this.$route.params['query']) {
        this.getSearchContent(this.$route.params['query']);
      }
    },
    'test': function(val,oldVal) {
      console.log(val,oldVal);
      this.prodList = val;
    },
  },
  props: ['test'],
  methods: {
    getContent: function(cat,sub,color,page=0,limit=30,route=true) {
      // axios.get('getData?data=categoryProds&cat='+cat+'&subcat='+sub+'&color='+(color?color:'')+'&page='+page+'&limit='+limit)
      axios.get('getData?data=categoryProds&cat='+cat+'&color='+(color?color:'')+'&page='+page+'&limit='+limit)
        .then((res)=>{
          if (route) {
            this.prodList = res.data;
          } else {
            this.prodList = this.prodList.concat(res.data);
          }
          console.log(this.prodList);
        })
        .catch((err)=>{
          console.log(err);
        });
      // this.prodList = this.prodList.concat( [
      //   {"id":1,"cat":"cat1","color":["red","blue"],"date":1494848513,"name":"LEEWOOD PLACE MAKAYLA", "price":"358.00$", "img":["http://katespade.scene7.com/is/image/KateSpade/PXRU7341_285_R?$s7productgrid$&defaultImage=PXRU7341_285", "http://katespade.scene7.com/is/image/KateSpade/PXRU7341_285_1?$s7productgrid$"]},
      //   {"id":1,"cat":"cat1","color":["red","blue"],"date":1494848513,"name":"LEEWOOD PLACE MAKAYLA", "price":"358.00$", "img":["http://katespade.scene7.com/is/image/KateSpade/PXRU7341_423_R?$s7productgrid$&defaultImage=PXRU7341_423", "http://katespade.scene7.com/is/image/KateSpade/PXRU7341_423_1?$s7productgrid$"]},
      //   {"id":1,"cat":"cat1","color":["red","blue"],"date":1494848513,"name":"LEEWOOD PLACE RAINN", "price":"295.00$", "img":["http://katespade.scene7.com/is/image/KateSpade/PXRU7344_423_R?$s7productgrid$&defaultImage=PXRU7344_423", "http://katespade.scene7.com/is/image/KateSpade/PXRU7344_423_1?$s7productgrid$"]},
      //   {"id":1,"cat":"cat1","color":["red","blue"],"date":1494848513,"name":"LEEWOOD PLACE MINI MAKAYLA", "price":"228.00$", "img":["http://katespade.scene7.com/is/image/KateSpade/PXRU7342_001_R?$s7productgrid$&defaultImage=PXRU7342_001", "http://katespade.scene7.com/is/image/KateSpade/PXRU7342_001_1?$s7productgrid$"]},
      //   {"id":1,"cat":"cat1","color":["red","blue"],"date":1494848513,"name":"LEEWOOD PLACE JOLEY", "price":"178.00$", "img":["http://katespade.scene7.com/is/image/KateSpade/PXRU7340_285_R?$s7productgrid$&defaultImage=PXRU7340_285", ""]}
      // ]);
    },
    getSearchContent(query) {
      axios.get("/search?search="+query+"&color="+(this.$route.query['color']?this.$route.query['color']:''))
        .then((res)=>{
          this.prodList = res.data.prodList;
        })
        .catch((err)=>{
          console.log(err);
        });
    },
    imageToggle: function(event) {
      var target = event.target, src = target.src, src2 = target.getAttribute('data-src2');
      if (src2) {
        [src, src2] = [src2, src];
        target.src = src;
        target.setAttribute('data-src2', src2);
      }
    },
    getScrollTop() {
      var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
      if (document.body) {
        bodyScrollTop = document.body.scrollTop;
      }
      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
      }
      scrollTop = bodyScrollTop > documentScrollTop ? bodyScrollTop : documentScrollTop;
      return scrollTop;
    },
    getScrollHeight(){
      var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
      if(document.body){
        bodyScrollHeight = document.body.scrollHeight;
      }
      if(document.documentElement){
        documentScrollHeight = document.documentElement.scrollHeight;
      }
      scrollHeight = bodyScrollHeight > documentScrollHeight ? bodyScrollHeight : documentScrollHeight;
      return scrollHeight;
    },
    getWindowHeight(){
      var windowHeight = 0;
      if(document.compatMode == "CSS1Compat"){
        windowHeight = document.documentElement.clientHeight;
      }else{
        windowHeight = document.body.clientHeight;
      }
      return windowHeight;
    },
    scrollHandler(event){
      if (this.getScrollTop()+this.getWindowHeight() == this.getScrollHeight()) {
        this.getContent(this.$route.params['cat'],this.$route.params['subcat'],this.$route.query['color'],this.page,this.limit,false);
        this.page++;
        // if (!this.footFix) {
        //   var foot = document.querySelector('.footer');
        //   foot.className += ' footer-fix';
        //   this.footFix = true;
        // }
      }
    }
  },
}
</script>
