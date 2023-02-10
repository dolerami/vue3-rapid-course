<template>
  <div class="app">
    <form>
      <h4>The creation of a post</h4>
      <input class="input" type="text" placeholder="Title">
      <input class="input" type="text" placeholder="Content">
      <button class="btn">Create</button>
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
      ]
      // You can create a variable and set it as an array as well and make it's content objects
    }
    // here we set the variables just by writing their names and then setting the values
  },
  // data section is for setting the variables, let's say global variables for that specific component
  methods:{

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