<template>
  <div>
    <h1>Nuevo usuario</h1>

    <span @click="guardar">Ir a inicio</span>

    <router-link to="/" tag="span">Ir a inicio 2</router-link>

    <form @submit.prevent="guardar">

      <button type="submit">Guardar usuario</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    guardar() {
      setTimeout(() => {
        this.$router.push('/');
      }, 1500)
    }
  }
}
</script>

<style>

</style>