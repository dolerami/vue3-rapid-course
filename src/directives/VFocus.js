export default{
    // The same as for the VIntersection
    mounted(el){
        // We say that it has to work right after the mount of the component file
        el.focus()
        // And when it works, it should use the function focus() on the preset element
    },
    name: 'focus',
}