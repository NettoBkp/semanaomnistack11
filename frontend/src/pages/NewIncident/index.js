import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'

import './styles.css';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };
        try {
            await api.post('incidents', data,{
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch (err){
            alert ('Erro ao cadastrar caso, tente novamente.');
        }
    }


    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o novo caso, entre na plataforma e ajude a contribuir</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={18} color="#E02041" />
                    Voltar para profile
                </Link>
            </section>
            <form >
                <input placeholder="Título do caso" 
                required=''
                value={title}
                onChange={e => setTitle(e.target.value)}                
                />
                <textarea placeholder="Descrição" 
                required=""
                value={description}
                onChange={e => setDescription(e.target.value)}                
                />
                <div className="input-group">
                <input placeholder="Valor em Reais" 
                required=""
                value={value}
                onChange={e => setValue(e.target.value)}                    
                />
                    
                </div>
                <button onClick={handleNewIncident} className="button" type="submit"> Cadastrar </button>
            </form>
        </div>
    </div>
    )

}