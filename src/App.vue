<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
<!--    Here we use this component for the router to show the result of the URL line type-->
<!--    So by this component we can include all other components created and included in the router-->
<!--    As a result for this point we can see the component 'Main'. But we'll add the others in router.js too now-->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {Navbar}
}
</script>

<style>
/*We removed scoped for the navbar to use its styles at full*/
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

.app{
  padding: 20px;
}
</style>