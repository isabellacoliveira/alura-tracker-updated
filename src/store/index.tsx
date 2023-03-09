import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store } from "vuex";

// interface que vai garantir a lista de projetos 
interface Estado {
    projetos: IProjeto[]
}

// vai ser uma chave para a store que vai ser do tipo estado 
// symbol vai configurar uma chave de acesso 
export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    // aqui passamos o estado inicial (padrão)
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                nome: 'Typescript'
            }, 
            {
                id: new Date().toISOString(),
                nome: 'Vue'
            }, 
            {
                id: new Date().toISOString(),
                nome: 'Vuex'
            }
        ]
    }
})