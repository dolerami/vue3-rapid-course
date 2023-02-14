<template>
<!--  In Vue2 we have to have a root tag here, f.i. div, but in Vue3 it's not mandatory-->
<!--But when we use loops in Vue3, it's better to have a root tag-->
  <div>
    <h3>Users List</h3>
    <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    />
    <!--      Here we listened to the event click and set an appropriate function for it-->
    <!--      It is $emit, which is sending the model "post" to the parent component with the name 'remove'-->
    <!--      But as soon as here we're using a loop, we tell him to set a key parameter as well-->
    <!--      The key is the id of each post, meaning that in the loop for each post the key parameter will be its id-->
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  components: {PostItem},
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

</style>