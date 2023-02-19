<template>
  <div class="app">
    <router-view></router-view>
<!--    Here we use this component for the router to show the result of the URL line type-->
<!--    So by this component we can include all other components created and included in the router-->
<!--    As a result for this point we can see the component 'Main'. But we'll add the others in router.js too now-->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

.app{
  padding: 20px;
}
</style>