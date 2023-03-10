import React from 'react'
import { useGetAllQuery } from '../../redux/api'
import Card from '../Card/Card'
import { StyledList } from './CardsList.styled'

const Cards: React.FC = () => {
  const { data, isError, isLoading } = useGetAllQuery('')
  console.log('data:', data?.results)
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <StyledList>
      {data?.results.map((el) => (
        <Card key={el.id} data={el} />
      ))}
    </StyledList>
  )
}
export default Cards
