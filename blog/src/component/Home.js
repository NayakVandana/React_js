import { Link, useNavigate } from "react-router-dom";
function Home() {
  const Navigate = useNavigate();
  const navToPage = (url) => {
    Navigate(url);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is my Home Page</p>
      <Link to="/about"> Go to about</Link>
      <br />
      <button onClick={() => navToPage("/about")}>Go to About</button>
      <br />
      <button onClick={() => navToPage("/filter")}>Go to Filter</button>
    </div>
  );
}

export default Home;
