import React from 'react'

import api from '../../services/api'
import {
    Card,
    Button,
    CardHeader,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

import { Link } from 'react-router-dom'

import './styles.css'
import icoAdd from './img/add.png'


export default class DetalheAlunos extends React.Component {

    constructor() {
        super()
        this.state = {
            result: []
        }
    }

    componentDidMount() {
        this.buscaAlunos()
    }

    async buscaAlunos() {
        const result = await api.get('/alunos')
        console.log(result)
        this.setState({ result: result.data })
    }

    render() {

        const { result } = this.state

        return (
            <div className='divPrincipal'>
                <Card className='cardPrincipal'>
                    <CardHeader>
                        <div className='divHeaderCard'>
                            <h2>Alunos</h2>
                            <Link to ='/novoAluno'>
                                <img src={icoAdd} className='icoAdd' />
                            </Link>
                        </div>

                    </CardHeader>
                    {result.map(data => (
                        <div className='divCardAluno'>
                            <Card>
                                <CardHeader>{data.NOMEALUNO}</CardHeader>
                                <CardBody>
                                    <CardTitle>E-mail: {data.EMAIL}</CardTitle>
                                    <CardText>Sexo: {data.SEXO}</CardText>
                                    <Button>Detalhes</Button>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                    }
                </Card>
            </div>
        )
    }
}