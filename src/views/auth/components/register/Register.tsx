import React, { FC } from 'react'
import { Link, RouteComponentProps } from '@reach/router'

const Register: FC<RouteComponentProps> = () => {
  return (
    <>
      <p>Register</p>
      <Link to="/">To Login</Link>
    </>
  )
}

export default Register
