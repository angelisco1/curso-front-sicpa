<template>
  <div>
    <h1>Hola mundo</h1>
    <app-saludar></app-saludar>
    <app-listausuarios></app-listausuarios>
    <app-contador></app-contador>
  </div>
</template>

<script>
// import Saludar from './components/Saludar';
import ListaUsuarios from './components/ListaUsuarios';
import Contador from './components/Contador';

export default {
  components: {
    // 'app-saludar': Saludar
    'app-listausuarios': ListaUsuarios,
    'app-contador': Contador
  }
}
</script>

<style>

</style>