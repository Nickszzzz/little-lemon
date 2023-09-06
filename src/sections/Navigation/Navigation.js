import React from 'react'
import './navigation.css'
import NavItem from '../../components/NavItem/NavItem'
import { FaBars } from "react-icons/fa";

function Navigation() {

    const items = [
        {
            id: 0,
            status: 'active',
            name: 'Home'
        },
        {
            id: 1,
            status: '',
            name: 'Menus'
        },
        {
            id: 2,
            status: '',
            name: 'Gallery'
        },
        {
            id: 3,
            status: '',
            name: 'Our Story'
        },
        {
            id: 4,
            status: '',
            name: 'Contact'
        }
    ];

  return (
    <div className='navigation'>
      <ul className='nav-items'>
        {
            items.map(item => (
                <NavItem key={item.id} item={item} />
            ))
        }
      </ul>
      <div className='mobile-menu'>
        <FaBars color='#fff' />
      </div>
    </div>
    
  )
}

export default Navigation
