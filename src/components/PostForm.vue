<template>
  <form @submit.prevent>
    <!--      So to make the submit work properly, we're adding a modification to the form tag-->
    <!--      It will be v-on:submit.prevent or just @submit.prevent-->
    <!--      In this case it will prevent the browser from being refreshed-->
    <!--      So we will be able to add a new object, and it will be visible and not get lost by refreshing the browser-->
    <h4>The creation of a post</h4>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Title"
    >
    <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Content"
    >
<!--    So v-model is the short way to write v-bind and v-on, it's doing both functions at the same time-->
<!--    It's not a thing to write everywhere, but is very useful-->
<!--    in Vue 3 you can use it many times in a component, while in Vue 2 you can do it only once-->
    <button
        class="btn"
        @click="createPost"
    >
      Create
    </button>
    <!--      Here we're operating a new method when clicking the button, so the comments are next to the method-->
  </form>
</template>

<script>
export default {
  data(){
    return{
      post:{
        title:'',
        body:'',
      }
    }
  },
  methods:{
    createPost(){
      this.post.id = Date.now();
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
      // We have cut the method from the parent and simply put here
      // Just changed the variable, cause we don't need it
      // Only added an id to the model
    },
  }
}
</script>

<style scoped>
form{
  display:flex;
  flex-direction: column;
}

.btn{
  margin-top: 15px;
  align-self: flex-end;
  /*It will only work when the parent object has display: flex; style*/
  /*Align-self style helps the object to align itself in an object with display flex style*/
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}

/*We can refer to the object by it's class just writing .(object class), also by id - #(object id)*/

.input{
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>