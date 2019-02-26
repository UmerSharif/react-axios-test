import React from 'react'

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={textC}>React CRUD</h1>
    </header>
  )
}



const headerStyle =  {
      background: '#335159',
      padding: '10px'   
}

const textC = {
    color: '#dfe1e4'
    
}