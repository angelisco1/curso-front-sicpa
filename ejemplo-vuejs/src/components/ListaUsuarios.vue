<template>
  <div>
    <!-- <input type="text" :placeholder="usuarios[0].nombre">
    <textarea v-bind:rows="numRows">
    </textarea> -->
    <!-- <app-usuario
      :nombre="usuarios[0].nombre"
      :apellido="usuarios[0].apellido"
    ></app-usuario> -->
    <app-usuario
      v-for="user in usuarios"
      :usuario="user"
      :key="user.id"
    ></app-usuario>
    <!-- <app-usuario></app-usuario> -->
    <input type="text" v-model="usuarios[0].nombre">
  </div>
</template>

<script>
import Usuario from './Usuario';

export default {
  components: {
    'app-usuario': Usuario
  },
  data() {
    return {
      numRows: 8,
      usuarios: [
        {id: 1, nombre: 'Charly', apellido: 'Falco'},
        {id: 2, nombre: 'Mike', apellido: 'Kozinski'},
      ]
    }
  }
}
</script>

<style>

</style>