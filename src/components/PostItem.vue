<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
<!--      And here as you see we've created a new area to show the ids of each post-->
      <div><strong>Title: </strong>{{post.title}}</div>
      <div><strong>Content: </strong>{{post.body}}</div>
    </div>
    <div class="post__btns">
      <my-button
        @click="$router.push(`/posts/${post.id}`)"
      >
        Open
      </my-button>
<!--      This button is for a dynamic navigation of every post-->
<!--      It means that the post components and their elements are the same (not the content), but the paths are different-->
<!--      We've set a dynamic navigation to this button, so when clicking it will take to the page for that particular post-->
<!--      We do the same trick with $router.push()-->
<!--      But in the braces we write the route in this format - `${}` to be able to give props too-->
<!--      So we go to the page posts and pick a post by its ID-->
      <my-button
        @click="$emit('remove', post)"
      >
        Delete
      </my-button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
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
.post__btns{
  display: flex;
}
</style>