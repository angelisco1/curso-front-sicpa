<template>
  <div>
    <!-- <p>{{apellido}}, {{nombre}}</p> -->
    <!-- <p>{{usuario.apellido}}, {{usuario.nombre}}</p> -->
    <p>{{nombreCompleto}}</p>
    <router-link :to="rutaInfo">Info</router-link>
    <router-link :to="rutaEditar">Editar</router-link>
  </div>
</template>

<script>
export default {
  // props: ['nombre', 'apellido'],
  props: {
    // nombre: {
    //   type: String,
    //   default: 'Mundo',
    // },
    // apellido: {
    //   type: String,
    //   required: true
    // }
    usuario: {
      type: Object,
      required: true
    }
  },
  computed: {
    nombreCompleto() {
      // return this.usuario.nombre + ' ' + this.usuario.apellido;
      return `${this.usuario.nombre} ${this.usuario.apellido}`
    },
    rutaEditar() {
      return '/usuarios/' + this.usuario.id + '/editar'
    },
    rutaInfo() {
      return '/usuarios/' + this.usuario.id + '/info'
    }
  }
}
</script>

<style>

</style>