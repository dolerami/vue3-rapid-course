<template>
  <div v-if="posts.length > 0">
    <h3>Users list</h3>
    <transition-group name="user-list">
<!--      This is a default component in Vue3, which helps us to set default CSS animation styles to the lists-->
<!--      Important to know, that for this the list must contain v-for, also a key-->
<!--      We're setting the name as we wish, but we have to use the same name in the styles, the details are there-->
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red">
    Users list is empty
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  components: {PostItem},
  props:{
    posts:{
      type:Array,
      required:true,
    }
  }
}
</script>

<style scoped>
/*Here as you see we've just copied and pasted here the default styles for the lists, just changing some details*/
/*We have to change the first part, setting the name of our component instead of the imported one*/
/*So we changed 'list-item' to the 'user-list-item', as the name of the component is 'user-list'*/
/*Important to remember, that the second part of the style classes has to remain the same*/
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
/*This is a style for the whole component*/
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
/*These are responsible for the list items when they are and aren't visible or active*/
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
/*These are for the list items when they're being deleted or inserted*/
.user-list-move {
  transition: transform 0.4s ease;
}
/*And this one is for the select tag, where it animates the results of the operatied option values*/
</style>