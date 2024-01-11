<template >
  <nav-bar></nav-bar>
  <div class="app"></div>
<router-view></router-view>
</template>
<script>
import NavBar from "@/components/NavBar";
export default {
  components :{
    NavBar
  }
}
</script>
<style scoped>
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .app{
    padding: 20px;
  }
</style>