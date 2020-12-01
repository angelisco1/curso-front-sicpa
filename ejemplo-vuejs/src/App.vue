<template>
  <div>
    <!-- <h1>Hola mundo</h1>
    <app-saludar></app-saludar>
    <app-listausuarios></app-listausuarios>
    <app-contador></app-contador>
    <app-producto @mouseover.native="fn()"></app-producto> -->
    <app-contador></app-contador>
    <router-link to="/">Inicio</router-link>
    <router-link to="/nuevo-usuario">Nuevo usuario</router-link>
    <router-link to="/usuarios">Usuarios</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import Saludar from './components/Saludar';
import ListaUsuarios from './components/ListaUsuarios';
import Contador from './components/Contador';
import Producto from './components/Producto';
import Inicio from './components/Inicio';

export default {
  components: {
    // 'app-saludar': Saludar
    'app-listausuarios': ListaUsuarios,
    'app-contador': Contador,
    'app-producto': Producto,
    'app-inicio': Inicio
  },
  data() {
    return {
      txt: 'Hola mundo'
    }
  },
  methods: {
    fn() {
      console.log(this.txt)
    }
  }
}
</script>

<style>

</style>