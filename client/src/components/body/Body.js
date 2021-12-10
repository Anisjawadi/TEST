import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'

import NotFound from '../utils/NotFound/NotFound'



import Profile from '../body/profile/Profile'
import EditUser from '../body/profile/EditUser'

import Home from '../body/home/Home'

import {useSelector} from 'react-redux'
import Tache from './tache/Tache'
import addTache from './tache/addTache'

function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    return (
        <section>
            <Switch>
                <Route path="/" component={Home} exact />

                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />
                <Route path="/tache" component={Tache} exact />
                <Route path="/addTache" component={addTache} exact />


               

                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />

            </Switch>
        </section>
    )
}

export default Body
