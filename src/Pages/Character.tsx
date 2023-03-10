import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetCharacterQuery } from '../redux/api'

type CharacterProps = {}

const Character: React.FC<CharacterProps> = () => {
  const { id } = useParams()

  const { data, isError, isLoading } = useGetCharacterQuery(id)

  return (
    data && (
      <>
        <Link to={'/'}>Go back</Link>
        <div>
          <img src={data.image} />
          <h1>{data.name}</h1>
          <p>Informations</p>
          <ul>
            <li>
              <p>Gender</p>
              <p>{data.gender}</p>
            </li>
            <li>
              <p>Status</p>
              <p>{data.status}</p>
            </li>
            <li>
              <p>Species</p>
              <p>{data.species}</p>
            </li>
            <li>
              <p>Origin</p>
              <p>{data.origin.name}</p>
            </li>
            <li>
              <p>Type</p>
              <p>{data.type ? data.type : 'unknown'}</p>
            </li>
          </ul>
        </div>
      </>
    )
  )
}
export default Character
