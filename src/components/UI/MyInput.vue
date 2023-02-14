<template>
<!--Another UI component for inputs this time-->
  <input
      :value="modelValue"
      @input="updateInput"
      class="input"
      type="text"
  >
<!--  Here as you can see we are binding the value of the input with the props modelValue-->
<!--  In the props and the PostForm there are some comments explaining it-->
<!--  After that we are listening to the event input and setting a function to operate-->
</template>

<script>
export default {
  name: 'my-input',
  props:{
    modelValue:[String, Number]
    // As you know, v-model has the attribute modelValue by default, which is the same value
    // So if we want to use v-model in the parent purely and without additional attribute, we must use this here in props
    // It means that the child is taking modelValue and setting some properties to that

    // ***************** An example *****************
    // Let's pretend we are taking the attribute value in the props, but we're setting the name of it as value
    // So it will be like this - props:{value:(something)}
    // It will still work, but why?
    // Because the modelValue here is the same value, just in Vue3 it has a new name
    // So in this case we're doing the same thing but just changing the default name from modelValue to value
    // In this case firstly we should bind the value of the input with the value of props - :value="value"
    // Then in the $emit we should set the name as 'update:value', and the data will be event.target.value
    // We did it with the name because v-model uses v-bind and v-on
    // And in the Vue3 during v-on of the v-model it listens to the event update (v-on:update/@update)
    // So we have to set the attribute we want to update with this event, which is value in this case
    // If we decide to use v-bind and v-on separately instead of v-model, the example is below
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
      // Here in the function we are using $emit to send a new event to the parent
      // We set the name of the event update:modelValue, because there is such function in Vue3
      // The function or event calls onUpdate:
      // This function updates the value of the tag carrying v-model with a new value
      // So in the parent we would listen to this event to update the value
      // But as modelValue is a default attribute to v-model in Vue3, update event is also a default thing here for v-model
      // And as an update we're sending the new value by event.target.value

      //****************** An example *****************

      // So lets pretend we're using v-bind and v-on in the parent component instead of v-model
      //In this case here in the child we would $emit with the name as 'modelValue'
      //In the parent we would write v-bind:modelValue="modelValue"
      //And for v-on it would be v-on:update="modelValue = $event.target.value"
      // It seems a little complicated, but will work
    }
  }
}
</script>

<style scoped>
.input{
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
/*As you see, we've cut and pasted the input CSS here from PostForm*/
</style>