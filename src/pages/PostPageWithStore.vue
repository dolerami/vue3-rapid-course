<template>
  <div>
<!--    <h1>{{ $store.state.likes }}</h1>-->
<!--&lt;!&ndash;    This is how we are connecting the elements with the store&ndash;&gt;-->
<!--&lt;!&ndash;    It is available inside every part of our application cause it's a global store&ndash;&gt;-->
    <h1>{{ $store.getters.doubleLikes }}</h1>
<!--    This is the way to get the function from getters-->
<!--    We don't call the function as a function with (), we call it as an object, because it returns some data-->
    <div>
<!--      Here we create some buttons for playing with the likes-->
      <my-button @click="$store.commit('incrementLikes')">Like</my-button>
      <my-button @click="$store.commit('decrementLikes')">Dislike</my-button>
<!--      We listen to the event click and set the function $store.commit to call the function from the mutations-->
<!--      Then we write the name of the mutation inside the braces-->
<!--      In Vue 2 it will do autocomplete and give an error-->
    </div>
    <h1>Page with the posts</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Search..."
        v-focus
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
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

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
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions:[
        {value: 'title', name: 'By name'},
        {value: 'body', name: 'By content'},
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
      try{
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params:{
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers.get('x-total-count') / this.limit);
        this.posts = response.data
      } catch (e) {
        alert(`Fetching error -> ${e}`)
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts(){
      try{
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params:{
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers.get('x-total-count') / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert(`Fetching error -> ${e}`)
      }
    }
  },
  mounted(){
    this.fetchPosts();
  },
  computed:{
    sortedPosts(){
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts(){
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
  }
}
</script>

<style>
.app__btns{
  margin: 15px 0;
  display:flex;
  justify-content: space-between;
}
.observer{
  height: 30px;
  background: green;
}
</style>