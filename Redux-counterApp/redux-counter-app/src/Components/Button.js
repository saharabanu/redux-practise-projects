import React from 'react'

const Button = ({children, handler}) => {
  return (
    <>
        <button className=" bg-sky-400 px-3 py-2 mr-3 text-white" onClick={handler} >{children}</button>
    </>
  )
}

export default Button