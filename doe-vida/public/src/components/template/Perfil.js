import './Perfil.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const urlAPI = 'http://localhost:5203/api/Cadastro'

export default function Perfil(props)
{
    const [usuario, setUsuario] = useState({});
    const [estaEditando, setEstaEditando] = useState(false);

    // igual o componentDidMount - ou seja - evento que acontece quando o componente é exibido
    useEffect(() => {
        if (!sessionStorage.getItem("usuario"))
        {
            sessionStorage.clear();
            window.location.href = "/login";
        }

        const usuario = JSON.parse(sessionStorage.getItem("usuario"))

        axios.get(`${urlAPI}/${usuario.id}`).then(resp => {
            sessionStorage.setItem("usuario", JSON.stringify(resp.data))
            setUsuario(resp.data)
        })
    }, [])

    async function editarUsuario(event) {
        const { email, senha, nome, avatar, tipoSanguineo, dataNascimento } = usuario;

        if (email === "" || senha === "" || nome === "" || avatar === "" || tipoSanguineo.abo === "" || tipoSanguineo.rh === "" || dataNascimento === "") {
                window.alert("Por favor, verifique se os campos foram preenchidos corretamente!")
            }
            else {
                await axios.put(`${urlAPI}/${usuario.id}`, {
                    email,
                    senha,
                    nome,
                    avatar,
                    tipoSanguineo,
                    dataNascimento
                }).then(resp => {
                    sessionStorage.setItem("usuario", JSON.stringify(usuario))
                    setEstaEditando(false)
                    alert('Usuário editado com sucesso')
                }).catch(err => {
                    console.log(err.response)
                    alert('Erro ao editar usuário')
                })
            }
    }

    function atualizarCampo(event) {
        console.log(usuario)
        setUsuario({ ...usuario, [event.target.name]: event.target.value })
    }

    return(
        <div className='total'>
            <div className='parteDeCima'>

            </div>
            <div className='base'>
                <div className='criar'>
                            {!estaEditando ? (
                                <>
                                <h1 className='titulo'>CONFIRA OS DADOS DO SEU PERFIL</h1>
                                    <img src={usuario.avatar} style={{ width: '300px', height: '300px', borderRadius: '100%'}} className='imagem'/>
                                    <h1 className='nome'>{usuario.nome}</h1>
                                    <h1 className='tipo'>{usuario.tipoSanguineo}</h1>
                                    <h1 className='data'>Data de nascimento: {usuario.dataNascimento?.substring(0, 10)}</h1>
                                    <a onClick={() => setEstaEditando(true)} style={{ cursor: 'pointer', backgroundColor: 'transparent', border: '2px solid white', borderRadius: '15px', padding: '10px', marginTop: '15px'}}>Editar perfil</a>
                                    </>
                            ): (
                                <div className='editar'>
                                    <input type='email' className='inputText' name='email' placeholder='Digite seu email' value={usuario.email} onChange={e => atualizarCampo(e)}></input>
                                    <input type='password' className='inputText' name='senha' placeholder='Digite sua senha' value={usuario.senha} onChange={e => atualizarCampo(e)}></input>
                                    <input type='text' className='inputText' name='nome' placeholder='Digite seu nome' value={usuario.nome} onChange={e => atualizarCampo(e)}></input>
                                    <input type='text' className='inputText' name='tipoSanguineo' value={usuario.tipoSanguineo} onChange={e => atualizarCampo(e)}></input>
                                    <input type='date' className='inputText' style={{ marginTop: '20px'}} name='dataNascimento' value={usuario.dataNascimento.substring(0, 10)} onChange={(event) => atualizarCampo(event)} />
                                    <label style={{ backgroundColor: 'transparent', margiBbottom: '50px' }}>Avatar</label>
                                    <br />
                                    <input type='file' accept='.png,.jpg,.jpeg,.jfif,.svg' onChange={(event) => this.fazerUploadAvatar(event)} />
                                    <br></br>
                                    {/* <a onClick={() => setEstaEditando(false)} style={{ cursor: 'pointer', backgroundColor: 'transparent', border: '2px solid white', borderRadius: '15px', padding: '10px', marginTop: '50px', }}>Cancelar</a> */}
                                   
                                    <button className='btnCadastrar' onClick={e => editarUsuario(e)}>Salvar edições</button>
        
                                </div>
                            )}
                          
                </div>
            </div>
        </div>
    )
}