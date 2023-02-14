<template>
<!--  As you see, we've created a new component here for the dialog section-->
  <div class="dialog" v-if="show" @click.stop="hideDialog">
<!--    We set a v-if directive for this, so it will be visible if the condition is true-->
<!--    Here the condition is the property show, which is either true or false (false by default), a boolean type-->
<!--    Then we add a new function while listening to the event click-->
<!--    ****** stopPropagation() ********-->
<!--    As you see, we've used a stopPropagation (or just .stop) modifier here-->
<!--    When we have a click event both in the parent and in the child, sometimes they may cause some problems for each other-->
<!--    If we use @click.stop both in the parent and in the child, we're preserving them from any issue-->
<!--    This way we say that the event click and it's result is active only for that particular element, not to the others-->
<!--    So when we click on the child, it will not disappear-->
    <div @click.stop class="dialog__content">
<!--      We need 2 divs for the diversity. First one will be as a transparent background, and this will be the main container-->
      <slot>
<!--        Here we set a slot tag to show everything written in the parent div inside this component tag-->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-dialog',
  props:{
    show:{
      // We've set this props to get the data from the parent component to se whether we have posts there or not
      type: Boolean,
      default: false,
    }
  },
  methods:{
    hideDialog(){
      this.$emit('update:show', false)
      // When this method operates, we emit the false value of the show property to the parent component
      // This will make the dialog window to disappear
      // But as you see from the $emit, we have to use two-way binding in the parent component, which is v-model
    }
  }
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