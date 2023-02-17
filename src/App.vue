<template>
  <div class="app">
    <h1>Page with the posts</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Search..."
    />
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
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
<!--    We want this post to be visible only when isPostLoading is false (it is by default)-->
<!--    Sometimes it's confusing, but when we use ! near the model, it means that the boolean value of that model is false-->
<!--    ************ computed **************-->
<!--    As you see, we've changed the binding model of the posts prop from 'posts' to 'sortedPosts' for the computed property-->
<!--    It means that the array 'posts' will get the computed value from the computed property by the prop 'sortedPosts'-->
<!--    The rest will be explained in the computed section-->
<!--    **** filtration and search with computed **********-->
<!--    We change the bound computed property of the 'posts' props one more time, setting 'sortedAndSearchedPosts'-->
<!--    This property includes also 'sortedPosts' property, so don't worry about that-->
<!--    This will help us also to operate the searching line on our page-->
    <div v-else>Loading...</div>
<!--    When isPostLoading is true, we will see this div-->
    <div class="page__wrapper">
<!--      We've created a separate div as a container or root div for the page numbers section below the webpage-->
      <div
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          class="page"
          :class="{
            'current-page': page === pageNumber
          }"
          @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
<!--      And as you see here is the page numbers div itself. We use 'v-for' here to show each page in the total amount-->
<!--      We set the name of each page by the argument 'pageNumber' not to mix it with the model 'page'-->
<!--      So after 'v-for' it's important to set the key, and we are setting 'pageNumber' as the key cause it's unique-->
<!--      Also we set the 'pageNumber' as the content of the div for the algorithm to understand and show the current page-->
<!--      ****** Dynamic binding of styles *********-->
<!--      We have set a class in the styles for the current page, and there's a method in Vue3 to bind that class to the tag-->
<!--      This is a dynamic styles binding method in Vue3. Here we've set an object to operate for binding-->
<!--      The first part is the key, here it's the class name, so this binding will refer to that particular class-->
<!--      Then it comes the condition. When the model 'page' is equal to the argument 'pageNumber', the class will operate-->
<!--      It's also possible to do a dynamic binding for the styles, here's an example-->
<!--      :style="{ background: backgroundColor }", where 'backgroundColor' is a model with a value, which can be changed-->
<!--      ********** Dynamic changes of the pages ***************-->
<!--      For this firstly we need to listen to the event 'click', which will operate a function changing the page-->
<!--      As an argument, we're setting the pageNumber for that function-->
    </div>
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
      searchQuery: '',
      // This model is empty to be filled with the inserted value on the input line
      page: 1,
      // This model is for starting page to be set as the page 1 by default
      limit: 10,
      // Here we are setting a limit to the posts per page
      totalPages: 0,
      // This will be a model for the total amount of the web pages in our website, later the number will be increased
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
    changePage(pageNumber){
      this.page = pageNumber;
      // Here we say, that when clicked the model page gets the pageNumber as a value
      // But this isn't enough for changing the page, because we also need to operate the method 'fetchPosts()'
      // We can do it very simple way just here - this.fetchPosts()
      // But this way the pages are getting loaded slow, let's do it in the watch
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          // *********** Pagination ****************
          // As you see, we've deleted the ending query parameter '?_limit=10' from the website url
          // It's because we're going to add more query parameters, so it's more comfortable to do it this way:
          params:{
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers.get('x-total-count') / this.limit);
        // Here we say that the total number of the pages are being counted following way
        // We're taking the headers section from the response and getting the 'x-total-count' value by the method 'get'
        // It's important, because the latest version of Axios requires to use the method in the end, otherwise it doesn't work
        // That is the total number of the posts per page on the original source
        // Then we're dividing that number on the limit number we've set, thus saying that one page should include 10 posts
        // Then we're taking this in the Math.ceil function to make it a whole number by rounding that up
        // If there are f.e. 101 posts, which is divided on 10 (limit), it will be 11 in this case
        // For pagination this is important because the last post will be on another page alone
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
  computed:{
    // The property 'computed' here can have the same effect as the property watch, but it works a little different
    // The main difference is the result, because computed is returning us a value, which we can use later, and watch doesn't
    // There are other differences too, but this is the most important
    // As we want to use the value, we will use computed instead of watch
    //   You may have a question like why do we need to use computed instead of methods?
    //   There are some differences between these 2, but the main thing is the following
    //   Methods work when we do certain action and invoke them, such as clicking a button
    //   While computed works when the dependencies are changed, like the models attached to them
    sortedPosts(){
      // Here we've created a function, which is kinda local as you see, like we don't call it in the template, only here
      // And this function will operate when the value of the model 'selectedSort' is changed
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
      // Here we tell to return us a sorted version of the array 'posts', but we wrote it a little different
      // [...this.posts] - this is called a spread operator, which is creating a virtual copy of our array
      // This virtual copy gets all the parameters of the original, and later all the changes refer only to that copy
      // This way we avoid from the possible problems occurring while changing the original array
      // The next steps are the same as explained for the watch property
      // The difference is that we are doing a straight sorting with an arrow function
      // As we don't pass an argument to the sortedPosts(), we're setting 'this.selectedSort' as a parameter for the arguments
    },
    // As a result, it calculates the changes and returns us the new value based on these changes
    // It saves these changes in a cache, and every time it is based on the latest change it has done
    sortedAndSearchedPosts(){
      // We create another computed property, which includes the first one too, it is based on that one let's say
      // This will help us to bind this property to the component using the first one at the same time
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      // Here we return the value of the sorting property (sortedPosts) and doing some filtration after
      // As an argument we have 'post', which is a boolean type
      // It's true if the title of the post includes the inserted value on the search input (searchQuery), very ease
      // We've added 'toLowerCase()' function to those properties to avoid errors occurred by typing on different letters
    }
  },
  watch: {
    // Method watch is operating when the model is being changed and sends a callback function for the changed data
    // This could be possible to do in methods, but it would be a hard and long thing, also maybe problematic
    // selectedSort (newValue) {
    //   // Here we're setting 'selectedSort' as a model for this method to watch
    //   // And the argument for this model is the newValue it gets every time being changed
    //   console.log(newValue);
    //   // As the model is changed, this console.log will be operated
    //   this.posts.sort((post1, post2) => {
    //     // as you see, we're using a sorting function for this array to arrange the objects by name or by body
    //     // As an argument, we're taking 2 names, let's call them post1 and post2
    //     // These arguments are referring to 2 random objects in the array, which will be compared to each other
    //     return post1[newValue]?.localeCompare(post2[newValue])
    //     // Then as you see we return the result, which is post1 compared to post2 with the function 'localeCompare'
    //     // As parameters they take either the argument of the main function in the watch (newValue), or the function itself
    //     // So it could be post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    //     And '?.' here is the optional chaining operator
    //     It is to safely access the property value, in case the selectedSort property is not defined
    //     As a result, it takes positive, negative or a zero. When zero, nothing is changed
    //     When positive, 'post1' comes after 'post2', and when negative, 'post1' will be before 'post2'. Simple
  //     })
  //   },
  //   // dialogVisible(newValue){
  //   //   // Here it will watch the changes and tell whether the dialog is visible or not
  //   //   console.log(newValue);
  //   // }
    page(){
      // We're currently watching to the model 'page', so if it changes, the watch will operate
      this.fetchPosts();
      // So as you understood, when the 'page' changes, it will operate the function this.fetchPosts()
      // This is a much faster way to load the pages
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

.app__btns{
  margin: 15px 0;
  /*We've cut this margin style from 'my-button' tag and put it here for comfortability*/
  display:flex;
  justify-content: space-between;
}
.page__wrapper{
  display:flex;
  margin-top: 15px;
}
.page{
  border: 1px solid black;
  padding: 10px;
}
.current-page{
  border: 2px solid teal;
}
/*This class was made to be bound to the tag later by 'v-bind'*/
</style>