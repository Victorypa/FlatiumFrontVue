<template>
  <div>
  
    <basicheader></basicheader>
  
    <div class="create">
      <div class="container-fluid px-0">
        <div class="row">
          <sidebar></sidebar>
  
          <div class="col-md-10 px-0">
            <div class="row col-10 fixed-part shadow bg-white rounded align-items-center">
              <div class="pb-2 d-flex justify-content-between align-items-center w-100">
                <div class="col-md-10 px-0 d-flex  align-items-center">
                  <h1 class="ml-0 mb-0 col-5">
                    Ведомость доп. работ
                  </h1>
                  <div class="col-md-7 pt-3 pl-1">
                    <div class="main-caption px-15"> Название сметы</div>
                  </div>
                </div>
  
                <div class="col-md-2 d-flex px-0 align-items-center">
  
                  <div class="col-12 pl-0 ml-auto">
                    <button type="button" class="primary-button  w-100">Создать ведомость</button>
                  </div>
                </div>
              </div>
  
              <div class="col-md-6 pt-2">
                <h2 class="main-subtitle px-15"> Итого акту: 2 120 000 Р</h2>
              </div>
  
            </div>
            <div class="carousel-wrapper">
              <div class="row align-items-center col-12">
  
                <div class="col-8 owl-carousel-wrapper">
                  <div class="owl-carousel owl-theme d-flex px-0">
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
                  </div>
                </div>
  
                <button class="col-auto add-button pb-3">
                  <img src="../assets/img/plus-circle.svg" alt="add-button">
                </button>
  
                <div class="col-2 text-right ml-auto  pl-0">
                  <button type="button" class="primary-button primary-button--outline w-100" data-toggle="modal" data-target="#myModal2">Удалить</button>
                </div>
              </div>
            </div>
            <div class="row align-items-center py-30 shadow bg-white rounded col-12 py-4">
              <div class="col-6">
                <select class="form-control">
                  <option selected disabled>Тип помещения или вид работы</option>
                  <option>Комната</option>
                  <option>Санузел</option>
                  <option>Электромонтажные работы</option>
                  <option>Сантехнические работы</option>
                </select>
              </div>
  
            </div>

                     <div class="row align-items-center justify-content-between px-15">

            <div class="col-6 pt-5">
              <div class="create__sum">
                ИТОГО В ТЕКУЩЕЙ ВКЛАДКЕ: 1600 Р
              </div>
            </div>
          </div>

          <div class="row px-15">

                    <div class="col-12">
                      <div class="main-subtitle main-subtitle--fz pt-5 pb-2">
                        Пол
                      </div>
                    </div>
                    <div class="col-md-12 px-0 all-items">

                      <div class="row align-items-center">
                        <label class="col-md-6 mb-0">
              <div class="form-check custom-control">
                <input class="form-check-input" id="customCheck1" type="checkbox" checked>
                <label class="form-check-label" for="customCheck1">
                  
                  Грунтовка пола
                </label>
                      </div>
                      </label>

                      <div class="col-md-6">
                        <div class="form-group form-group--margin d-flex align-items-center">
                          <input type="text" class="form-control col-md-2" placeholder="Кол-во">
                          <div class="inputs-caption pl-1">м<sup>2</sup></div>
                          <input type="text" class="form-control col-md-2" placeholder="800">
                          <div class="inputs-caption pl-1">Р/м<sup>2</sup></div>
                          <div class="form-group__calc col-md-auto">800
                            Р/М<sup>2</sup></div>
                          <button class="add-button add-button--remove d-flex align-items-center" title="Удалить материал">
                  <img src="../assets/img/del.svg" alt="add-button">
                  <div class="remove-materials ml-1">
                    Удалить
                  </div>
                </button>
                          <button class="add-button ml-auto" title="Добавить материалы">
                  <img src="../assets/img/add-materials.svg" alt="add-button">
                </button>
                        </div>
                      </div>

                      <div class="row col-12">
                        <div class="col-6 pl-5 mb-3">
                          <div class="subtitle-list">
                            <div class="subtitle-list__item">Наименование работы 1</div>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="d-flex align-items-center col-12">
                            <div class="col-4 ml-57"></div>
                            <div class="form-group__calc col-md-auto">800
                              Р/М<sup>2</sup></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">

                      <label class="col-md-6">
              <div class="form-check custom-control">
                <input class="form-check-input" id="customCheck2" type="checkbox">
                <label class="form-check-label" for="customCheck2">
                  Наименование работы
                </label>
                    </div>
                    </label>

                    <div class="col-md-6">
                      <div class="form-group form-group--margin d-flex align-items-center">
                        <input type="text" class="form-control col-md-2" placeholder="Кол-во">
                        <div class="inputs-caption pl-1">м<sup>2</sup></div>
                        <input type="text" class="form-control col-md-2" placeholder="800">
                        <div class="inputs-caption pl-1">Р/м<sup>2</sup></div>
                        <div class="form-group__calc col-md-auto">800
                          Р/М<sup>2</sup></div>
                        <button class="add-button add-button--remove d-flex align-items-center" title="Удалить материал">
                      <img src="../assets/img/del.svg" alt="add-button">
                      <div class="remove-materials ml-1">
                        Удалить
                      </div>
                    </button>
                        <button class="add-button ml-auto" title="Добавить материалы">
                      <img src="../assets/img/add-materials.svg" alt="add-button">
                    </button>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <label class="col-md-6">
              <div class="form-check custom-control">
                <input class="form-check-input" id="customCheck3" type="checkbox">
                <label class="form-check-label" for="customCheck3">
                  Наименование работы
                </label>
                  </div>
                  </label>

                  <div class="col-md-6">
                    <div class="form-group form-group--margin d-flex align-items-center">
                      <input type="text" class="form-control col-md-2" placeholder="Кол-во">
                      <div class="inputs-caption pl-1">м<sup>2</sup></div>
                      <input type="text" class="form-control col-md-2" placeholder="800">
                      <div class="inputs-caption pl-1">Р/м<sup>2</sup></div>
                      <div class="form-group__calc col-md-auto">800
                        Р/М<sup>2</sup></div>
                      <button class="add-button add-button--remove d-flex align-items-center" title="Удалить материал">
                      <img src="../assets/img/del.svg" alt="add-button">
                      <div class="remove-materials ml-1">
                        Удалить
                      </div>
                    </button>
                      <button class="add-button ml-auto" title="Добавить материалы">
                      <img src="../assets/img/add-materials.svg" alt="add-button">
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div class="row col-12">
                <button class="add-space-button add-space-button-work">+ Добавить работу</button>
              </div>
              <div class="row px-15">

                <div class="col-12">
                  <div class="main-subtitle main-subtitle--fz pt-5 pb-2">
                    Стены
                  </div>
                </div>

                <div class="col-md-12 px-0">
                  <div class="row">

                    <label class="col-md-6">
                    <div class="form-check custom-control">
                      <input class="form-check-input" id="customCheck2" type="checkbox">
                      <label class="form-check-label" for="customCheck2">
                        Наименование работы
                      </label>
                  </div>
                  </label>

                  <div class="col-md-6">
                    <div class="form-group form-group--margin d-flex align-items-center">
                      <input type="text" class="form-control col-md-2" placeholder="Кол-во">
                      <div class="inputs-caption pl-1">м<sup>2</sup></div>
                      <input type="text" class="form-control col-md-2" placeholder="800">
                      <div class="inputs-caption pl-1">Р/м<sup>2</sup></div>
                      <div class="form-group__calc col-md-auto">800
                        Р/М<sup>2</sup></div>
                      <button class="add-button add-button--remove d-flex align-items-center" title="Удалить материал">
                        <img src="../assets/img/del.svg" alt="add-button">
                        <div class="remove-materials ml-1">
                          Удалить
                        </div>
                      </button>
                      <button class="add-button ml-auto" title="Добавить материалы">
                        <img src="../assets/img/add-materials.svg" alt="add-button">
                      </button>
                    </div>
                  </div>
                </div>

                <div class="row">

                  <label class="col-md-6">
                    <div class="form-check custom-control">
                      <input class="form-check-input" id="customCheck2" type="checkbox">
                      <label class="form-check-label" for="customCheck2">
                        Наименование работы
                      </label>
                </div>
                </label>

                <div class="col-md-6">
                  <div class="form-group form-group--margin d-flex align-items-center">
                    <input type="text" class="form-control col-md-2" placeholder="Кол-во">
                    <div class="inputs-caption pl-1">м<sup>2</sup></div>
                    <input type="text" class="form-control col-md-2" placeholder="800">
                    <div class="inputs-caption pl-1">Р/м<sup>2</sup></div>
                    <div class="form-group__calc col-md-auto">800
                      Р/М<sup>2</sup></div>
                    <button class="add-button add-button--remove d-flex align-items-center" title="Удалить материал">
                        <img src="../assets/img/del.svg" alt="add-button">
                        <div class="remove-materials ml-1">
                          Удалить
                        </div>
                      </button>
                    <button class="add-button ml-auto" title="Добавить материалы">
                        <img src="../assets/img/add-materials.svg" alt="add-button">
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
import basicheader from "./partials/BasicHeader";
import sidebar from "./partials/Sidebar";
export default {
  components: {
    basicheader,
    sidebar
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars.scss";
.fixed-part {
  position: fixed;
  padding-bottom: 35px;
  padding-top: 85px;
  z-index: 999;
}

.create {
  .form-check {
    &-input:checked ~ {
      label {
        font-weight: bold;
        color: #000;
      }
    }
  }
  .form-group {
    margin-bottom: 0;
    span {
      color: $main-color;
    }
    .form-control {
      margin-left: 10px;
      &:first-of-type {
        margin-left: 0;
      }
    }
    &__calc {
      font-size: 0.75rem;
      color: $main-color;
    }
    &--margin {
      margin-bottom: 10px;
    }
  }
  &-spaces {
    input {
      padding: 10px;
    }
  }
  &__features {
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
  &__sum {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .custom-radio {
    font-size: 0.875rem;
    padding-right: 20px;
    color: $text-color;
    .custom-control {
      &-input:checked ~ .custom-control-label::before {
        background-color: $main-color;
      }
    }
    label {
      display: block;
      font-size: 13px;
      @include transition;
      &:hover {
        color: #000;
        cursor: pointer;
      }
    }
    &:last-child {
      padding-right: 0px;
    }
  }
  .carousel-wrapper {
    padding-top: 250px;
  }
  .subtitle-list {
    &__item {
      font-size: 0.85rem;
    }
  }
  .owl-carousel {
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
      right: -1%;
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
  }
  .add-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    img {
      width: 35px;
      border-radius: 50%;
      @include transition;
      &:hover {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
      }
    }
    &--remove {
      color: #ccc;
      &:hover {
        color: $main-color;
      }
      img {
        width: 15px;
      }
    }
  }
  .sidebar {
    min-height: 100vh;
  }
  .main-caption {
    font-size: 1.4rem;
  }
}
</style>
