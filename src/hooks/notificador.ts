import { store } from '@/store';
import { NOTIFICAR } from './../store/tipoMutacoes';
import { TipoNotificacao } from './../interfaces/INotificacao';

type Notificador = {
    notificar: (tipo: TipoNotificacao, titulo: string, texto: string) => void
}

export default (): Notificador => {
    const notificar = (tipo: TipoNotificacao, titulo: string, texto: string): void => {
        // queremos ter acesso a store mas fora do componente
       store.commit(NOTIFICAR, {
          titulo,
          texto,
          tipo
        })
      }
      
      return {
        notificar
      }
    }