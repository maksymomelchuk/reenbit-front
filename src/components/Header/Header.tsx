import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MainDiv } from './Header.styled'
import logo from '../../assets/logo.png'
import Auth from '../Auth/Auth'

const Header: React.FC = () => {
  return (
    <div
      style={{ padding: '0px 210px', maxWidth: '1440px', margin: '0px auto' }}
    >
      <MainDiv>
        <Link to={'/'}>
          <img src={logo} width="100px" height="auto" />
        </Link>
        <Auth />
      </MainDiv>
      <Outlet />
    </div>
  )
}
export default Header
