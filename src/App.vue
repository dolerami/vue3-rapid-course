<template>
  <div>
    <div>
      <button @click="addLike">Like</button>
<!--      V-on is a directive and event listener, so after this you have to write a certain function to operate-->
<!--      If it's v-on:click, that means that the function will work when you click that object-->
<!--      There is a simplified method for writing v-on:, which is just @-->
      <button @click="addDislike">Dislike</button>
    </div>
    <div>Amount of likes: <strong>{{likes}}</strong></div>
<!--    It's possible to get the variables from the data section by typing them in double {}s, like this {{likes}}-->
    <div>Amount of dislikes: <strong>{{dislikes}}</strong></div>
  </div>
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
</script>

<style>

</style>