<template>
<!--We've created a new component for the each post, in case we don't need a whole list of posts but just one simple post-->
<!--This means that in the PostList we will call this component-->
  <div class="post">
    <div>
      <div><strong>Title:</strong>{{post.title}}</div>
      <div><strong>Content:</strong>{{post.body}}</div>
    </div>
    <div class="post__btns">
      <my-button>Delete</my-button>
    </div>
<!--    We've created a new button for deleting the each post, but didn't set it up-->
<!--    But as soon as we've created a new component for buttons, let's use that instead-->
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  components: {MyButton},
  props: {
    // We need new props section to send the data from the mother to here
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post{
  padding:15px;
  border:2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items:center;
  justify-content: space-between;
}
</style>