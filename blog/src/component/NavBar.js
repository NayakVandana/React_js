import { NavLink} from "react-router-dom"
function NavBar() {
    return (
      <div>
        <ul>
            <li><NavLink className="nav-bar-link" style={{color:'red'}}  to="/"> Home</NavLink></li>
            <li><NavLink className="nav-bar-link" to="/about"> About</NavLink></li>
            <li><NavLink className="nav-bar-link" to="/contact"> Contact</NavLink></li>
            
        </ul>
      </div>
    )
  }
  
  export default  NavBar
  