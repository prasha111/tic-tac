import React from 'react'

function Box({value}) {
  return (
    <div className='box'>
        {value ? value :"xxx"}    
    </div>
  )
}

export default Box