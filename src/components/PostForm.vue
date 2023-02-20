<template>
  <form @submit.prevent>
    <h4>The creation of a post</h4>
    <my-input
        v-focus
        v-model="post.title"
        type="text"
        placeholder="Title"
    />
    <my-input
        v-model="post.body"
        type="text"
        placeholder="Content"
    />
    <my-button
        style="align-self: flex-end; margin-top: 15px;"
        @click="createPost"
    >
      Create
    </my-button>
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
      this.post = {
        title: '',
        body: '',
      }
    },
  },
  // watch:{
  //   // This is another example of watch function
  //   post:{
  //     // Here we're watching not just a simple model, but an object with models inside
  //     // If we write it as we did before, like watch:{post(newValue){console.log(newValue)}}, it won't work
  //     // So when we insert some new values in the input, it will not show it in the console
  //     // The reason is that this is an object, and watch is watching to it globally, not detailed
  //     // For us to watch it detailed, we have to write another object in the watch, which is post:{}
  //     handler(newValue){
  //       // Then in this object we're operating handler option to watch the changes of each component in the object
  //       console.log(newValue);
  //     },
  //     deep: true,
  //     // The important part is using 'deep' option iinside to watch the separate changes in the object
  //     // Deep is set to false by default, so when we change it to 'true', it will start to watch the detailed changes
  //   }
  // }
  // // But we'll comment this, cause it was just an example
}
</script>

<style scoped>
form{
  display:flex;
  flex-direction: column;
}
</style>