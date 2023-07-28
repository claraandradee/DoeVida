import React, { Component } from "react";
import Login from '../template/Login'


const urlAPI = 'http://localhost:5203/api/Cadastro'
const initialState = {
    cliente: {id: 0, email: '', senha: ''},
    lista: []
}

export default class CrudCliente extends Component{

    state = {...initialState}

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({lista: resp.data})
        })
    }
}