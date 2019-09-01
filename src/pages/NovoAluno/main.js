import React from 'react'
import { Form, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

const Sucesso = ({ nome }) => <div>{nome} Inserido com Sucesso!</div>

export default class NovoAluno extends React.Component {

    constructor() {
        super()
        this.state = {
            nome: '',
            sexo: 'M',
            checked: true,
            nascimento: '',
            email: ''
        }
    }

    async gravarAluno() {

        if (this.state.nome.length > 0 || this.state.nascimento.length > 0 || this.state.email.length > 0) {
            const result = await api.post('/insereAluno', { data: this.state })
            if (result.data === 'Aluno Inserido') {
                ToastsStore.success(<Sucesso nome={this.state.nome} />)
                setTimeout(() => {
                    window.location.href = '/detalheALunos'
                }, 2000);
            }
        } else {
            ToastsStore.warning('Favor preencher todos os campos!')
        }
    }

    render() {
        return (
            <div className='container'>
                <Form>
                    <FormGroup>
                        <Label for="nomeAluno">Nome Completo</Label>
                        <Input
                            type="text"
                            name="nomeAluno"
                            id="nomeAluno"
                            placeholder="Nome do Aluno"
                            onChange={(nome) => this.setState({ nome: nome.target.value })}
                        />
                    </FormGroup>
                    <div className='divSexo'>
                        <Label >Gênero</Label>
                        <CustomInput
                            className='alinhaCheck'
                            type="radio"
                            id="masculino"
                            label="Masculino"
                            checked={this.state.checked}
                            value='Masculino'
                            onChange={() => this.setState({ checked: !this.state.checked, sexo: 'M' })}
                        />
                        <CustomInput
                            className='alinhaCheck'
                            type="radio"
                            id="feminino"
                            label="Feminino"
                            value='Feminino'
                            checked={!this.state.checked}
                            onChange={() => this.setState({ checked: !this.state.checked, sexo: 'F' })}
                        />
                    </div>
                    <FormGroup>
                        <Label for="exampleDate">Nascimento</Label>
                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                            onChange={(data) => this.setState({ nascimento: data.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="exemplo@teste.com"
                            onChange={(email) => this.setState({ email: email.target.value })}
                        />
                    </FormGroup>

                    <div className='divAlinhaBtns'>
                        <Button color='success' onClick={() => this.gravarAluno()}>Cadastrar</Button>
                        <Button color='danger' onClick={() => window.location.href = '/detalheALunos'}>Cancelar</Button>
                        <ToastsContainer store={ToastsStore} />
                    </div>
                </Form>

            </div>
        )
    }
}