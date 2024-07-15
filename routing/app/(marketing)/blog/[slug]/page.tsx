import React from 'react'

const page = ({params}:{params:{slug:string}}) => {
  return (
    <div>i am blog {params.slug}</div>
  )
}

export default page