import { NavLink} from "react-router-dom"
function NavBar() {
    return (
      <div>
        <ul>
            <li><NavLink className="nav-bar-link" style={({isActive})=>{return{color:isActive?"skyblue":""}}}  to="/"> Home</NavLink></li>
            <li><NavLink className="nav-bar-link" style={({isActive})=>{return{color:isActive?"skyblue":""}}} to="/about"> About</NavLink></li>
            <li><NavLink className="nav-bar-link" style={({isActive})=>{return{color:isActive?"skyblue":""}}} to="/contact"> Contact</NavLink></li>
            <li><NavLink className="nav-bar-link" style={({isActive})=>{return{color:isActive?"skyblue":""}}} to="/filter"> Filter</NavLink></li>
            <li><NavLink className="nav-bar-link" style={({isActive})=>{return{color:isActive?"skyblue":""}}} to="/login"> Login</NavLink></li>
        </ul>
      </div>
    )
  }
  
  export default  NavBar
  