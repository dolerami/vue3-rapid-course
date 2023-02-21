import axios from "axios";

export const postModule = {
    state: () => ({
        // It's also possible to write the state this way
        posts:[],
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
        // Firstly we copy the needed data from the component
    }),
    getters: {
        sortedPosts(state){
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getters){
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
        // As getters are the same as computed props, we just copied the computed from the component into here
    },
    mutations: {
        setPosts(state, posts){
            state.posts = posts;
        },
        setLoading(state, bool){
            state.isPostLoading = bool;
        },
        setPage(state, page){
            state.page = page;
        },
        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort;
        },
        setTotalPages(state, totalPages){
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery){
            state.searchQuery = searchQuery;
        },
        // Here we set new mutations for the models we have (or states)
    },
    actions: {
        async fetchPosts({state, commit}){
            // Actions in Vuex are getting the object 'context' as an argument (it's just called context)
            // This object includes all the properties - state, getters, commit and dispatch
            // Dispatch is used to call another actions
            try{
                // this.isPostLoading = true;
                // Let's comment this and use this instead:
                commit('setLoading', true)
                // As you understand, we use this to set the state when setLoading is true
                // This is for setting the true state before start of fetching
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params:{
                        _page: state.page,
                        _limit: state.limit,
                        // as you see we've changed the source, the data is coming from the state
                    }
                });
                // this.totalPages = Math.ceil(response.headers.get('x-total-count') / this.limit);
                // Let's change this for the Vuex
                commit('setTotalPages', Math.ceil(response.headers.get('x-total-count') / state.limit));
                // This way we operate the function setTotalPages. Limit we get from the state again
                // this.posts = response.data
                // This is also being changed
                commit('setPosts', response.data)
            } catch (e) {
                alert(`Fetching error -> ${e}`)
            } finally {
                commit('setLoading', false)
                // And here we set the state after the data fetching
            }
        },
        async loadMorePosts({state, commit}){
            try{
                commit('setPage', state.page + 1);
                // this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params:{
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                // this.totalPages = Math.ceil(response.headers.get('x-total-count') / this.limit);
                commit('setTotalPages', Math.ceil(response.headers.get('x-total-count') / state.limit));
                commit('setPosts', [...state.posts, ...response.data]);
            } catch (e) {
                alert(`Fetching error -> ${e}`)
            }
            // We've also created the second fetching function
        }
        // These fetching asynchronous functions are good examples for the actions
        // They send requests inside themselves and change the state somehow
    },
    namespaced: true,
    // This says that the properties inside this module are able to have names
}