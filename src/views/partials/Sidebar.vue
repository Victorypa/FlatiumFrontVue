<template>

  <div class="sidebar col-2 px-0">

    <div class="sidebar-items">

      <div class="sidebar-list">
        <router-link to="/Estimates">
        Все сметы
        </router-link>
      </div>

      <div class="sidebar-list">
        <a href="#">Архив смет</a>
      </div>

    </div>
  </div>

</template>

<style lang="scss" scoped>
@import "../../assets/scss/vars.scss";
@import "../../assets/scss/main.scss";
.sidebar {
  min-height: 100vh;
}
</style>
