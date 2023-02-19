// As you see, here we've created a new JS file in a new directory, which will be used for routing purposes
// It means that here we will write the paths and their operation mechanisms for the pages of our project

import Main from "@/pages/Main";
// Here are the components and functions imported in this file
import {createRouter, createWebHistory} from "vue-router";
// And here we can see the import of the factory functions from one source
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostidPage from "@/pages/PostidPage";



// As you see, there's  a special function for creating a router - same as createApp
const routes = [
    // The first step is to create this array with objects as elements
    // This objects are for per page & include their paths (name on the address line) and their component files
    {
        path: '/',
        // It's the main page, so it will be without a special name in the path, just /
        component: Main
        // And here as you see we've attached the component, which was automatically imported above
    },
    {
        path: '/posts',
        component: PostPage
        // As you see, here we have a new route for this component
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        // Here we're being dynamically navigated to the specific ID we type or click on the post
        component: PostidPage
    },
]

const router = createRouter({
    // The createRouter function is used to create a router instance for our application
    // It requires a routes and a history object to be passed as an argument
    routes,
    // The first parameter to give is the object we've created before to give the routes to this object
    history: createWebHistory(process.env.BASE_URL)
    // The history object is used to manage the browser history
    // It allows the router to handle browser navigation events (such as clicking the back button)
    // This is how it can update the application's UI
    // The createWebHistory function is a factory function provided by Vue Router
    // It returns a history object configured for use with modern browsers that support the HTML5 history API
    // It takes a single argument, the base URL of our application, which is typically set to 'process.env.BASE_URL'
    // This allows us to use clean URLs in our application (e.g., /about instead of /#/about)
    // It also ensures that the router works correctly when the application is deployed to different environments
})

export default router;
// This is how we export the router and are able to use it in other places

// Static navigation refers to the process of defining routes in advance
// It's having them be fixed throughout the application's lifecycle
// So here as you see we're creating static navigations
// The routes are defined at build time and do not change during runtime
// Static navigation is often used for pages that do not require any data fetching or that do not depend on user input