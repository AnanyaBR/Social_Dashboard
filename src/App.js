import React from 'react'
import Login from './Login'
import DashBoard from './Dashboard'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App(props){
    return(
        <BrowserRouter>
        <div>
            <h1>Social Board App</h1>
            
            
            <Switch>
            <Route path='/' component = {Login} exact ={true}/>
        
        <Route path='/user/:id' component = {DashBoard}/>
            </Switch>
            
        </div>
        </BrowserRouter>
        
    )
}

export default App