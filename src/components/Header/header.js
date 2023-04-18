import React from 'react'
import './header.css'
function Header() {
  return (
    <header className='header'>
        <h1>TODO</h1>
        <div className='btn-group'>
            <button className='btn active'>All</button>
            <button className='btn'>Active</button>
            <button className='btn'>Completed</button>
        </div>
    </header>
  )
}

export default Header