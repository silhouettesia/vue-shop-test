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
