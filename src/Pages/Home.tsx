import React from 'react'
import Cards from '../components/CardsList/CardsList'
import banner from '../assets/logo.png'
import { StyledBanner, StyledInput } from './Home.styled'

const Home: React.FC = () => {
  return (
    <>
      <StyledBanner src={banner} />
      <StyledInput type="text" placeholder="Filter by name" />
      <Cards />
    </>
  )
}
export default Home
