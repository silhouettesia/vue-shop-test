<template>
  <div class="aside">
    <div class="aside-cat" v-if="cat">
      <div class="aside-header">
        <h3>
          <router-link :to="'/cat/'+cat.url">{{cat.title}}</router-link>
        </h3>
      </div>
      <div class="aside-list">
        <ul class="aside-ul">
          <li v-for="item in cat.subcat">
            <router-link :to="'/cat/'+item.url">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="aside-color">
      <div class="aside-header">
        <h3>
          Colors
        </h3>
      </div>
      <div class="aside-list">
        <ul class="aside-ul">
          <li v-for="item in color">
            <!-- <router-link :to="item">{{item}}</router-link> -->
            <span class="link-like" :to="item" @click="colorRoute(item)">{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cataside',
  data() {
    return {
      cat: '',
      color: []
    }
  },
  beforeMount: function() {
    console.log('beforeMount');
		this.getAsideData(this.$route.params['cat'],this.$route.params['subcat'],this.$route.query['color']);
	},
  watch: {
    $route: function() {
      console.log('watch route');
      this.getAsideData(this.$route.params['cat'],this.$route.params['subcat'],this.$route.query['color']);
    }
  },
	methods: {
		getAsideData: function(cat,sub,color) {
      console.log(cat,sub,color);
			axios.get('/getData?data=categoryAside&cat='+(cat?cat:'all')+'&subcat='+(sub?sub:'')+'&color='+(color?color:''))
				.then(res => {
          console.log(res.data);
					this.cat = res.data.cat;
          this.color = res.data.color;
				})
        .catch((err) => {
          console.log(err);
        });

      // var json = [["all",{"cat":{"title":"new arrival","url":"/cat/all/","sub":[{"title":"view all","url":"/cat/all/"},{"title":"cat1","url":"/cat/cat1/"},{"title":"cat2","url":"/cat/cat2"},{"title":"cat3","url":"/cat/cat3"}]},"color":["red","green","blue"]}],["cat1",{"cat":{"title":"cat1","url":"/cat/cat1/","sub":[{"title":"sub1","url":"/cat/cat1/sub1"},{"title":"sub2","url":"/cat/cat1/sub2"},{"title":"sub3","url":"/cat/cat1/sub3"}]},"color":["red","green","blue"]}],["cat2",{"cat":{"title":"cat2","url":"/cat/cat2/","sub":[{"title":"sub1","url":"/cat/cat2/sub1"},{"title":"sub2","url":"/cat/cat2/sub2"}]},"color":["red","green","blue"]}],["cat3",{"cat":{"title":"cat3","url":"/cat/cat3/","sub":[{"title":"sub1","url":"/cat/cat3/sub1"}]},"color":["red","green","blue"]}]];
      // if (cat || sub) {
      //   for (var i = 0; i < json.length; i++) {
      //     if (json[i][0] == cat) {
      //       this.cat = json[i][1]["cat"];
      //       this.color = json[i][1]["color"];
      //     }
      //   }
      // } else {
      //   this.cat = json[0][1]["cat"];
      //   this.color = json[0][1]["color"];
      // }
		},
    colorRoute(color) {
      var route;
      if (this.$route.params['cat']) {
        route = '/cat/'+this.$route.params['cat']+'/'+(this.$route.params['subcat']?this.$route.params['subcat']:'');
      }
      else if (this.$route.params['search']) {
        route = '/search/'+this.$route.params['search'];
      }
      this.$router.push({
        path: route,
        query: {color}
      });
    }
	}
}
</script>

<style>
.aside {
	float: left;
	width: 150px;
}
.aside-header {
	margin: 5px 0;
  text-transform: uppercase;
}
.aside-ul {
	list-style: none;
	margin-left: 20px;
}
.aside-ul li {
	padding-bottom: 5px;
}
@media screen and (max-width: 1000px) {
  .aside {
		box-sizing: border-box;
		width: 100%;
		padding: 5px 15px;
	}
	.aside-header, .aside-list {
		/*display: inline-block;*/
    width: 100%;
	}
	.aside-ul {
		margin-left: 0;
	}
	.aside-ul li {
		display: inline;
		padding: 0 5px;
		border-left: 1px solid;
	}
	.aside-ul li:first-child {
		border-left: none;
		padding-left: 0;
	}
}
</style>
