<template>
  <div>
    <div class="post">
      <div><strong>Title:</strong> A post on JavaScript</div>
      <div><strong>Title:</strong> JavaScript is a universal programming language</div>
    </div>
    <div class="post">
      <div><strong>Title:</strong> A post on JavaScript</div>
      <div><strong>Title:</strong> JavaScript is a universal programming language</div>
    </div>
    <div class="post">
      <div><strong>Title:</strong> A post on JavaScript</div>
      <div><strong>Title:</strong> JavaScript is a universal programming language</div>
    </div>
  </div>
<!--In the template section we write the HTML of the project-->
</template>

<script>
export default{
  data(){
    return{
      likes:0,
      dislikes:0,
    }
    // here we set the variables just by writing their names and then setting the values
  },
  // data section is for setting the variables, let's say global variables for that specific component
  methods:{
    addLike(){
      this.likes += 1;
      // usually the variables from data section are being called by this. method
    },
    addDislike(){
      this.dislikes += 1;
    }
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

.post{
  padding:15px;
  border:2px solid teal;
  margin-top: 15px;
}
/*We can refer to the object by it's class just writing .(object class), also by id - #(object id)*/

/*When we write *{}, that means that the styles inside the {} will refer to the whole file*/
/*So it will not work if we have scoped in the style tag*/
/*And in the style section we write the CSS of the project*/
</style>