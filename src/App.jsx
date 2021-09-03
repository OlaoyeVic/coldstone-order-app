import React, { useContext } from 'react'
import {Home, Login, Menu, Error, Signup} from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ColdstoneContext, ColdstoneProvider } from './context/context.js'


function App({handleLogin}){
    return(
        <ColdstoneProvider>
             <Router>
                <Switch>
                    <Route path="/" exact= {true}>
                        <Home />
                        
                    </Route>
                    <Route path="/menu" exact={true}>
                        <Menu />
                    </Route>
                    <Route path="/login" exact={true} component={Login} />
                    <Route path="/signup" exact={true}>
                        <Signup />
                    </Route>
                    <Route path = "*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </ColdstoneProvider>
    )
}
export default App