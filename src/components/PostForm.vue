<template>
  <form @submit.prevent>
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
      this.$emit('create', this.post)
      // We can't send the data from the child component to the parent directly
      // But we can create an event in the child, and make the parent listen to that particular event
      // This is being done by the function $emit
      // The first parameter of the $emit is always the name of the event it's creating (here - create)
      // The second parameter is the value sent by that function for the parent to listen to them (here - the object 'post')
      // We can send as many values as we want after each other (f.e. this.post, "second thing", 3, title, e.c.)
      // Just in this case each of them will be indexed, so this.post will be the 1st, "second thing" - the 2nd, e.c.
      // So by the function in the parent we'll have to write 3 arguments for each of these values
      this.post = {
        title: '',
        body: '',
      }
      // And here we're just cleaning the input line after the data insert
      // Usually this cleaning is being done in the child component, not in the parent
      // The next steps for this event listening in the parent are being done there
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
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}

.input{
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>