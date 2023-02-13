<template>
<!--We've created a new component for the each post, in case we don't need a whole list of posts but just one simple post-->
<!--This means that in the PostList we will call this component-->
  <div class="post">
    <div><strong>Title:</strong>{{post.title}}</div>
    <div><strong>Content:</strong>{{post.body}}</div>
  </div>
</template>

<script>
export default {
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

</style>