import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
        <h2 className='text-danger'>
            Page not found , page 404
        </h2>
       <Link className='btn btn-dark' to="/">Back to home</Link>
    </div>
  )
}

export default Page404