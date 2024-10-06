import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="about/">about</Link>
      <Link to="/info">info</Link>
    </div>
  );
}

export default Nav;
