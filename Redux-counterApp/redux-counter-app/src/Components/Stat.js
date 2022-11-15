import React from 'react'

const Stat = ({count}) => {
  return (
    <>
        <div className="bg-white border w-96 m-auto mt-5 py-5">
            <div className="p-4 text-xl" >Total Count {count}</div>
           
        </div>
    </>
  )
}

export default Stat