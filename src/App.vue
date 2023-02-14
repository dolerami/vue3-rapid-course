<template>
  <div class="app">
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="posts"
        @remove="removePost"
    />
<!--    We are not writing the model and methods in the reusable component, which if done would be a wrong thing-->
<!--    To send the existing models and methods from the parent to the child, we're using props-->
<!--    For that we have to bind our model with the child component by v-bind-->
<!--    After v-bind: we are writing the argument we want to send, and that is usually equal to the model name-->
<!--    Here also we will write v-bind shorter - :-->
<!--    ******* $emit comments ******-->
<!--    Hee firstly we are listening to the event created in the child, doing it by it's name - create-->
<!--    Then we're setting a function to operate while that event, which is createPost here-->
<!--    The rest is being done with this function in the methods section-->
<!--    ************ remove posts **********-->
<!--    So as you see we are listening to the event remove emitted from the child components-->
<!--    And we've set a 'removePost' function for this event, and we operate it in the methods section-->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

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
  methods: {
    createPost(post) {
      // As we have mentioned in the child, we could send more than 1 value to this component
      // In that case they would have their numeric indexes (invisible)
      // And here while setting the arguments we would have to set per argument for each of them
      // These arguments could be anything we want, just we had to call them later in the function's action section
      // But usually we're setting the sent value as an argument
      // Here we're setting a random argument for this function, let it be "post" for the comfortability
      this.posts.push(post);
      // Then we're pushing the event's value (which is the object "post" from the child) into the array "posts"
      // For that we simply have to get the same argument which is already set in the function (here - (post))
    },
    removePost(post){
      // We're taking an argument for this method the post we want to remove
      this.posts = this.posts.filter(p => p.id !==post.id)
      // Here we say, that the array 'posts' we have above needs to be filtered
      // filter() is a JS function which allows us to remove the unnecessary data from the array keeping it the same
      // Here we set p as the argument of the filter function
      // It refers to the each post in the posts list, so we could write anything we want instead of p
      // We say that the array 'posts' has to be filtered, and the p is each of the posts, a single post
      // In the linear function we set a condition, which is the following
      // Each post (p) has its unique id (p.id), which shouldn't be equal (!==) to the id of the removed post (post.id)
      // After this the function removes the post, on which the 'Delete' button has been clicked
      // And then it immidiately sets a new array of elements with unique ids without the removed element
    }
  }
}
</script>

<style>
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

.app{
  padding: 20px;
}
</style>