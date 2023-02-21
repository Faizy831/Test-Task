/* eslint-disable prettier/prettier */
import React from 'react'
import { useLocation } from 'react-router-dom'
import { CCard, CCardBody } from '@coreui/react'
const UserDetail = () => {
  const location = useLocation()
  const { state } = location
  return (
    <div className="cardWrapper">
      <CCard style={{ width: '33rem' }}>
        <CCardBody>
          <h5>
            Name: <span className="values">{state.name}</span>
          </h5>
          <h5>
            Gender: <span className="values">{state.gender}</span>
          </h5>
          <h5>
            Mass: <span className="values">{state.mass}</span>
          </h5>
          <h5>
            Height: <span className="values">{state.height}</span>
          </h5>
          <h5>
            Eyes Color: <span className="values">{state.eyes_color}</span>
          </h5>
          <h5>
            Hair Color: <span className="values">{state.hair_color}</span>
          </h5>
          <h5>
            Skin Color: <span className="values">{state.skin_color}</span>
          </h5>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default UserDetail
