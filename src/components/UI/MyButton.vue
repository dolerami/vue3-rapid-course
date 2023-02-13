<template>
<!--Here we decided to create reusable components for UI interface, in this case for buttons-->
<!--In the other components we will change the tags from buttons to this component name-->
<!--Also we've cut and pasted here the CSS for the button we've written before-->
  <button class="btn">
    <slot>
<!--      Slots are being used to show the writings of the component tags inside the other components-->
<!--      If we don't give a name to the slot, every writing inside it will be without a name, in the default slot-->
    </slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn{
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>