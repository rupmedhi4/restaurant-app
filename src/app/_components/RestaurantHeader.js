import React from 'react'
import Link from 'next/link'

export default function RestaurantHeader() {
  return (
    <div className='header-wrapper'>
      <div className='logo'>
        <img src="https://w7.pngwing.com/pngs/269/964/png-transparent-pizza-delivery-restaurant-online-food-ordering-fast-delivery-food-logo-car-thumbnail.png" alt="logo image" style={{width:100}} />
      </div>
      <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/">Login/Signup</Link>
        </li>
        <li>
            <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  )
}
