import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

export function useExcluirEvento() {
    const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    function excluirEvento(evento: IEvento) {
        setListaEventos((listaAntiga) => listaAntiga.filter((elemento) => elemento.id !== evento.id));
    }

    return {
        excluirEvento
    }
}