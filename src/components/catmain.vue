<template>
  <div class="main">
    <!-- <div class="nav-search-form-wrap" style="display: block;">
      <div class="nav-search-form">
        <input type="text" name="search" @keyup.enter="searchProd" v-model="query">
        <input type="button" name="submit" value="SEARCH" @click="searchProd">
      </div>
    </div> -->
    <cataside></cataside>
    <catcontent v-bind:test="list"></catcontent>
  </div>
</template>

<style>
.main {
	margin: 10px auto;
	width: 1000px;
  overflow: hidden;
}
@media screen and (max-width: 1000px) {
  .main {
    width: 96%;
  }
}
</style>

<script>
import cataside from './cataside'
import catcontent from './catcontent'

export default {
  name: 'catmain',
  data() {
    return {
      query: '',
      list: ''
    }
  },
  components: {
    cataside,
    catcontent,
  },
  methods: {
    searchProd(){
      this.list = [{'cat':'cat1','color':[1,2],'id':1,'name':'test','src':['1.jpg']}]
    }
  }
}
</script>
