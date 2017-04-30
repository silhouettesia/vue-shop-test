<template>
  <div class="wrap">
    {{$route.params}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'catwrap',
}
