<template>
<!--  In Vue2 we have to have a root tag here, f.i. div, but in Vue3 it's not mandatory-->
<!--But when we use loops in Vue3, it's better to have a root tag-->
  <div v-if="posts.length > 0">
<!--    Here we've set a new condition with v-if directive-->
<!--    We say that the div is active or visible only when the length of the posts array is more than 0-->
<!--    In other words, when we have at least 1 visible post in the post list-->
<!--    v-if can work with v-else, which is usually following the element with v-if-->
<!--    If the condition in v-if isn't true, then v-else is working-->
    <h3>Users list</h3>
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
  <h2 v-else style="color: red">
<!--    We said that if the list is empty, let this tag be active-->
<!--    We can also set a chain of conditions with v-else-if, but here we dont need it-->
<!--    **************** v-show *********************-->
<!--    It's possible to do the same things with v-show directive-->
<!--    What we need is to write in the main div v-show="posts.length > 0"-->
<!--    And in this 'h2' tag we need to write v-show="posts.length === 0"-->
<!--    The result will be the same, but there is an important difference between these directives-->
<!--    During v-show the inactive element is not deleted from the DOM tree, it just has a display:none style-->
<!--    While during v-if/v-else the inactive element doesn't exist in the DOM tree -->
<!--    This can be problematic in some cases, f.e. when we use an attribute from the non-visible element-->
<!--    If we use v-if/v-else, in that case this attribute will not be used, so we will have an issue-->
<!--    We need to be careful and attentive while deciding which method to use for hiding/showing some elements-->
    Users list is empty
  </h2>
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