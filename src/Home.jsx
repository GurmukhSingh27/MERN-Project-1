import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <h1>Welcome to Home Page</h1>
        <Button variant="outline-dark">
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </Button>
        <br></br>
        <Button variant="outline-dark">
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Home;
