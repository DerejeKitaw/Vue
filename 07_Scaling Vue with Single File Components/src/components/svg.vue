<template>
  <div class="hello">
    <svg width="100" height="100">
      <circle :cx="cx" :cy="cy" r="40" :stroke="color" stroke-width="4" fill="yellow" />
    </svg>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cx: "50",
      cy: "50",
      color:"red"
    }
  },
}
</script>

<style>

</style>
