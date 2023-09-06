import React from 'react'
import './navitem.css'

function NavItem({item}) {
    console.log(item);
  return (
    <li className={`nav-item ${item.status}`}>
      {item.name}
    </li>
  )
}

export default NavItem
