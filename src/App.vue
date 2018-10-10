<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
import "../node_modules/popper.js/dist/umd/popper.js";
// import "../node_modules/bootstrap/js/dist/util.js";
import "../node_modules/bootstrap/js/dist/dropdown.js";

export default {};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
// @import "../node_modules/font-awesome/scss/font-awesome.scss";
@import "assets/scss/vars.scss";
@import "../src/assets/scss/main.scss";

</style>
