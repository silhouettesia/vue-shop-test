<template>
  <div class="wrap">
    {{$route.params}}
    <router-view></router-view>
  </div>
</template>

<style>
.wrap {}
</style>

<script>
export default {
  name: 'catwrap',
}
