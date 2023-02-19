<template>
<!--  As you see we've created a new page for each post by ID-->
  <div>
    <h1>This is the page of the post where the Post ID is {{ $route.params.id}} </h1>
<!--    To show the id of the dynamic navigation route, we use this fabric function-->
<!--    $route first to pick the route, then .params, later specify it with ID or another parameter-->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>