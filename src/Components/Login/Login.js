import Head from "../Head/Head";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const [auth,setAuth]=useState(false);
  useEffect(() => {
    
  },[]);

  function LoginAuth(id) {
    fetch("http://localhost:3004/user")
      .then((result) => result.json())
      .then((resp) => {
        console.log(resp);        
        resp.forEach(element => {
          console.log("Email",element.email,"password",element.mobile)
          if(element.email === userName && element.mobile === password){
            alert("Login Success")
            setAuth(true);
            navigate("/AddProduct")       
          }
          
        });
        console.log(userName,password);
        
      });
  }


  return (
    <>
      
      <Head />
      <div className="col-sm-6 offset-sm-3">
      
      <h1>Login Here !</h1>

      <input type="text" className="form-control" onChange={(e)=>setUserName(e.target.value)}/><br/>
      <br/>
      <input type="text" className="form-control"  onChange={(e)=>setPassword(e.target.value)} / ><br/>
      <br/>
      <button className="btn btn-success form-control" onClick={LoginAuth}>Login</button>
    </div>
    </>
  );
}
export default Login;
