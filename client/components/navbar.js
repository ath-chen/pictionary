import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">pictionary</Link>
        {/* <span className='dropdown'> SELECT A LANGUAGE v
                    <div class="dropdown-content">
                        <p>Spanish</p>
                        <p>Chinese</p>
                    </div>
                </span> */}
      </nav>
    </div>
  )
}

export default Navbar
