// As you see we've created a JS file to create there owr own user directive different from the existing ones

export default {
    mounted(el, binding){
        // This code exports an object that defines a directive
        const options = {
            // This code defines an object that specifies the options for the IntersectionObserver API
              rootMargin: '0px',
            // The rootMargin option specifies the margin around the root element
              threshold: 1.0
            // The threshold option specifies the percentage of the element's visibility
            // That percentage needs to change before the callback is triggered
        }
        const callback = (entries, observer) => {
            // This code defines a function that is called whenever the intersection of the observed element changes
          // if(entries[0].isIntersecting && this.page < this.totalPages){
          if(entries[0].isIntersecting){
          // The function checks if the first entry in the entries array is intersecting with the root element
          // If so, it calls the function that is passed as the value of the directive binding
          //   As you see, we've commented the previous one cause we won't use 'this.page < this.totalPages'
          //     Just we can't use them now here
            // this.loadMorePosts()
              binding.value()
              // Here we're calling the value of the elements binding
              // In this case this is a function
          }
        };
        const observer = new IntersectionObserver(callback, options);
        // This code creates a new IntersectionObserver object with the specified options and callback function
        // observer.observe(this.$refs.observer);
        observer.observe(el);
        // Then it observes the element that the directive is bound to
        // Here it's not the reference but the element
    }
}