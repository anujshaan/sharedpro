import React from 'react'

const Success = ({props}) => {
  return (
    <div className='success-page'>
        <h1>Hello {props.fullname} registration is success</h1>
        <h4>Your Email is : {props.email}</h4>
    </div>
  )
}

export default Success