import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap'
import { Link } from 'react-router-dom'

import './styles.css'
import Aluno from './image/student.png'
import Professor from './image/teacher.png'

export default class Home extends React.Component {
    render() {
        return (
            <div className='divPrincipalI'>
                <Link to={`/detalheAlunos/`}>
                    <div className='divCard'>
                        <Card>
                            <div className='divImg'>
                                <img src={Aluno} className='imgsCard' />
                            </div>
                            <CardBody>
                                <div className='divImg'>
                                    <CardTitle>
                                        Alunos
                                </CardTitle>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Link>

                <div className='divCard'>
                    <Card>
                        <div className='divImg'>
                            <img src={Professor} className='imgsCard' />
                        </div>
                        <CardBody>
                            <div className='divImg'>
                                <CardTitle>Professores</CardTitle>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}