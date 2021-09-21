<template>
  <div id="app">
    <div class="header">
      <a href='/'><h1 class="h-1">АНКАП.РФ</h1></a>
      <div class="suka">
        <a href="/"><h2 class="h-2">ГЛАВНАЯ</h2></a>
        <a href="/top-manage"><strong class="h-2">РУКОВОДСТВО ПАРТИИ</strong></a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  background-color: orange;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.h-1{
  color: white;
}
.h-2{
  font-size: 15px;
  padding-left: 10px;
  display: inline-block;
}
</style>

<style>
*,*:before,*:after{
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 800;
  font-size: 40px;
}
a{
  transition-duration: 0.5s;
  text-decoration: none;
  color: white;
}
a:hover{
  color: yellow;
}
a:active{
  color: black;
}
.suka{
  margin-top: -10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#app{
}
</style>