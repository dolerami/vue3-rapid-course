<template>
  <form @submit.prevent>
    <!--      So to make the submit work properly, we're adding a modification to the form tag-->
    <!--      It will be v-on:submit.prevent or just @submit.prevent-->
    <!--      In this case it will prevent the browser from being refreshed-->
    <!--      So we will be able to add a new object, and it will be visible and not get lost by refreshing the browser-->
    <h4>The creation of a post</h4>
    <input
        :value="post.title"
        @input="post.title=$event.target.value"
        class="input"
        type="text"
        placeholder="Title"
    >
    <!--      v-bind directive helps us to bind some data with a particular component-->
    <!--      So after v-bind: you have to write something, usually an attribute of that tag-->
    <!--      In this case it's the value, so we've bound the value of the input with the variable "title"-->
    <!--      Then you write the model(variable) you want to bind the attribute with, here it's "title"-->
    <!--      After that you have to write also a v-on:(event) or @(event) and set a method for that-->
    <!--      Here this event is input, so that the method will work when you input or delete something in the input line-->
    <!--      Then you have to set a method for that, we will comment that method below in the methods' chapter-->
    <!--      As a result whatever you insert in the input "title" as a value, it will be inserted in the model "title" too-->
    <!--      But we can make it even simpler, so we dont have to write a separate method and do a v-on with the event-->
    <!--      So let's keep this as a comment here-->
    <!--      @input="inputTitle"-->
    <!--      And let's write it another way - @input="title=$event.target.value"-->
    <!--      Here we've said that our variable "title" takes the value of the event's target-->
    <!--      in this case we don't need the method "inputTitle" below, so I'll comment it-->
    <!--      So v-bind: has an easier writing method as well, which is just :-->
    <input
        :value="post.body"
        @input="post.body=$event.target.value"
        class="input"
        type="text"
        placeholder="Content"
    >
<!--    As we've created child components, we need to send the information from child to the parent to be visible in browser-->
<!--    For that we need to create a new model here - posts, which is an object with variables title and body-->
<!--    After that we have to change the v-bind and v-on in the inputs, referring to the post first, then to the title and body-->
<!--    so instead :value="title"/"body" & @input="title/body=$event.target.value" we will write "...post.title"/"post.body"-->
    <button
        class="btn"
    >
      Create
    </button>
    <!--      Here we're operating a new method when clicking the button, so the comments are next to the method-->
    <!--    For now let's cut this from the button - @click="createPost"-->
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