<template>
  <div class="content">
    <div class="searchResult">
      <div class="searchResult-header"></div>
      <div class="searchResult-content">
        <ul class="searchResult-ul">
          <li class="searchResult-li" v-for="item in items">
            <div class="prod-image">
              <img v-bind:src="item.src" v-bind:data-src2="item.src2" v-on:mouseover="imageToggle" v-on:mouseout="imageToggle">
            </div>
            <div class="prod-detail">
              <p>{{item.name}}</p>
              <p>{{item.price}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'catcontent',
  data() {
    return {
      items: [],
    }
  },
  beforeMount: function() {
    this.getContent(this.$route.params['cat'],this.$route.params['subcat']);
  },
  watch: {
    $route: function() {
      this.getContent(this.$route.params['cat'],this.$route.params['subcat']);
    },
  },
  methods: {
    getContent: function(cat,sub) {
      this.items = [
        {"name":"LEEWOOD PLACE MAKAYLA", "price":"358.00$", "src":"http://katespade.scene7.com/is/image/KateSpade/PXRU7341_285_R?$s7productgrid$&defaultImage=PXRU7341_285", "src2":"http://katespade.scene7.com/is/image/KateSpade/PXRU7341_285_1?$s7productgrid$"},
        {"name":"LEEWOOD PLACE MAKAYLA", "price":"358.00$", "src":"http://katespade.scene7.com/is/image/KateSpade/PXRU7341_423_R?$s7productgrid$&defaultImage=PXRU7341_423", "src2":"http://katespade.scene7.com/is/image/KateSpade/PXRU7341_423_1?$s7productgrid$"},
        {"name":"LEEWOOD PLACE RAINN", "price":"295.00$", "src":"http://katespade.scene7.com/is/image/KateSpade/PXRU7344_423_R?$s7productgrid$&defaultImage=PXRU7344_423", "src2":"http://katespade.scene7.com/is/image/KateSpade/PXRU7344_423_1?$s7productgrid$"},
        {"name":"LEEWOOD PLACE MINI MAKAYLA", "price":"228.00$", "src":"http://katespade.scene7.com/is/image/KateSpade/PXRU7342_001_R?$s7productgrid$&defaultImage=PXRU7342_001", "src2":"http://katespade.scene7.com/is/image/KateSpade/PXRU7342_001_1?$s7productgrid$"},
        {"name":"LEEWOOD PLACE JOLEY", "price":"178.00$", "src":"http://katespade.scene7.com/is/image/KateSpade/PXRU7340_285_R?$s7productgrid$&defaultImage=PXRU7340_285", "src2":""}
      ];
    },
    imageToggle: function(event) {
      var target = event.target, src = target.src, src2 = target.getAttribute('data-src2');
      if (src2) {
        [src, src2] = [src2, src];
        target.src = src;
        target.setAttribute('data-src2', src2);
      }
    },
  },
}
</script>
