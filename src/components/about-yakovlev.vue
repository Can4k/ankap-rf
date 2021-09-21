<template>
  <div class="cont">
    <div class="image">
      <img src="@/assets/sasha-main.png" alt="Борис Хесин">
    </div>
    <div class="description">
      <strong class="h-1">Яковлев Александр</strong>
      <p>
        Яковлев Александр Александрович - российский политик, политолог и общественный деятель;
      </p>
      <p>
        Сооснователь и председатель Российской Социал-Демократической и Анархо-Капиталистической Партии Минархистов, лидер её центристского крыла;
      </p>
      <p>
        Многолетний начальник штаба на всевозможных выборах. С Хесиным Борисом выйграл огромное количество выборов;
      </p>
      <p>
        Не женат, хочет завести так называемую "тяночку";
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-yakovlev"
}
</script>

<style scoped>
.cont{
  box-shadow: 0 0 1px black;
  background-color: #d2ff99;
  color: #2f2f2f;
  display: flex;
  justify-content: space-between;
  text-align: left;
}
img{
  margin-bottom: -12px;
}
.h-1{
  font-size: 40px;
}
p{
  margin-top: 1px;
  font-size: 15px;
}
.description{
  width: 100%;
}
</style>