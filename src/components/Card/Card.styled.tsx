import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledListItem = styled.li`
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  overflow: hidden;
  width: 240px;
`
export const StyledImage = styled.img`
  width: 240px;
`
export const StyledTextContainer = styled.div`
  padding: 12px 16px;
`

export const StyledName = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`
export const StyledSpecies = styled.p`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
