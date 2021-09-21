<template>
  <div class="cont">
    <div class="image">
      <img src="@/assets/roman-roginsky.png" alt="Борис Хесин">
    </div>
    <div class="description">
      <strong class="h-1">Роман Рогинский</strong>
      <p>
        Рогинский Роман Евгеньевич - российский политик, политолог, политтехнолог;
      </p>
      <p>
        Сооснователь и председатель московского отделения Российской Социал-Демократической и Анархо-Капиталистической Партии Минархистов, лидер её левого крыла;
      </p>
      <p>
        Многолетний глава московского отделения на всевозможных выборах. Следил за огромным количеством выборов;
      </p>
      <p>
        Не женат.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-roginski"
}
</script>

<style scoped>
.cont{
  box-shadow: 0 0 1px black;
  background-color: #fa7575;
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