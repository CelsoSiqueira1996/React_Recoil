import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

export function useAtualizarEvento() {

    const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    function atualizarEvento(eventoAtualizado: IEvento) {
        setListaEventos((listaAntiga) => listaAntiga.map((elemento) => {
            return (elemento.id !== eventoAtualizado.id)? elemento : eventoAtualizado
        }))
    }

    return {
        atualizarEvento
    };
}