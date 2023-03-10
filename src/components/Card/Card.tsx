import React from 'react'
import {
  StyledImage,
  StyledLink,
  StyledListItem,
  StyledName,
  StyledSpecies,
  StyledTextContainer,
} from './Card.styled'

const Card: React.FC = ({ data }) => {
  return (
    <StyledListItem>
      <StyledLink to={`/${data.id}`}>
        <StyledImage src={data.image} alt={data.name} />
        <StyledTextContainer>
          <StyledName>{data.name}</StyledName>
          <StyledSpecies>{data.species}</StyledSpecies>
        </StyledTextContainer>
      </StyledLink>
    </StyledListItem>
  )
}
export default Card
