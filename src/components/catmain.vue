<template>
  <div class="main">
    <div class="nav-search-form-wrap" style="display: none;">
      <form class="nav-search-form">
        <input type="text" name="search">
        <input type="submit" name="submit" value="SEARCH">
      </form>
    </div>
    <!-- <p>{{$route.params}}</p> -->
    <cataside></cataside>
    <catcontent></catcontent>
  </div>
</template>

<script>
import cataside from './cataside'
import catcontent from './catcontent'
export default {
  name: 'catmain',
  components: {
    cataside,
    catcontent,
  }
}
</script>
