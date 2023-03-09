import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "../view/Tarefas.vue";
import Projetos from "../view/Projetos.vue";
import FormularioProjetos from '../view/Projetos/FormularioProjetos.vue';
import Lista from '../view/Projetos/Lista.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/', 
        name: 'Tarefas', 
        component: Tarefas
    }, 
    {
        path: '/projetos', 
        component: Projetos,
        children: [
                {
                    path: '', 
                    name: 'Projetos', 
                    component: Lista
                },
                {
                    path: 'novo', 
                    name: 'Novo Projeto', 
                    component: FormularioProjetos
                },
                {
                    path: ':id', 
                    name: 'Editar projeto', 
                    component: FormularioProjetos,
                    props: true 
                }
        ]
    }
]
 
// history mode: identifica a troca de ancora (modo padrão)
const router = createRouter({
    history: createWebHashHistory(), 
    routes: rotas
})

export default router; 
