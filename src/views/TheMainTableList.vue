<template lang="html">
  <div class="">
      <basicheader></basicheader>
      <div class="container-fluid ">
        <div class="row">
          <sidebar></sidebar>
          <div class="col-md-10">
            <div class="col-md-12 table__wrapper px-0">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Название</th>
                    <th>Клиент</th>
                    <th>Дата подписания</th>
                    <th>Номер договора</th>
                    <th>Менеджер</th>
                    <th>Скидка</th>
                    <th>Сумма договора</th>
                    <th>Дизайн</th>
                    <th>Работы</th>
                    <th>Материалы</th>
                    <th>Мебель</th>
                    <th>Плановая прибыль</th>
                    <th>Баланс итого</th>
                    <th>Тек.приб.раб</th>
                    <th>Тек.приб. Мат</th>
                    <th>Пр работы</th>
                    <th>Рсхд работы</th>
                    <th>Баланс работы</th>
                    <th>Пр Мат</th>
                    <th>Рсхд Мат</th>
                    <th>Балланс Мат</th>
                    <th>Бонусы</th>
                    <th>Дата начала</th>
                    <th>Дата сдачи</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Название</td>
                    <td>Имя</td>
                    <td>28.11.19</td>
                    <td>121212</td>
                    <td>Елизавета</td>
                    <td>15%</td>
                    <td>121212Р</td>
                    <td>Х</td>
                    <td>Х</td>
                    <td>Х</td>
                    <td>Х</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>28.11.19</td>
                    <td>28.11.19</td>
                    <td>Статус</td>
                  </tr>
                  <tr>
                    <td>Название</td>
                    <td>Имя</td>
                    <td>28.11.19</td>
                    <td>121212</td>
                    <td>Елизавета</td>
                    <td>15%</td>
                    <td>121212Р</td>
                    <td>Х</td>
                    <td>Х</td>
                    <td>Х</td>
                    <td>Х</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>28.11.19</td>
                    <td>28.11.19</td>
                    <td>Статус</td>
                  </tr>
                  <tr>
                    <td>Название</td>
                    <td>Имя</td>
                    <td>28.11.19</td>
                    <td>121212</td>
                    <td>Елизавета</td>
                    <td>15%</td>
                    <td>121212Р</td>
                    <td>Х</td>
                    <td>Х</td>
                    <td>Х</td>
                    <td>Х</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>121212Р</td>
                    <td>28.11.19</td>
                    <td>28.11.19</td>
                    <td>Статус</td>
                  </tr>
                </tbody>
              </table>
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
  },
}
</script>

<style lang="scss">
.table {
  margin-top: 100px;
  min-width: 3100px;
  &__wrapper {
    overflow-x: scroll;
  }
  td, th {
    &:first-child {
      position: fixed;
      width: 200px;
      background-color: #fff;
    }
    &:nth-child(2){
      padding-left: 200px;
    }
  }

}
</style>
