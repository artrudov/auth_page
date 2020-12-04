import React, { FC } from 'react'
import { Link, RouteComponentProps } from '@reach/router'

const Login: FC<RouteComponentProps> = () => {
  return (
    <>
      <p>Login</p>
      <Link to="/register">To Register</Link>
    </>
  )
}

export default Login
