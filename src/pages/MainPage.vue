<template>
  <h1 style="margin-top: 100px; font-size: 40px; color: #2f2f2f">РОССИЙСКАЯ СОЦИАЛ-ДЕМОКРАТИЧЕСКАЯ и АНАРХО-КАПИТАЛИСТИЧЕСКАЯ ПАРТИЯ МИНАРХИСТОВ</h1>
  <div class="container">
    <div class="left">
      <h3>ЛЕВОЕ КРЫЛО ВЫСТУПАЕТ ЗА</h3>
      <p>- политическую и экономическую демократию</p>
      <p>- социальную справедливость</p>
    </div>
    <div class="center">
      <h3>ЦЕНТРИСТСКОЕ КРЫЛО ВЫСТУПАЕТ</h3>
      <p></p>
    </div>
    <div class="right">
      <h3>ПРАВОЕ КРЫЛО ВЫСТУПАЕТ</h3>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage.vue"
}
</script>

<style scoped>
h3{
  font-size: 20px;
  margin: 0;
}
p{
  font-size: 15px;
}
h1{
  text-align: center;
}
html{
  background-color: white;
}
.container{
  display: flex;
  padding: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.left{
  background-color: #fa7575;
  color: #2f2f2f;
  text-align: center;
}
.center{
  background-color: #d2ff99;
  color: #2f2f2f;
}
.right{
  background-color: #ffc372;
  color: #2f2f2f;
}
</style>