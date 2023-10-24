import { Link } from "react-router-dom"
function Home() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>This is my Home Page</p>
        <Link to="/about"> Go to about</Link>
      </div>
    )
  }
  
  export default  Home
  