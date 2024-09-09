import React, { useState } from 'react';
import style from './Filtro.module.scss';
import { useSetRecoilState } from 'recoil';
import { filtroDeEventos } from '../../state/atom';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';

type StatusEvento = 'ambos' | 'incompletos' | 'completos';

const Filtro: React.FC = () => {
  
  const [data, setData] = useState('')
  const [estado, setEstado] = useState('ambos');
  const setFiltroDeEvento = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);
  
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const filtro: IFiltroDeEventos = {
      status: estado as StatusEvento
    };
    if (!data) {
      filtro.data = null;
    } else {
      filtro.data = new Date(data);
    }
    setFiltroDeEvento(filtro);
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input 
      type="date" 
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)} 
      placeholder="Por data"
      value={data} />

    <select className={style.input} value={estado} onChange={(event) => setEstado(event.target.value)}>
      <option value='ambos'>Todos</option>
      <option value='completos'>Completos</option>
      <option value='incompletos'>Incompletos</option>
    </select>

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro