import { createApp } from 'vue';
import App from './App';
import components from '@/components/UI';
import router from "@/router/router";
// import VIntersection from "@/directives/VIntersection";
// As we decided to import the file with directives, we comment this line
import directives from "@/directives";
// We need to import the created directives here

const app = createApp(App)

components.forEach(component =>{
    app.component(component.name, component)
})

directives.forEach(directive =>{
    // The same as for the components
    // We use the function forEach to take each directive from the file
    app.directive(directive.name, directive)
    // Here we use app.directive to operate them
    // First argument is the name of each directive, the second is the file
})

// // app.directive('intersection', VIntersection)
// As we import them in file, we don't need this separately
// And to use the directives we need to call the function app.directives
// Inside we give a name and the file

app
    .use(router)
    // This is the way to use other side-module and to register it
    // This way we can use also Bootstrap, Vuex, other plugins, libraries, etc.
    // In Vue 2 it was a little different
    .mount('#app')
