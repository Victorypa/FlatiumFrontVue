<template>
<div>

  <basicheader></basicheader>

  <div class="timetable">

    <div class="container-fluid">
      <div class="row">
        <sidebar></sidebar>

        <div class="col-md-10">

          <div class="row col-10 fixed-part shadow bg-white rounded px-15 align-items-center">

            <div class="col-md-8">
              <h2 class="main-caption">
                График работ
              </h2>
            </div>

            <div class="col-md-4  ml-auto text-right pr-0">
              <button type="button" class="primary-button col-6">Смотреть график</button>
            </div>

            <div class="col-md-6 pt-4">
              <div class="main-subtitle">
                Название сметы
              </div>
            </div>

          </div>

          <div class="row col-12">

            <div class="col-10 owl-carousel-wrapper">
              <div class="owl-carousel owl-theme">
                <div class="create__features">
                  <div class="create__features-name active">
                    Комната
                  </div>
                </div>

                <div class=" create__features">
                  <div class="create__features-name">
                    Электромонтажные
                  </div>
                </div>
                <div class=" create__features ">
                  <div class="create__features-name">
                    Электромонтажные
                  </div>
                </div>
                <div class=" create__features">
                  <div class="create__features-name">
                    Сантехнические
                  </div>
                </div>

                <div class=" create__features">
                  <div class="create__features-name">
                    Санузел
                  </div>
                </div>
                <div class=" create__features">
                  <div class="create__features-name">
                    Электромонтажные
                  </div>
                </div>
                <div class=" create__features">
                  <div class="create__features-name">
                    Санузел
                  </div>
                </div>
                <div class=" create__features">
                  <div class="create__features-name">
                    Электромонтажные
                  </div>
                </div>
                <div class=" create__features">
                  <div class="create__features-name">
                    Электромонтажные
                  </div>
                </div>
                <div class=" create__features">
                  <div class="create__features-name">
                    Санузел
                  </div>
                </div>
              </div>
            </div>

            <div class="row col-12 justify-content-between">
              <div class="row col-6">
                <div class="main-subtitle col-12 pt-3  mb-4">
                  <div class="bb pb-3">
                    План
                  </div>
                </div>
                <div class="main-subtitle main-subtitle--fz col-12">Демонтажные работы</div>

                <div class="col-12 py-2">
                  <input type="text" class="w-100" name="dates">
                </div>

                  <div class="main-subtitle main-subtitle--fz col-12">Возведение перегородок</div>
                  <div class="col-12 py-2">
                    <input type="text" class="w-100" name="dates">
                </div>

                    <div class="main-subtitle main-subtitle--fz col-12">Устройство пола (черновые
                      работы)</div>
                    <div class="col-12  py-2">
                      <input type="text" class="w-100" name="dates">
                </div>

                    </div>
                    <div class="row col-6">
                      <div class="main-subtitle main-subtitle--border col-12 pt-3 mb-4">
                        <div class="bb pb-3">
                          Факт
                        </div>
                      </div>
                      <div class="main-subtitle main-subtitle--fz col-12">Демонтажные работы</div>

                      <div class="col-12 py-2">
                        <input type="text" class="w-100" name="dates">
                </div>

                        <div class="main-subtitle main-subtitle--fz col-12">Возведение перегородок</div>
                        <div class="col-12 py-2">
                          <input type="text" class="w-100" name="dates">
                </div>

                          <div class="main-subtitle main-subtitle--fz col-12">Устройство пола (черновые
                            работы)</div>
                          <div class="col-12 py-2">
                            <input type="text" class="w-100" name="dates">
                </div>

                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>
</template>

<script>
import basicheader from  './partials/BasicHeader'
import sidebar from  './partials/Sidebar'
export default {
  components: {
    basicheader, 
    sidebar
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars.scss";

.sidebar {
  min-height: 100vh;
}

.fixed-part {
  position: fixed;

  padding-top: 85px;
  padding-bottom: 35px;

  background-color: $white;
  z-index: 999;
}

.timetable {
  &__data {
    .form-control {
      font-size: 14px;
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }

  .owl-carousel-wrapper {
    padding-top: 285px;
  }

  .owl-carousel {
    padding-left: 15px;

    .owl-next,
    .owl-prev {
      position: absolute;
      bottom: -30%;
      cursor: pointer;
    }

    .owl-prev {
      left: -1%;
    }

    .owl-next {
      right: -2%;
    }

    .owl-nav {
      button {
        background-color: #fff;
        font-size: 30px;

        &:hover {
          background-color: #fff;
        }

        &:focus {
          outline: none;
        }
      }

      span {
        color: #666;
        @include transition;

        &:active {
          background-color: #fff;
        }

        &:hover {
          color: $main-color;
        }
      }
    }

    .owl {
      &-dots {
        display: none;
      }

      &-stage-outer {
        margin-right: 15px;
      }

      &-item {
        width: auto !important;
        min-width: 130px;
      }
    }
  }

  .bb {
    border-bottom: 1px solid #ccc;
  }
}

.create__features {
  display: flex;
  align-items: center;
  margin-right: 20px;

  &-name {
    font-weight: bold;
    font-size: 18px;
    color: $ccc;
    border: none;
    cursor: pointer;
    @include transition;

    &:hover {
      color: $main-color;
    }

    &.active {
      display: inline-block;
      color: $main-color;
      border-bottom: 3px solid $main-color;
    }
  }
}
</style>
