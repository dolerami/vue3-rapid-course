import { createApp } from 'vue';
import App from './App';
import components from '@/components/UI';
import router from "@/router/router";
import VIntersection from "@/directives/VIntersection";
// We need to import the created directives here

const app = createApp(App)

components.forEach(component =>{
    app.component(component.name,component)
})

app.directive('intersection', VIntersection)
// And to use the directives we need to call the function app.directives
// Inside we give a name and the file

app
    .use(router)
    // This is the way to use other side-module and to register it
    // This way we can use also Bootstrap, Vuex, other plugins, libraries, etc.
    // In Vue 2 it was a little different
    .mount('#app')
