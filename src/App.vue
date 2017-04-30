<template>
  <div id="app">
    <div class="topbar">
    	<div class="topbar-wrap">
    		<div class="right">
    			<i class="icon-crown"></i><a href="#">SIGN IN</a>
    			<i class="icon-heart"></i><a href="#">WISH LIST(0)</a>
    		</div>
    	</div>
    </div>
    <div class="wrap">
      <div class="header">
    		<div class="logo">
    			<a href="#">
    				<img src="./assets/logo.png">
    			</a>
    		</div>
    	</div>
      <catnav></catnav>
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
  components: {
    catnav,
    footr,
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
}
.right {
	float: right;
}
.left {
	float: left;
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
/*.icon-search:before {
	content: "\E603";
	font-style: normal;
	font-size: 12px;
}*/
.icon-search {
	background: url(./assets/search.png) no-repeat center center;
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
}
.topbar a {
	color: #fff;
}
.topbar-wrap {
	width: 1000px;
	margin: 0 auto;
}
.wrap {}
.header {}
.logo {
	padding: 15px 0;
	margin: 0 auto;
	width: 200px;
	text-align: center;
}
.logo img {
	/*height: 50px;*/
}
.nav {
	margin: 0 auto;
	width: 100%;
	max-width: 1000px;
	height: 30px;
	font-size: 0;
	letter-spacing: 0;
}
.nav-ul-wrap {
	display: inline-block;
	width: calc(100% - 15px);
	/*margin-right: -15px;*/
}
.nav-ul {
	list-style: none;
	cursor: pointer;
}
.nav-ul li {
	display: inline-block;
	position: relative;
	line-height: 30px;
	font-size: 12px;
	letter-spacing: 2px;
	text-align: center;
	text-transform: uppercase;
}
.nav-ul li:hover .nav-ul-sub-wrap {
	display: block;
}
.nav-ul li a {
  display: inline-block;
  width: 100%;
}
.nav-ul-sub-wrap {
	display: none;
	position: absolute;
	width: 100%;
	background-color: #fff;
	border: 1px solid #E6E6E6;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
.nav-ul-sub {}
.nav-ul-sub li {
	display: block;
}
.nav-search {
	float: right;
	width: 15px;
	/*line-height: 30px;*/
	text-align: center;
	cursor: pointer;
}
.nav-search-form-wrap {
	width: 100%;
	height: 50px;
}
.nav-search-form {
	font-size: 0;
	letter-spacing: 0;
}
.nav-search-form input[name='search'] {
	box-sizing: border-box;
	width: calc(100% - 100px);
	padding: 2px 10px;
	height: 30px;
	border: 1px solid #ccc;
	border-right: 0;
	outline: none;
}
.nav-search-form input[name='submit'] {
	box-sizing: border-box;
	width: 100px;
	height: 30px;
	background: #000;
	border: 0;
	color: #fff;
	cursor: pointer;
}
.headerhr {
	border-bottom: 1px solid #ccc;
}
.main {
	margin: 10px auto;
	width: 1000px;
}
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
.content {
	overflow: hidden;
}
.searchResult {
	overflow: hidden;
}
.searchResult-header {
	height: 30px;
}
.searchResult-content {
	overflow: hidden;
}
.searchResult-ul {
	list-style: none;
	overflow: hidden;
}
.searchResult-li {
	display: inline;
	float: left;
	width: 30%;
	margin-right: 5%;
	text-align: center;
}
.searchResult-li:nth-child(3n) {
	margin-right: 0;
}
.prod-image {
	max-width: 100%;
	width: 100%;
}
.prod-detail {
	margin: 10px 0 40px;
}
.footer {
	height: 100px;
	width: 100%;
	border-top: 1px solid #ccc;
	text-align: center;
}
.about {
	margin: 20px 0 10px;
}
.contact {
	margin: 10px;
}
.contact ul li{
	display: inline-block;
	padding: 0 5px;
}
.contact img {
	width: 30px;
}
@media screen and (max-width: 1000px) {
	.topbar-wrap {
		width: 100%;
	}
	.topbar-wrap>div {
		margin-right: 20px;
	}
	.main {
		width: 100%;
	}
	.aside {
		box-sizing: border-box;
		width: 100%;
		padding: 5px 15px;
	}
	.aside-header {
		display: inline-block;
	}
	.aside-list {
		display: inline-block;
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
	.content {
		box-sizing: border-box;
		width: 100%;
		padding: 15px;
		margin: 0 auto;
	}
}
@media screen and (max-width: 750px) {
	.searchResult-li {
		width: 45%;
		margin-right: 10%;
	}
	.searchResult-li:nth-child(2n) {
		margin-right: 0;
	}
	.searchResult-li:nth-child(3n) {
		margin-right: 10%;
	}
}
@media screen and (max-width: 640px) {
}
</style>
