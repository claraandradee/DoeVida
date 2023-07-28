import React from "react";
import {Routes, Route} from 'react-router-dom';
import Principal from './components/template/Principal';
import Login from './components/template/Login';
import Register from './components/template/Register';
import OndeDoar from './components/template/OndeDoar';
import Perguntas from './components/template/Perguntas';
import MaisInformacoes from './components/template/Medos';
import Perfil from './components/template/Perfil';
import ForYou from "./components/template/ForYou";

export default function Rotas(){
    return(
        <Routes>
            <Route exact path='/'
            element={
                <>DOE VIDA</>
            }
        />

        <Route path='/principal' element={ <Principal/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/venha-doar' element={<OndeDoar />}/>
        <Route path='/perguntas' element={<Perguntas />}/>
        <Route path='/mais-informacoes' element={<MaisInformacoes />}/>
        <Route path='/perfil' element={<Perfil />}/>
        <Route path='/for-you' element={<ForYou />}/>

        </Routes>
    )
}