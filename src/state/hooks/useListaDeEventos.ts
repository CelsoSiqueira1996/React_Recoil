import { useRecoilValue } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { eventosFiltradosState } from "../seletores";

export function useListaDeEventos() {
    const eventos = useRecoilValue<IEvento[]>(eventosFiltradosState);
    return {
        eventos
    }
}