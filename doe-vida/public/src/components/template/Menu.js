import './Menu.css';
import React from 'react';
import {Link} from 'react-router-dom';

export default function Menu(props) {
    return(
        <nav className='menu'>
            <Link to="/register" className='linkzinho'>
                REGISTER
            </Link>

            <Link to="/login" className='linkzinho'>
                LOGIN
            </Link>

            <Link to="/principal" className='linkzinho'>
                HOME
            </Link>

            <Link to="/venha-doar" className='linkzinho'>
                VENHA DOAR
            </Link>

            <Link to="/perguntas" className='linkzinho'>
                PERGUNTAS 
            </Link>

            <Link to="/for-you" className='linkzinho'>
                FOR YOU
            </Link>

            <Link to="/mais-informacoes" className='linkzinho'>
                INFORMAÇÕES
            </Link>

            <Link to="/perfil" className='linkzinho'>
                PERFIL
            </Link>
        </nav>
    )
}