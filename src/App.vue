<template>
  <div class="app">
    <h1>Page with the posts</h1>
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Create a post
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
<!--      Here we told the component to be two-way bound with the model selectedSort-->
<!--      It's empty, so it will be able to get the value of the selected options-->
<!--      We know, that v-model is doing a two-way binding, so here the value is bound with the model 'selectedSort'-->
<!--      And the default event for the v-model in select is @change, so it's listening to the 'selectedSort'-->
<!--      Here on change the selectedSort takes the event.target.value, which is the value of selected option-->
<!--      And we've also bound 'sortOptions' model to the options props of this component-->
<!--      We are sending this options to the child as an array, where the child takes an option with v-for-->
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        :posts="posts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
<!--    We want this post to be visible only when isPostLoading is false (it is by default)-->
<!--    Sometimes it's confusing, but when we use ! near the model, it means that the boolean value of that model is false-->
    <div v-else>Loading...</div>
<!--    When isPostLoading is true, we will see this div-->
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
      isPostLoading: false,
      // A new model for showing a text while the post isn't loaded
      selectedSort: '',
      sortOptions:[
        // This model is set as an array, which has objects inside
        // This is meant to be a tool to arrange the content of the page by a specific parameter
        {value: 'title', name: 'By name'},
          // As you might guess, the first object is for arranging everything by name, cause it's taking the title of each post
        {value: 'body', name: 'By content'},
          // And here of course everything will be arranged by content
      ]
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
        this.isPostLoading = true;
        // Here we set a new condition, according which during this fetchPosts() method firstly our loading indicator is true
        // It means that we will see the posts list, because above we say for the postsList v-if="!isPostLoading"
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
        // The argument (e) or anything else there is used to let us interact with the error if needed
      } finally {
        // We will always see the result written in 'finally', regardless whether we have an error or not
        this.isPostLoading = false;
        // We say that after everything we want this model to be false
        // It means that we won't see the indicator 'Loading...'
        // But in this case we don't need the setTimeout() function, so I'll remove it
      }
    }
  },
  mounted(){
    // do something
    // Mounted is one and the most used life hook from the life cycles of the components in Vue3
    this.fetchPosts();
    // Here we say that we want this method to operate right when the component is shown on the DOM tree
  },
  watch: {
    // Method watch is operating when the model is being changed and sends a callback function for the changed data
    // This could be possible to do in methods, but it would be a hard and long thing, also maybe problematic
    selectedSort (newValue) {
    //   // Here we're setting 'selectedSort' as a model for this method to watch
    //   // And the argument for this model is the newValue it gets every time being changed
    //   console.log(newValue);
    //   // As the model is changed, this console.log will be operated
      this.posts.sort((post1, post2) => {
        return post1[newValue]?.localeCompare(post2[newValue])
      })
    },
    // dialogVisible(newValue){
    //   // Here it will watch the changes and tell whether the dialog is visible or not
    //   console.log(newValue);
    // }
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

.app__btns{
  margin: 15px 0;
  /*We've cut this margin style from 'my-button' tag and put it here for comfortability*/
  display:flex;
  justify-content: space-between;
}
</style>