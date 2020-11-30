<template>
  <p>Hola {{nombre}} {{apellido}}</p>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'Charly',
      apellido: 'Falco'
    }
  },
  beforeCreate() {
    console.log(this.nombre)
  },
  created() {
    // setInterval(() => {
    //   console.log('1111');
    // }, 1000)
    console.log('Se ha creado');
  }
}
</script>

<style>

</style>