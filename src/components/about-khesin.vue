<template>
  <div class="cont">
    <div class="image">
      <img src="@/assets/boris-main.png" alt="Борис Хесин">
    </div>
    <div class="description">
      <strong class="h-1">Борис Хесин</strong>
      <p>
        Хесин Борис Львович - российский и израильский политик и общественный деятель;
      </p>
      <p>
        Сооснователь и заместитель председателя Российской Социал-Демократической и Анархо-Капиталистической Партии Минархистов, лидер её правого крыла;
      </p>
      <p>
        Многолетний участник всевозможных выборов. Вице-Президент школы №1329. Лицо 9 класса "И";
      </p>
      <p>
        Не женат, хочет завести так называемую "тяночку";
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-khesin"
}
</script>

<style scoped>
.cont{
  box-shadow: 0 0 1px black;
  background-color: #ffc372;
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