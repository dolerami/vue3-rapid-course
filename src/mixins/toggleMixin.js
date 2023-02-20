// Mixins are files that include all the data and properties we want to reuse in different components

export default {
    props:{
        show:{
            type: Boolean,
            default: false,
        }
    },
    methods:{
        hideDialog(){
            this.$emit('update:show', false)
        }
    },
    // As you see, we've copied here the props we wanted to reuse from the component MyDialog
    // So when we call this mixin there, it will work without any issue
    mounted(){
        console.log('mixin mounted');
    },
    // Also we've added a mounted life hook into this mixin to check one thing
    // ...
}