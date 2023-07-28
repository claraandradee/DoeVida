import './Register.css';
import React, { Component } from 'react';
import imagem from '../assets/imgLogin.png'
import axios from 'axios';


const initialState = {
    usuario: { id: 0, email: '', senha: '', nome: '', avatar: '', tipoSanguineo: { abo: 'A', rh: '+' }, dataNascimento: '' },
    lista: []
}

const urlAPI = 'http://localhost:5203/api/Cadastro'

export default class Register extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    async salvar() {
        const { email, senha, nome, avatar, tipoSanguineo, dataNascimento } = this.state.usuario;

    if (email === "" || senha === "" || nome === "" || avatar === "" || tipoSanguineo.abo === "" || tipoSanguineo.rh === "" || dataNascimento === "") {
            window.alert("Por favor, verifique se os campos foram preenchidos corretamente!")
        }
        else {
            await axios.post(urlAPI, {
                email,
                senha,
                nome,
                avatar,
                tipoSanguineo: tipoSanguineo.abo + tipoSanguineo.rh,
                dataNascimento
            }).then(resp => {
                const lista = this.getListaAtualizada(resp.data);
                this.setState({ usuario: initialState.usuario, lista })

                sessionStorage.setItem("usuario", JSON.stringify(resp.data))

                window.location.href = "/principal";
            }).catch(err => {
                console.log(err.response)
            })
        }

    }

    atualizarCampo(event) {
        const usuario = { ...this.state.usuario };
        console.log(usuario)
        usuario[event.target.name] = event.target.value;
        this.setState({ usuario });
    }

    getListaAtualizada(usuario, add = true) {
        const lista = this.state.lista.filter(a => a.id !== usuario.id)
        if (add) lista.unshift(usuario);
        return lista;
    }

    fazerUploadAvatar = async (event) => {
        const file = event.target.files[0]
        const base64 = await this.convertBase64(file)
        this.setState({ usuario: { ...this.state.usuario, avatar: base64 }})
      }

      convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }

    renderForm() {
        return (
            <div className='total'>
                <div className='parteDeCima'>

                </div>
                <div className='base'>
                    <div className='criar'>
                        <div className='parteE'>
                            <h1 className='tituloCriar'>Crie sua conta</h1>
                            <h2>E salve uma vida</h2>
                            <img src={imagem} alt="Imagem" className='imagemLogin'></img>
                            {/* <button className='btnEntrar' onClick={redirect}>LOG IN</button>  */}
                        </div>
                        <div className='logar'>
                            <h1 className='tituloLogin'>REGISTER</h1>
                            <input type='email' className='inputText' style={{ marginTop: '-200px'}} name='email' placeholder='Digite seu email' value={this.state.usuario.email} onChange={e => this.atualizarCampo(e)}></input>
                            <input type='password' className='inputText' name='senha' placeholder='Digite sua senha' value={this.state.usuario.senha} onChange={e => this.atualizarCampo(e)}></input>
                            <input type='text' className='inputText' name='nome' placeholder='Digite seu nome' value={this.state.usuario.nome} onChange={e => this.atualizarCampo(e)}></input>
                            
                            <div style={{ display: 'flex', flexDirection: 'row ', backgroundColor: 'transparent', columnGap: '10px' }}>
                                <select value={this.state.usuario.tipoSanguineo.abo} onChange={(event) => this.setState({ usuario: { ...this.state.usuario, tipoSanguineo: { rh: this.state.usuario.tipoSanguineo.rh, abo: event.target.value } }})}>
                                    <option value='A'>A</option>
                                    <option value='B'>B</option>
                                    <option value='AB'>AB</option>
                                    <option value='O'>O</option>
                                </select>
                                <select value={this.state.usuario.tipoSanguineo.rh} onChange={(event) => this.setState({ usuario: { ...this.state.usuario, tipoSanguineo: { abo: this.state.usuario.tipoSanguineo.abo, rh: event.target.value } }})}>
                                    <option value='+'>+</option>
                                    <option value='-'>-</option>
                                </select>
                            </div>

                            <input type='date' className='inputText' style={{ marginTop: '20px'}} name='dataNascimento' value={this.state.usuario.dataNascimento} onChange={(event) => this.atualizarCampo(event)} />
                            <label style={{ backgroundColor: 'transparent' }}>Avatar</label>
                            <br />
                            <input type='file' accept='.png,.jpg,.jpeg,.jfif,.svg' onChange={(event) => this.fazerUploadAvatar(event)} />

                            <button className='btnCadastrar' onClick={e => this.salvar(e)}>CADASTRE-SE</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        )
    }
}