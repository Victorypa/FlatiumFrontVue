<template>
<div>

  <header class="header">

    <div class="container-fluid">

      <div class="row align-items-center justify-content-between header__top">

        <div class="header__logo header__logo--color col-md-2">
          <a href="#">
            <img class="header__logo--img" src="../assets/img/logo-flat.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </header>

  <div class="login">
    <div class="container">
      <div class="row justify-content-center align-items-center h-100vh">

        <div class="col-4">
          <div class="login-form">

            <div class="form-group">
              <input type="text" placeholder="Логин" class="form-control">
            </div>
              <div class="form-group">
                <input type="Пароль" placeholder="Пароль" class="form-control">
            </div>
              </div>

              <div class="col-12 pl-1 py-1">
                <div class="login-remember">
                  <div class="form-check pb-2">
                    <input class="form-check-input" id="customCheck1" type="checkbox">
                    <label class="form-check-label" for="customCheck1">
                  Запомнить меня
                </label>
                  </div>
                </div>

              </div>

              <div class="col-12">
                <div class="col-md-8 mx-auto">
                  <button type="button" class="primary-button col-md-12">Войти</button>
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

// @import "../assets/scss/mixins/font-face";

// @include font-face("tahoma", "../fonts/Tahoma/Tahoma");

.login {
  &-form {
    &-group {
      margin-bottom: 10px;
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
      top: 0px;
      left: 0px;

      margin-left: -1.25rem;
      border-radius: 0;
      background-color: #fff;
      transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
    }
  }
}
</style>

<script>
export default {

}
</script>
