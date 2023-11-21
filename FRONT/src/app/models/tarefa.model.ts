import { Categoria } from "./categoria.model";

export interface Tarefa {
    tarefaId?: number;
    titulo: string;
    descricao: string;
    criadoEm?: string;
    categoria?: Categoria;
    categoriaId: number;
    status: string;
    statusId: number;
}
