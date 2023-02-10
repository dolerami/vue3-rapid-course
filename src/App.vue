<template>
  <div class="app">
    <form @submit.prevent>
<!--      So to make the submit work properly, we're adding a modification to the form tag-->
<!--      It will be v-on:submit.prevent or just @submit.prevent-->
<!--      In this case it will prevent the browser from being refreshed-->
<!--      So we will be able to add a new object, and it will be visible and not get lost by refreshing the browser-->
      <h4>The creation of a post</h4>
      <input
          v-bind:value="title"
          @input="title=$event.target.value"
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
      <input
          v-bind:value="body"
          @input="body=$event.target.value"
          class="input"
          type="text"
          placeholder="Content"
      >
      <button
          class="btn"
          @click="createPost"
      >
        Create
      </button>
<!--      Here we're operating a new method when clicking the button, so the comments are next to the method-->
    </form>
    <div class="post" v-for="post in posts">
<!--    We have a directive v-for, which is the same as "foreach" in JS, so it's making a loop and checking each element inside-->
<!--    Usually we're setting the arrays' and objects' names in plural-->
<!--    So when we write v-for, we are referring to each element by writing it's name in singular-->
      <div><strong>Title:</strong>{{post.title}}</div>
      <div><strong>Content:</strong>{{post.body}}</div>
<!--      So as you see here we wrote just 1 HTML tag per element, but we have 4 sections in our browser-->
<!--      That's how it's working with arrays and objects-->
    </div>
  </div>
<!--In the template section we write the HTML of the project-->
</template>

<script>
export default{
  data(){
    return{
      posts:[
        {
          id:1,
          title:'JavaScript',
          body:'The content of the post',
        },
        // So inside the objects we can refer to the object elements by their names
        {
          id:2,
          title:'JavaScript 2',
          body:'The content of the post 2',
        },
        {
          id:3,
          title:'JavaScript 3',
          body:'The content of the post 3',
        },
        {
          id:4,
          title:'JavaScript 4',
          body:'The content of the post 4',
        },
      ],
      // You can create a variable and set it as an array as well and make it's content objects
      title:'',
      body:'',
    }
    // here we set the variables just by writing their names and then setting the values
  },
  // data section is for setting the variables, let's say global variables for that specific component
  methods:{
    createPost(){
      const newPost={
        // Here we're setting a new local variable while clicking the button, which is an object itself
        // So this object has all the necessary fields as the objects above have
        id:Date.now(),
        // As an id we will take the current date with this method
        title:this.title,
        body:this.body,
        // And we're getting the values of our title and body models to set them in the new object after clicking the button
      }
      this.posts.push(newPost);
      // So after setting the variable object we're pushing it as a new object next to the others
      // But this method won't work now as we have to learn something else for it
      // So this is a usual thing for the browser as a reaction to the actions of submit
      // If we need to cancel the by default actions of the browser in the form, we have to call the method prevent default
      // We could do that by writing an argument "event" in the method
      // And later adding event.stopPropagation() or/and event.preventDefault()
      // But we're in Vue 3, so we can do it with modifications, which is easier
      this.title = '';
      this.body = '';
      // This is important to have clean inputs after the object creation
    },
    // inputTitle(event){
    //   // we are sending the event as an argument for this method
    //   // this is important, because else it will not understand what event we're talking about
    //   this.title=event.target.value;
    //   // here we've said that the model title is equal to the input event target's value
    //   // to understand what is that event target value, we can do console.log(event); and look in the details
    // },
  }
  // methods section is where you usually set your functions to operate them later
}
// When you create a component, you have to export it and everything in it as an object, that's why it's being written in {}
// In the script section we write the model and methods of the project
</script>

<style>
/*If we write <style scoped>, that means that the CSS will be applicable only for that particular file*/
/*As soon as we are in the main component file, we don't have to use the scoped version for style*/
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  /*When box-sizing is border-box, it makes the element size to remain the same when gaining some padding*/
  /*In this case the content of the element will get smaller*/
}

.app{
  padding: 20px;
}

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

.post{
  padding:15px;
  border:2px solid teal;
  margin-top: 15px;
}
/*We can refer to the object by it's class just writing .(object class), also by id - #(object id)*/

.input{
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
/*When we write *{}, that means that the styles inside the {} will refer to the whole file*/
/*So it will not work if we have scoped in the style tag*/
/*And in the style section we write the CSS of the project*/
</style>