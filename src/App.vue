<template>
  <div class="app">
    <post-form/>
<!--    So after the registration of the components we can type and use them here-->
    <post-list :posts="posts"/>
<!--    We are not writing the model and methods in the reusable component, which if done would be a wrong thing-->
<!--    To send the existing models and methods from the parent to the child, we're using props-->
<!--    For that we have to bind our model with the child component by v-bind-->
<!--    After v-bind: we are writing the argument we want to send, and that is usually equal to the model name-->
<!--    Here also we will write v-bind shorter - :-->
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
    }
  },
  // data section is for setting the variables, let's say global variables for that specific component
  methods: {
    createPost() {
    }
  }
}
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