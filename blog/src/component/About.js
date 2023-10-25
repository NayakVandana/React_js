import { Link } from "react-router-dom"
function About() {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is my Home Page</p>
        <Link to="/"> Go to home</Link>
        <li><Link to="/user/anil"> Anil</Link></li>
        <li><Link to="/user/peter"> Peter</Link></li>
      </div>
    )
  }
  
  export default  About
  