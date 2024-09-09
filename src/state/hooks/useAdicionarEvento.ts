import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";

export function useAdicionarEvento() {
    const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    function adicionarEvento(evento: IEvento) {
        const hoje = new Date();
        if(evento.inicio < hoje) {
            throw new Error('Eventos não podem ser cadastrados com data menor do que a atual!');
        }
        evento.id = obterId();
        setListaEventos((listaAntiga) => [...listaAntiga, evento]);
    }
    return {
        adicionarEvento
    }
}