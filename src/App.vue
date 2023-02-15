<template>
  <div class="app">
    <h1>Page with the posts</h1>
    <my-button @click="fetchPosts">
      Get the posts
    </my-button>
<!--    We've cleaned the previous comments as you see for the new branch to be light and clear-->
<!--    Here we create a new button for getting the posts from other source-->
<!--    It operates with the function 'fetchPosts', which will be described in the methods-->
    <my-button
      @click="showDialog"
      style="margin: 15px 0;"
    >
      Create a post
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";
// Here we've imported axios from the folder 'axios', but before that we had to install it in our project
// To install axios we have to open a new terminal and type 'npm i axios', then enter
// It will install the axios library, which is used to make HTTP requests from the browser
// In Vue 3, Axios can be used as a third-party library to make HTTP requests from within Vue components

export default{
  components:{
    PostForm,
    PostList,
  },
  data(){
    return{
      posts:[],
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !==post.id)
    },
    showDialog(){
      this.dialogVisible = true;
    },
    async fetchPosts(){
      // Here we create an async method, which is a little different from the ordinary methods we use
      // An asynchronous function is a function that may take some time to complete, because it performs operations that may involve waiting for a response from a server, reading/writing to a database, or performing other I/O operations.
      // By marking a function as async, you're telling Vue that the function may take some time to complete, and that it should be handled differently than a regular synchronous function.
      try{
        // The try/catch statement in an async function is used to handle errors that may occur during the execution of the asynchronous operation.
        // Since asynchronous operations can take some time to complete, they may encounter errors that are not immediately apparent
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        // We set the variable response, which is equal to the data we get by axios from the web
        // The await statement is used in async functions to make the method operate when all the data is collected
        // as you see, we're collecting the data with axios.get method by adding the url of the data we want to get
        // We wrote '?_limit=10' to limit the data objects up to 10
        // This website is widely used to provide fake data for tests or for analysis
        this.posts = response.data
        // Here we say that our model 'posts' should get the collected data response
      } catch (e) {
        // the catch block catches any errors that occur and logs them to the console
        alert(`Fetching error -> ${e}`)
        // Here we say that in case we have an error let it be alerted by the message in the brackets
        // The argument (e) or anything else there is used to let us interract with the error if needed
      }
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