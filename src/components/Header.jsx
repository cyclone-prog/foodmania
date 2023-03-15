import '../index.css'
function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <nav>
          <a href="#"><h1>FOODMANIA</h1></a>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Cart</a></li>

          </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header