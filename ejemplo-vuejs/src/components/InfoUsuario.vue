<template>
  <div>
    <h2>Info usuario {{id}}</h2>
  </div>
</template>

<script>
export default {
  props: ['id'],
  watch: {
    '$route'(newVal, oldVal){
      const idUsuario = newVal.params.id
      fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}`)
        .then(resp => {
          return resp.json()
        })
        .then(datos => {
          console.log(datos);
        })
    }
  }
}
</script>

<style>

</style>