import React from 'react'
import { Link } from 'react-router-dom'
import { StyledDiv, StyledLink } from './Auth.styled'

const Auth: React.FC = () => {
  const isLoggedIn = false

  return (
    <StyledDiv>
      <StyledLink to={'/favorites'}>Favorites</StyledLink>
      <div>{isLoggedIn ? 'Hello World' : 'Please Login'}</div>
    </StyledDiv>
  )
}
export default Auth
