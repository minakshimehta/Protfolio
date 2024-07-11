<template>
  <div>
    <div>
      <homePage />
    </div>
  </div>
</template>


<script>
// import NavBar from "./components/NavBar.vue";
import homePage from "./components/homePage.vue";

export default {
  name: "App",
  components: { homePage },
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>