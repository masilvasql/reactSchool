import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import DetalheAlunos from './pages/DetalheAlunos/DetalheAlunos'
import NovoAluno from './pages/NovoAluno/main'

const Routes = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route  path='/detalheALunos' component={DetalheAlunos}></Route> 
            <Route  path='/novoAluno' component={NovoAluno}></Route> 
        </Switch>
    </BrowserRouter>
)

export default Routes