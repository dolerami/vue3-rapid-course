<template>
<!--  As you see, we've created a new component for selecting options-->
  <select
      :value="modelValue"
      @change="changeOption"
  >
<!--    Here we've done a two-way binding for this select, and the attribute is modelValue to bind-->
<!--    As it's a select, here the event we want to listen isn't input, it's change-->
    <option value="" disabled>Choose from the list</option>
    <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
    >
      {{ option.name }}
    </option>
<!--    Here we've created a loop & took per option from the options array-->
<!--    Then we've bound the option value with the similar props - option.value, it's set in the parent-->
<!--    Also we've bound the key with option.value again, cause it supposed to be unique-->
<!--    Then we've set an interpolation or "mustache" syntax for the option name, it's also set in the parent-->
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props:{
    modelValue:{
      // And of course we're inheriting the props from the parent, which is modelValue attribute
      type: String,
    },
    options:{
      // We also want to take the options, that's why we need this props
      type: Array,
      default: () => [],
      // Here we say that this array should be empty by default
      // This is an arrow function to define the default parameter for that array
    }
  },
  methods:{
    changeOption(event){
      this.$emit('update:modelValue', event.target.value);
      // And this is for emitting the updated values to the parent
    }
  }
}
</script>

<style scoped>

</style>