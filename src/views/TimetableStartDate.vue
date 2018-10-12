<template>
<div>

  <basicheader></basicheader>

  <div class="timetable-start-date">

    <div class="container-fluid">

      <div class="row">
        <sidebar></sidebar>

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
