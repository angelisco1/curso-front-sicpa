<template>
  <div>
    <h2>{{nombre}} - ({{precioConSimbolo}}) - ({{precioConSimboloFn()}})</h2>
    <p>Precio: {{precio | doble | conSimbolo('es')}}</p>
    <p>Precio: {{precio | doble | conSimbolo('us')}}</p>
    <p>{{descripcion}}</p>
    <input type="text" v-model.lazy="nombre">
    <span v-if="msg">Error: {{msg}}</span>
    <input type="number" v-model.number="precio">
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'iPhone X',
      descripcion: 'Un iphone...',
      precio: 1000,
      msg: ''
    }
  },
  computed: {
    precioConSimbolo() {
      console.log('Computed')
      return this.precio + '€';
    }
  },
  watch: {
    nombre: {
      immediate: true,
      handler(newVal, oldVal) {
        setTimeout(() => {
          const productos = ['iphone x', 'oneplus 8', 'samsung s10'];
          if (productos.includes(newVal.toLowerCase())) {
            this.msg = 'El producto ya existe'
          } else {
            this.msg = ''
          }
        }, 1000);
      }
    }
  },
  methods: {
    precioConSimboloFn() {
      console.log('Method')
      return this.precio + '€';
    }
  },
  filters: {
    doble(valor) {
      return valor * 2;
    },
    // conSimbolo(precio, lang) {
    //   let simbolo = '€';
    //   if (lang === 'us') {
    //     simbolo = '$';
    //   }
    //   return precio + simbolo;
    // }
  },
  mounted() {
    // this.msg = 'iPhone x'
  }
}
</script>

<style>

</style>