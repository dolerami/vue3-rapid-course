<template>
  <div class="post" v-for="post in posts">
    <!--    We have a directive v-for, which is the same as "foreach" in JS, so it's making a loop and checking each element inside-->
    <!--    Usually we're setting the arrays' and objects' names in plural-->
    <!--    So when we write v-for, we are referring to each element by writing it's name in singular-->
    <div><strong>Title:</strong>{{post.title}}</div>
    <div><strong>Content:</strong>{{post.body}}</div>
    <!--      So as you see here we wrote just 1 HTML tag per element, but we have 4 sections in our browser-->
    <!--      That's how it's working with arrays and objects-->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.post{
  padding:15px;
  border:2px solid teal;
  margin-top: 15px;
}
</style>