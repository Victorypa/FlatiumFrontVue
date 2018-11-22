<template>
  <div>
  
    <basicheader></basicheader>
  
    <div class="create">
      <div class="container-fluid px-0">
        <div class="row">
          <sidebar></sidebar>
  
          <div class="col-md-10 px-0">
            <div class="row col-10 fixed-part shadow bg-white rounded align-items-center">
              <div class="pb-4 d-flex justify-content-between align-items-center w-100">
                <div class="col-md-6">
                  <h1 class="main-caption ml-0">
                    Создание сметы
                  </h1>
                </div>
  
                <div class="col-md-6 d-flex px-0 align-items-center">
  
                  <div class="col-4 create__sum pl-0">
                    Итого: 1600 Р
                  </div>
  
                  <div class="col-4 pl-0">
  
                    <button type="button" class="primary-button  w-100">Экспорт</button>
                  </div>
  
                  <div class="col-4 pl-0">
                    <button type="button" class="primary-button  w-100">График</button>
                  </div>
                </div>
              </div>
  
              <div class="row align-items-center justify-content-between w-100">
  
                <div class="col-md-6 pl-30">
                  <form>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Название (адрес) объекта">
                    </div>
                  </form>
                </div>
  
                <div class="col-md-6 px-0">
                  <fieldset>
                    <div class="form-group d-flex align-items-center justify-content-around">
                      <div class="custom-control custom-radio col-4">
                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" checked="">
                        <label class="custom-control-label" for="customRadio1">Предчистовая
                          отделка</label>
                      </div>
                      <div class="custom-control custom-radio col-4">
                        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="customRadio2">Черновая отделка</label>
                      </div>
                      <div class="custom-control custom-radio col-4">
                        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="customRadio3">Вторичная
                          жилплощадь</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
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
  
            <div class="row align-items-center py-30 shadow bg-white rounded col-12 py-4 mb-3">
              <div class="col-6">
                <select class="form-control">
                  <option selected disabled>Тип помещения или вид работы</option>
                  <option>Комната</option>
                  <option>Санузел</option>
                  <option>Электромонтажные работы</option>
                  <option>Сантехнические работы</option>
                </select>
              </div>
              <div class="col-6 d-flex align-items-center justify-content-between">
  
                <div class="placeholder-text ml-2" placeholder="Выс">
                  <input />
                </div>
                <div class="placeholder-text ml-2" placeholder="P">
                  <input />
                </div>
                <div class="placeholder-text ml-2" placeholder="S">
                  <input />
                </div>
                <div class="placeholder-text ml-2" placeholder="S">
                  <input />
                </div>
                <div class="placeholder-text ml-2" placeholder="S">
                  <input />
                </div>
                <div class="placeholder-text ml-2" placeholder="S стен">
                  <input disabled />
                </div>
              </div>
            </div>
  
  
            <div class="col-md-12 px-5 bg pt-5">
              <div class="row align-items-center justify-content-between">
  
                <div class="col-6">
                  <div class="create__sum">
                    ИТОГО В ТЕКУЩЕЙ ВКЛАДКЕ: 1600 Р
                  </div>
                </div>
              </div>
            </div>
  
            <div class="row">
              <div class="col-md-12 pt-4 pr-0 bg">
                <div class="row col-12 justify-content-between add-space-block align-items-center" v-for="(form, index) in WindowsData">
                  <div class="col-3 px-0">
                    <button class="add-space-button pl-4 active">{{ index + parseInt(1) }}</button>
                  </div>
                  <form class="col-md-9">
  
                    <div class="row col-12 form-group--margin d-flex align-items-center create-spaces">
  
  
                      <div class="form-group col-md-3">
                        <select class="form-control">
                                          <option name="type">
                                              Окно
                                          </option>
  
                                          <option name="type">
                                              Дверь
                                          </option>
                                      </select>
                      </div>
                      <div class="form-group w-85 ml-2">
                        <input type="text" class="form-control" placeholder="Ширина">
                      </div>
                      <div class="form-group w-85 ml-3">
                        <input type="text" class="form-control" placeholder="Длина">
                      </div>
                      <span class="ml-3">x</span>
  
                      <div class="form-group w-85 ml-3">
                        <input type="text" class="form-control" placeholder="Кол-во">
                      </div>
                      <div class="form-group col-md-2">
                        <div class="form-group__calc ">
  
                        </div>
                      </div>
                      <div class="ml-auto">
                        <button class="add-button add-button--remove d-flex align-items-center ml-auto" title="Удалить" @click="removeWork(index)">
                      <img src="../assets/img/del.svg" alt="add-button">
                    </button>
                      </div>
                    </div>
                  </form>
                </div>
  
                <div class="row col-12 pl-5">
                  <button class="add-space-button py-2" @click="addWork">+ Добавить проем </button>
                </div>
              </div>
              <div class="row col-12 py-4 pl-5 bg">
                <div class="row w-100 align-items-center">
                  <div class="col-2">
                    <select class="form-control">
                      <option selected disabled>Пол</option>
                      <option>Стены</option>
                      <option>Потолок</option>
                    </select>
                  </div>
                  <div class="col-10">
                    <form>
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="Название вида работы">
                      </div>
                    </form>
                  </div>
  
                </div>
  
  
                <form class="row w-100 align-items-center" v-for="(service, index) in newServices">
                  <div class="col-2 py-2">
                    <select class="form-control">
                             <option>
                            1
                        </option>
                           <option>
                            2
                        </option>
                  </select>
                  </div>
  
                  <div class="col-5 py-1">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Название" v-model="service.name">
                    </div>
                  </div>
  
                  <div class="col-auto d-flex align-items-center">
                    <select class="form-control w-85">
                        <option>
                            1
                        </option>
                           <option>
                            2
                        </option>
                  </select>
                    <div class="form-group w-85 ml-4">
                      <input type="number" min="0" class="form-control" placeholder="Цена за ед. изм." v-model="service.price">
                    </div>
  
                    <div class="col-auto py-1">
                      <div class="form-check custom-control checkbox">
                        <input type="checkbox" class="form-check-input check" :id="1" v-model="service.discount">
                        <label class="form-check-label d-block" for="1">
                              Скидка возможна
                          </label>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="row col-12 pt-3">
                  <button class="add-space-button add-space-button-work" @click="addNewService">+ Добавить работу</button>
                </div>
              </div>
  
  
              <div class="col-md-12 pl-5 bg">
  
                <div class="col-12">
                  <div class="main-subtitle main-subtitle--fz pb-2">
                    Пол
                  </div>
                </div>
                <div class="row align-items-center">
                  <label class="col-md-6 mb-0">
                          <div class="form-check custom-control d-flex edit-show" @click='toggle = !toggle'>
                            <input class="form-check-input" id="customCheck1" type="checkbox">
                          <label class="form-check-label" for="customCheck1">
                            Грунтовка пола
                          </label>
                          <div class="ml-auto edit">Ред.</div>
                </div>
                </label>
  
                <div class="col-md-6">
                  <div class="form-group form-group--margin d-flex align-items-center">
                    <input type="text" class="form-control w-85" placeholder="Кол-во">
                    <div class="inputs-caption pl-1">м<sup>2</sup></div>
                    <input type="text" class="form-control w-85" placeholder="800">
                    <div class="inputs-caption pl-1">Р/м<sup>2</sup></div>
                    <div class="form-group__calc col-md-auto">800 Р
                    </div>
                    <button class="add-button ml-auto" title="Добавить материалы">
                    <img src="../assets/img/add-materials.svg" alt="add-button" v-show='toggle'>
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
                      <div class="ml-211"></div>
                      <div class="form-group__calc col-md-auto">800 Р
                      </div>
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
                  <input type="text" class="form-control w-85" placeholder="Кол-во">
                  <div class="inputs-caption pl-1">м<sup>2</sup></div>
                  <input type="text" class="form-control w-85" placeholder="800">
                  <div class="inputs-caption pl-1">Р/м<sup>2</sup></div>
                  <div class="form-group__calc col-md-auto">800 Р
                  </div>
                  <button class="add-button ml-auto" title="Добавить материалы">
                        <img src="../assets/img/add-materials.svg" alt="add-button">
                      </button>
                </div>
              </div>
            </div>
  
            <div class="row" v-for="(form, index) in floorWork">
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
                <input type="text" class="form-control w-85" placeholder="Кол-во">
                <div class="inputs-caption pl-1">м<sup>2</sup></div>
                <input type="text" class="form-control w-85" placeholder="800">
                <div class="inputs-caption pl-1">Р/м<sup>2</sup></div>
                <div class="form-group__calc col-md-auto">800 Р/М
                  <sup>2</sup></div>
                <button class="add-button ml-auto" title="Добавить материалы">
                        <img src="../assets/img/add-materials.svg" alt="add-button">
                      </button>
              </div>
            </div>
  
          </div>
        </div>
  
        <div class="col-md-12 pl-5 bg">
  
          <div class="col-12 pt-5">
            <div class="main-subtitle main-subtitle--fz pb-2">
              Стены
            </div>
          </div>
          <div class="row align-items-center">
            <label class="col-md-6 mb-0">
                          <div class="form-check custom-control">
                            <input class="form-check-input" id="customCheck1" type="checkbox">
                            <label class="form-check-label" for="customCheck1">  
                              Грунтовка пола
                            </label>
          </div>
          </label>
  
          <div class="col-md-6">
            <div class="form-group form-group--margin d-flex align-items-center">
              <input type="text" class="form-control w-85" placeholder="Кол-во">
              <div class="inputs-caption pl-1">м<sup>2</sup></div>
              <input type="text" class="form-control w-85" placeholder="800">
              <div class="inputs-caption pl-1">Р/м<sup>2</sup></div>
              <div class="form-group__calc col-md-auto">800 Р
              </div>
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
                <div class="ml-211"></div>
                <div class="form-group__calc col-md-auto">800 Р
                </div>
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
            <input type="text" class="form-control w-85" placeholder="Кол-во">
            <div class="inputs-caption pl-1">м<sup>2</sup></div>
            <input type="text" class="form-control w-85" placeholder="800">
            <div class="inputs-caption pl-1">Р/м<sup>2</sup></div>
            <div class="form-group__calc col-md-auto">800 Р
            </div>
  
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
          <input type="text" class="form-control w-85" placeholder="Кол-во">
          <div class="inputs-caption pl-1">м<sup>2</sup></div>
          <input type="text" class="form-control w-85" placeholder="800">
          <div class="inputs-caption pl-1">Р/м<sup>2</sup></div>
          <div class="form-group__calc col-md-auto">800 Р
          </div>
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
</template>

<script>
  import Vue from "vue";
  import basicheader from "./partials/BasicHeader";
  import sidebar from "./partials/Sidebar";
  export default {
    data() {
      return {
        WindowsData: [],
        newServices: [],
        floorWork: [],
        toggle: true
      };
    },
  
    methods: {
      addNewService() {
        this.newServices.push({
          name: null,
          price: null,
          discount: null
        });
        console.log(this.newServices);
      },
  
      addFloorWork() {
        this.floorWork.push({
          name: null,
          price: null
        });
      },
  
      addWork() {
        this.WindowsData.push({});
      },
      removeWork(i) {
        Vue.delete(this.WindowsData, i);
      }
    },
    components: {
      basicheader,
      sidebar
    }
  };
</script>

<style lang="scss" scoped>
  @import "../assets/scss/vars.scss";
  .w-85 {
    width: 85px;
  }
  
  .fixed-part {
    position: fixed;
    padding-bottom: 35px;
    padding-top: 85px;
    z-index: 999;
  }
  
  .create {
    .form-check {
      &-input:checked~ {
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
        &-input:checked~.custom-control-label::before {
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
    .remove-materials {
      font-size: 0.75rem;
    }
    .add-space {
      &-button {
        padding-left: 25px;
        color: $main-color;
        background-color: transparent;
        border: none;
        cursor: pointer;
        @include transition;
        &.active {
          display: block;
          color: #000;
          font-weight: bold;
          &:hover {
            color: #000;
          }
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
  
  .owl-carousel {
    padding-left: 15px;
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
  
  .form-check {
    &-label {
      @include transition;
      cursor: pointer;
      &:before {
        border: 1px solid $ccc;
        border-radius: 0;
      }
      &::after {
        position: absolute;
        left: -23px;
        top: 2px;
        padding-left: 3px;
        font-size: 11px;
        color: $main-color;
      }
      &:hover {
        color: $button-hover;
      }
    }
    input[type="checkbox"]:checked+label::after,
    .abc-checkbox input[type="radio"]:checked+label::after {
      font-family: "FontAwesome";
      content: "\f00c";
    }
    label {
      cursor: pointer;
      display: inline;
      vertical-align: top;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        top: 0px;
        left: -5px;
        margin-left: -1.25rem;
        border-radius: 0;
        background-color: #fff;
        transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
      }
    }
  }
  
  .placeholder-text {
    width: 105px;
    position: relative;
    &::after {
      position: absolute;
      left: 5px;
      top: 7px;
      content: attr(placeholder);
      pointer-events: none;
      opacity: 0.3;
    }
    input {
      width: 100%;
      height: 38px;
      padding: 10px 0px 10px 40px;
      &:hover {
        border-color: #000;
      }
    }
  }
  
  .ml-211 {
    margin-left: 211px;
  }
  
  .inputs-caption {
    font-size: 0.75rem;
    color: #ccc;
  }
  
  .fixed-search {
    &.active {
      position: fixed;
      z-index: 1000;
      top: 145px;
    }
  }
.edit-show:hover {
  .edit {
    transition: 0.5s;
    opacity:1;
  }
}
.edit {
    opacity: 0;
          color:$main-color;
    &:hover {
      cursor: pointer;

    }

}


</style>
