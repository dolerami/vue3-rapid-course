<template>
<!--Another UI component for inputs this time-->
  <input
      class="input"
      type="text"
  >
</template>

<script>
export default {
  name: 'my-input',
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