import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
<h1>My website</h1>
<nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    
</nav>
    </div>
  )
}

export default Navbar