<template>
<div>

  <basicheader></basicheader>

  <div class="projects">

    <div class="container-fluid ">
      <div class="row">
        <sidebar></sidebar>

        <div class="col-md-10">

          <div class="row col-10 fixed-part shadow bg-white rounded pl-3 align-items-center">
            <div class="col-md-8">
              <h1 class="main-caption">
               Название сметы
              </h1>
            </div>

            <div class="col-md-2 ml-auto">
              <button type="button" class="primary-button w-100">Редактировать</button>
            </div>

            <div class="col-md-6 pt-3">
              <h2 class="main-subtitle px-15"> Итого по акту: 2 120 000 Р</h2>
            </div>

          </div>

          <div class="col-12 px-0">

            <div class="projects__content px-15 col-12">

              <div class="row align-items-center pt-4">
                <div class="col-10">
                  <div class="form-group d-flex align-items-center">
                    <input type="text" class="form-control" placeholder="Имя клиента" disabled>
                    <div class="col-3">
                      <select class="form-control" disabled>
                        <option selected disabled>Имя менеджера</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <input type="text" class="form-control" placeholder="Телефон менеджера" disabled>
                    <input type="text" class="form-control" placeholder="№ Договора" disabled>
                  </div>
                  </div>

                  <div class="col-md-2">
                    <button type="button" class="primary-button w-100">Экспорт</button>
                  </div>
                </div>
            
                  </div>
                <h2 class="main-subtitle main-subtitle--room pl-3">
                  Комната 1
                </h2>
                <div class="projects__desc col-8 d-flex justify-content-between align-items-center pt-3 pl-3">

                  <div class="projects__desc-item">Общая площадь: 28 м<sup>2</sup></div>
                  <div class="projects__desc-item">Высота потолка: 2,8 м</div>
                  <div class="projects__desc-item">Площадь стен: 80,1 м<sup>2</sup></div>
                  <div class="projects__desc-item">Периметр: 29,8</div>

                </div>
              </div>

              <div class="projects__information ">

                <div class="row bg px-3">

                  <div class="main-subtitle main-subtitle--fz col-12 pt-4 pl-3">
                    Пол
                  </div>

                  <div class="col-12 px-0">

                    <table class="table table-hover">

                      <tbody>
                        <tr>
                          <th scope="row" class="w-50">Демонтаж деревянного пола (до основания)</th>
                          <td>28м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row" class="w-50">Монтаж чистовой стяжки самовыравнивающейся
                            смесью</th>
                          <td>28м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row" class="w-50">Укладка подложки</th>
                          <td>28м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row" class="w-50">Монтаж плинтуса МДФ</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>

                <div class="row bg px-3">

                  <div class="main-subtitle main-subtitle--fz col-12 pl-3">
                    Стены
                  </div>

                  <div class="col-12  px-0">

                    <table class="table table-hover">

                      <tbody>
                        <tr>
                          <th scope="row" class="w-50">Очистка стен от старых обоев</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Демонтаж дверей</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Демонтаж старой штукатурки</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Грунтовка стен (3 цикла)</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Штукатурка стены по маякам</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Шпатлёвка в 2 слоя</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Шлифовка стен</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Окраска стен в 2 слоя</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Оклейка обоями под покраску</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Наименование работы</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>

                <div class="row bg px-3">

                  <div class="main-subtitle main-subtitle--fz col-12 pl-3">
                    Потолок
                  </div>

                  <div class="col-12  px-0">

                    <table class="table table-hover">

                      <tbody>
                        <tr>
                          <th scope="row" class="w-50">Наименование работы</th>
                          <td>28м2</td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Наименование работы</th>
                          <td>28м2</td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Наименование работы</th>
                          <td>28м2</td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Наименование работы</th>
                          <td>28м2</td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Наименование работы</th>
                          <td>28м2</td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>

                      </tbody>
                    </table>

                  </div>
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

              <div class="projects__information ">

                <div class="row bg px-3">

                  <div class="main-subtitle main-subtitle--fz col-12 pt-4 pl-3">
                    Пол
                  </div>

                  <div class="col-12 px-0">

                    <table class="table table-hover">

                      <tbody>
                        <tr>
                          <th scope="row" class="w-50">Демонтаж деревянного пола (до основания)</th>
                          <td>28м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row" class="w-50">Монтаж чистовой стяжки самовыравнивающейся
                            смесью</th>
                          <td>28м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row" class="w-50">Укладка подложки</th>
                          <td>28м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row" class="w-50">Монтаж плинтуса МДФ</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>

                <div class="row bg px-3">

                  <div class="main-subtitle main-subtitle--fz col-12 pl-3">
                    Стены
                  </div>

                  <div class="col-12  px-0">

                    <table class="table table-hover">

                      <tbody>
                        <tr>
                          <th scope="row" class="w-50">Очистка стен от старых обоев</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Демонтаж дверей</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Демонтаж старой штукатурки</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Грунтовка стен (3 цикла)</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Штукатурка стены по маякам</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Шпатлёвка в 2 слоя</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Шлифовка стен</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Окраска стен в 2 слоя</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Оклейка обоями под покраску</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Наименование работы</th>
                          <td>28 м<sup>2</sup></td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>

                <div class="row bg px-3">

                  <div class="main-subtitle main-subtitle--fz col-12 pl-3">
                    Потолок
                  </div>

                  <div class="col-12  px-0">

                    <table class="table table-hover">

                      <tbody>
                        <tr>
                          <th scope="row" class="w-50">Наименование работы</th>
                          <td>28м2</td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Наименование работы</th>
                          <td>28м2</td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Наименование работы</th>
                          <td>28м2</td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Наименование работы</th>
                          <td>28м2</td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>
                        <tr>
                          <th scope="row">Наименование работы</th>
                          <td>28м2</td>
                          <td>100 Р/М<sup>2</sup></td>
                          <td>2800 Р</td>
                        </tr>

                      </tbody>
                    </table>

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

  background-color: $white;

  padding-bottom: 35px;
  padding-top: 85px;

  z-index: 999;
}

.projects {
  &__content {
    padding-top: 250px;
    padding-bottom: 20px;

    .form-group {
      margin-bottom: 0;

      input {
        &:first-child {
          margin-left: 0;
        }

        margin-left: 10px;
      }
    }

    .form-control {
      color: 666;
      height: 45px;
    }
  }

  &__desc {
    font-weight: bold;
    color: $text-color;
  }

  &__information {
    .table {
      color: $text-color;

      td {
        width: 13%;
      }

      th {
        font-weight: normal;
      }
    }
  }
}

tr:hover {
  cursor: pointer;
}
</style>

