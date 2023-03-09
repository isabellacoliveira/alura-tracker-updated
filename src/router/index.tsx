import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "../view/Tarefas.vue";

const rotas: RouteRecordRaw[] = [{
    path: '/', 
    name: 'Tarefas', 
    component: Tarefas
}]
 
// history mode: identifica a troca de ancora (modo padrão)
const router = createRouter({
    history: createWebHashHistory(), 
    routes: rotas
})

export default router; 
