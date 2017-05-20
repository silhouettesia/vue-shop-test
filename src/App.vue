<template>
  <div id="app">
    <div class="topbar">
    	<div class="topbar-wrap">
        <div class="left md-topbar">
          <div class="burger-menu-wrap" @click="mdNavToggle" >
            <div class="burger-menu">
              <span :class="{'close': mdNavShow}"></span>
            </div>
          </div>
        </div>
        <div class="left md-topbar">
          <div class="topbar-search">
            <img src="/static/img/search.png">
          </div>
        </div>
    		<div class="right" v-show="false">
    			<i class="icon-crown"></i><a href="#">SIGN IN</a>
    			<i class="icon-heart"></i><a href="#">WISH LIST(0)</a>
    		</div>
    	</div>
    </div>
    <div class="wrap">
      <div class="header">
    		<div class="logo">
    			<a href="#">
    				<img src="/static/img/logo.png">
    			</a>
          <p><a href="#">Ben & Janes</a></p>
    		</div>
    	</div>
      <catnav v-bind:mdNavShow="mdNavShow"></catnav>
      <div class="headerhr"></div>
      <router-view></router-view>
    </div>
    <footr></footr>
  </div>
</template>

<script>
import catnav from './components/catnav'
import footr from './components/footer'
export default {
  name: 'app',
  data() {
    return {
      mdNavShow: false,
    }
  },
  watch: {
    $route: function() {
      this.mdNavShow = false;
    }
  },
  components: {
    catnav,
    footr,
  },
  methods: {
    mdNavToggle() {
      // document.querySelector('.nav').style.display = 'block';
      this.mdNavShow = !this.mdNavShow;
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
* {
	margin: 0;
	padding: 0;
}
html, body {
	width: 100%;
	height: 100%;
	/*overflow: hidden;*/
}
body, p, span, input, textarea, table {
	font-family: "Times New Roman", "Microsoft YaHei";
	font-size: 12px;
	letter-spacing: 1px;
	color: #000;
}
a {
	color: #000;
	text-decoration: none;
}
a:hover {
	text-decoration: underline;
}
img {
	max-width: 100%;
	width: 100%;
  border: none;
}
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset;
}
input[type=text]:focus, input[type=password]:focus, textarea:focus {
  -webkit-box-shadow: 0 0 0 1000px white inset;
}
.right {
	float: right;
}
.left {
	float: left;
}
.link-like {
	cursor: pointer;
}
.link-like:hover {
  text-decoration: underline;
}
.icon-crown:before {
	content: "\265A";
	font-style: normal;
	margin-left: 20px;
	margin-right: 5px;
	color: white;
}
.icon-heart:before {
	content: "\2764";
	font-style: normal;
	margin-left: 20px;
	margin-right: 5px;
	color: white;
}
.icon-search {
	background: url(/static/img/search.png) no-repeat center center;
	background-size: contain;
    width: 15px;
    height: 30px;
    display: inline-block;
}

.topbar {
	background-color: rgb(147,147,147);
	height: 30px;
	line-height: 30px;
	font-family: Arial, Helvetica, sans-serif;
  /*display: none;*/
  transition: all .3s;
}
.topbar a {
	color: #fff;
}
.topbar-wrap {
	width: 1000px;
	margin: 0 auto;
}
.header {}
.logo {
	padding: 15px 0;
	margin: 0 auto;
	width: 200px;
	text-align: center;
  transition: all .3s;
}
.logo img {
	/*height: 50px;*/
}
.logo p {
  display: none;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
}
.headerhr {
	border-bottom: 1px solid #ccc;
  width: 98%;
  margin: 0 auto;
}
.md-topbar {
  display: none;
}
.burger-menu {
  display: block;
  position: relative;
  width: 3em;
  height: 30px;
  cursor: pointer;
}
.burger-menu>span {
  margin: 0.5em auto;
  display: block;
  position: absolute;
  top: 25%;
  left: 25%;
  display: block;
  width: 1.5em;
  height: 0.25em;
  background: #939393;
  border-radius: 3px;
  transition: transform .2s ease;
}
.burger-menu>span:before,.burger-menu>span:after {
  border-radius: 3px;
  transition: transform .3s ease;
}
.burger-menu>span:before {
  content: '';
  display: block;
  position: absolute;
  width: 1.5em;
  height: 0.25em;
  top: -0.5em;
  background: #939393;
}
.burger-menu>span:after {
  content: '';
  display: block;
  position: absolute;
  width: 1.5em;
  height: 0.25em;
  top: 0.5em;
  background: #939393;
}
.burger-menu>span.close {
  background: transparent;
  transform: rotate(-180deg);
}
.burger-menu>span.close:before, .burger-menu>span.close:after {
  transition: transform .3s ease;
}
.burger-menu>span.close:before {
  content: '';
  display: block;
  position: absolute;
  width: 1.5em;
  height: 0.25em;
  top: 0;
  background: #939393;
  transform: rotate(-45deg);
}
.burger-menu>span.close:after {
  content: '';
  display: block;
  position: absolute;
  width: 1.5em;
  height: 0.25em;
  top: 0;
  background: #939393;
  transform: rotate(45deg);
}
.topbar-search {
  width: 30px;
  height: 30px;
  text-align: center;
  vertical-align: bottom;;
  line-height: 30px;
}
.topbar-search img {
  width: 20px;
}

@media screen and (max-width: 1024px) {
    .logo {
      width: 150px;
    }
}

@media screen and (max-width: 1000px) {
  .topbar {
    background: #fff;
    color: #939393;
  }
	.topbar-wrap {
		width: 100%;
	}
	.topbar-wrap>div {
		margin-right: 20px;
	}
  .md-topbar {
    display: block;
  }
}

@media screen and (max-width: 640px) {
  .header {
    /*border-top: 4px solid #ccc;*/
  }
  .logo img{
    display: none;
  }
  .logo p {
    display: block;
  }
}
</style>
