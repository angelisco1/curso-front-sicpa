import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import NuevoUsuario from './components/NuevoUsuario';
import ListaUsuarios from './components/ListaUsuarios';
import InfoUsuario from './components/InfoUsuario';
import EditarUsuario from './components/EditarUsuario';

Vue.use(Router);


const rutasUsuarios = [
  { path: ':id/info', component: InfoUsuario, props: true },
  { path: ':id/editar', component: EditarUsuario, props: true },
]

const router = new Router({
  routes: [
    { path: '/', component: Inicio },
    { path: '/nuevo-usuario', component: NuevoUsuario },
    { path: '/usuarios', component: ListaUsuarios, children: rutasUsuarios },
  ],
  mode: 'history'
})

export default router;