import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AcessorioView from "../views/AcessorioView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import CorView from "../views/CorView.vue";
import MarcaView from "../views/MarcaView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/acessorios",
      name: "acessorios",
      component: AcessorioView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
    {
      path: "/cores",
      name: "cores",
      component: CorView,
    },{
      path: "/marcas",
      name: "marcas",
      component: MarcaView,
    }
  ],
});

export default router;
