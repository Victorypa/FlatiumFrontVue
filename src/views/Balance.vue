<template>
  <div>
  
    <basicheader></basicheader>
  
    <div class="projects">
  
      <div class="container-fluid px-0">
        <div class="row">
          <sidebar></sidebar>
  
          <div class="col-md-10 px-0">
  
            <div class="row col-10 fixed-part shadow bg-white rounded pl-3 align-items-center">
              <div class="col-md-8">
                <h1 class="main-caption">
                  Название сметы
                </h1>
              </div>
  
              <div class="col-md-2 ml-auto">
                <button type="button" class="primary-button w-100">Редактировать</button>
              </div>
  
              <div class="col-12 pt-3 d-flex">
                <div class="main-subtitle px-15 col-auto pl-0"> Итого: 2 120 000 Р <span>(работы)</span></div>
                <div class="main-subtitle px-15 col-auto"> 1 120 000 Р<span>(материалы)</span></div>
                <div class="main-subtitle px-15 col-auto"> Приход: 120 000 Р</div>
                <div class="main-subtitle px-15 col-auto"> Прибыль: 120 000 Р</div>
              </div>
  
            </div>
  
            <div class="col-12">
  
              <div class="main-content">
                <div class="row align-items-center">
                  <div class="main-subtitle profit col-1 mr-4">
                    Приход:
                  </div>
                  <div class="col-2">
                    <input type="text" class="form-control" placeholder="Сумма">
                  </div>
                  <div class="col-2">
                    <select class="form-control">
                                          <option selected disabled>Причина</option>
                                          <option>Акт №1</option>
                                          <option>Ведомость доп. работ №1</option>
                                          <option>Оплата материалов</option>
                                          <option>Аванс</option>
                                        </select>
                  </div>
                  <div class="col-2">
                    <datepicker class="my-datepicker" :language="ru"></datepicker>
                  </div>
                </div>
  
                <div class="row align-items-center py-4">
                  <div class="main-subtitle profit col-1 mr-4">
                    Расход:
                  </div>
                  <div class="col-2">
                    <input type="text" class="form-control" placeholder="Сумма">
                  </div>
                  <div class="col-2">
                    <select class="form-control">
                                          <option selected disabled>Причина</option>
                                          <option>Оплата материалов</option>
                                          <option>Оплата рабочим</option>
                                        </select>
                  </div>
                  <div class="col-2">
                    <datepicker class="my-datepicker" :language="ru"></datepicker>
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
            <div class="col-12 px-0 bg mt-3">
              <table class="table table-hover">
  
                <tbody>
                  
                  <tr>
                    <td class="pl-4">+1 200 000</td>
                    <td>Оплата материалов</td>
                    <td>10 октября 2018</td>
                    <td> <button class="add-button add-button--remove d-flex align-items-center" title="Удалить материал">
                                  <img src="../assets/img/del.svg" alt="add-button">
                                  <div class="remove-materials ml-1">
                                    Удалить
                                  </div>
                                </button></td>
                  </tr>

                  <tr>
                    <td class="pl-4">+1 200 000</td>
                    <td>Оплата материалов</td>
                    <td>10 октября 2018</td>
                    <td> <button class="add-button add-button--remove d-flex align-items-center" title="Удалить материал">
                                  <img src="../assets/img/del.svg" alt="add-button">
                                  <div class="remove-materials ml-1">
                                    Удалить
                                  </div>
                                </button></td>
                  </tr>
                  <tr>
                    <td class="pl-4">+1 200 000</td>
                    <td>Акт №1</td>
                    <td>10 октября 2018</td>
                    <td> <button class="add-button add-button--remove d-flex align-items-center" title="Удалить материал">
                                  <img src="../assets/img/del.svg" alt="add-button">
                                  <div class="remove-materials ml-1">
                                    Удалить
                                  </div>
                                </button></td>
                  </tr>
                  <tr>
                    <td class="pl-4">+1 200 000</td>
                    <td>Оплата материалов</td>
                    <td>10 октября 2018</td>
                    <td> <button class="add-button add-button--remove d-flex align-items-center" title="Удалить материал">
                                  <img src="../assets/img/del.svg" alt="add-button">
                                  <div class="remove-materials ml-1">
                                    Удалить
                                  </div>
                                </button></td>
                  </tr>
                  <tr>
                    <td class="pl-4">+1 200 000</td>
                    <td>Оплата рабочим</td>
                    <td>10 октября 2018</td>
                    <td> <button class="add-button add-button--remove d-flex align-items-center" title="Удалить материал">
                                  <img src="../assets/img/del.svg" alt="add-button">
                                  <div class="remove-materials ml-1">
                                    Удалить
                                  </div>
                                </button></td>
                  </tr>
                </tbody>
              </table>
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
import Datepicker from "vuejs-datepicker";
import { ru } from "vuejs-datepicker/dist/locale";
export default {
  components: {
    basicheader,
    sidebar,
    Datepicker
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars.scss";
.fixed-part {
  position: fixed;
  background-color: $white;
  padding-bottom: 35px;
  padding-top: 85px;
  z-index: 999;
}

.sidebar {
  min-height: 100vh;
}

.main-content {
  padding-top: 275px;
}

.main-subtitle {
  font-size: 1.3rem;
   span {
  font-size: 1rem;
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

.bg {
  padding-bottom: 400px;
}

.my-datepicker {
  line-height: 15px;
}

tbody tr:first-child {
background-color: #DEFFE8;
}
</style>

