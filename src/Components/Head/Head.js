// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Head.css";

function Head() {
  function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <>
      <div className="topdiv">
        <div style={{ width: "400px" }}>
          <h1>E-Commerce</h1>
        </div>
        <div class="topnav" id="myTopnav">
    
          <Link to="/">Home</Link>
          <Link to="/AddProduct">Add Product</Link>
          <Link to="/Update">Update</Link>
          <Link to="/">{}</Link>
        
          <Link to="/Register">Register</Link>
          <Link to="/Login">Login</Link>
          <Link to="/FetchApi">Fetch Api</Link>

          <button className=" btn btn-outline-success icon" onClick={menu}>
            <i class="fa fa-bars"></i>
          </button>
        
        </div>
      </div>
    </>
  );
}
export default Head;
