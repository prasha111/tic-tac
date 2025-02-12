import React from 'react'

function Box({key, value, onClick}) {
  return (
    <div key={key} onClick={onClick} className='box'>
        {value ? value :"xxx"}    
    </div>
  )
}

export default Box