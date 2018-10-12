<template>

<div>

<basicheader></basicheader>

<div class="estimates">
   <div class="container-fluid">
      <div class="row">
        <sidebar></sidebar>

        <div class="col-md-10 px-0 h-100vh">

          <div class="fixed-part col-10 shadow bg-white rounded">
            <div class="row align-items-center px-15">
              <div class="col-md-10">
                <h1 class="main-caption">
                  Все сметы
                </h1>
              </div>
              <div class="col-md-2 text-right">
                <button type="button" class="primary-button transparent-button w-100">+ Создать проект</button>
              </div>
            </div>

            <div class="col-md-12 pt-4 pr-0">
              <form>
                <div class="input-group">
                  <input class="form-control py-2" placeholder="Введите адрес">
                  <i class="fa fa-search"></i>
                </div>
              </form>
            </div>

            <div class="row pt-4 justify-content-end pr-2">      

                <button type="button" class="dropdown-toggle transparent-button" title="Действия"  data-toggle="dropdown">
                  <a class="estimates__dropdown-img" href="#">
                    <img src="../assets/img/dropdown-toggle.svg" alt="export">
                  </a>
                </button>

                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">Архивировать</a>
                  <a class="dropdown-item" href="#">Экспорт</a>
                </div>
             
            </div>
          </div>

          <div class="col-12">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>
                    <div class="form-check custom-control checkbox">
                      <input class="form-check-input check" id="checkAll" type="checkbox">
                      <label class="form-check-label" for="checkAll">
                        Выбрать все
                      </label>
                    </div>
                  </th>
                  <th>Номер договора</th>
                  <th>Статус</th>
                  <th>
                    <span class="arrow-sort">
                      Сортировка по дате
                      <img class="arrow-icon" src="../assets/img/arrow_down.svg" alt="export">
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="form-check custom-control checkbox">
                      <input class="form-check-input check" id="customCheck1" type="checkbox">
                      <label class="form-check-label" for="customCheck1">
                        <a class="label-name" href="#">Имя</a>
                      </label>
                    </div>
                  </td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td>john@example.com</td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check custom-control checkbox">
                      <input class="form-check-input check" id="customCheck2" type="checkbox">
                      <label class="form-check-label" for="customCheck2">
                        <a class="label-name" href="#">Имя</a>
                      </label>
                    </div>
                  </td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td>john@example.com</td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check custom-control checkbox">
                      <input class="form-check-input check" id="customCheck3" type="checkbox">
                      <label class="form-check-label" for="customCheck3">
                        <a class="label-name" href="#">Имя</a>
                      </label>
                    </div>
                  </td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td>john@example.com</td>
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

<style lang="scss" scoped>
@import "../assets/scss/vars.scss";

// @import "../assets/scss/mixins/font-face";

// @include font-face("tahoma", "../fonts/Tahoma/Tahoma");
.fixed-part {
  position: fixed;

  background-color: $white;

  padding-bottom: 15px;
  padding-top: 85px;

  z-index: 999;
}

.table {
  margin: 20px 0;
  color: $grey;
  input {
    margin-right: 5px;
    border: 1px solid $main-color;
  }
  label {
    margin-bottom: 0px;
  }
  tr:hover {
    background-color: $header-color;
  }
  thead {
    tr {
      &:first-child:hover {
        background-color: transparent;
      }
    }
  }
  th {
    border-top: none;

  }
}

.estimates {
  &__dropdown-img {
    display: block;
    width: 30px;
    height: 32px;
    img {
      @include img100;
      transform: rotate(90deg);
    }
  }

  .table {
    margin-top: 300px;
    label {
      padding-top: 1px;
      cursor: pointer;
      &:before {
        left: -3px;
      }
      &:after {
        left: -20px;
      }
    }
    .form-check-input:checked ~ label {
      font-weight: bold;
      color: #000;
    }
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


.arrow-icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  cursor: pointer;
  &.rotate {
    transform: rotate(180deg);
  }
}
.arrow-sort {
  cursor: pointer;
  &:hover {
    color: $main-color;
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
  
    input[type="checkbox"]:checked + label::after,
    .abc-checkbox input[type="radio"]:checked + label::after {
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
      a {
        &:hover {
          color: $main-color;
        }
      }

    }
  }

</style>

<script>
export default {

}
</script>
