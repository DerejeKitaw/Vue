<template>
<div>
  <h1>Freinds</h1>
  {{id}}
  {{age}}
  {{weight}}
  </div>
</template>

<script>
export default {
props:[
  'id',
  'age',
  'weight'
]
}
</script>
<!-- scopped limit the style from being global -->
<style scoped>
h1 {
    color: red;
}
</style>
