<template>
  <div class="nav">
    <div class="nav-ul-wrap">
			<ul class="nav-ul">
				<li v-for="item in items">
					<!-- <a v-bind:href='item.url'>{{item.title}}</a> -->
          <router-link :to="item.url">{{item.title}}</router-link>
					<template v-if="item.sub.length > 0">
						<div class="nav-ul-sub-wrap">
							<ul class="nav-ul-sub">
								<li v-for="sub in item.sub">
                  <!-- <a v-bind:href='sub.url'>{{sub.title}}</a> -->
                  <router-link :to="sub.url">{{sub.title}}</router-link>
                </li>
							</ul>
						</div>
					</template>
				</li>
			</ul>
		</div>
		<div class="nav-search" @click='navSearchToggle'>
			<i class="icon-search"></i>
		</div>
  </div>
</template>

<script>
export default {
  name: 'catnav',
  data() {
    return {
      items: []
    }
  },
  beforeMount: function() {
	   this.getNavCategory();
	},
  mounted: function() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.throttle(this.setNavWidth));
    });
  },
  watch: {
    items: function(val) {
      this.$nextTick(function() {
				this.setNavWidth();
			});
    },
  },
  methods: {
    throttle: function(method, args, context = window, delay = 200, duration = 500) {
			var timeid,
				startTime = new Date();
			return function() {
				var curTime = new Date();
				clearTimeout(timeid);
				if (curTime - startTime > duration) {
					method.apply(context, args);
					startTime = curTime;
				} else {
					timeid = setTimeout(function() {
						method.apply(context, args);
					}, delay);
				}
			}
		},
    getNavCategory: function() {
      // axios.get("./getData.php?action=getNavCategory")
      //   .then(res=>{
      //     this.items = res.data;
      //     console.log(this.items);
      //   })
      //   .catch(err=>{
      //     this.items = [];
      //     console.log('GetNavErr: ', err);
      //   });

      this.items = [
        {"title": "new arrival", "url": "/cat/all/", "sub": [{"title":"view all","url":"/cat/all/"},{"title":"cat1","url":"/cat/cat1/"},{"title":"cat2","url":"/cat/cat2"},{"title":"cat3","url":"/cat/cat3"}]},
        {"title": "cat1", "url": "/cat/cat1/", "sub": [{"title":"sub1","url":"/cat/cat1/sub1"},{"title":"sub2","url":"/cat/cat1/sub2"},{"title":"sub3","url":"/cat/cat1/sub3"}]},
        {"title": "cat2", "url": "/cat/cat2/", "sub": [{"title":"sub1","url":"/cat/cat2/sub1"},{"title":"sub2","url":"/cat/cat2/sub2"}]},
        {"title": "cat3", "url": "/cat/cat3/", "sub": [{"title":"sub1","url":"/cat/cat3/sub1"}]}
      ];
    },
    setNavWidth: function() {
			var ul, list, totalWidth = 0, paddingWidth = 0;
			ul = this.$el.querySelector('.nav-ul');
			list = ul.children;
			[].forEach.call(list,function(item,idx,arr) {
				totalWidth += item.children[0].offsetWidth;
			});
			paddingWidth = (ul.offsetWidth - totalWidth - 0) / list.length;
			[].forEach.call(list,function(item,idx,arr) {
				if (idx == 0) {
					item.style.width = item.children[0].offsetWidth+paddingWidth/2+'px';
					item.style.textAlign = 'left';
				} else {
					item.style.width = item.children[0].offsetWidth+paddingWidth+'px';
				}
			});
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
  },
}
</script>
