<template>
  <form @submit.prevent>
    <h4>The creation of a post</h4>
    <my-input
        v-model="post.title"
        type="text"
        placeholder="Title"
    />
<!--    So v-model is the short way to write v-bind and v-on, it's doing both functions at the same time-->
<!--    It's not a thing to write everywhere, but is very useful-->
<!--    in Vue 3 you can use it many times in a component, while in Vue 2 you can do it only once-->
    <my-input
        v-model="post.body"
        type="text"
        placeholder="Content"
    />
<!--    Okay, so usually if we write v-model, it has some following attribute by default-->
<!--    In Vue2 it's v-model:value (:value we don't write usually), and in Vue3 it's v-model:modelValue-->
<!--    In Vue2 we use only 1 v-model, so there is no need to attach an attribute to that v-model, that's why it's pure-->
<!--    In Vue3 we can use more than 1, so we can attach attributes to define that v-model's aim as well-->
<!--    As in Vue3 v-model works with modelValue attribute by default, it means that in the child we must use that in props-->
    <my-button
        style="align-self: flex-end; margin-top: 15px;"
        @click="createPost"
    >
      Create
    </my-button>
<!--    As you see, we've changes the button tag into the MyButton component-->
<!--    As soon as it's a component tag not an ordinary one, it doesn't understand the text written in the tag-->
<!--    That's why we use the "slot" tag in the component, so the writing "Create" could be visible on the page-->
<!--    About the style, it's always better to have a class and to do the styling in the style section-->
<!--    But here we can afford ourselves to do so-->
  </form>
</template>

<script>
// As soon as we have set new global UI components, we don't need to import them and register here

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
</style>