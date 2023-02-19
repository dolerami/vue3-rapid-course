<template>
  <div>
    <h1>Welcome to the lesson on Vue 3</h1>
    <router-link to="/pages">Post Pages</router-link>
    <router-link to="/about">About Us</router-link>
<!--    This component is a special component available only in Vue-->
<!--    It has the same function as the tag <a></a>, but it's reactive-->
<!--    Meaning that the page isn't being refreshed, and we're dynamically going to the page we want-->
<!--    It has a mandatory props 'to', where we're writing the path of the component-->
<!--    So when we click on the content of these router links, they'll take us to these pages-->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>