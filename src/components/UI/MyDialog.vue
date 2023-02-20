<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";
// Here we import the mixins

export default {
  name: 'my-dialog',
  // // props:{
  // //   show:{
  // //     type: Boolean,
  // //     default: false,
  // //   }
  // // },
  // // methods:{
  // //   hideDialog(){
  // //     this.$emit('update:show', false)
  // //   }
  // // }
  // As you see, we've commented the previous props to use them in mixins
  mixins: [toggleMixin],
  // This is the way to use mixins. It's important to import them above
  // For import we can simply write the name of the mixin and press tab
  // But this won't work if we write it firstly as an array. A thing to keep in mind
  mounted() {
    console.log('dialog mounted')
  }
  // Here is another mounted life hook for this component
  // When you check the console, you'll see that the first mounted to be hooked is the one in the mixins, this is later
}
</script>

<style scoped>
.dialog{
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
}

.dialog__content{
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>