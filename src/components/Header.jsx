import '../index.css'
import { Link } from 'react-router-dom'
import {FaCartPlus,FaAmazon} from 'react-icons/fa'
function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <nav>
          <h1><Link to="/" style={{color:'#'}}>FOODMANIA</Link></h1>
          <ul>
            <li><Link to="/"><strong>Home</strong></Link></li>
            <li><Link to="/about"><strong>About</strong></Link></li>
            <li><Link to="/contact"><strong>Contact</strong></Link></li>
            <li><Link to="/cart"><FaCartPlus/> <strong>Cart</strong></Link></li>
            
          </ul>
          </nav>
          
        </div>
      </div>
    </>
  )
}

export default Header