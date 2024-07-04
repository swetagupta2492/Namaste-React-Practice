import React from 'react'
import { useRouteError } from 'react-router'
const Error = () => {
    const err = useRouteError()
    console.log(err)
  return (
    <div>
        <h2>Oopps!!</h2>
        <h3>something went wrong </h3>
    </div>

  )
}

export default Error