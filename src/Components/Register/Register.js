import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Head from '../Head/Head'
function Register(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [dob,setDob]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
      
    },[])
    function GetData(){
        let data=({name,email,mobile,dob})
        fetch("http://localhost:3004/user", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
          }).then((resp)=>{
            // console.warn("resp",resp);;
            resp.json().then((result)=>{
              console.warn("result",result)
              
            })
          })
          navigate("/FetchApi");

    }
        
    return(
        <>
        
            <Head/>
                <div className="col-sm-6 offset-sm-3">
                <h1>Registration Form</h1>
                <input type="text" value={name}name="fname" placeholder="Name" className='form-control' onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <input type="text"value={email} name="email" placeholder="Email" className='form-control'onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                <input type="text" value={mobile}name="mobile" placeholder="Mobile" className='form-control'onChange={(e)=>setMobile(e.target.value)}/><br/><br/>
                <input type="text" value={dob}name="dob" placeholder="Date Of Birth" className='form-control' onChange={(e)=>setDob(e.target.value)}/><br/><br/>
                <Button variant="outline-primary" className='form-control' onClick={GetData}>Register</Button>
                </div>
                
  </>        
    );
}
export default Register;