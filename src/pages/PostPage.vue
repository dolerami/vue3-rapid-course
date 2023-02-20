<template>
<!--  Previous comments were deleted for the comfortability-->
<!--  As you see, we've cut out the content from the App.vue and brought them here in this new component-->
  <div>
<!--    Also we've left the class 'app' there with it's styles-->
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
<!--    <div ref="observer" class="observer"></div>-->
    <div v-intersection="loadMorePosts" class="observer"></div>
<!--    We have a new directive, so we need to use that instead of the ref observer-->
<!--    Usually we give a function to the directive to operate-->
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
    // // const options = {
    // //   rootMargin: '0px',
    // //   threshold: 1.0
    // // }
    // // const callback = (entries, observer) => {
    // //   if(entries[0].isIntersecting && this.page < this.totalPages){
    // //     this.loadMorePosts()
    // //   }
    // // };
    // // const observer = new IntersectionObserver(callback, options);
    // // observer.observe(this.$refs.observer);
    // As we have created a separate directive for intersection, we are using these functions there
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