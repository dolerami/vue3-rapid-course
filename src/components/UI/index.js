// Here as you see we've created a new JS file for our components' global registration
import MyButton from "@/components/UI/MyButton";
// We've imported the components needed to be registered globally (here - MyButton)
import MyInput from "@/components/UI/MyInput";
// Importing MyInput as well

export default [
    MyButton,
    MyInput,
]
// Then we've exported them in an array, where they appear as a separate object
// The next step is the registration of this file & components in the main.js file
// As a result, we don't have to import the UI components and register them in other components, cause they're global