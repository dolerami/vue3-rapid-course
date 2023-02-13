import { createApp } from 'vue';
import App from './App';
import components from '@/components/UI';
// As you see we've imported the content of the UI folder as components (Index.js included)

const app = createApp(App)
// Then we've set a new constant variable for the createApp application instance
// This will allow us to work with it later easily

components.forEach(component =>{
    // After the variable we're announcing a new loop with components imported before
    app.component(component.name,component)
    // Here we say that each of these components are the parts of the application instance
})

app.mount('#app')
// As we have a new variable now, we are changing createApp with it here
