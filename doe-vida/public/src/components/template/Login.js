import './Login.css';
import React, { useState } from 'react';
import imagem from '../assets/imgLogin.png'
import axios from 'axios'

const urlAPI = 'http://localhost:5203/api/Cadastro'

export default function Login(props)
{
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function login(){
        if (email === "" || senha === "") {
            window.alert("Por favor, verifique se os campos foram preenchidos corretamente!")
        }
        else {
            await axios.post(urlAPI + '/login', {
                email, senha
            }).then(resp => {
                sessionStorage.setItem("usuario", JSON.stringify(resp.data))

                window.location.href = "/principal";
            }).catch(err => {
                window.alert("Usuário não autenticado!");
            })
        }
    }
    
    function redirect(){
        window.location.href = "http://localhost:3000/register"
    }

    return(
        <div className='total'>
            <div className='parteDeCima'>

            </div>
            <div className='base'>
                <div className='criar'>
                    <h1 className='tituloCriar'>Entre na sua conta</h1>
                    <h2>E salve uma vida</h2>
                    <img src={ imagem } alt="Imagem" className='imagemLogin'></img>
                    <button className='btnEntrar' onClick={redirect}>REGISTER</button> 

                    <div className='logar'>
                        <h1 className='tituloLogin'>LOG IN</h1>
                        <input value={email} onChange={(evento) => setEmail(evento.target.value)} type='text' id='dadosEmail' name='dadosEmail' placeholder='Digite seu email'></input>
                        <input value={senha} onChange={(evento) => setSenha(evento.target.value)} type='password' id='dadosSenha' name='dadosSenha' placeholder='Digite sua senha'></input>
                        <button className='btnCadastrar' onClick={login}>ENTRE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}