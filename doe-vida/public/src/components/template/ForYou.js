import './Perfil.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import momemt from 'moment'
import 'moment/locale/pt'

const urlAPI = 'http://localhost:5203/api'

export default function ForYou(props) {
    const [usuario, setUsuario] = useState(null);
    const [posts, setPosts] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [conteudo, setConteudo] = useState("")

    momemt.locale('pt')


    // igual o componentDidMount - ou seja - evento que acontece quando o componente é exibido
    useEffect(() => {
        if (sessionStorage.getItem("usuario"))
            setUsuario(JSON.parse(sessionStorage.getItem("usuario")))

        axios.get(`${urlAPI}/cadastro`).then(resp => {
            setUsuarios(resp.data)
            axios.get(`${urlAPI}/post`).then(resp => {
                setPosts(resp.data)
            })
        })
    }, [])

    function postar() {
        axios.post(`${urlAPI}/post`, {
            idCadastro: usuario.id,
            conteudo,
            dataPost: (new Date()).toISOString()
        }).then(() => {
            setConteudo("")

            axios.get(`${urlAPI}/post`).then(resp => {
                setPosts(resp.data)
            })
        })
    }

    return (
        <div className='total'>
            <div className='base'>
                <h1>DEPOIMENTOS</h1>
                <div>
                    {posts.map(post => {
                        const usuarioPost = usuarios.find(u => u.id === post.idCadastro)

                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginButtom: '20px', marginTop: '2px' }}>
                                <img src={usuarioPost.avatar} style={{ borderRadius: '100%', width: '150px', height: '150px', marginLeft: '300px', marginTop: '120px'}}></img>
                                <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column'}}>
                                    <h1 style={{marginTop: '100px', marginRight: '-200px'}}>{usuarioPost.nome}</h1>
                                    <p style={{ width: '700px', marginTop: '20px'}}> {post.conteudo}</p>
                                    <span style={{ marginTop: '10px', fontSize: '14px'}}>{momemt(post.dataPost).format('LL')}</span>
                                </div>
                            </div>
                        )
                    })}
                    {usuario && (
                        <div style={{ marginTop: '50px'}}>
                            <textarea placeholder='Compartilhe sua experiência...' value={conteudo} onChange={(e) => setConteudo(e.target.value)} style={{ backgroundColor: 'white', width: '500px', borderRadius: '10px', padding: '20px' }}></textarea>
                            <button onClick={() => postar()} style={{ backgroundColor: 'white', borderRadius: '10px', marginLeft: '10px' }} className='botao'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg></button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}