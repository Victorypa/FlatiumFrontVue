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
                    Привязка материалов
                  </h2>
                </div>
              </div>
            </div>

            <div class="row create-floor-work__content col-12">
              <div class="col-6">
                <select class="form-control">
                  <option selected disabled>Пол</option>
                  <option>Стены</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
                <div class="col-md-6 ">
                <input type="text" placeholder="Название" class="form-control">
              </div>
            </div>
             
            <div class="row px-3 pt-3 pb-1">
              <div class="col-md-8">
                <input type="text" placeholder="Название" class="form-control">
              </div>
              <div class="col-md-4">
                <div class="d-flex align-items-center justify-content-end">
                  <select class="form-control col-md-3">
                    <option value="1">
                      кв. м
                    </option>
                    <option value="2">
                      м.п
                    </option>
                    <option value="3">
                      шт.
                    </option>
                    <option value="4">
                      изд.
                    </option>
                    <option value="5">
                      м.
                    </option>
                  </select> 
                  <input type="number" placeholder="цена за ед. измерения" class="form-control col-md-3 form-group__parametres ml-3"></div>
              </div>
            </div>
            <div class="row px-3 pt-3 pb-1">
              <div class="col-md-8">
                <input type="text" placeholder="Название" class="form-control">
              </div>
              <div class="col-md-4">
                <div class="d-flex align-items-center justify-content-end">
                  <select class="form-control col-md-3">
                    <option value="1">
                      кв. м
                    </option>
                    <option value="2">
                      м.п
                    </option>
                    <option value="3">
                      шт.
                    </option>
                    <option value="4">
                      изд.
                    </option>
                    <option value="5">
                      м.
                    </option>
                  </select> 
                  <input type="number" placeholder="цена за ед. измерения" class="form-control col-md-3 form-group__parametres ml-3"></div>
              </div>
            </div>

            <div class="row col-12 px-0 py-3">
              <div class="add-work">
                +Добавить работу
              </div>

              <div class="row justify-content-between align-items-center col-12 py-2">
                <div class="col-8">
                  <div class="form-check material-name">
                      Наименование     
                  </div>

                </div>

                <div class="col-4 d-flex justify-content-end align-items-center">
                  <div class="total-sum col-2">1204,00</div>

                  <button class="add-button add-button--remove d-flex align-items-center ml-3" title="Удалить">
                    <img src="../assets/img/del.svg" alt="add-button">
                    <div class="remove-materials ml-1">
                      Удалить
                    </div>
                  </button>
                  <button class="add-button ml-3" title="Добавить вид работы">
                    <img src="../assets/img/add-materials.svg" alt="add-button">
                  </button>
                </div>
                <div class="row col-12">
                  <div class="col-8 pl-5 mb-3">
                    <div class="subtitle-list">
                      <div class="subtitle-list__item">Наименование работы 1</div>
                    </div>
                  </div>
                  <div class="col-8 pl-5 mb-3">
                    <div class="subtitle-list">
                      <div class="subtitle-list__item">Наименование работы 1</div>
                    </div>
                  </div>
                  <div class="col-8 pl-5">
                    <div class="subtitle-list">
                      <div class="subtitle-list__item">Наименование работы 1</div>
                    </div>
                  </div>

                </div>
              </div>

              <div class="row justify-content-between align-items-center col-12 py-2">
                <div class="col-8">
                  <div class="form-check material-name">
                      Наименование     
                  </div>
                </div>

                <div class="col-4 d-flex justify-content-end align-items-center">
                  <div class="total-sum col-2">1204,00</div>
                  <button class="add-button add-button--remove d-flex align-items-center ml-3" title="Удалить">
                    <img src="../assets/img/del.svg" alt="add-button">
                    <div class="remove-materials ml-1">
                      Удалить
                    </div>
                  </button>
                  <button class="add-button ml-3" title="Добавить вид работы">
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
