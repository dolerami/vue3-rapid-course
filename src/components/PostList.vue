<template>
  <div class="post" v-for="post in posts">
    <div><strong>Title:</strong>{{post.title}}</div>
    <div><strong>Content:</strong>{{post.body}}</div>
  </div>
</template>

<script>
export default {
  props:{
    // Props are meant to gain the information from the parent component
    // We just have to make an object, where we're referring to the argument created in the parent component (here - posts)
    // It's important to know, that you can't change or edit the props here in the child component, only in parent
    posts:{
      type:Array,
      // In this object we are usually defining its type, which is an array in the parent
      required:true,
      // And also we are stating that it's mandatory for the array to exist, so the required field is true
    }
  }
}
</script>

<style scoped>
.post{
  padding:15px;
  border:2px solid teal;
  margin-top: 15px;
}
</style>