<template>
  <div class="nav" :class="{'open':mdNavShow}">
    <div class="nav-ul-wrap">
			<ul class="nav-ul" v-if="items.length">
				<li  v-for="(item,idx) in items">
					<!-- <a v-bind:href='item.url'>{{item.title}}</a> -->
          <router-link :to="'/cat/'+item.url" @click.native="menuShow($event,idx)">{{item.title}}</router-link>
          <!-- <span @click="navRouter($event,item.url,idx)" class="link-like">{{item.title}}</span> -->
					<template v-if="item.sub.length > 0">
						<div class="nav-ul-sub-wrap">
							<ul class="nav-ul-sub">
								<li v-for="sub in item.sub">
                  <!-- <a v-bind:href='sub.url'>{{sub.title}}</a> -->
                  <router-link :to="'/cat/'+sub.url">{{sub.title}}</router-link>
                </li>
							</ul>
						</div>
					</template>
				</li>
        <li@click='navSearchToggle'><i class="icon-search"></i></li>
			</ul>
		</div>
		<!-- <div class="nav-search" @click='navSearchToggle'>
			<i class="icon-search"></i>
		</div> -->
    <div class="nav-search-form-wrap" style="display: none;">
      <div class="nav-search-form">
        <input type="text" name="search" @keyup.enter="searchProd" v-model="query">
        <input type="button" name="submit" value="SEARCH" @click="searchProd">
      </div>
    </div>
  </div>
</template>

<style>
.nav {
	margin: 0 auto;
	width: 100%;
	max-width: 1000px;
	font-size: 0;
	letter-spacing: 0;
  transition: left .4s;
}
.nav-ul-wrap {
	display: inline-block;
	width: 100%;
	/*height: 30px;*/
	/*margin-right: -15px;*/
}
.nav-ul {
  height: 100%;
	list-style: none;
	cursor: pointer;
  display: flex;
  justify-content: center;
}
.nav-ul>li {
	/*display: inline-block;*/
  /*flex: 1;*/
  padding: 0 20px;
	position: relative;
  height: 30px;
	line-height: 30px;
	font-size: 12px;
	letter-spacing: 2px;
	text-align: center;
	text-transform: uppercase;
  white-space: nowrap;
  /*border: 1px solid #ccc;
  border-left: 0;
  border-bottom: none;*/
}
.nav-ul>li:first-child {
  /*border-left: 1px solid #ccc;
  border-radius: 5px 0 0;*/
}
.nav-ul>li:last-child {
  /*border-radius: 0 5px 0 0;*/
}
.nav-ul>li:hover .nav-ul-sub-wrap {
	display: block;
}
.nav-ul li a {
  display: inline-block;
  width: 100%;
}
.nav-ul-sub-wrap {
	display: none;
	position: absolute;
  left: -1px;
	width: 100%;
	background-color: #fff;
	border: 1px solid #E6E6E6;
	border-top: 0;
  border-radius: 0 0 5px 5px;
}
.nav-ul-sub {}
.nav-ul-sub li {
	display: block;
}
.nav-search {
	float: right;
	width: 15px;
	/*line-height: 30px;*/
	text-align: center;
	cursor: pointer;
}
.nav-search-form-wrap {
	width: 100%;
	height: 50px;
}
.nav-search-form {
	font-size: 0;
	letter-spacing: 0;
}
.nav-search-form input[name='search'] {
	box-sizing: border-box;
	width: calc(100% - 100px);
	padding: 2px 10px;
	height: 30px;
	border: 1px solid #ccc;
	border-right: 0;
	outline: none;
}
.nav-search-form input[name='submit'] {
	box-sizing: border-box;
	width: 100px;
	height: 30px;
	background: #000;
	border: 0;
	color: #fff;
	cursor: pointer;
}
@media screen and (max-width: 1000px) {
  .nav {
    /*box-sizing: border-box;*/
    width: 200px;
    position: absolute;
    background: #fff;
    border-color: #ccc;
    border-style: solid;
    border-width: 1px;
    margin: 8px;
    z-index: 2;
    left: -300px;
    top: 30px;
  }
  .nav.open {
    display: block;
    left: 0;
    border-radius: 5px;
  }
  /*.nav-ul>li {
    display: none;
  }
  .nav-ul>li:first-child, .nav-ul>li:last-child {
  display: block;
  }
  */
  .nav-ul {
    display: block;
    /*display: none;*/
  }
  .nav-ul>li {
    /*display: block;*/
    text-align: left;
  }
  .nav-ul>li:hover .nav-ul-sub-wrap {
    display: none;
  }
  .nav-ul>li:last-child {
    display: none;
  }
}
@media screen and (max-width: 800px) {
}
</style>

<script>
import bus from '../bus.js'
export default {
  name: 'catnav',
  data() {
    return {
      items: [],
      query: '',
    }
  },
  props: ["mdNavShow"],
  beforeMount: function() {
	   this.getNavCategory();
	},
  methods: {
    // throttle: function(method, args, context = window, delay = 200, duration = 500) {
		// 	var timeid,
		// 		startTime = new Date();
		// 	return function() {
		// 		var curTime = new Date();
		// 		clearTimeout(timeid);
		// 		if (curTime - startTime > duration) {
		// 			method.apply(context, args);
		// 			startTime = curTime;
		// 		} else {
		// 			timeid = setTimeout(function() {
		// 				method.apply(context, args);
		// 			}, delay);
		// 		}
		// 	}
		// },
    getNavCategory: function() {
      this.items = [{"url":"all","sub":[{"url":"all","title":"view all"},{"url":"necklaces","title":"necklaces"},{"url":"rings","title":"rings"},{"url":"earrings","title":"earrings"},{"url":"bracelets","title":"bracelets"},{"url":"accessorie","title":"accessories"}],"title":"new arrival"},{"url":"necklaces","sub":[],"title":"necklaces"},{"url":"rings","sub":[],"title":"rings"},{"url":"earrings","sub":[],"title":"earrings"},{"url":"bracelets","sub":[],"title":"bracelets"},{"url":"accessorie","sub":[],"title":"accessories"}];
      axios.get("/getData?data=categoryNav")
        .then(res=>{
          let idx, first, list;
          // this.items = res.data;
          list = res.data;
          for (var i = 0; i < list.length; i++) {
            if (list[i].title.toLowerCase() == 'new arrival') {
              idx = i;
              break;
            }
          }
          first = list.splice(idx,1)[0];
          list.splice(0,0,first);
          this.items = list;
          console.log(this.items);
          console.log(JSON.stringify(res.data))
        })
        .catch(err=>{
          // this.items = [];
          console.log('GetNavErr: ', err);
        });

      // this.items = [
      //   {"title": "new arrival", "url": "/cat/all/", "sub": [{"title":"view all","url":"/cat/all/"},{"title":"cat1","url":"/cat/cat1/"},{"title":"cat2","url":"/cat/cat2"},{"title":"cat3","url":"/cat/cat3"}]},
      //   {"title": "cat1", "url": "/cat/cat1/", "sub": [{"title":"sub1","url":"/cat/cat1/sub1"},{"title":"sub2","url":"/cat/cat1/sub2"},{"title":"sub3","url":"/cat/cat1/sub3"}]},
      //   {"title": "cat2", "url": "/cat/cat2/", "sub": [{"title":"sub1","url":"/cat/cat2/sub1"},{"title":"sub2","url":"/cat/cat2/sub2"}]},
      //   {"title": "cat3", "url": "/cat/cat3/", "sub": [{"title":"sub1","url":"/cat/cat3/sub1"}]}
      // ];
    },
    navSearchToggle: function() {
			var searchForm = document.querySelector('.nav-search-form-wrap'),
				display = searchForm.style.display;
			if (display == 'none') {
				searchForm.style.display = 'block';
			} else {
				searchForm.style.display = 'none';
			}
		},
    searchProd(event){
      if (this.query) {
        this.$router.push('/search/'+this.query);
        this.query = '';
      }
    },
    menuShow(event,idx) {
      console.log(event,idx);
      event.preventDefault();
      return false;
    },
    navRouter(event,url,idx) {
      if (idx == 0) {
        if (window.innerWidth < 800 || document.documentElement.clientWidth < 800 || document.body.clientWidth < 800) {
          console.log(800);
        }
      } else {
        this.$router.push('/cat/'+url);
      }
    }
  },
}
</script>
