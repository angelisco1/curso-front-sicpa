<template>
  <div>
    <button type="button" v-on:click="decrementar">-</button>
    <span>Cuenta: {{cuenta}}</span>
    <button type="button" @click="incrementar">+</button>
    <input type="number" :value="cuenta" @input="cambiarCuenta">
    <input type="number" v-model="cuenta">
    <hr>
    <p v-if="cuenta % 2 == 0">Es par</p>
    <p v-else>Es impar</p>

    <p v-show="cuenta % 2 == 0">Es par</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cuenta: 0
    }
  },
  methods: {
    decrementar() {
      this.cuenta--;
    },
    incrementar() {
      this.cuenta++;
    },
    cambiarCuenta(event) {
      // console.log(event)
      this.cuenta = event.target.value;
    }
  }
}
</script>

<style>

</style>