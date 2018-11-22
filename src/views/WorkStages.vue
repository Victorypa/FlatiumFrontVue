<template>
  <div>
    <basicheader></basicheader>
  
    <section class="work-stages">
  
      <div class="container-fluid ">
        <div class="row">
          <sidebar></sidebar>
  
          <div class="col-md-10">
  
            <div class="row col-10 fixed-part align-items-center shadow bg-white rounded">
              <div class="col-md-8">
                <h1 class="main-caption w-100">
                  График работ
                </h1>
              </div>
  
              <div class="col-md-2 ml-auto">
                <button type="button" class="primary-button w-100">Редактировать</button>
              </div>
  
              <div class="col-md-6 pt-3">
                <h2 class="main-subtitle px-15"> Итого: 2 120 000 Р</h2>
              </div>
            </div>
            <div class="row stages align-items-center shadow bg-white rounded pb-3">
              <div class="col-12 d-flex align-items-center justify-content-between mb-2">
                <div class="col-md-6">
                  <div class="main-subtitle">
                    Этап 1
                  </div>
                </div>
                <div class="col-md-6 d-flex justify-content-end pl-0">
                  <datepicker class="my-datepicker" :language="ru"></datepicker>
                  <datepicker class="my-datepicker ml-3" :language="ru"></datepicker>
                </div>
              </div>
  
              <div class="col-12">
                <table class="table drag-table">
                  <div class="main-subtitle main-subtitle--fz col-12 pt-4">
                    Пол
                  </div>
                  <tbody>
                    <tr>
                      <div>
                        <draggable :list="list1" :options="{group:{ name: 'stuff'}}" @start="drag=true" @end="drag=false" :move="onMove">
                          <div v-for="ele in list1" class="item d-flex justify-content-between">
                            <th scope="row" class="w-50">
                              <div class="form-check custom-control checkbox">
                                <input type="checkbox" class="form-check-input check" id='1'>
                                <label class="form-check-label d-block" for="1">{{ele.name}}</label>
                              </div>
                            </th>
                            <td>{{ele.per}}</td>
                            <td>{{ele.price}}</td>
                            <td>{{ele.summ}}</td>
                          </div>
                        </draggable>
                      </div>
  
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12 px-0">
  
              <div class=" px-15">
                <h2 class="main-subtitle main-subtitle--room pl-3">
                  Комната 1
                </h2>
                <div class="col-8 d-flex justify-content-between align-items-center pt-3 pl-3">
  
                  <div class="projects__desc-item">Общая площадь: 28 м<sup>2</sup></div>
                  <div class="projects__desc-item">Высота потолка: 2,8 м</div>
                  <div class="projects__desc-item">Площадь стен: 80,1 м<sup>2</sup></div>
                  <div class="projects__desc-item">Периметр: 29,8</div>
  
                </div>
              </div>
  
              <div class="material-info">
  
                <div class="row bg px-3">
  
                  <div class="main-subtitle main-subtitle--fz col-12 pt-4">
                    Пол
                  </div>
  
                  <div class="col-12 px-0">
                    <table class="table drag-table">
  
                      <tbody>
                        <tr>
                          <div>
                            <draggable :list="list2" :options="{group:{ name: 'stuff'}}" @start="drag=true" @end="drag=false" :move="onMove">
                              <div v-for="ele in list2" class="item d-flex justify-content-between">
                                <th scope="row" class="w-50">
                                  <div class="form-check custom-control checkbox">
                                    <input type="checkbox" class="form-check-input check" id='2'>
                                    <label class="form-check-label d-block" for="2"> {{ele.name}}</label>
                                  </div>
                                </th>
                                <td>{{ele.per}}</td>
                                <td>{{ele.price}}</td>
                                <td>{{ele.summ}}</td>
                              </div>
                            </draggable>
                          </div>
  
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
  
                <!-- <div class="row bg px-3">
  
                  <div class="main-subtitle main-subtitle--fz col-12">
                    Стены
                  </div>
  
                  <div class="col-12 px-0">
                    <table class="table drag-table">
  
                      <tbody>
                        <tr>
                          <div>
                            <draggable :list="list3" :options="{group:{ name: 'stuff'}}" @start="drag=true" @end="drag=false" :move="onMove">
                              <div v-for="ele in list3" class="item d-flex justify-content-between">
                                <th scope="row" class="w-50">
                                  <div class="form-check custom-control checkbox">
                                    <input type="checkbox" class="form-check-input check" id='3'>
                                    <label class="form-check-label d-block" for="3"> {{ele.name}}</label>
                                  </div>
                                </th>
                                <td>{{ele.per}}</td>
                                <td>{{ele.price}}</td>
                                <td>{{ele.summ}}</td>
                              </div>
                            </draggable>
                          </div>
  
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> -->
  
                <!-- <div class="row bg px-3">
  
                  <div class="main-subtitle main-subtitle--fz col-12 pl-3">
                    Потолок
                  </div>
  
                  <div class="col-12 px-0">
                    <table class="table drag-table">
  
                      <tbody>
                        <tr>
                          <div>
                            <draggable :list="list4" :options="{group:{ name: 'stuff'}}" @start="drag=true" @end="drag=false" :move="onMove">
                              <div v-for="ele in list4" class="item d-flex justify-content-between">
                                <th scope="row" class="w-50">
                                  <div class="form-check custom-control checkbox">
                                    <input type="checkbox" class="form-check-input check" id='4'>
                                    <label class="form-check-label d-block" for="4"> {{ele.name}}</label>
                                  </div>
                                </th>
                                <td>{{ele.per}}</td>
                                <td>{{ele.price}}</td>
                                <td>{{ele.summ}}</td>
                              </div>
                            </draggable>
                          </div>
  
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> -->
  
              </div>
  
            </div>
  
            <div class="col-12 px-0">
  
              <div class="px-15">
                <h2 class="main-subtitle main-subtitle--room pl-3">
                  Комната 2
                </h2>
                <div class="projects__desc col-8 d-flex justify-content-between align-items-center py-3 pl-3">
  
                  <div class="projects__desc-item">Общая площадь: 28 м<sup>2</sup></div>
                  <div class="projects__desc-item">Высота потолка: 2,8 м</div>
                  <div class="projects__desc-item">Площадь стен: 80,1 м<sup>2</sup></div>
                  <div class="projects__desc-item">Периметр: 29,8</div>
  
                </div>
              </div>
  
              <div class="material-info">
  
                <div class="row bg px-3">
  
                  <div class="main-subtitle main-subtitle--fz col-12 pt-4">
                    Пол
                  </div>
  
                  <div class="col-12 px-0">
                    <table class="table drag-table">
  
                      <tbody>
                        <tr>
                          <div>
                            <draggable :list="list2" :options="{group:{ name: 'stuff'}}" @start="drag=true" @end="drag=false" :move="onMove">
                              <div v-for="ele in list2" class="item d-flex justify-content-between">
                                <th scope="row" class="w-50">
                                  <div class="form-check custom-control checkbox">
                                    <input type="checkbox" class="form-check-input check" id='5'>
                                    <label class="form-check-label d-block" for="5"> {{ele.name}}</label>
                                  </div>
                                </th>
                                <td>{{ele.per}}</td>
                                <td>{{ele.price}}</td>
                                <td>{{ele.summ}}</td>
                              </div>
                            </draggable>
                          </div>
  
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
  
                <div class="row bg px-3">
  
                  <div class="main-subtitle main-subtitle--fz col-12">
                    Стены
                  </div>
  
                  <div class="col-12 px-0">
                    <table class="table drag-table">
  
                      <tbody>
                        <tr>
                          <div>
                            <draggable :list="list3" :options="{group:{ name: 'stuff'}}" @start="drag=true" @end="drag=false" :move="onMove">
                              <div v-for="ele in list3" class="item d-flex justify-content-between">
                                <th scope="row" class="w-50">
                                  <div class="form-check custom-control checkbox">
                                    <input type="checkbox" class="form-check-input check" id='6'>
                                    <label class="form-check-label d-block" for="6"> {{ele.name}}</label>
                                  </div>
                                </th>
                                <td>{{ele.per}}</td>
                                <td>{{ele.price}}</td>
                                <td>{{ele.summ}}</td>
                              </div>
                            </draggable>
                          </div>
  
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
  
                <div class="row bg px-3">
  
                  <div class="main-subtitle main-subtitle--fz col-12 pl-3">
                    Потолок
                  </div>
  
                  <div class="col-12 px-0">
                    <table class="table drag-table">
  
                      <tbody>
                        <tr>
                          <div>
                            <draggable :list="list4" :options="{group:{ name: 'stuff'}}" @start="drag=true" @end="drag=false" :move="onMove">
                              <div v-for="ele in list4" class="item d-flex justify-content-between">
                                <th scope="row" class="w-50">
                                  <div class="form-check custom-control checkbox">
                                    <input type="checkbox" class="form-check-input check" id='7'>
                                    <label class="form-check-label d-block" for="7"> {{ele.name}}</label>
                                  </div>
                                </th>
                                <td>{{ele.per}}</td>
                                <td>{{ele.price}}</td>
                                <td>{{ele.summ}}</td>
                              </div>
                            </draggable>
                          </div>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
  
        </div>
        <div class="fixed-footer d-flex align-items-center">
          <div class="col-md-2 ml-auto">
            <button type="button" class="primary-button w-100">Добавить</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import basicheader from "./partials/BasicHeader";
  import sidebar from "./partials/Sidebar";
  import Datepicker from "vuejs-datepicker";
  import draggable from "vuedraggable";
  import {
    ru
  } from "vuejs-datepicker/dist/locale";
  export default {
    components: {
      basicheader,
      sidebar,
      draggable,
      Datepicker
    },
    data() {
      return {
        ru,
        future_index: "START",
        list4: [{
            name: "Name 1",
            per: "28м2",
            price: "100 Р/М2",
            summ: "2800 Р"
          },
          {
            name: "Name 2",
            per: "28м2",
            price: "100 Р/М2",
            summ: "2800 Р"
          },
        ],
        list3: [{
            name: "Name 3",
            per: "28м2",
            price: "100 Р/М2",
            summ: "2800 Р"
          },
  
          {
            name: "Name 4",
            per: "28м2",
            price: "100 Р/М2",
            summ: "2800 Р"
          },
        ],
        list2: [{
            name: "Name 5",
            per: "28м2",
            price: "100 Р/М2",
            summ: "2800 Р"
          },
  
          {
            name: "Name 6",
            per: "28м2",
            price: "100 Р/М2",
            summ: "2800 Р"
          },
        ],
        list1: [{
            name: "Name 7",
            per: "28м2",
            price: "100 Р/М2",
            summ: "2800 Р"
          },
        ]
      };
    },
    methods: {
      onMove: function(event, oEvent) {
        this.future_index += ", " + event.draggedContext.futureIndex;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../assets/scss/vars.scss";
  .fixed {
    &-part {
      position: fixed;
      background-color: $white;
      padding-bottom: 35px;
      padding-top: 85px;
      z-index: 999;
    }
    &-footer {
      position: fixed;
      left: 16.7%;
      right: 0;
      bottom: 0;
      height: 60px;
      background-color: #fff;
      border-top: 1px solid $main-color;
    }
  }
  
  .form-check {
    &-label {
      padding-top: 1px;
      @include transition;
      cursor: pointer;
      &:before {
        border: 1px solid $ccc;
        border-radius: 0;
      }
      &::after {
        position: absolute;
        left: -18px;
        top: 5px;
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
      padding-left: 5px;
      &::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        top: 3px;
        left: 0px;
        margin-left: -1.25rem;
        border-radius: 0;
        background-color: #fff;
        transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
      }
    }
  }
  
  .stages {
    margin-top: 265px;
  }
  
  // .material-info {
  //   margin-top: 265px;
  // }
  .small-case {
    font-size: 0.8rem;
    th {
      &:first-child {
        padding-left: 60px;
      }
    }
  }
  
  table {
    color: $text-color;
    tr {
      cursor: pointer;
    }
    th {
      font-weight: normal;
    }
  }
  
  .drag-table td {
    flex-grow: 1;
  }
</style>


