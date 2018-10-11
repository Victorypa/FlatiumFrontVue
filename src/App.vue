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
@import "../node_modules/font-awesome/css/font-awesome.min.css";
@import "assets/scss/vars.scss";
@import "../src/assets/scss/main.scss";
// @import "../src/assets/scss/fonts/FontAwesome/fontawesome.min.css";

</style>
