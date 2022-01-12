import React from 'react'

function SideNaveRow(props) {
  return (
    <div className='sidenaveRow'>
      <div>{props.text}</div> 
      <i className="fas fa-chevron-right">{'>'}</i>
    </div>
  )
}

export default SideNaveRow
