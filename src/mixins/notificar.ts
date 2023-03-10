import { TipoNotificacao } from './../interfaces/INotificacao';
import { NOTIFICAR } from './../store/tipoMutacoes';
import { store } from '@/store'; 

// objeto que corresponde com as propriedades que passamos 
// traremos o metodo notificar pra cá 
export const notificacaoMixin = {
    methods: {
            // não vamos mais ter os dados fixos 
    notificar(tipo: TipoNotificacao, titulo: string, texto: string): void{
        // queremos ter acesso a store mas fora do componente
       store.commit(NOTIFICAR, {
          titulo,
          texto,
          tipo
        })
      }
    }
}