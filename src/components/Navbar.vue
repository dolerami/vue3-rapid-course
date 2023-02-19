<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
<!--    We have $router function in Vue, which helps us with navigation-->
<!--    If we listen to the event 'click', we need to operate the function $router -->
<!--    This will itself operate the event '.push' and will navigate to the place written as an argument-->
<!--    It supposed to be yellow but it's gray maybe because of the PHPStorm version-->
<!--    So as you see this is an alternative for using the router link in a component-->
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Page of Posts</my-button>
      <my-button style="margin-left: 20px;" @click="$router.push('/about')">About Us</my-button>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.navbar{
  height: 50px;
  background: lightgray;
  box-shadow: 2px 2px 4px gray;
  display:flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns{
  margin-left:auto;
}
</style>