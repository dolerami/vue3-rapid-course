import {createStore} from "vuex";
import {postModule} from "@/store/postModule";
// Also inserting the postModule

export default createStore({
    // state: function(){
    //     return{
    //         likes: 2,
    //         // Here we set a model which will be called in a component
    //         isAuth: false,
    //     }
    // },
    // // Here we will write the data which will be in our application
    // getters:{
    //     doubleLikes(state){
    //         // It's like a computed prop, and it takes an argument and returns something
    //         return state.likes * 2;
    //         // We say that it counted the likes in the state by doubling them and return later
    //     }
    // },
    // // These are type of cached computed properties
    // mutations:{
    //     incrementLikes(state){
    //         state.likes += 1
    //     },
    //     decrementLikes(state){
    //         state.likes -= 1
    //     },
    //     // These are functions to directly change the states, so called methods
    // },
    // // We can't change the state directly, we can do it in mutations
    // // Mutations are functions which help us to change the data inside the state
    // actions:{
    //
    // },
    // // These are also functions which use mutations inside
    // // It's not recommended to change the state in actions, but we can add some side effects there
    // // F.e. getting data from the server, changing them in mutations and saving them in the state with actions
    //
    // // These 4 properties are the main props of Vuex
    modules:{
        post: postModule,
        // We're registering our postModule here this way
    },
    // Modules are kinda separated, isolated parts of the state holding getters, mutations and actions inside
    // This is helping to arrange and organise the store, as these modules later are getting united in one global store
})