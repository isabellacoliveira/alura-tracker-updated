import { INotificacao, TipoNotificacao } from "@/interfaces/INotificacao";
import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERAR_PROJETO, EXCLUIR_PROJETO } from "./tipoMutacoes";

interface Estado {
    projetos: IProjeto[], 
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state: {
        projetos: [], 
        notificacoes: [
            {
                id: 1, 
                texto: 'Uma notificação de sucesso ', 
                titulo: 'sucesso', 
                tipo: TipoNotificacao.SUCESSO
            }, 
            {
                id: 2, 
                texto: 'Uma notificação de atenção ', 
                titulo: 'atenção', 
                tipo: TipoNotificacao.ATENCAO
            }, 
            {
                id: 3, 
                texto: 'Uma notificação de falha ', 
                titulo: 'falha', 
                tipo: TipoNotificacao.FALHA
            }
        ]
    }, 
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toISOString(), 
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        }, 
        [ALTERAR_PROJETO](state, projeto: IProjeto){
            // encontrar o index do projeto 
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            // state projetos na posição que acabamos de achar vai receber 
            state.projetos[index] = projeto
        }, 
        [EXCLUIR_PROJETO](state, id: string){
            state.projetos = state.projetos.filter(proj => proj.id != id)
        }

    }
})

export function useStore(): Store<Estado>{
    return vuexUseStore(key)
}