import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
        <nav>
          <ul className="navlist">
            <li>
              <NavLink to="/admin">Home</NavLink>
            </li>
            <li>
              <NavLink to="/admin/AddProduct">About</NavLink>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default AdminNavbar
