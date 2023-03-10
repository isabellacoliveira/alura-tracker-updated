// tipo especifico: vamos usar enum 
export enum TipoNotificacao {
    SUCESSO, 
    FALHA, 
    ATENCAO
}

export interface INotificacao{
    titulo: string
    texto: string 
    tipo: TipoNotificacao
    id: number
}