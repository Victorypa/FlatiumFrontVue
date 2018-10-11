<template>

<div>
  <header></header>

  <div class="create-floor-work">

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

        <div class="col-md-10 bg px-0">
          <div class="container-fluid px-0">
            <div class="fixed-part col-10 shadow bg-white rounded">
              <div class="row align-items-center ">

                <div class="col-md-8">
                  <h2 class="main-caption">
                    Грунтовка пола
                  </h2>
                </div>

                <div class="col-md-4 text-right d-flex">
                  <button type="button" class="primary-button primary-button--outline col-5">Назад к смете</button>
                  <button type="button" class="primary-button col-6 ml-2">Сохранить</button>
                </div>

              </div>
            </div>

            <div class="row create-floor-work__content col-12">

              <form class="col-12">
                <div class="input-group">
                  <input class="form-control py-2" placeholder="Введите навание материала ">
                  <i class="fa fa-search"></i>
                </div>
              </form>
            </div>

            <div class="row col-12">
              <div class="row justify-content-between align-items-center col-12 py-4 pr-0">
                <div class="col-6">
                  <input type="text" class="form-control" placeholder="Наименование">
                </div>

              <div class="col-md-6 pr-0">
                  <div class="form-group d-flex align-items-center justify-content-end mb-0">    
                    <input type="text" class="form-control col-3 ml-2" placeholder="Цена прайса">      
                    <input type="text" class="form-control col-2 ml-2" placeholder="Кол-во/уп.">      
              <select class="form-control col-2 ml-2">
                <option selected disabled>Ед/изм.</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            
                    <input type="text" class="form-control col-2 ml-2" placeholder="Расход/м2">
                      <div class="total-sum col-auto text-right pr-0 pl-4">1204,00</div>
                  </div>
                </div>
              </div>

              <div class="add-work">
                +Добавить материал
              </div>

             <div class="row justify-content-between align-items-center col-12">
                <label class="col-8">
                  <div class="form-check">
                    <input class="form-check-input" id="customCheck1" type="checkbox">
                    <label class="form-check-label" for="customCheck1">
                      Фанера ФК 8х1525х1525 мм, сорт 4/4
                    </label>
                  </div>
                </label>

                <div class="col-md-4 pr-0">
                  <div class="form-group d-flex align-items-center justify-content-end">
                    <select class="form-control col-3">
                      <option selected disabled>Ед/изм.</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <input type="text" class="form-control col-3 ml-2" placeholder="Расход/м2">
                    <div class="ml-2 total-sum col-2">1204,00</div>
                  </div>
                </div>
              </div>

             <div class="row justify-content-between align-items-center col-12">
                <label class="col-8">
                  <div class="form-check">
                    <input class="form-check-input" id="customCheck1" type="checkbox">
                    <label class="form-check-label" for="customCheck1">
                      Фанера ФК 8х1525х1525 мм, сорт 4/4
                    </label>
                  </div>
                </label>

                <div class="col-md-4 pr-0">
                  <div class="form-group d-flex align-items-center justify-content-end">
                    <select class="form-control col-3">
                      <option selected disabled>Ед/изм.</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <input type="text" class="form-control col-3 ml-2" placeholder="Расход/м2">
                    <div class="ml-2 total-sum col-2">1204,00</div>
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
export default {};
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

.bt {
  border-top: 1px solid #ccc;
  padding-top: 25px;
  margin-top: 25px;
}
</style>
