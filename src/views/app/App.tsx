import React, { FC } from 'react'

import { Router } from '@reach/router'

import Login from '../auth/components/login/Login'
import Register from '../auth/components/register/Register'

import './App.css'

const App: FC = () => {
  return (
    <Router>
      <Login path='/'/>
      <Register path='/register'/>
    </Router>
  )
}

export default App
