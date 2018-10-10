<template>

<div>

  <header class="header">

    <div class="container-fluid">

      <div class="row align-items-center justify-content-between header__top">

        <div class="header__logo col-md-2">
          <a href="#">
            <img class="header__logo--img" src="../assets/img/logo.svg" alt="">
          </a>
        </div>

        <div class="col-2 text-right">

          <button type="button" class="dropdown-toggle transparent-button user-button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <img src="../assets/img/user.svg" alt="user-icon">
          </button>

          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Профиль</a>
            <a class="dropdown-item" href="#">Выход</a>
          </div>

        </div>
      </div>
    </div>
  </header>

  <div class="timetable-start-date">

    <div class="container-fluid">

      <div class="row">
        <div class="sidebar col-2 px-0">

          <div class="sidebar-items">

            <div class="sidebar-list">
              <a href="#">Все сметы</a>
            </div>

            <div class="sidebar-list">
              <a href="#">Новая смета</a>
            </div>

            <div class="sidebar-list">
              <a href="#">Архив смет</a>
            </div>

          </div>
        </div>

        <div class="col-md-10 px-0">

          <div class="container-fluid">

            <div class="row align-items-center justify-content-between timetable-top shadow bg-white rounded">
              <div class="col-md-12 d-flex align-items-center flex-wrap">
                <div class="col-md-8">
                  <h2 class="main-caption">
                    График работ
                  </h2>
                </div>

                <div class="col-md-6 pt-4">
                  <div class="main-subtitle">
                    Название сметы
                  </div>
                </div>
              </div>
            </div>
            <div class="row h-100vh px-15 mt-5">

            </div>

          </div>
        </div>

      </div>

  </div>

</div>
</div>

</template>

<style lang="scss" scoped>
@import "../assets/scss/vars.scss";
.timetable-top {
  padding-top: 85px;
  padding-bottom: 35px;
}
</style>

<script>
export default {};
</script>
