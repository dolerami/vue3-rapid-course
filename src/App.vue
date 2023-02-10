<template>
  <div>
    <div>
      <button>Like</button>
      <button>Dislike</button>
    </div>
    <div>Amount of likes: <strong>{{likes}}</strong></div>
    <div>Amount of dislikes: <strong>{{dislikes}}</strong></div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      likes:0,
      dislikes:5
    }
  }
}
</script>

<style>

</style>