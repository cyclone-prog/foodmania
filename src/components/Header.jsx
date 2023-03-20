import '../index.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <nav>
          <h1><Link to="/">FOODMANIA</Link></h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
          </nav>
          
        </div>
      </div>
    </>
  )
}

export default Header