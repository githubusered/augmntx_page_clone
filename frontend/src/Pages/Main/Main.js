import React from 'react'
import Nav from '../../Components/Nav/Nav'

const Main = (links) => {
  return (
    <>
    <Nav />
    <div style={{textAlign:'center',fontSize:'100px',marginTop:'100px'}}>
        This is main page    
        {links['paths'].split(',').map((elm,i) => (
          <div key={i}>{elm}</div>
        ))}
    </div>
    </>
  )
}

export default Main
