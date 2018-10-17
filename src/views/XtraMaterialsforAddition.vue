<template>
<div>

  <basicheader></basicheader>

  <div class="create-floor-work">

    <div class="container-fluid px-0">
      <div class="row">
        <sidebar></sidebar>
        <div class="col-md-10 bg px-0">
          <div class="container-fluid px-0">
            <div class="fixed-part col-10 shadow bg-white rounded">
              <div class="row align-items-center ">

                <div class="col-md-8">
                  <h2 class="main-caption">
                    Выбор материалов
                  </h2>
                </div>
              </div>
            </div>

            <div class="row create-floor-work__content col-12">
                          <div class="col-12">
                    <div class="main-subtitle pb-4">
                  Название работы
                </div>
            </div>
              <form class="col-12">
                <div class="input-group">
                  <input class="form-control py-2" placeholder="Введите навание материала ">
                  <i class="fa fa-search"></i>
                </div>
              </form>
            </div>

            <div class="row col-12 px-0 py-3">
         
                  <div class="row justify-content-between align-items-center col-12 py-2 pb-3 bb">
                    <div class="col-8">
                      <div class="form-check ">
                        <input class="form-check-input" id="customCheck1" type="checkbox">
                        <label class="form-check-label" for="customCheck1">
                      Фанера ФК 8х1525х1525 мм, сорт 4/4
                    </label>
                      </div>
                    </div>
                                 
                      <div class="col-md-4 pl-0">                                  
                        <div class="form-group d-flex align-items-center mb-0 justify-content-end">
                                         <select class="form-control col-3 ml-2">
                      <option selected>Чистовые</option>
                      <option>Черновые</option>
                    </select>
                          <input type="text" class="form-control ml-2 col-2" placeholder="Цена">
                          <select class="form-control col-3 ml-2">
                      <option selected disabled>Ед.изм.</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>

                          <input type="text" class="form-control col-2 ml-2" placeholder="Расход">
                          <input type="text" class="form-control col-3 ml-2" placeholder="Стоимость">
             
                        </div>
                      </div>
                    </div>
     <div class="add-work py-3">
                +Добавить материал
              </div>
                  <div class="row justify-content-between align-items-center col-12 py-2">
                    <div class="col-8">
                      <div class="form-check ">
                        <input class="form-check-input" id="customCheck2" type="checkbox">
                        <label class="form-check-label" for="customCheck2">
                      Фанера ФК 8х1525х1525 мм, сорт 4/4
                    </label>
                      </div>
                    </div>
                      <div class="col-md-4 pl-0">
                        <div class="total-sum col-3 ml-auto px-0 text-right">1204,00</div>      
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

.create-floor-work {
  &__content {
    padding-top: 200px;
  }

  .form-check-label {
    &:hover {
      color: $main-color;
    }
  }

  .form-check-label,
  .total-sum {
    color: #666;
  }

  label {
    margin-bottom: 0;
  }
}

.fa-search {
  color: $main-color;

  &::before {
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 2;
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
      left: -18px;
      top: 2px;
      padding-left: 3px;
      font-size: 11px;
      color: $main-color;
    }

    &:hover {
      color: $button-hover;
    }
  }

  input[type="checkbox"]:checked + label::after {
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
      top: 0px;
      left: 0px;

      margin-left: -1.25rem;
      border-radius: 0;
      background-color: #fff;
      transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
    }
  }
}

.form-check {
  &--pt {
    label {
      &::before {
        top: 4px;
      }
    }
  }

  &-label {
    &--pt::after {
      top: 5px;
    }
  }
}

.add-work {
  cursor: pointer;
  color: #666;
  padding-left: 54px;

  &:hover {
    color: $main-color;
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
  font-size: 14px;
}

.subtitle-list {
  &__item {
    font-size: 0.85rem;
  }
}

.bt {
  border-top: 1px solid #ccc;
  padding-top: 25px;
  margin-top: 25px;
}
</style>
