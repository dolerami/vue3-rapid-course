<template>
  <div class="app">
    <post-form/>
<!--    So after the registration of the components we can type and use them here-->
    <post-list/>
  </div>
<!--In the template section we write the HTML of the project-->
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
// This is important thing for using the components, firstly we have to import them
// in the url if we write @/, which is alias, it means the folder src. which is very comfortable to use
// We could also write ./, but for other cases it would be troublesome
// So we have to import them, but it's not enough to use the components, we have to also register them
// It's being done in the components: section in export default

export default{
  components:{
    PostForm,
    PostList,
  },
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

/*When we write *{}, that means that the styles inside the {} will refer to the whole file*/
/*So it will not work if we have scoped in the style tag*/
/*And in the style section we write the CSS of the project*/
</style>