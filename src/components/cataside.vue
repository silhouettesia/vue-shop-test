<template>
  <div class="aside">
    <!-- <p>{{$route.params}}</p> -->
    <div class="aside-cat">
      <div class="aside-header">
        <h3>
          <!-- <a v-bind:href="result.url">{{result.title}}</a> -->
          <router-link :to="cat.url">{{cat.title}}</router-link>
        </h3>
      </div>
      <div class="aside-list">
        <ul class="aside-ul">
          <li v-for="item in cat.sub">
            <!-- <a v-bind:href="item.url">{{item.title}}</a> -->
            <router-link :to="item.url">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="aside-color">
      <div class="aside-header">
        <h3>
          <router-link to="">Colors</router-link>
        </h3>
      </div>
      <div class="aside-list">
        <ul class="aside-ul">
          <li v-for="item in color">
            <router-link :to="item">{{item}}</router-link>
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
      cat: {},
      color: []
    }
  },
  beforeMount: function() {
    console.log('beforeMount');
		this.getAsideData(this.$route.params['cat'],this.$route.params['subcat']);
	},
  watch: {
    $route: function() {
      console.log('watch route');
      this.getAsideData(this.$route.params['cat'],this.$route.params['subcat']);
    }
  },
	methods: {
		getAsideData: function(cat,sub) {
      /*
			axios.get('./data/aside.json')
				.then(res => {
					this.result = res.data;
				});
      */
      console.log(cat,sub);
      var json = [["all",{"cat":{"title":"new arrival","url":"/cat/all/","sub":[{"title":"view all","url":"/cat/all/"},{"title":"cat1","url":"/cat/cat1/"},{"title":"cat2","url":"/cat/cat2"},{"title":"cat3","url":"/cat/cat3"}]},"color":["red","green","blue"]}],["cat1",{"cat":{"title":"cat1","url":"/cat/cat1/","sub":[{"title":"sub1","url":"/cat/cat1/sub1"},{"title":"sub2","url":"/cat/cat1/sub2"},{"title":"sub3","url":"/cat/cat1/sub3"}]},"color":["red","green","blue"]}],["cat2",{"cat":{"title":"cat2","url":"/cat/cat2/","sub":[{"title":"sub1","url":"/cat/cat2/sub1"},{"title":"sub2","url":"/cat/cat2/sub2"}]},"color":["red","green","blue"]}],["cat3",{"cat":{"title":"cat3","url":"/cat/cat3/","sub":[{"title":"sub1","url":"/cat/cat3/sub1"}]},"color":["red","green","blue"]}]];
      if (cat || sub) {
        for (var i = 0; i < json.length; i++) {
          if (json[i][0] == cat) {
            this.cat = json[i][1]["cat"];
            this.color = json[i][1]["color"];
          }
        }
      } else {
        this.cat = json[0][1]["cat"];
        this.color = json[0][1]["color"];
      }
      // this.result = {"title":"HANDBAGS","url":"/cat/cat1","sub":[{"title":"VIEW ALL","url":"/cat/cat1/sub1"},{"title":"SATCHELS","url":"#"},{"title":"SHOULDER BAGS","url":"#"},{"title":"TOTES","url":"#"},{"title":"CROSS BODY","url":"#"},{"title":"CLUTCHES","url":"#"}]}
		}
	}
}
</script>
