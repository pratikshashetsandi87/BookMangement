import React from 'react'
import '../Css/Navbar.css'

function Navbar() {

  return (
    <nav className='navbar'>

      <h2 className='logo'>
        📚 Book Management
      </h2>

      <ul>
         <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/addbook'>Add Book</a>
        </li>

        <li>
          <a href='/viewbook'>View Book</a>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar;